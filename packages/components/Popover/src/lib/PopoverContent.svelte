<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { popIn, type FullPosition, type SvelteTransitionFn } from '@nv-org/utils';
	import ArrowSvg from '../../../FloatingWidget/ArrowSvg.svelte';
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
		withArrow = false,
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
		withArrow?:boolean;
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
		popoverController.updatePosition(position as FullPosition, offset + (withArrow ? 10 : 0));
	}
</script>

{#if popoverController.isOpen}
	<svelte:element
		this={asElement}
		role="dialog"
		aria-hidden={!popoverController.isOpen}
		use:popoverController.asPopoverContent
		use:setPosition
		use:action
		transition:animationFunction={animationParams}
		class="ui-popover{variant ? ` ui-variant-${variant}` : ''}{colors
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
		.ui-popover {
			position: absolute;
			top: 0;
			left: 0;
			padding: var(--spacing-2);
			background-color: var(--color-container);
			--color-border-arrow:var(--color-border);
			--color-arrow: var(--color-container);
			--border-width: 2px;
			--arrow-width:15px;
			--arrow-height:15px;
			transition:
				all 0.25s ease,
				translate 0s;
		}
	}
</style>
