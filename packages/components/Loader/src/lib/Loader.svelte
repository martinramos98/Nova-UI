<svelte:options runes={true} />

<script lang="ts">
	import { importLoader } from './loader.js';

	const {
		icon = 'ring-2',
		color = 'currentcolor',
		size = 40,
		speed = 0.8,
		stroke = 5,
		strokeLength = 0.25,
		bgOpacity = 0.1
	}: {
		icon?: string;
		color?: string;
		size?: number;
		speed?: number;
		stroke?: number;
		strokeLength?: number;
		bgOpacity?: number;
	} = $props();
	let loaded: any = $state(undefined);
	$effect.pre(() => {
		if (!loaded) {
			const iconCleaned = icon.replaceAll('-', '');
			importLoader(iconCleaned)
				.then((res) => {
					loaded = res;
				})
				.catch((er) => {
					console.log(er);
					throw new Error('Import loader is not defined in ldrs library');
				});
		}
	});
</script>

{#if loaded}
	<svelte:element
		this={'l-' + icon}
		{size}
		{stroke}
		stroke-length={strokeLength}
		bg-opacity={bgOpacity}
		{speed}
		{color}
	/>
{/if}
