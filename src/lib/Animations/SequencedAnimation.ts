import {
	type BasicAnimation,
	type ListNode,
	type ListArray,
	ElementAnimation,
	instanceOfBasicAnimation
} from './Animation.js';
import { arrayToList } from './Animation.js';
import { type ElementAnimationParams } from './Animation.js';
export type SequencedAnimationElement = {
	element: HTMLElement;
	animationParams: ElementAnimationParams;
};
export class SequencedAnimation implements BasicAnimation {
	state: 'paused' | 'playing' | 'finished' | 'start' = 'start';
	private currentIteration = 0;
	private iterations = 1;
	private alternate = false;
	private onEndCallbacks: ((anim: SequencedAnimation) => void)[];
	private reversed = false;
	currentAnimation: ListNode<BasicAnimation>;
	private animations: ListArray<BasicAnimation>;
	constructor(
		params: (SequencedAnimationElement | BasicAnimation)[],
		options: {
			alternate?: boolean;
			iterations?: number;
			onEndAnimation?: (anim: SequencedAnimation) => void;
		}
	) {
		this.reversed = false;
		this.iterations = options.iterations ?? 1;
		this.currentIteration = 0;
		this.alternate = options.alternate ?? false;
		this.onEndCallbacks = options.onEndAnimation ? [options.onEndAnimation] : [];
		this.animations = arrayToList(
			params.map((animationParamsElement) => {
				if (instanceOfBasicAnimation(animationParamsElement)) {
					return animationParamsElement as BasicAnimation;
				} else {
					const paramsToBuild = animationParamsElement as SequencedAnimationElement;
					if (paramsToBuild.animationParams.iterations === Infinity) {
						throw Error('Sequenced Animation must not have infinites animations');
					}
          console.log(paramsToBuild.element)
					return new ElementAnimation(paramsToBuild.element, {
						...paramsToBuild.animationParams
					});
				}
			})
		);
		this.currentAnimation = this.animations[0];
		this.animations.forEach((nodeAnimation) => {
			nodeAnimation.value.subscribeEndCallback(() => {
				if (this.reversed) {
					if (nodeAnimation.previous) {
						this.currentAnimation = nodeAnimation.previous;
						this.currentAnimation.value.reverse();
						return;
					}
				} else if (nodeAnimation.next) {
					this.currentAnimation = nodeAnimation.next;
					this.currentAnimation.value.playForward();
					return;
				}
				if (this.currentIteration < this.iterations - 1) {
					this.currentIteration++;
					if (!this.alternate) {
						if (this.reversed) {
							this.currentAnimation = this.animations[this.animations.length - 1];
						} else {
							this.currentAnimation = this.animations[0];
						}
					}
					(this.alternate && this.currentIteration % 2 === 1) || (!this.alternate && this.reversed)
						? this.reverse()
						: this.playForward();
					// this.play();
				} else {
          console.log('animation ended');
					this.onEndCallbacks.forEach((callback) => {
						callback(this);
					});
					this.currentIteration = 0;
				}
			});
		});
	}
	play(): void {
		this.state = 'playing';
		this.currentAnimation.value.play();
	}
	playForward(): void {
		this.state = 'playing';
		this.reversed = false;
		this.currentAnimation.value.playForward();
	}
	pause(): void {
		this.state = 'paused';
		this.currentAnimation.value.pause();
	}
	cancel(): void {
		this.state = 'start';
		this.cancelAllAnimations('all');
		if (this.reversed) {
			this.currentAnimation = this.animations[this.animations.length - 1];
		} else {
			this.currentAnimation = this.animations[0];
		}
		this.currentIteration = 0;
	}
	reset(): void {
		this.state = 'playing';
		this.cancel();
		this.play();
	}
	reverse(): void {
		this.state = 'playing';
		this.reversed = true;
		this.currentAnimation.value.reverse();
	}
	private cancelAllAnimations(direction: 'forward' | 'backward' | 'all') {
		if (direction === 'all') {
			this.animations.forEach((node) => {
				node.value.cancel();
			});
		} else {
			let animNode = this.currentAnimation;
			const key = direction === 'forward' ? 'next' : 'previous';
			while (animNode[key]) {
				animNode = animNode[key] as ListNode<ElementAnimation>;
				animNode.value.cancel();
			}
		}
	}
	subscribeEndCallback(callback: (anima: BasicAnimation) => void): void {
		this.onEndCallbacks.push(callback);
	}

	public get finished(): Promise<boolean> {
		return new Promise((resolve) => {
			const fnEnd = () => {
				resolve(true);
				this.onEndCallbacks.filter((fn) => fnEnd === fn);
			};
			this.subscribeEndCallback(fnEnd);
		});
	}
}
export function SequencedSiblingAnimation(
	element: HTMLElement,
	animationsParams: ElementAnimationParams,
	siblings: 'next' | 'previous' | 'both',
	alternate?: boolean,
	iterations?: number
) {
	if (siblings === 'both') {
		const silbingsToAnimate: SequencedAnimationElement[] = [];
		let leftSibling = element.previousElementSibling;
		let rightSibling = element.nextElementSibling;
		while (leftSibling || rightSibling) {
			if (leftSibling) {
				silbingsToAnimate.push({
					element: leftSibling as HTMLElement,
					animationParams: animationsParams
				});
				leftSibling = leftSibling.previousElementSibling;
			}
			if (rightSibling) {
				silbingsToAnimate.push({
					element: rightSibling as HTMLElement,
					animationParams: animationsParams
				});
				rightSibling = rightSibling.nextElementSibling;
			}
		}
		return new SequencedAnimation(silbingsToAnimate, { alternate, iterations });
	} else {
		const silbingsToAnimate: SequencedAnimationElement[] = [];
		while (element[`${siblings}ElementSibling`]) {
			silbingsToAnimate.push({
				element: element[`${siblings}ElementSibling`] as HTMLElement,
				animationParams: animationsParams
			});
			element = element[`${siblings}ElementSibling`] as HTMLElement;
		}
		return new SequencedAnimation(silbingsToAnimate, { alternate, iterations });
	}
}

export function SequencedChildrenAnimation(
	element: HTMLElement,
	animationsParams: ElementAnimationParams,
	from: 'first' | 'last',
	alternate?: boolean,
	iterations?: number
) {
	const direction = from === 'first' ? 'next' : 'previous';
	const childsToAnimate: SequencedAnimationElement[] = [];
	if (element[`${from}ElementChild`]) {
		let child = element[`${from}ElementChild`] as HTMLElement;
		while (child[`${direction}ElementSibling`]) {
			childsToAnimate.push({ element: child, animationParams: animationsParams });
			child = child[`${direction}ElementSibling`] as HTMLElement;
		}
		childsToAnimate.push({ element: child, animationParams: animationsParams });
		return new SequencedAnimation(childsToAnimate, { alternate, iterations });
	} else {
		throw Error('Element has no children');
	}
}
