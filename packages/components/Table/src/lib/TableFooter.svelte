<svelte:options runes={true} />

<script lang="ts">
	import TableRow from './TableRow.svelte';
	import { type Snippet } from 'svelte';
	interface TableFooterProps {
		class?: string;
		children?: Snippet;
	}
	const { class: className = '', children }: TableFooterProps = $props();
</script>

<tfoot class="ui-table-footer {className}">
	<TableRow>
		{#if children}
			{@render children()}
		{/if}
	</TableRow>
</tfoot>
