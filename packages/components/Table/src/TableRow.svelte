<svelte:options runes={true} />

<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { type Snippet } from 'svelte';
	const {
		className = '',
		children,
		svelteTransitionFn = fly,
		svelteTransitionOptions = {
			in: { y: -20 },
			out: { y: 20 }
		}
	}: {
		className?: string;
		children?: Snippet;
		svelteTransitionFn?: any;
		svelteTransitionOptions?: { in: any; out: any };
	} = $props();
	let rowEl: HTMLTableRowElement;
	let rowIndex = 1;

	// FIXME: update when it's fixed flickers using delay. Then add multiplying with row index for increasing display
	// TODO: 2 options: using svelte animations and passing by props animations options and animation function to be used. Or build a animation system by a prop existing in tbody where controls rendering and animation (preference first option)
</script>

<tr
	bind:this={rowEl}
	in:svelteTransitionFn={svelteTransitionOptions.in}
	out:svelteTransitionFn={svelteTransitionOptions.out}
	class="ui-table-row {className}"
>
	{#if children}
		{@render children()}
	{/if}
</tr>
