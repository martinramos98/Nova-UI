import { type ElementAnimationParams } from '@nv-org/element-animation-js';
export const buttonControlAnimationProps: ElementAnimationParams = {
	animations: {
		keyframes: [
			{ scale: 1, translate: '0 0' },
			{ scale: 0.5, translate: '-20px 20px' }
		],
		animationOptions: {
			easing: 'ease',
			duration: 300,
			direction: 'normal',
			fill: 'both'
		}
	}
};
export const avatarHiddenContainerAnimationProps: ElementAnimationParams = {
	animations: {
		keyframes: [{ left: '0' }, { left: '100%' }],
		animationOptions: {
			easing: 'ease',
			duration: 300,
			direction: 'normal',
			fill: 'both'
		}
	}
};
