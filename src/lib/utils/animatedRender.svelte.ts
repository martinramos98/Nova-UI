import { ElementAnimation, type BasicAnimation ,type ElementAnimationParams} from '@nova/element-animation-js';

export function animateRender(renderParams
: {
	open: boolean;
	element?: HTMLElement;
  animationParams:ElementAnimationParams
}) {
	const {animationParams} =renderParams 
	let render = $state(false);
	let animation: BasicAnimation | undefined = undefined;
	$effect(() => {
		if (renderParams.open) {
			render = true;
		} else {
      animation?.reverse()
		}
	});

	$effect(() => {
		console.log(renderParams.element)
		if (render) {

			animation = new ElementAnimation(renderParams.element as HTMLElement, animationParams);
      animation.subscribeEndCallback(() => { 
        if(!renderParams.open){
          render = false
        }
       })
			 animation.playForward()
		} 	});
	return { get render(){return render}};
}
