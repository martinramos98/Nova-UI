<script lang="ts">
	import { calculatePosition, type FullPosition } from '@nv-org/utils';
  const {position} = $props();

  function positionInverted(position:FullPosition){
    switch(position){
      case 'top':return 'bottom'
      case 'bottom':return 'top'
      case 'left': return 'right'
      case 'right':return 'left'
      case 'top-left':return 'bottom'
      case 'top-right':return 'bottom'
      case 'bottom-left':return 'top'
      case 'bottom-right':return 'top'
      case 'left-top': return 'right'
      case 'left-bottom': return 'right'
      case 'right-top':return 'left'
      case 'right-bottom':return 'left'
    }
  }
  function setPosition(node:SVGSVGElement){

    if(position === 'bottom' || position === 'bottom-left' || position === 'bottom-right' ){
      node.style.rotate = '180deg'
    }
    if(position === 'right' || position === 'right-top' || position === 'right-bottom' ){
      node.style.rotate = '90deg'
    }if(position === 'left' || position === 'left-top' || position === 'right-bottom' ){
      node.style.rotate = '270deg'
    }
    const res = calculatePosition(node.parentElement as HTMLElement,node,positionInverted(position),0);
    console.log(res);
    node.style.translate = `${res.x}px ${res.y}px` 
    node.style.visibility = 'visible'

  }
</script>
<svg
  use:setPosition
	class="ui-float-arrow"
	width="15"
	height="15"
	viewBox="0 0 17 18"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path class="triangle" d="M1 1H16L8.5 16L1 1Z" fill="var(--color-container)" />
	<path
		d="M1 1L8.4472 16.7764"
		stroke="var(--color-border)"
    class="line"
		stroke-width="2"
		stroke-linecap="round"
	/>
	<path
		d="M8.54759 16.7871L16 1"
		stroke="var(--color-border)"
    class="line"
		stroke-width="2"
		stroke-linecap="round"
	/>
</svg>

<style>
	@layer nova {
		:global {
			.ui-popover > .ui-float-arrow {
        position: absolute;
        top: -2px;
        left: 0;
        visibility: hidden;
			}
		}
    .ui-float-arrow {
      & .line {
        stroke: var(--color-border-arrow);
        stroke-width: var(--border-width);
      } 
      & .triangle{
        fill:var(--color-arrow);
      }     
    }
	}
</style>
