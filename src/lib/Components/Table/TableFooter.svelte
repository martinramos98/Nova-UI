<svelte:options runes={true} />

<script lang="ts">
	import TableRow from './TableRow.svelte';
	import { type Snippet } from 'svelte';
	const { className = '', children }: { className?: string; children?: Snippet } = $props();
</script>

<tfoot class="ui-table-footer {className}">
	<TableRow>
		{#if children}
			{@render children()}
		{/if}
	</TableRow>
</tfoot>
