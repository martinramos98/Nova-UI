<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Popover } from './popover.svelte.js';

	const {
		open = $bindable(false),
		children,
		asElement = 'div',
		class: className,
		variant,
		colors,
		containerElementAttr
	}: {
		open:boolean;
		children: Snippet;
		asElement?: string;
		colors?: string;
		class?: string;
		variant?: string;
		containerElementAttr: any;
	} = $props();
</script>

{#if open}
	<svelte:element
		this={asElement}
		class="ui-popover{variant ? ` ui-variant-${variant}` : ''}{colors
			? ` ui-colors-${colors}`
			: ''}
			{className ? " "+className:""}}"
		{...containerElementAttr}
	>
		{@render children?.()}
	</svelte:element>
{/if}

<style>
	@layer nova {
		.ui-popover {
			padding: var(--spacing-2);
		}
	}
</style>
