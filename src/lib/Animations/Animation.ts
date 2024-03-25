export interface BasicAnimation {
	play(): void;
	reset(): void;
	pause(): void;
	cancel(): void;
	reverse(): void;
}
export interface ListNode<T> {
	value: T;
	next?: ListNode<T>;
	previous?: ListNode<T>;
}
export type ListArray<T> = ListNode<T>[];
export function arrayToList<T>(values: T[]): ListNode<T>[] {
	const list: ListNode<T>[] = [];
	values.forEach((element, index) => {
		if (index === 0) {
			list.push({ previous: undefined, next: undefined, value: element });
		} else {
			const node = { previous: list[index - 1], next: undefined, value: element };
			list[index - 1].next = node;
			list.push(node);
		}
	});
	return list;
}

export const easing = {
	'slow-end': 'cubic-bezier(.001,.7,.1,1)',
	'elastic-in': 'cubic-bezier(.5,.8,1.4,1)',
	'elastic-in-out': 'cubic-bezier(.5,.8,1.4,1)',
	'elastic-out': 'cubic-bezier(.5,.8,1.4,1)'
};

export const defaultKeyframesAnimations: Record<string, Keyframe[]> = {
	'scale-up': [{ scale: '0' }, { scale: '1' }],
	'scale-down': [{ scale: '1' }, { scale: '0' }],
	'fade-in': [{ opacity: '0' }, { opacity: '1' }],
	'fade-out': [{ opacity: '1' }, { opacity: '0' }],
	'fly-right': [{ translate: '100% 0' }, { translate: 0 }],
	'fly-bottom': [{ translate: '0 100%' }, { translate: 0 }],
	'fly-top': [{ translate: '0 -100%' }, { translate: 0 }],

	'fly-left': [{ translate: '-100% 0' }, { translate: 0 }],
	rotate: [{ rotate: '0deg' }, { rotate: '360deg' }]
};
export type AnimationKeyframeParams = {
	keyframes: Keyframe[];
	animationOptions?: KeyframeAnimationOptions;
};
export type ElementAnimationParams = {
	animations: AnimationKeyframeParams[] | AnimationKeyframeParams;
	iterations?: number;
	alternate?: boolean;
	delay?: number;
	onFinishedAnimation?: (anim: ElementAnimation) => void;
};
export class ElementAnimation implements BasicAnimation {
	finished: boolean;
	iterations: number = 1;
	private animations: Animation[] = [];
	private element: HTMLElement;
	private alternate: boolean;
	private delay: number | undefined;
	private currentIteration = 0;
	private onEndCallbacks: ((anim: ElementAnimation) => void)[] = [];
	constructor(element: HTMLElement, animationParams: ElementAnimationParams) {
		this.element = element;
		const { iterations, delay, alternate, animations, onFinishedAnimation } = animationParams;
		this.alternate = alternate ?? false;
		this.delay = delay;
		if (iterations) {
			this.iterations = iterations;
		}
		if (onFinishedAnimation) {
			this.onEndCallbacks.push(onFinishedAnimation);
		}
		this.finished = false;
		const defaultOptions: KeyframeAnimationOptions = {
			duration: 500,
			easing: 'ease',
			direction: 'normal',
			iterations: Infinity
		};
		if (animations instanceof Array) {
			this.animations = animations.map((animationParams) => {
				const keyframe: Keyframe[] =
					typeof animationParams.keyframes === 'string'
						? defaultKeyframesAnimations[animationParams.keyframes as string]
						: animationParams.keyframes;
				return new Animation(
					new KeyframeEffect(element, keyframe, animationParams.animationOptions ?? defaultOptions),
					document.timeline
				);
			});
		} else {
			const keyframe: Keyframe[] =
				typeof animations.keyframes === 'string'
					? defaultKeyframesAnimations[animations.keyframes as string]
					: animations.keyframes;

			const anim = new Animation(
				new KeyframeEffect(element, keyframe, animations.animationOptions ?? defaultOptions),
				document.timeline
			);
			this.animations.push(anim);
		}
		const animationsList = this.getAnimations();
		animationsList.forEach((animation) => {
			const fill = animation.effect?.getComputedTiming().fill;
			if (fill === 'forwards' || fill === 'backwards' || fill === 'both') {
				animation.addEventListener('finish', () => {
					if (this.element && this.element.parentElement) {
						animation.commitStyles();
						animation.cancel();
					}
				});
			}
			animation.addEventListener('finish', () => {
				let finishedAnimation = true;
				animationsList.forEach((anim) => {
					finishedAnimation = finishedAnimation && anim.playState === 'idle';
				});
				if (finishedAnimation) {
					this.currentIteration++;
					if (this.currentIteration < this.iterations) {
						this.alternate && this.currentIteration % 2 === 1 ? this.reverse() : this.playForward();
					} else {
						this.finished = true;
						this.onEndCallbacks.forEach((callback) => {
							callback(this);
						});
					}
				}
			});
		});
	}
	play(): void {
		if (this.delay) {
			setTimeout(() => {
				this.getAnimations().forEach((animation) => {
					if (this.currentIteration >= this.iterations) {
						this.currentIteration = 0;
					}
					animation.play();
				});
			}, this.delay);
		} else {
			this.getAnimations().forEach((animation) => {
				if (this.currentIteration >= this.iterations) {
					this.currentIteration = 0;
				}
				animation.play();
			});
		}
	}
	playForward(): void {
		if (this.delay) {
			setTimeout(() => {
				// console.log(this.element, 'with delay');
				this.getAnimations().forEach((animation) => {
					if (this.currentIteration >= this.iterations) {
						this.currentIteration = 0;
					}
					animation.playbackRate = 1;
					animation.play();
				});
			}, this.delay);
		} else {
			this.getAnimations().forEach((animation) => {
				if (this.currentIteration >= this.iterations) {
					this.currentIteration = 0;
				}
				animation.playbackRate = 1;
				animation.play();
			});
		}
	}
	pause(): void {
		this.getAnimations().forEach((animation) => {
			animation.pause();
		});
	}
	cancel(): void {
		this.getAnimations().forEach((animation) => {
			animation.cancel();
		});
	}
	reset(): void {
		this.cancel();
		this.play();
	}
	reverse(): void {
		if (this.delay) {
			setTimeout(() => {
				this.getAnimations().forEach((animation) => {
					animation.playbackRate = -1;
					animation.play();
				});
			}, this.delay);
		} else {
			this.getAnimations().forEach((animation) => {
				animation.playbackRate = -1;
				animation.play();
			});
		}
	}
	getAnimations(): Animation[] {
		return this.animations;
	}
	subscribeEndCallback(callback: (anima: ElementAnimation) => void) {
		this.onEndCallbacks.push(callback);
	}
}
