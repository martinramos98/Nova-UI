<script lang="ts">
	import type { Snippet } from 'svelte';

	export let className = '';
	export let children: Snippet;
	export let value = undefined;
	export let type: 'string' | 'number' | 'any' = 'any';
	export let as: 'header' | 'data' = 'data';
	export let scope: 'row' | 'col' | 'rowgroup' | 'colgroup' = 'row';
</script>

{#if as === 'data'}
	<td class="ui-table-cell {className}">
		{@render children()}
	</td>
{:else if as === 'header'}
	<th {scope} class="ui-table-cell {className}">
		{@render children()}
	</th>
{/if}
