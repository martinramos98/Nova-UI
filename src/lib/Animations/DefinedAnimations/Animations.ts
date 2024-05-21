import { ElementAnimation, type ElementAnimationParams } from '../Animation.js';
import { ParallelAnimation } from '../ParallelAnimation.js';
import { SequencedAnimation } from '../SequencedAnimation.js';

export interface SlideAnimationParams {
	element: HTMLElement;
	iterations: number;
	easing: string;
	alternate: boolean;
	duration: number;
	onFinishedAnimation: () => void;
	withFadeContent: boolean;
	direction: 'horizontal' | 'vertical';
}

function buildKeyframScale(
	element: HTMLElement,
	h: number,
	w: number,
	direction: string
): Keyframe[] {
	if (direction === 'vertical') {
		return [{ height: `0px` }, { height: `${h}px` }];
	} else if (direction === 'horizontal') {
		return [{ width: `0px` }, { width: `${w}px` }];
	}
	return [];
}
export function slideAnimation({
	element,
	iterations = 1,
	easing = 'ease',
	alternate = false,
	duration = 300,
	onFinishedAnimation,
	withFadeContent,
	direction
}: SlideAnimationParams) {
	const w = element.offsetWidth;
	const h = element.offsetHeight;
	const scaleAnimation = new ElementAnimation(element, {
		animations: {
			keyframes: buildKeyframScale(element, h, w, direction),
			animationOptions: {
				duration,
				easing,
				fill: 'both',
				direction: 'normal'
			}
		},
		iterations,
		alternate,
		onFinishedAnimation
	});
	if (withFadeContent) {
		new SequencedAnimation([new ParallelAnimation()], {});
	} else {
		return scaleAnimation;
	}
}
export function flyAnimation({
	element,
	x = new CSSUnitValue(20, 'px'),
	y = new CSSUnitValue(0, 'px'),
	iterations = 1,
	easing = 'ease',
	alternate = false,
	duration = 300,
	onEndAnimation
}: {
	element: HTMLElement;
	duration?: number;
	x?: CSSUnitValue;
	y?: CSSUnitValue;
	iterations?: number;
	easing?: string;
	alternate?: boolean;
	onEndAnimation?: (anim: ElementAnimation) => void;
}) {
	return new ElementAnimation(element, {
		animations: {
			keyframes: [
				{
					opacity: '0',
					// scale: '0.9',
					translate: `${x.value}${x.unit} ${y.value}${y.unit}`
				},
				{
					opacity: '1',
					// scale: '1',
					translate: `0 0`
				}
			],
			animationOptions: {
				easing,
				iterations: 1,
				fill: 'both',
				direction: 'normal',
				duration
			}
		},
		iterations,
		alternate,
		onFinishedAnimation: onEndAnimation
	});
}
export function fadeAnimation({
	element,
	duration = 300,
	easing = 'ease',
	iterations = 1,
	alternate = false,
	onEndAnimation
}: {
	element: HTMLElement;
	duration?: number;
	iterations?: number;
	easing?: string;
	alternate?: boolean;
	onEndAnimation?: (anim: ElementAnimation) => void;
}) {
	return new ElementAnimation(element, {
		animations: {
			keyframes: [
				{
					opacity: '0'
				},
				{
					opacity: '1'
				}
			],
			animationOptions: {
				easing,
				iterations: 1,
				fill: 'both',
				direction: 'normal',
				duration
			}
		},
		iterations,
		alternate,
		onFinishedAnimation: onEndAnimation
	});
}
