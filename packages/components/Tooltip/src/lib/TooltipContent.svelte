<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { popIn, type FullPosition, type SvelteTransitionFn } from '@nv-org/utils';
	import FloatingWidget from '../../../FloatingWidget/FloatingWidget.svelte';
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
		tooltipController.asTooltipContent(node);
		tooltipController.updatePosition(position as FullPosition, offset);
	}
</script>

{#if tooltipController.isOpen}
	<FloatingWidget
		{position}
		{asElement}
		role="tooltip"
		{action}
		{colors}
		class={'ui-tooltip' + (className ? ' ' + className : '')}
		{variant}
		{offset}
		{animationParams}
		{animationFunction}
		{containerElementAttr}
		{withArrow}
		{setPosition}
	>
		{@render children?.()}
	</FloatingWidget>
{/if}

<style>
	@layer nova {
		:global {
			@layer nova {
				.ui-tooltip {
					position: absolute;
					top: 0;
					left: 0;
					padding: var(--spacing-2);
					transition:
						all 0.25s ease,
						left 0s,
						top 0s;
				}
			}
		}
	}
</style>
