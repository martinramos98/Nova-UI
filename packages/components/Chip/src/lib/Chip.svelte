<script lang="ts">
	import type { Snippet } from 'svelte';
	import { CloseButton } from '@nv-org/button';

	// TODO: Define type of variantas and colors
	interface ChipProps {
		variant?: any | '';
		colors?: any | '';
		class?: string;
		withCloseButton?: boolean;
		closeButton?:Snippet;
		closeButtonPosition?: 'left' | 'right';
		size?: 'xs' | 'sm' | 'md' | 'lg';
		children: Snippet;
		show?: boolean;
	}
	let  {
		variant = '',
		colors = '',
		class: className = '',
		size = 'md',
		children,
		closeButtonPosition = 'right',
		closeButton = undefined,
		withCloseButton = false,
		show = $bindable(true)
	}: ChipProps = $props();
</script>

{#if show}
	{#if withCloseButton && closeButtonPosition === 'left'}
		{#if closeButton}
			{@render closeButton()}
		{:else}
			<CloseButton onclose={()=>{show = false}} />
		{/if}
	{/if}
	<span
	class="ui-chip sizes-{size} {colors !== '' ? 'ui-color-' + colors : ''} {variant !== ''
		? 'ui-variant-' + variant
		: ''} {className}"
>
	{@render children()}
</span>
	{#if withCloseButton && closeButtonPosition === 'right'}
		{#if closeButton}
			{@render closeButton()}
		{:else}
			<CloseButton onclose={()=>{show = false}} />
		{/if}
	{/if}
{/if}


<style>
	@layer theme, base, nova, components, utilities;
	@layer nova {
		.ui-chip {
			display: flex;
			align-items: center;
			place-items: center;
			place-content: center;
			transition: all 0.3s ease;
		}

		.sizes-xs {
			/* border-radius: var(--radius-2xl); */
			min-width: var(--spacing-5);
			min-height: var(--spacing-4);
			font-size: var(--font-size-xs);
			height: fit-content;

			padding: 0rem 0.5rem;
		}
		.sizes-sm {
			/* border-radius: var(--radius-2xl); */
			min-width: var(--spacing-6);
			min-height: var(--spacing-7);
			font-size: var(--font-size-sm);
			height: fit-content;
			padding: 0 1rem;
		}
		.sizes-md {
			/* border-radius: var(--radius-2xl); */
			min-width: var(--spacing-8);
			min-height: var(--spacing-8);
			font-size: var(--font-size-lg);
			height: fit-content;
			padding: 0.1rem 1.2rem;
		}
		.sizes-lg {
			/* border-radius: var(--radius-3xl); */
			min-width: var(--spacing-24);
			min-height: var(--spacing-5);
			font-size: var(--font-size-2xl);
			padding: 0.1rem 1.2rem;
		}
	}
</style>
