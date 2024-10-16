import { ElementAnimation } from '@nv-org/element-animation-js';

function fadeSlideAnimation(element: HTMLElement, orientation: 'vertical' | 'horizontal') {
	const sizesAnimation = (
		orientation === 'vertical'
			? [
					{ height: '0', opacity: '0', offset: 0 },
					{ height: '100%', offset: 0.7 },
					{ height: '100%', opacity: '1', offset: 1 }
				]
			: [
					{ width: '0', opacity: '0' },
					{ width: '100%', opacity: '1' }
				]
	) as Keyframe[];
	return new ElementAnimation(element, {
		animations: [
			{
				keyframes: sizesAnimation,
				animationOptions: {
					duration: 800,
					easing: 'ease',
					fill: 'both',
					direction: 'normal'
				}
			}
		],
		iterations: 1,
		alternate: false
	});
}

function slideFadeAnimation(element: HTMLElement, orientation: 'vertical' | 'horizontal') {
	const height = element.offsetHeight;
	element.style.overflow = 'hidden';
	const sizesAnimation = (
		orientation === 'vertical'
			? [
					{ height: '0px', opacity: '0' },
					{ height: height + 'px', opacity: '1' }
				]
			: [
					{ width: '0', opacity: '0' },
					{ width: 100 + '%', opacity: '1' }
				]
	) as Keyframe[];
	return new ElementAnimation(element, {
		animations: [
			{
				keyframes: sizesAnimation,
				animationOptions: {
					duration: 300,
					easing: 'ease',
					fill: 'both',
					direction: 'normal'
				}
			}
		],
		iterations: 1,
		alternate: false
	});
}
const tabAnimationMap = {
	'fade-slide': fadeSlideAnimation,
	'slide-fade': slideFadeAnimation
};
export default tabAnimationMap;
