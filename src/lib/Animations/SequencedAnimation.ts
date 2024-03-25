import {
	type BasicAnimation,
	type ListNode,
	type ListArray,
	ElementAnimation
} from './Animation.js';
import { arrayToList } from './Animation.js';
import { type ElementAnimationParams } from './Animation.js';
export type SequencedAnimationElement = {
	element: HTMLElement;
	animationParams: ElementAnimationParams;
};
export class SequencedAnimation implements BasicAnimation {
	private currentIteration = 0;
	private iterations = 1;
	private alternate = false;
	private reversed = false;
	currentAnimation: ListNode<ElementAnimation>;
	private animations: ListArray<ElementAnimation>;
	constructor(
		params: SequencedAnimationElement[],
		options: {
			alternate?: boolean;
			iterations?: number;
			onEndSequence?: (anim: SequencedAnimation) => void;
		}
	) {
		this.reversed = false;
		this.iterations = options.iterations ?? 1;
		this.currentIteration = 0;
		this.alternate = options.alternate ?? false;
		this.animations = arrayToList(
			params.map((animationParamsElement) => {
				if (animationParamsElement.animationParams.iterations === Infinity) {
					throw Error('Sequenced Animation must not have infinites animations');
				}
				return new ElementAnimation(animationParamsElement.element, {
					...animationParamsElement.animationParams
				});
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
					// } else {

					// 	// if (alternate) {
					// 	// 	this.reversed = !this.reversed;
					// 	// } else {
					// 	// 	this.currentAnimation = this.animations[0];
					// 	// }
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
					options.onEndSequence && options.onEndSequence(this);
					this.currentIteration = 0;
				}
			});
		});
	}
	play(): void {
		this.currentAnimation.value.play();
	}
	playForward(): void {
		this.reversed = false;
		this.currentAnimation.value.playForward();
	}
	pause(): void {
		this.currentAnimation.value.pause();
	}
	stop(): void {
		this.currentAnimation.value.reset();
	}
	cancel(): void {
		this.cancelAllAnimations('all');
		if (this.reversed) {
			this.currentAnimation = this.animations[this.animations.length - 1];
		} else {
			this.currentAnimation = this.animations[0];
		}
		this.currentIteration = 0;
	}
	reset(): void {
		this.cancel();
		this.play();
	}
	reverse(): void {
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
}
export function SequencedSiblingAnimation(
	element: HTMLElement,
	animationsParams: ElementAnimationParams,
	siblings: 'next' | 'previous' | 'both',
	alternate?: boolean,
	iterations?: number
) {
	if (siblings === 'both') {
		let silbingsToAnimate: SequencedAnimationElement[] = [];
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
		let silbingsToAnimate: SequencedAnimationElement[] = [];
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
	let childsToAnimate: SequencedAnimationElement[] = [];
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
