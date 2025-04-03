<svelte:options runes={true} />

<script lang="ts">
	import { FloatingSubsection } from '@nv-org/floating-subsection';
	import type { Snippet } from 'svelte';
	import DropDownItem from '../DropdownItem/DropDownItem.svelte';
	const {
		triggerContent,
		children,
		offset = 10,
		position = 'right',
		open = false,
		classContainer = ''
	}: {
		triggerContent: Snippet;
		children: Snippet;
		offset?: number;
		classContainer?: string;
		position?: string;
		open?: boolean;
	} = $props();
</script>

<FloatingSubsection openOnHover={true} {offset} {classContainer} {open} {position}>
	{@render children()}
	{#snippet trigger()}
		<DropDownItem>
			{@render triggerContent()}
		</DropDownItem>
	{/snippet}
</FloatingSubsection>
