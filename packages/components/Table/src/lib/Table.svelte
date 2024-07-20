<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	// import { setContext } from 'svelte';
	interface TableProps {
		className?: string;
		children?: Snippet;
		variant?: string;
		color?: string;
	}
	const {
		className = '',
		children,
		variant = 'default',
		color = 'container'
	}: TableProps = $props();
	// export let className = '';
	// export let children: Snippet;
	// export let variant = '';
	// export let color = '';
	// const values = $state([[]]);

	// setContext('ui-table', {
	// 	subcribeCell: () => {}
	// });
</script>

<table
	class="ui-table ui-color-{color} ui-table-variant-{variant !== '' ? variant : ''} {className}"
>
	{#if children}
		{@render children()}
	{/if}
</table>
