<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	interface CellProps {
		class?: string;
		children: Snippet;
		value?: any;
		type?: 'string' | 'number' | 'any';
		as?: 'header' | 'data';
		scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
	}
	const {
		class: className = '',
		children,
		value,
		type = 'any',
		as = 'data',
		scope = 'row'
	}: CellProps = $props();
</script>

<svelte:element
	this={as === 'data' ? 'td' : as === 'header' ? 'th' : 'td'}
	{scope}
	class="ui-table-cell {className}"
>
	{@render children()}
</svelte:element>
