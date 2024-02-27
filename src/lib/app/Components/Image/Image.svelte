<script lang="ts">
	import type { Radius } from '$lib/app/Entities/styles.js';
	import { onMount } from 'svelte';
	export let aspect: '1:1' | '16:9' | '3:4' | 'auto' = 'auto';
	export let width: string | undefined = undefined;
	export let height: string | undefined = undefined;
	export let src: string = '';
	export let alt: string;
	export let radius: Radius = 'sm';
	export let className: string = '';
	export let captionInside: boolean = false;
	export let classNameContainer: string = '';
	export let classNameCaption: string = '';
	let loading = false;
	let ref: HTMLImageElement;
	let errorOnLoad = false;
	function onError(ev: any) {
		errorOnLoad = true;
		loading = false;
	}
	function onLoad(ev: any) {
		loading = false;
		ref.style.opacity = '1';
	}
	onMount(() => {
		if (ref.complete) {
			loading = false;
			ref.style.opacity = '1';
		} else {
			loading = true;
			ref.style.opacity = '0';
		}
	});
	const rounded = {
		xs: 'rounded-xs',
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-lg',
		xl: 'rounded-xl',
		'2xl': 'rounded-2xl',
		'3xl': 'rounded-3xl',
		full: 'rounded-full'
	};
</script>

<figure
	style="{height ? `height:${height};` : ''}{width ? `width:${width};` : ''}"
	class="ui-image-container overflow-hidden {classNameContainer} {rounded[radius]}"
>
	{#if loading}
		<div>
			<slot name="custom-loader">Loading</slot>
		</div>
	{/if}
	{#if errorOnLoad}
		<div>
			<slot name="custom-error">Error On load</slot>
		</div>
	{/if}
	<img
		bind:this={ref}
		style="{height ? `height:${height};` : ''}{width ? `width:${width};` : ''}"
		on:load={onLoad}
		class="ui-image aspect-video {className}"
		on:error={onError}
		{alt}
		{src}
	/>
	{#if $$slots['caption-content'] && !loading}
		<caption class:captionInside class={classNameCaption}>
			<slot name="caption-content" />
		</caption>
	{/if}
</figure>

<style>
</style>
