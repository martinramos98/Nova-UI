<svelte:options runes={true} />

<script lang="ts">
	import { setPosisitionPopover, type SvelteTransitionFn, popIn } from '@nv-org/utils';
	import { type Snippet } from 'svelte';
	interface PopoverProps {
		offset?: number;
		position?: string;
		variant?: string;
		open?: boolean;
		children: Snippet;
		popoverContent: Snippet;
		className?: string;
		color?: string;
		animationFunction?: SvelteTransitionFn;
		animationParams?: any;
	}
	let {
		popoverContent,
		offset = 5,
		position = 'top-start',
		className = '',
		color = '',
		variant = '',
		open = $bindable(false),
		animationParams = {},
		animationFunction = popIn,
		children
	}: PopoverProps = $props();
	let popover: HTMLElement | undefined = $state();
	let popoverContainer: HTMLElement;
	$effect(() => {
		if (!open) {
			window.removeEventListener('pointerdown', handleTogglePopover);
		}
	});
	function handleTogglePopover(ev: PointerEvent) {
		const el = ev.target as HTMLElement;
		if (open && !popoverContainer.contains(el)) {
			open = false;
			// animation.reverse();
		}
		ev.preventDefault();
	}

	function onClickPopover(ev: PointerEvent) {
		if (open) {
			if (!popover.contains(ev.target)) {
				open = false;
			}
		} else {
			open = true;
		}
	}
	function setPopover(node: HTMLElement) {
		setPosisitionPopover({ offset, position, element: node });
		window.addEventListener('pointerdown', handleTogglePopover);
	}
</script>

<div
	onpointerdowncapture={onClickPopover}
	role="tooltip"
	bind:this={popoverContainer}
	class="ui-popover-container"
>
	{@render children()}
	{#if open}
		<div
			use:setPopover
			bind:this={popover}
			transition:animationFunction={animationParams}
			class="ui-popover ui-color-{color !== '' ? color : ''} ui-variant-{variant !== ''
				? variant
				: ''}  {className}"
		>
			{@render popoverContent()}
		</div>
	{/if}
</div>

<style>
	@layer nova {
		.ui-popover-container {
			position: relative;
			display: inline-block;
			width: max-content;
		}
		.ui-popover {
			background-color: var(--color-container);
			color: var(--color-text);
			width: max-content;
			border-radius: var(--radius-xl);
			padding: 0.35rem;
			height: auto;
			position: absolute;
			z-index: 10;
		}
	}
</style>
