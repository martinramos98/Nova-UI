<script lang="ts">
	// import type { Radius } from '$lib/app/Entities/styles.js';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	// import { rounded } from '$lib/app/Entities/styles.js';
	export let aspect: '1:1' | '16:9' | '3:4' | 'auto' = 'auto';
	export let width: string | undefined = undefined;
	export let height: string | undefined = undefined;
	export let src: string = '';
	export let alt: string;
	export let radius: any = 'sm';
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
		ref.style.opacity = '0';
	}
	function onLoad(ev: any) {
		loading = false;
		ref.style.opacity = '1';
	}
	onMount(() => {
		if (ref.complete) {
			loading = false;
			ref.style.opacity = '1';
			if (!src || src === '') {
				errorOnLoad = true;
				ref.style.opacity = '0';
			}
		} else {
			loading = true;
			ref.style.opacity = '0';
		}
	});
</script>

<figure
	style="{height ? `height:${height};` : ''}{width ? `width:${width};` : ''}"
	class="ui-image-container overflow-hidden relative {classNameContainer} rounded-{radius} "
>
	{#if loading}
		<slot name="custom-loader">
			<div
				transition:fade
				class="w-full h-full absolute flex place-content-center place-items-center info faded z-50"
			>
				Loading
			</div>
		</slot>
	{/if}
	{#if errorOnLoad}
		<slot name="custom-error">
			<div
				transition:fade
				class="w-full h-full absolute flex place-content-center place-items-center error flat z-50"
			>
				Error On Load
			</div>
		</slot>
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
	{#if $$slots['caption-content'] && !loading && !errorOnLoad}
		<figcaption class:captionInside class={classNameCaption}>
			<slot name="caption-content" />
		</figcaption>
	{/if}
</figure>

<style>
	@layer nova {
		.ui-image-container {
			height: fit-content;
			width: fit-content;
			background-color: var(--color-container);
			position: relative;
			& figcaption.captionInside {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
			}
			&:has(figcaption:not(figcaption.captionInside)) {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
			}
			& figcaption {
				text-align: center;
			}
		}
		.ui-image {
			opacity: 0;
			transition: opacity 0.3s ease;
		}
	}
</style>
