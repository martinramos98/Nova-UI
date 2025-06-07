<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { popIn, type FullPosition, type SvelteTransitionFn } from '@nv-org/utils';
	import FloatingWidget from '@nv-org/floating-widget';
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
		contextKey = 'popover',
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
	const popoverController = getContext<{
		isOpen: boolean;
		updatePosition: any;
		asPopoverContent: any;
	}>(contextKey);
	if (!popoverController)
		throw new Error(
			'PopoverContent must be inside a PopoverRoot or set a custom contextKey correctly'
		);
	$effect(() => {
		if (isDynamicPosition) {
			popoverController.updatePosition(position as FullPosition, offset + (withArrow ? 10 : 0));
		}
	});
	function setPosition(node: HTMLElement) {
		popoverController.asPopoverContent(node);
		popoverController.updatePosition(position as FullPosition, offset + (withArrow ? 10 : 0));
	}
</script>

{#if popoverController.isOpen}
	<FloatingWidget
		{position}
		{asElement}
		role="dialog"
		{action}
		{colors}
		class={'ui-popover' + (className ? ' ' + className : '')}
		{variant}
		{offset}
		{animationParams}
		{animationFunction}
		{containerElementAttr}
		{withArrow}
		{contextKey}
		{setPosition}
	>
		{@render children?.()}
	</FloatingWidget>
{/if}

<style>
	@layer nova {
		:global {
			.ui-popover {
				position: absolute;
				top: 0;
				left: 0;
				padding: var(--spacing-2);
				background-color: var(--color-container);
				--color-border-arrow: var(--color-border);
				--color-arrow: var(--color-container);
				--border-width: 2px;
				--arrow-width: 15px;
				--arrow-height: 15px;
				transition:
					all 0.25s ease,
					left 0s,
					top 0s;
			}
		}
	}
</style>
