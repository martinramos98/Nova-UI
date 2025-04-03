<svelte:options runes={true} />

<script lang="ts">
	import { type Snippet } from 'svelte';
	import { popIn, setPosisitionPopover, type SvelteTransitionFn } from '@nv-org/utils';
	interface TooltipProps {
		class?: string | string[];
		colors?: string;
		variant?: string;
		offset?: number;
		position?: string;
		withArrow?: boolean;
		tooltipContent: string | Snippet;
		children: Snippet;
		open?: boolean;
		animationFunction?: SvelteTransitionFn;
		animationParams?: any;
	}
	let {
		class: className = '',
		colors = '',
		variant = '',
		position = 'top-start',
		offset = 5,
		withArrow = false,
		tooltipContent,
		children,
		open = $bindable(false),
		animationFunction = popIn,
		animationParams = {}
	}: TooltipProps = $props();
	let tooltip: HTMLElement;
	let container: HTMLElement;
	let arrowPosition = '';
	function onMouseIn(ev: MouseEvent) {
		if (ev.target === container) open = true;
	}
	function onMouseOut(ev: MouseEvent) {
		if (ev.target === container) open = false;
	}
	function setArrowPosition(node: SVGElement) {
		if (position === 'top' || position === 'top-start' || position === 'top-end') {
			node.style.cssText = `bottom:-8px;left:calc(50% - 7px);rotate:180deg;`;
		} else if (position === 'bottom' || position === 'bottom-start' || position === 'bottom-end') {
			node.style.cssText = `top:-8px;left:calc(50% - 7px); `;
		} else if (position === 'left' || position === 'left-start' || position === 'left-end') {
			node.style.cssText = `top:25%;right:-8px;rotate:90deg;`;
		} else if (position === 'right' || position === 'right-start' || position === 'right-end') {
			node.style.cssText = `top:25%;left:-8px;rotate:270deg`;
		}
	}
	function setPosition(node: HTMLElement) {
		setPosisitionPopover({
			position: position,
			element: node,
			offset: withArrow ? offset + 7 : offset
		});
	}
</script>

<div
	bind:this={container}
	role="tooltip"
	onmouseenter={onMouseIn}
	onmouseleave={onMouseOut}
	class="ui-tooltip-container"
>
	<!-- class="ui-tooltip ui-color-{colors !== '' ? colors : ''} ui-variant-{variant !== ''
				? variant
				: ''} {className}" -->
	{#if children}
		{@render children()}
	{/if}
	{#if open}
		<div
			transition:animationFunction={animationParams}
			use:setPosition
			bind:this={tooltip}
			class={[
				'ui-tooltip',
				colors && `ui-color-${colors}`,
				variant && `ui-variant-${variant}`,
				className
			]}
		>
			{#if withArrow}
				<svg use:setArrowPosition class="ui-tooltip-arrow" style={arrowPosition} viewBox="0 0 5 5">
					<path d="M2.5 0L4.66506 3.75H0.334936L2.5 0Z" />
				</svg>
			{/if}
			{#if typeof tooltipContent === 'string'}
				{tooltipContent}
			{:else if tooltipContent}
				{@render tooltipContent()}
			{/if}
		</div>
	{/if}
</div>

<style>
	@layer nova {
		.ui-tooltip-container {
			position: relative;
			display: inline-block;
			width: fit-content;
		}
		.ui-tooltip {
			background-color: var(--color-container);
			color: var(--color-text);
			width: max-content;
			min-width: 20px;
			border-radius: var(--radius-xl);
			padding: 0.35rem;
			height: auto;
			min-height: 25px;
			position: absolute;
			z-index: 50;
		}
		.ui-tooltip-arrow {
			position: absolute;
			fill: var(--color-container);
			width: 15px;
			height: 15px;
		}
	}
</style>
