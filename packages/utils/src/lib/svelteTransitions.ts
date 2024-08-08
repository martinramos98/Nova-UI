import { circInOut, cubicInOut, quadInOut, sineInOut } from "svelte/easing";
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
export const popIn: SvelteTransitionFn = (node, params = {duration:400,easing:sineInOut,delay:0}, options = {direction:'both'}) => {
  return {
    delay:params.delay,
    duration:params.duration,
    css(t, u) {
        const eased = params.easing(t)
       return `
       opacity:${eased};
       scale: ${(0.98 +  (0.02 * eased))};
       ` 
    },
  }
};
export const popOut: SvelteTransitionFn = (node, params = {duration:400,easing:sineInOut,delay:0}, options = {direction:'both'}) => {
  return {
    delay:params.delay,
    duration:params.duration,
    // easing:params.easing,
    css(t, u) {
        const eased = params.easing(t)
       return `
       opacity:${eased};
       scale: ${(1.01 -  (0.01 * eased))};
       ` 
    },
  }
};
export const directionedFly:SvelteTransitionFn = (node,params = {}, options = {direction:'both'}) => {
  params = {duration:400,easing:sineInOut,delay:0,withFade:false,moveUntil:100,direction:'top',...params}
  if(params.withFade === false && params.moveUntil < 100 ){
    params.withFade = true 
  }
  return {
    delay:params.delay,
    duration:params.duration,
    easing:params.easing,
    css(t, u) {
      const inv = params.easing(u)
      const positionsCss = {
        top:`0 -${inv*params.moveUntil}%`,
        bottom:`0 ${inv*params.moveUntil}%`,
        left:`-${inv*params.moveUntil}% 0`,
        right:`${inv*params.moveUntil}% 0`,

      }
       return `
       ${params.withFade?`opacity:${params.easing(t)};`:''}
       translate:${positionsCss[params.direction as keyof typeof positionsCss]};
       ` 
    },
  }
}
