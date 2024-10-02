<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	// import { setContext } from 'svelte';
	interface TableProps {
		class?: string;
		children?: Snippet;
		variant?: string;
		color?: string;
	}
	const {
		class: className = '',
		children,
		variant = 'default',
		color = 'container'
	}: TableProps = $props();
</script>

<table
	class="ui-table ui-color-{color} ui-table-variant-{variant !== '' ? variant : ''} {className}"
>
	{#if children}
		{@render children()}
	{/if}
</table>
