import { ElementAnimation, type BasicAnimation, type ElementAnimationParams } from './Animation.js';
type ParallelElementParam = {
	element: HTMLElement | string;
	animationOptions: ElementAnimationParams;
};
export class ParallelAnimation implements BasicAnimation {
	private elementAnimations: ElementAnimation[] = [];
	finished: boolean = false;
	private currentIteration = 0;
	private iterations = 1;
	private alternate = false;
	private reversed = false;
	private onEndCallback: undefined | ((anim: ParallelAnimation) => void);
	constructor(animationsParams: ParallelElementParam[]) {
		animationsParams.forEach((elementAnimationParam) => {
			if (typeof elementAnimationParam.element === 'string') {
				const elements = document.querySelectorAll(elementAnimationParam.element);
				for (const el of elements) {
					this.elementAnimations.push(
						new ElementAnimation(el as HTMLElement, elementAnimationParam.animationOptions)
					);
				}
			} else {
				this.elementAnimations.push(
					new ElementAnimation(elementAnimationParam.element, {
						...elementAnimationParam.animationOptions,
						onFinishedAnimation: () => {
							let isFinishedAnimation = false;
							this.elementAnimations.forEach((elAnim) => {
								isFinishedAnimation = isFinishedAnimation && elAnim.finished;
							});
							// TODO: Pensar si tiene que llevar alternate, iterations, etc
							if (isFinishedAnimation) {
								this.currentIteration++;
								if (this.currentIteration > this.iterations - 1) {
									this.finished = true;
									this.onEndCallback && this.onEndCallback(this);
								} else {
									this.alternate && !this.reversed ? this.reverse() : this.playForward();
								}
							}
						}
					})
				);
			}
		});
	}

	play(): void {
		this.elementAnimations.forEach((anima) => {
			anima.play();
		});
	}
	playForward() {
		this.elementAnimations.forEach((anima) => {
			anima.playForward();
		});
	}
	pause(): void {
		this.elementAnimations.forEach((anima) => {
			anima.pause();
		});
	}

	reset(): void {
		this.elementAnimations.forEach((anima) => {
			anima.reset();
		});
	}

	cancel(): void {
		this.elementAnimations.forEach((anima) => {
			anima.cancel();
		});
	}

	reverse(): void {
		this.elementAnimations.forEach((anima) => {
			anima.reverse();
		});
		this.reversed = true;
	}
}