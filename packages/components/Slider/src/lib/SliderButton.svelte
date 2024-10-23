<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';

	// export let buttonElement: HTMLElement | undefined = undefined;
	// export let onPointerMove: (ev: PointerEvent | TouchEvent) => void;
	// export let buttonPosition = 0;
	// export let triggerOnChange: undefined | ((value: number) => void) = undefined;
	// export let className = '';
	// export let variant = '';
	// export let value: number;
	// export let customButton: undefined | Snippet = undefined;
	interface SliderButtonProps {
		buttonElement?: HTMLElement | undefined;
		onPointerMove: (ev: PointerEvent | TouchEvent) => void;
		buttonPosition?: number;
		triggerOnChange?: undefined | ((value: number) => void);
		className?: string;
		value: number;
		customButton?: undefined | Snippet;
	}
	let {
		buttonElement = undefined,
		onPointerMove,
		buttonPosition = 0,
		triggerOnChange = undefined,
		className = '',
		value,
		customButton = undefined
	}: SliderButtonProps = $props();
	let containerElement: HTMLElement;
	let width: number | undefined = $state();
	function onMouseUp() {
		window.removeEventListener('pointermove', onPointerMove);
		window.removeEventListener('touchmove', onPointerMove);
		window.removeEventListener('pointerup', onMouseUp);
		triggerOnChange && triggerOnChange(value);
	}
	function onMouseDown() {
		// @ts-expect-error Error cause is not defined, see compatibility on other browsers
		if (navigator.userAgentData && navigator.userAgentData.mobile) {
			window.addEventListener('touchmove', onPointerMove);
		} else {
			window.addEventListener('pointermove', onPointerMove);
		}
		window.addEventListener('pointerup', onMouseUp);
	}
	function setParentRef(node: HTMLElement) {
		containerElement = node.parentElement as HTMLElement;
	}
</script>

<!-- <svelte:options ></svelte:options> -->
<button
	use:setParentRef
	onpointerdown={onMouseDown}
	onpointerup={onMouseUp}
	bind:offsetWidth={width}
	bind:this={buttonElement}
	style="left:{buttonPosition.toFixed(2)}%"
	class="ui-slider-button-end"
>
	{#if customButton}
		{@render customButton()}
	{:else}
		<span class={className}></span>
	{/if}
</button>

<style>
	.ui-slider-button-end {
		position: absolute;
		cursor: grab;
		transition:
			scale 0.2s ease,
			transform 0.2s ease;
		z-index: 10;
		& > span {
			display: block;
			background-color: white;
			width: 20px;
			height: 20px;
			border-radius: var(--radius-full);
		}
		&:active {
			cursor: grabbing;
			scale: 0.9;
		}
	}
</style>
