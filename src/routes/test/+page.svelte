<script lang="ts">
	import Button from '$lib/Components/Button/Button.svelte';
	import { animateRender } from '$lib/utils/animatedRender.svelte.js';
	let open = $state(false);
	let el: HTMLElement | undefined = $state(undefined);
	const animationRender = animateRender({
		get open() {
			return open;
		},
		get element() {
			return el;
		},
		animationParams: {
			animations: {
				keyframes: [{ opacity: '0' }, { opacity: '1' }],
				animationOptions: {
					iterations: 1,
					easing: 'ease',
					duration: 250,
					direction: 'normal',
					fill: 'both'
				}
			},
			iterations: 1,
			alternate: false
		}
	});
</script>

<!-- <svelte:window on:pointermove={move} /> -->
<main>
	<Button
		colors="primary"
		variant="solid"
		onClick={() => {
			open = !open;
		}}
	>
		Test Animation
	</Button>
	{#if animationRender.render}
		<p bind:this={el}>Hola mundo</p>
	{/if}
</main>

<style>
	main {
		padding: 100px;
	}
	p {
		opacity: 0;
	}
</style>
