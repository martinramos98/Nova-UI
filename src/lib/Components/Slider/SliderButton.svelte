<script lang="ts">
	import type { Snippet } from 'svelte';
	export let buttonElement: HTMLElement | undefined = undefined;
	export let onPointerMove: (ev: PointerEvent) => void;
	export let buttonPosition = 0;
	export let triggerOnChange: undefined | ((value: number) => void) = undefined;
	export let variant = '';
	export let value: number;
	export let customButton: undefined | Snippet = undefined;
	let containerElement: HTMLElement;
	let width: number;

	function onMouseUp(ev: MouseEvent) {
		window.removeEventListener('pointermove', onPointerMove);
		window.removeEventListener('mouseup', onMouseUp);
		triggerOnChange && triggerOnChange(value);
	}
	function onMouseDown(ev: MouseEvent) {
		window.addEventListener('pointermove', onPointerMove);
		window.addEventListener('mouseup', onMouseUp);
	}
	function setParentRef(node: HTMLElement) {
		containerElement = node.parentElement as HTMLElement;
	}
</script>

<!-- <svelte:options ></svelte:options> -->
<button
	use:setParentRef
	on:mousedown={onMouseDown}
	on:mouseup={onMouseUp}
	bind:offsetWidth={width}
	bind:this={buttonElement}
	style="left:{buttonPosition.toFixed(2)}%"
	class="ui-slider-button-end"
>
	{#if customButton}
		{@render customButton()}
	{:else}
		<span></span>
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
