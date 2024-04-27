<script lang="ts">
	import Icon from '../Icons/Icon.svelte';
	import DotRevolve from '../Icons/IconsPath/Loaders/Dots/DotRevolve.svelte';
	import ThreeDotsBounce from '../Icons/IconsPath/Loaders/Dots/ThreeDotsBounce.svelte';
	import ThreeDotsMove from '../Icons/IconsPath/Loaders/Dots/ThreeDotsMove.svelte';
	import RingResize from '../Icons/IconsPath/Loaders/Rings/RingResize.svelte';
	import Ring270 from '../Icons/IconsPath/Loaders/Rings/Ring270.svelte';
	import Ring180 from '../Icons/IconsPath/Loaders/Rings/Ring180.svelte';
	import Ring90 from '../Icons/IconsPath/Loaders/Rings/Ring90.svelte';
	import { fade } from 'svelte/transition';
	// TODO: Agregar sizes
	export let type: 'spinner' | 'dots' = 'spinner';
	export let loaderVariant = 'ringsResize';
	export let label = '';
	export let colors = '';
	export let className = '';
	export let customLoader = false;
	export let svgLoaderProps = {};
	const loaders = {
		spinner: {
			ringsResize: RingResize,
			ring270: Ring270,
			ring180: Ring180,
			ring90: Ring90
		},
		dots: {
			revolve: DotRevolve,
			threeDotsBounce: ThreeDotsBounce,
			threeDotsMove: ThreeDotsMove
		}
	};
</script>

<div class="ui-loader ui-color-{colors} {className}">
	{#if customLoader && $$slots['custom-loader']}
		<slot name="custom-loader" />
	{:else}
		<Icon props={{ 'stroke-width': '2', ...svgLoaderProps, viewBox: '0 0 24 24' }}>
			{#if loaders[type][loaderVariant]}
				<svelte:component this={loaders[type][loaderVariant]}></svelte:component>
			{:else}
				<RingResize />
			{/if}
		</Icon>
	{/if}
	{#key label}
		<span transition:fade>
			<slot>
				{label}
			</slot>
		</span>
	{/key}
</div>

<style>
	@layer nova {
		.ui-loader {
			display: flex;
			flex-direction: column;
			width: fit-content;
			align-items: center;
		}
	}
</style>
