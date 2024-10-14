import { sineInOut } from 'svelte/easing';
interface Options {
	direction: 'in' | 'out' | 'both';
}
export type SvelteTransitionFn = (
	node: HTMLElement,
	params: any,
	options: Options
) => {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
};
export const popIn: SvelteTransitionFn = (node, params = {}, options = { direction: 'both' }) => {
	params = { duration: 400, easing: sineInOut, delay: 0, ...params };
	return {
		delay: params.delay,
		duration: params.duration,
		css(t) {
			const eased = params.easing(t);
			return `
       opacity:${eased};
       scale: ${0.98 + 0.02 * eased};
       `;
		}
	};
};
export const popOut: SvelteTransitionFn = (node, params = {}, options = { direction: 'both' }) => {
	params = { duration: 400, easing: sineInOut, delay: 0, ...params };
	return {
		delay: params.delay,
		duration: params.duration,
		// easing:params.easing,
		css(t) {
			const eased = params.easing(t);
			return `
       opacity:${eased};
       scale: ${1.01 - 0.01 * eased};
       `;
		}
	};
};

export const fadedSlide: SvelteTransitionFn = (
	node,
	params = {},
	options = { direction: 'both' }
) => {
	params = { duration: 400, easing: sineInOut, delay: 0, withFade: true, axis: 'y', ...params };
	const nodeStyleMap = node.computedStyleMap();
	const pt = nodeStyleMap.get('padding-top') as CSSUnitValue,
		pb = nodeStyleMap.get('padding-bottom') as CSSUnitValue,
		pl = nodeStyleMap.get('padding-left') as CSSUnitValue,
		pr = nodeStyleMap.get('padding-right') as CSSUnitValue;
	const mt = nodeStyleMap.get('margin-top') as CSSUnitValue,
		mb = nodeStyleMap.get('margin-bottom') as CSSUnitValue,
		ml = nodeStyleMap.get('margin-left') as CSSUnitValue,
		mr = nodeStyleMap.get('margin-right') as CSSUnitValue;
	const bt = nodeStyleMap.get('border-top-width') as CSSUnitValue,
		bb = nodeStyleMap.get('border-bottom-width') as CSSUnitValue,
		bl = nodeStyleMap.get('border-left-width') as CSSUnitValue,
		br = nodeStyleMap.get('border-right-width') as CSSUnitValue;
	console.log(node.offsetHeight, options);
	return {
		delay: params.delay,
		duration: params.duration,
		css(t) {
			return `
			
			overflow:hidden;
			opacity:${params.withFade ? params.easing(t) : 1};
			${params.axis === 'x' ? 'width' : 'height'}: ${params.easing(t) * (params.axis === 'x' ? node.offsetWidth : node.offsetHeight)}px;
			padding:${params.axis === 'x' ? `${pt.value + pt.unit} ${pr.value * params.easing(t) + pr.unit} ${pb.value + pb.unit} ${pl.value * params.easing(t) + pl.unit}` : `${pt.value * params.easing(t) + pt.unit} ${pr.value + pr.unit} ${pb.value * params.easing(t) + pb.unit} ${pl.value + pl.unit}`};
			margin:${params.axis === 'x' ? `${mt.value + mt.unit} ${mr.value * params.easing(t) + mr.unit} ${mb.value + mb.unit} ${ml.value * params.easing(t) + ml.unit}` : `${mt.value * params.easing(t) + mt.unit} ${mr.value + mr.unit} ${mb.value * params.easing(t) + mb.unit} ${ml.value * params.easing(t) + ml.unit}`};
			border-width:${params.axis === 'x' ? `${bt.value + bt.unit} ${br.value * params.easing(t) + br.unit} ${bb.value + bb.unit} ${bl.value * params.easing(t) + bl.unit}` : `${bt.value * params.easing(t) + bt.unit} ${br.value + br.unit} ${bb.value * params.easing(t) + bb.unit} ${bl.value * params.easing(t) + bl.unit}`};
			`;
		}
	};
};

export const directionedFly: SvelteTransitionFn = (
	node,
	params = {},
	options = { direction: 'both' }
) => {
	params = {
		duration: 400,
		easing: sineInOut,
		delay: 0,
		withFade: false,
		moveUntil: 100,
		direction: 'top',
		...params
	};
	if (params.withFade === false && params.moveUntil < 100) {
		params.withFade = true;
	}
	return {
		delay: params.delay,
		duration: params.duration,
		easing: params.easing,
		css(t, u) {
			const inv = params.easing(u);
			const positionsCss = {
				top: `0 -${inv * params.moveUntil}%`,
				bottom: `0 ${inv * params.moveUntil}%`,
				left: `-${inv * params.moveUntil}% 0`,
				right: `${inv * params.moveUntil}% 0`
			};
			return `
       ${params.withFade ? `opacity:${params.easing(t)};` : ''}
       translate:${positionsCss[params.direction as keyof typeof positionsCss]};
       `;
		}
	};
};
