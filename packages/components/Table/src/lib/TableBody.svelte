<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	interface TableBodyProps {
		class?: string;
		children?: Snippet;
	}
	const { class: className = '', children }: TableBodyProps = $props();
</script>

<tbody class="ui-table-body {className}">
	{#if children}
		{@render children()}
	{/if}
</tbody>
