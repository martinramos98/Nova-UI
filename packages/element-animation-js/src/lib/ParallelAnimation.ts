// FIXME: On commit style check if element is rendered on document or something.
import { ElementAnimation, type BasicAnimation, type ElementAnimationParams } from './Animation.js';
export type ParallelElementParam = {
	element: HTMLElement | string;
	animationOptions: ElementAnimationParams;
};
export type ParallelAnimationOptions = {
	onEndAnimation?: (anim: ParallelAnimation) => void;
	iterations?: number;
	alternate?: boolean;
};
export class ParallelAnimation implements BasicAnimation {
	private elementAnimations: BasicAnimation[] = [];
	// finished: boolean = false;
	state: 'paused' | 'playing' | 'finished' | 'start' = 'start';
	private currentIteration = 0;
	private iterations = 1;
	private alternate = false;
	private onEndCallbacks: ((anim: ParallelAnimation) => void)[];
	constructor(
		animationsParams: ParallelElementParam[],
		{ onEndAnimation, iterations, alternate }: ParallelAnimationOptions
	) {
		this.iterations = iterations ?? 1;
		this.alternate = alternate ?? false;
		this.onEndCallbacks = onEndAnimation ? [onEndAnimation] : [];
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
							let isFinishedAnimation = true;
							this.elementAnimations.forEach(async (elAnim) => {
								const fin = await elAnim.finished;
								isFinishedAnimation = isFinishedAnimation && fin;
							});
							if (isFinishedAnimation) {
								this.currentIteration++;
								if (this.currentIteration > this.iterations - 1) {
									// this.finished = true;
									this.currentIteration = 0;
									this.onEndCallbacks.forEach((callback) => {
										callback(this);
									});
								} else {
									this.alternate && this.currentIteration % 2 === 1
										? this.reverse()
										: this.playForward();
								}
							}
						}
					})
				);
			}
		});
	}

	play(): void {
		this.state = 'playing';
		this.elementAnimations.forEach((anima) => {
			anima.play();
		});
	}
	playForward() {
		this.state = 'playing';

		this.elementAnimations.forEach((anima) => {
			anima.playForward();
		});
	}
	pause(): void {
		this.state = 'paused';

		this.elementAnimations.forEach((anima) => {
			anima.pause();
		});
	}

	reset(): void {
		this.state = 'playing';
		this.elementAnimations.forEach((anima) => {
			anima.reset();
		});
	}

	cancel(): void {
		this.state = 'start';
		this.elementAnimations.forEach((anima) => {
			anima.cancel();
		});
	}

	reverse(): void {
		this.state = 'playing';
		this.elementAnimations.forEach((anima) => {
			anima.reverse();
		});
	}
	subscribeEndCallback(callback: (anima: BasicAnimation) => void): void {
		this.onEndCallbacks.push(callback);
	}
	public get finished(): Promise<boolean> {
		return new Promise((resolve) => {
			const fnEnd = () => {
				this.onEndCallbacks.filter((fn) => fnEnd === fn);
				resolve(true);
			};
			this.subscribeEndCallback(fnEnd);
		});
	}
}
