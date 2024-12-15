<script lang="ts">
	const { position } = $props();

	function calculateArrowPosition(node: SVGSVGElement) {
		if (position === 'top') {
		} else if (position === 'bottom') {
			node.style.top = '0';
			node.style.left = `${-node.clientWidth / 2}px`;
		} else if (position === 'left') {
		} else if (position === 'right') {
		} else if (position === 'top-left') {
		} else if (position === 'top-right') {
		} else if (position === 'bottom-left') {
		} else if (position === 'bottom-right') {
		} else if (position === 'left-top') {
		} else if (position === 'left-bottom') {
		} else if (position === 'right-top') {
		} else if (position === 'right-bottom') {
		}
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
