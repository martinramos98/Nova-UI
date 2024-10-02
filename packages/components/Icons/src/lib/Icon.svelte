<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';

	const { props, children }: { props: any; children: Snippet } = $props();
</script>

<svg {...props}>
	{@render children()}
</svg>
