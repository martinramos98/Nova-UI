<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { FloatingSubsection } from '@nv-org/floating-subsection';

	interface ContextMenuSubsection {
		open?: boolean;
		children: Snippet;
		triggerContent: Snippet;
		offset?: number;
		classContainer?: string;
	}
	const {
		open,
		children,
		classContainer = '',
		offset = 0,
		triggerContent
	}: ContextMenuSubsection = $props();
</script>

<FloatingSubsection {open} {offset} {classContainer}>
	{@render children()}
	{#snippet trigger()}
		{@render triggerContent()}
	{/snippet}
</FloatingSubsection>
