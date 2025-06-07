<script lang="ts">
	import { getContext } from 'svelte';

	const { position,contextKey } = $props();
	const context = getContext<{trigger:HTMLElement | null}>(contextKey)
	function calculateArrowPosition(node: SVGSVGElement) {
		if (position === 'top') {
			node.style.bottom = `${-(node.clientHeight - 2)}px`;
			node.style.left = `${-(node.parentElement.clientWidth / 2 + node.clientWidth / 2) }px`;
		} else if (position === 'bottom') {
			node.style.top = `${-(node.clientHeight - 2)}px`;
			node.style.left = `${node.parentElement.clientWidth / 2 - node.clientWidth / 2}px`;
		} else if (position === 'left') {
			node.style.right = `${-(node.clientWidth - 2)}px`;
			node.style.top  = `${context.trigger.clientHeight / 2}px`;
		} else if (position === 'right') {
			node.style.left = `${-(node.clientWidth - 2)}px`;
			node.style.top  = `${context.trigger.offsetHeight / 2 }px`;
		} else if (position === 'top-left') {
			node.style.bottom = `${-(node.clientHeight - 2)}px`;
			node.style.left = `${context.trigger.clientWidth / 2 - node.clientWidth / 2}px`;
		} else if (position === 'top-right') {
			node.style.top = `${-(node.clientHeight -2)}px`;
			node.style.right = `3px`;
		} else if (position === 'bottom-left') {
			node.style.bottom = `${-(node.clientHeight-2)}px`;
			node.style.left = `3px`;
		} else if (position === 'bottom-right') {
			node.style.bottom = `${-(node.clientHeight-2)}px`;
			node.style.right = `3px`;
		} else if (position === 'left-top') {
			node.style.left = `${-(node.clientWidth-2)}px`;
			node.style.top = `3px`;
		} else if (position === 'left-bottom') {
			node.style.left = `${-(node.clientWidth-2)}px`;
			node.style.bottom = `3px`;
		} else if (position === 'right-top') {
			node.style.right = `${-(node.clientWidth-2)}px`;
			node.style.top = `3px`;
		} else if (position === 'right-bottom') {
			node.style.right = `${-(node.clientWidth-2)}px`;
			node.style.bottom = `3px`;
		}
		node.style.visibility = 'visible';
	}

	function setPosition(node: SVGSVGElement) {
		if (position === 'bottom' || position === 'bottom-left' || position === 'bottom-right') {
			node.style.rotate = '180deg';
		}
		if (position === 'right' || position === 'right-top' || position === 'right-bottom') {
			node.style.rotate = '90deg';
		}
		if (position === 'left' || position === 'left-top' || position === 'right-bottom') {
			node.style.rotate = '270deg';
		}
	}
</script>

<svg
	use:setPosition
	use:calculateArrowPosition
	class="ui-float-arrow"
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
				visibility: hidden;
			}
		}
		.ui-float-arrow {
			width: var(--arrow-width);
			height: var(--arrow-height);
			& .line {
				stroke: var(--color-border-arrow);
				stroke-width: var(--border-width);
			}
			& .triangle {
				fill: var(--color-arrow);
			}
		}
	}
</style>
