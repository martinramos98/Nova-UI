<svelte:options runes={true} />

<script lang="ts">
	import FloatingSubsection from '$lib/Components/FloatingSubsection/FloatingSubsection.svelte';
	import type { Snippet } from 'svelte';
	import DropDownItem from '../DropDownItem/DropDownItem.svelte';
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
	<svelte:fragment slot="trigger">
		<DropDownItem>
			{@render triggerContent()}
		</DropDownItem>
	</svelte:fragment>
</FloatingSubsection>
