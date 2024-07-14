<svelte:options runes={true} />

<script lang="ts">
	import { fade } from 'svelte/transition';
	type Aspect = '1:1' | '16:9' | '3:4' | 'auto';
	interface ImageProps {
		aspect?: Aspect;
		width?: string;
		height?: string;
		src: string;
		alt: string;
		reloadOnMount?: boolean;
		class?: String;
		captionInside?: boolean;
		classContainer?: string;
		classCaption?: string;
	}
	const {
		aspect = 'auto',
		width = undefined,
		height = undefined,
		src = '',
		alt,
		reloadOnMount = true,
		class: className = '',
		captionInside = false,
		classContainer = '',
		classCaption = ''
	}: ImageProps = $props();
	let loading = $state(false);
	let ref: HTMLImageElement;
	let errorOnLoad = $state(false);
	function onError(ev: any) {
		errorOnLoad = true;
		loading = false;
		ref.style.opacity = '0';
	}
	function onLoad(ev: any) {
		loading = false;
		ref.style.opacity = '1';
	}
	$effect(() => {
		if (ref.complete && reloadOnMount) {
			ref.src = ref.src;
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
	class="ui-image-container relative {classContainer} "
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
		{alt}
		{src}
	/>
	{#if $$slots['caption-content'] && !loading && !errorOnLoad}
		<figcaption class:captionInside class={classCaption}>
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
