<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { popIn, type FullPosition, type SvelteTransitionFn } from '@nv-org/utils';
	const {
		children,
		asElement = 'div',
		action = () => {},
		class: className,
		variant,
		colors,
		animationParams = {},
		animationFunction = popIn,
		containerElementAttr,
		position = 'top',
		offset = 5,
		isDynamicPosition = false,
		contextKey = 'tooltip',
		withArrow = false
	}: {
		// controller: typeof controls;
		children: Snippet<[]>;
		asElement?: string;
		action?: (node: HTMLElement) => any;
		colors?: string;
		class?: string;
		variant?: string;
		offset?: number;
		animationParams?: any;
		animationFunction?: SvelteTransitionFn;
		containerElementAttr?: any;
		position?: string;
		isDynamicPosition?: boolean;
		contextKey?: string;
		withArrow?: boolean;
	} = $props();
	const tooltipController = getContext<{
		isOpen: boolean;
		updatePosition: any;
		asTooltipContent: any;
	}>(contextKey);
	if (!tooltipController)
		throw new Error(
			'PopoverContent must be inside a PopoverRoot or set a custom contextKey correctly'
		);
	$effect(() => {
		if (isDynamicPosition) {
			tooltipController.updatePosition(position as FullPosition, offset);
		}
	});
	function setPosition(node: HTMLElement) {
		tooltipController.updatePosition(position as FullPosition, offset);
	}
</script>

{#if tooltipController.isOpen}
	<svelte:element
		this={asElement}
		role="tooltip"
		aria-hidden={!tooltipController.isOpen}
		use:tooltipController.asTooltipContent
		use:setPosition
		use:action
		transition:animationFunction={animationParams}
		class="ui-tooltip{variant ? ` ui-variant-${variant}` : ''}{colors
			? ` ui-colors-${colors}`
			: ''}{className ? ' ' + className : ''}"
		{...containerElementAttr}
	>
		{#if withArrow}
			<ArrowSvg {position} />
		{/if}
		{@render children?.()}
	</svelte:element>
{/if}

<style>
	@layer nova {
		.ui-tooltip {
			position: absolute;
			top: 0;
			left: 0;
			padding: var(--spacing-2);
			transition:
				all 0.25s ease,
				translate 0s;
		}
	}
</style>
