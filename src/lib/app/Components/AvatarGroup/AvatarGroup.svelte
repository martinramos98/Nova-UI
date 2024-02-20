<script lang="ts">
	import { onMount } from 'svelte';
	export let maxAvatarsToShow = 3;
	export let collapseOnClick = true;
	export let collapse = false;
	export let isCompressed = true;
	let ref: HTMLElement;
	onMount(() => {
		if (isCompressed) {
			let countChild = 0;
			for (const child of ref.children) {
				// @ts-expect-error Type miss
				child.style.cssText = `translate:${countChild * -30}px 0;`;
				countChild++;
				child.addEventListener('mouseenter', () => {
					let calc = countChild * -30;
					// @ts-expect-error Type miss
					child.style.cssText = `translate:${calc - 20}px 0;`;
				});
				child.addEventListener('mouseleave', () => {
					let calc = countChild * -30;
					// @ts-expect-error Type miss
					child.style.cssText = `translate:${calc}px 0;`;
				});
			}
		}
	});
</script>

<div bind:this={ref} class="ui-avatar-group">
	<slot />
</div>
