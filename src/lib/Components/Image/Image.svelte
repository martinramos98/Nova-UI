<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let aspect: '1:1' | '16:9' | '3:4' | 'auto' = 'auto';
	export let width: string | undefined = undefined;
	export let height: string | undefined = undefined;
	export let reloadOnMount = true;
	export let src: string = '';
	export let alt: string;
	export let className: string = '';
	export let captionInside: boolean = false;
	export let classNameContainer: string = '';
	export let classNameCaption: string = '';
	let loading = false;
	let ref: HTMLImageElement;
	let errorOnLoad = false;
	function onError(ev: any) {
		console.log('error');
		errorOnLoad = true;
		loading = false;
		ref.style.opacity = '0';
	}
	function onLoad(ev: any) {
		loading = false;
		console.log(ev);
		ref.style.opacity = '1';
	}
	onMount(() => {
		if (ref.complete && reloadOnMount) {
			ref.src = ref.src;
			// loading = false;
			// ref.style.opacity = '1';
			// if (!src || src === '') {
			// 	errorOnLoad = true;
			// 	ref.style.opacity = '0';
			// }
		} else {
			if (ref.complete) {
				loading = false;
				ref.style.opacity = '1';
			} else {
				loading = true;
				ref.style.opacity = '0';
			}
		}
	});
	function aspectRatio() {
		const [f, s] = aspect.split(':');
		console.log(f, s);
		if (!s) {
			return aspect;
		} else {
			return `${f} / ${s}`;
		}
	}
</script>

<figure
	style="{height ? `height:${height};` : ''}{width
		? `width:${width};`
		: ''} aspect-ratio:{aspectRatio()};"
	class="ui-image-container relative {classNameContainer} "
>
	{#if loading}
		<slot name="custom-loader">
			<div
				transition:fade
				class="w-full h-full absolute flex place-content-center place-items-center info faded z-10"
			>
				Loading
			</div>
		</slot>
	{/if}
	{#if errorOnLoad}
		<slot name="custom-error">
			<div
				transition:fade
				class="w-full h-full absolute flex place-content-center place-items-center ui-color-error ui-variant-flat z-10"
			>
				Error on load
			</div>
		</slot>
	{/if}
	<img
		bind:this={ref}
		style="{height ? `height:${height};` : ''}{width
			? `width:${width};`
			: ''} aspect-ratio:{aspectRatio()};"
		on:load={onLoad}
		class="ui-image {className}"
		on:error={onError}
		on:loadeddata={(ev) => {
			console.log(ev);
		}}
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
	@layer theme, base, nova, components, utilities;
	@layer nova {
		.ui-image-container {
			background-color: var(--color-container);
			overflow: hidden;
			position: relative;
			border-radius: var(--radius-lg);
			& figcaption.captionInside {
				position: absolute;
				bottom: 0;
				left: 0;
				color: var(--color-text);
				width: 100%;
			}
			&:has(figcaption:not(figcaption.captionInside)) {
				display: flex;
				flex-direction: column;
				color: var(--color-text);
				justify-content: flex-end;
			}
			& figcaption {
				text-align: center;
			}
		}
		.ui-image {
			opacity: 0;
			transition: opacity 0.3s ease;
			width: 100%;
			/* border-radius: var(--radius-lg); */
			height: 100%;
		}
	}
</style>
