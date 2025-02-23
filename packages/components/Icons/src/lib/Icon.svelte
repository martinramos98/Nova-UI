<svelte:options runes={true} />

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	let {
		children,
		ref = $bindable(),
		...props
	}: SVGAttributes<SVGElement> & { children: Snippet; ref?: SVGElement } = $props();
</script>

<svg {...props} bind:this={ref}>
	{@render children()}
</svg>
