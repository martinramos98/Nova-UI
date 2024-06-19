import { ElementAnimation } from '@nova/element-animation-js';

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
