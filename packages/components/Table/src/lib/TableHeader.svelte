<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	import TableRow from './TableRow.svelte';
	interface TableHeaderProps {
		class?: string;
		children: Snippet;
	}
	const { class: className = '', children }: TableHeaderProps = $props();
</script>

<thead class="ui-table-head {className}">
	<TableRow>
		{@render children()}
	</TableRow>
</thead>
