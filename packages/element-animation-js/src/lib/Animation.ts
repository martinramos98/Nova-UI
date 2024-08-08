// FIXME: Refactor crear una abstract class que implemente basic animation que tenga implementado subscribeEndCallback, state y finished.
export interface BasicAnimation {
	play(): void;
	reset(): void;
	pause(): void;
	cancel(): void;
	reverse(): void;
	playForward(): void;
	subscribeEndCallback(callback: (anima: BasicAnimation) => void): void;
	finished: Promise<boolean>;
	state: 'paused' | 'playing' | 'finished' | 'start';
}

export function instanceOfBasicAnimation(object: any): boolean {
	return (
		'play' in object &&
		'reset' in object &&
		'pause' in object &&
		'cancel' in object &&
		'reverse' in object &&
		'playForward' in object
	);
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
	'elastic-1': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
	'elastic-2': 'cubic-bezier(0.4, 0, 0.2, 1)',
	'elastic-3': 'cubic-bezier(0.4, 0, 0.6, 1)',
	'elastic-4': 'cubic-bezier(0.25, 0.1, 0.25, 1.2)'
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
export const animationsConfigs: Record<string, ElementAnimationParams> = {
	'fade-in': {
		animations: {
			keyframes: defaultKeyframesAnimations['fade-in'],
			animationOptions: {
				duration: 250,
				iterations: 1,
				fill: 'forwards',
				easing: 'ease-in-out'
			}
		},
		alternate: false,
		iterations: 1
	},
	'fade-out': {
		animations: {
			keyframes: defaultKeyframesAnimations['fade-out'],
			animationOptions: {
				duration: 250,
				iterations: 1,
				fill: 'forwards',
				easing: 'ease-in-out'
			}
		},
		alternate: false,
		iterations: 1
	}
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
	iterations: number = 1;
	state: 'paused' | 'playing' | 'finished' | 'start' = 'start';
	private animations: Animation[] = [];
	private element: HTMLElement | SVGPathElement;
	private alternate: boolean;
	delay: number | undefined;
	private currentIteration = 0;
	private onEndCallbacks: ((anim: ElementAnimation) => void)[] = [];
	constructor(element: HTMLElement | SVGPathElement, animationParams: ElementAnimationParams) {
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
		// this.finished = false;
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
						// this.finished = true;
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
				this.state = 'playing';
				this.getAnimations().forEach((animation) => {
					if (this.currentIteration >= this.iterations) {
						this.currentIteration = 0;
					}
					animation.play();
				});
			}, this.delay);
		} else {
			this.state = 'playing';
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
				this.state = 'playing';
				// console.log(this.element, 'with delay');
				this.getAnimations().forEach((animation) => {
					if (this.currentIteration >= this.iterations) {
						this.currentIteration = 0;
					}
					animation.pause();
					animation.playbackRate = 1;
					animation.play();
				});
			}, this.delay);
		} else {
			this.state = 'playing';
			this.getAnimations().forEach((animation) => {
				if (this.currentIteration >= this.iterations) {
					this.currentIteration = 0;
				}
				animation.pause();
				animation.playbackRate = 1;
				animation.play();
			});
		}
	}
	pause(): void {
		this.state = 'paused';
		this.getAnimations().forEach((animation) => {
			animation.pause();
		});
	}
	cancel(): void {
		this.state = 'start';
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
				this.state = 'playing';

				this.getAnimations().forEach((animation) => {
					animation.pause();
					animation.playbackRate = -1;
					animation.play();
				});
			}, this.delay);
		} else {
			this.state = 'playing';

			this.getAnimations().forEach((animation) => {
				animation.playbackRate = -1;
				animation.play();
			});
		}
	}
	getAnimations(): Animation[] {
		return this.animations;
	}

	public get finished(): Promise<boolean> {
		if (this.state === 'finished')
			return new Promise((resolve) => {
				resolve(true);
			});
		return new Promise((resolve) => {
			const fnEnd = () => {
				resolve(true);
				this.onEndCallbacks.filter((fn) => fnEnd === fn);
			};
			this.subscribeEndCallback(fnEnd);
		});
	}

	subscribeEndCallback(callback: (anima: ElementAnimation) => void) {
		this.onEndCallbacks.push(callback);
	}
	async thenPlay(animation: ElementAnimation) {
		await this.finished;
		animation.playForward();
	}
}
