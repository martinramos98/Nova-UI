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
		classNameContainer = ''
	}: {
		triggerContent: Snippet;
		children: Snippet;
		offset?: number;
		classNameContainer?: string;
		position?: string;
		open?: boolean;
	} = $props();
</script>

<FloatingSubsection openOnHover={true} {offset} {classNameContainer} {open} {position}>
	{@render children()}
	{#snippet trigger()}
		<DropDownItem>
			{@render triggerContent()}
		</DropDownItem>
	{/snippet}
</FloatingSubsection>
