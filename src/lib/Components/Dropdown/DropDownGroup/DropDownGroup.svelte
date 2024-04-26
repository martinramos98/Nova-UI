<svelte:options runes={true} />

<script lang="ts">
	import FloatingSubsection from '$lib/Components/FloatingSubsection/FloatingSubsection.svelte';
	import DropDownItem from '../DropDownItem/DropDownItem.svelte';
	const { triggerContent, children }: { triggerContent: Snippet; children: Snippet } = $props();
</script>

<FloatingSubsection openOnHover={true}>
	{@render children()}
	<svelte:fragment slot="trigger">
		<DropDownItem>
			{@render triggerContent()}
		</DropDownItem>
	</svelte:fragment>
</FloatingSubsection>
