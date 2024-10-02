<svelte:options runes={true} />

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	const { props, children }: { props: SVGAttributes<SVGElement>; children: Snippet } = $props();
</script>

<svg {...props}>
	{@render children()}
</svg>
