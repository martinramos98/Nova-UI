<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	import FloatingSubsection from '../FloatingSubsection/FloatingSubsection.svelte';

	interface ContextMenuSubsection {
		open?: boolean;
		children: Snippet;
		triggerContent: Snippet;
		offset?: number;
		classNameContainer?: string;
	}
	const {
		open,
		children,
		classNameContainer = '',
		offset = 0,
		triggerContent
	}: ContextMenuSubsection = $props();
</script>

<FloatingSubsection {offset} {classNameContainer}>
	{@render children()}
	<svelte:fragment slot="trigger">
		{@render triggerContent()}
	</svelte:fragment>
</FloatingSubsection>
