<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	const { className = '', children }: { className?: string; children?: Snippet } = $props();
</script>

<tbody class="ui-table-body {className}">
	{#if children}
		{@render children()}
	{/if}
</tbody>
