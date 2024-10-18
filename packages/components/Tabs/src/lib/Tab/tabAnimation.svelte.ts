import { ElementAnimation } from '@nv-org/element-animation-js';

function fadeSlideAnimation(
	element: HTMLElement,
	opt: { orientation: 'vertical' | 'horizontal'; initialHeightAnimation: number; duration: number }
) {
	const { orientation, initialHeightAnimation, duration } = opt;
	const mapStyleNode = element.computedStyleMap();
	const mt = (mapStyleNode.get('margin-top') as CSSUnitValue).value,
		mr = (mapStyleNode.get('margin-right') as CSSUnitValue).value,
		mb = (mapStyleNode.get('margin-bottom') as CSSUnitValue).value,
		ml = (mapStyleNode.get('margin-left') as CSSUnitValue).value;
	const pt = (mapStyleNode.get('padding-top') as CSSUnitValue).value,
		pr = (mapStyleNode.get('padding-right') as CSSUnitValue).value,
		pb = (mapStyleNode.get('padding-bottom') as CSSUnitValue).value,
		pl = (mapStyleNode.get('padding-left') as CSSUnitValue).value;
	const bt = (mapStyleNode.get('border-top-width') as CSSUnitValue).value,
		br = (mapStyleNode.get('border-right-width') as CSSUnitValue).value,
		bb = (mapStyleNode.get('border-bottom-width') as CSSUnitValue).value,
		bl = (mapStyleNode.get('border-left-width') as CSSUnitValue).value;
	const height = element.offsetHeight;
	element.style.overflow = 'hidden';
	console.log(initialHeightAnimation, height, 'height gap');
	const sizesAnimation = (
		orientation === 'vertical'
			? [
					{
						height: initialHeightAnimation + 'px',
						marginTop: '0px',
						marginBottom: '0px',
						paddingTop: '0px',
						paddingBottom: '0px',
						borderTopWidth: '0px',
						borderBottomWidth: '0px',
						opacity: '0',
						offset: 0
					},
					{
						height: height + 'px',
						marginTop: mt + 'px',
						marginBottom: mb + 'px',
						paddingTop: pt + 'px',
						paddingBottom: pb + 'px',
						borderTopWidth: bt + 'px',
						borderBottomWidth: bb + 'px',
						opacity: 0,
						offset: 0.8
					},
					{
						opacity: '1',
						marginTop: mt + 'px',
						marginBottom: mb + 'px',
						paddingTop: pt + 'px',
						paddingBottom: pb + 'px',
						borderTopWidth: bt + 'px',
						borderBottomWidth: bb + 'px',
						height: height + 'px',
						offset: 1
					}
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
					duration: duration,
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

function slideFadeAnimation(
	element: HTMLElement,
	opt: {
		orientation: 'vertical' | 'horizontal';
		easing: string;
	}
) {
	const { orientation, easing } = opt;
	const mapStyleNode = element.computedStyleMap();
	const mt = (mapStyleNode.get('margin-top') as CSSUnitValue).value,
		mr = (mapStyleNode.get('margin-right') as CSSUnitValue).value,
		mb = (mapStyleNode.get('margin-bottom') as CSSUnitValue).value,
		ml = (mapStyleNode.get('margin-left') as CSSUnitValue).value;
	const pt = (mapStyleNode.get('padding-top') as CSSUnitValue).value,
		pr = (mapStyleNode.get('padding-right') as CSSUnitValue).value,
		pb = (mapStyleNode.get('padding-bottom') as CSSUnitValue).value,
		pl = (mapStyleNode.get('padding-left') as CSSUnitValue).value;
	const bt = (mapStyleNode.get('border-top-width') as CSSUnitValue).value,
		br = (mapStyleNode.get('border-right-width') as CSSUnitValue).value,
		bb = (mapStyleNode.get('border-bottom-width') as CSSUnitValue).value,
		bl = (mapStyleNode.get('border-left-width') as CSSUnitValue).value;
	const height = element.offsetHeight;

	element.style.overflow = 'hidden';

	const sizesAnimation = (
		orientation === 'vertical'
			? [
					{
						height: '0px',
						opacity: '0',
						marginTop: '0px',
						marginBottom: '0px',
						paddingTop: '0px',
						paddingBottom: '0px',
						borderTopWidth: '0px',
						borderBottomWidth: '0px'
					},
					{
						height: height + 'px',
						opacity: '1',
						marginTop: mt + 'px',
						marginBottom: mb + 'px',
						paddingTop: pt + 'px',
						paddingBottom: pb + 'px',
						borderTopWidth: bt + 'px',
						borderBottomWidth: bb + 'px'
					}
				]
			: [
					{
						width: '0',
						opacity: '0',
						marginRight: '0px',
						marginLeft: '0px',
						paddingRight: '0px',
						paddingLeft: '0px',
						borderRightWidth: '0px',
						borderLeftWidth: '0px'
					},
					{
						width: 100 + '%',
						opacity: '1',
						marginRight: mr + 'px',
						marginLeft: ml + 'px',
						paddingRight: pr + 'px',
						paddingLeft: pl + 'px',
						borderRightWidth: br + 'px',
						borderLeftWidth: bl + 'px'
					}
				]
	) as Keyframe[];
	return new ElementAnimation(element, {
		animations: [
			{
				keyframes: sizesAnimation,
				animationOptions: {
					duration: 350,
					easing: easing,
					fill: 'both',
					direction: 'normal'
				}
			}
		],
		iterations: 1,
		alternate: false
	});
}

function fade(element: HTMLElement, opt: { easing: string }) {
	const { easing = 'ease' } = opt;
	return new ElementAnimation(element, {
		animations: [
			{
				keyframes: [{ opacity: '0' }, { opacity: '1' }],
				animationOptions: {
					duration: 350,
					easing: easing,
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
	'slide-fade': slideFadeAnimation,
	fade: fade
};
export default tabAnimationMap;
