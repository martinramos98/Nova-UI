<script lang="ts">
	import type { Snippet } from 'svelte';
	import TableRow from './TableRow.svelte';
	export let className = '';
	export let children: Snippet;
</script>

<thead class="ui-table-head {className}">
	<TableRow>
		{@render children()}
	</TableRow>
</thead>
