<script lang="ts">
	import { spring } from 'svelte/motion';
	import SliderButton from './SliderButton.svelte';
	import type { Snippet } from 'svelte';
	// TODO: Implement steps variations for space-around and space-evenly
	export let variant = '';
	export let colors = 'info';
	export let endValue = undefined;
	export let maxValue: number;
	export let minValue = 0;
	// export let valueStart = 0;
	export let value = 0;
	export let className = '';
	export let radius = 'rounded-full';
	export let classNameBar = '';
	// export let rounded = '';
	export let format: 'thick' | 'thin' | 'normal' = 'normal';
	export let withStartSlider = false;
	export let sliderButtonProps = {};
	export let steps: undefined | number = undefined;
	export let customButton: undefined | Snippet = undefined;
	export let onChange: undefined | ((value: number) => void) = undefined;
	let containerElement: HTMLElement;
	// let buttonPositionStart = 0;
	let buttonPositionEnd = 0;
	function positionIntersectsInStep(
		step: number,
		distanceBetween: number,
		position: number,
		steps: number
	) {
		const stepDistance = step * distanceBetween;
		const nextStep = step + 1;
		const previousStepDistance = (step - 1) * distanceBetween;
		const nextStepDistance = nextStep * distanceBetween;
		const firstPoint =
			step === 0 ? 0 : (stepDistance - previousStepDistance) / 2 + previousStepDistance;
		const secondPoint =
			step === steps - 1 ? 100 : (nextStepDistance - stepDistance) / 2 + stepDistance;
		return firstPoint < position && position < secondPoint;
	}
	function onDrag(ev: MouseEvent) {
		const position =
			((ev.clientX - containerElement.offsetLeft) / containerElement.offsetWidth) * 100;
		if (position >= 0 && position <= 100) {
			if (steps) {
				let foundStep = false;
				let countStep = 0;
				const distanceBetween = 100 / (steps - 1);
				while (countStep < steps + 1 && !foundStep) {
					if (positionIntersectsInStep(countStep, distanceBetween, position, steps)) {
						let finalValue = countStep * distanceBetween;
						buttonPositionEnd =
							finalValue === 100 ? finalValue - 2 : finalValue === 0 ? finalValue + 2 : finalValue;
						foundStep = true;
					}
					countStep++;
				}
				remapOfPercentToValue(countStep * distanceBetween);
			} else {
				buttonPositionEnd = position;
				remapOfPercentToValue(position);
			}
		}
	}
	function onClickBar(ev: MouseEvent) {
		const position =
			((ev.clientX - containerElement.offsetLeft) / containerElement.offsetWidth) * 100;
		if (position >= 0 && position <= 100) {
			if (steps) {
				let foundStep = false;
				let countStep = 0;
				const distanceBetween = 100 / (steps - 1);
				while (countStep < steps + 1 && !foundStep) {
					if (positionIntersectsInStep(countStep, distanceBetween, position, steps)) {
						let finalValue = countStep * distanceBetween;
						buttonPositionEnd =
							finalValue === 100 ? finalValue - 2 : finalValue === 0 ? finalValue + 2 : finalValue;
						foundStep = true;
					}
					countStep++;
				}
				remapOfPercentToValue(countStep * distanceBetween);
			} else {
				buttonPositionEnd = position;
				remapOfPercentToValue(position);
			}
		}
	}
	function remapOfPercentToValue(position: number) {
		position = parseInt(position.toFixed(0));
		const distance = maxValue - minValue;
		value = (distance * position) / 100 + minValue;
	}
	function buildArrayOfStepsValues(node: HTMLElement) {}
</script>

<div class="ui-slider ui-color-{colors} ui-variant-{variant} {className}">
	<div
		on:click={onClickBar}
		bind:this={containerElement}
		class="ui-slider-bar-container {radius} ui-{format}"
	>
		<span
			class="ui-slider-bar ui-{format} {radius} {classNameBar}"
			style="width:{buttonPositionEnd.toFixed(0)}%;"
		/>
		<SliderButton
			onPointerMove={onDrag}
			bind:buttonPosition={buttonPositionEnd}
			{value}
			{customButton}
			triggerOnChange={onChange}
		></SliderButton>
		<!-- {#if withStartSlider}
			<SliderButton value={valueStart} {customButton} bind:buttonPosition={buttonPositionStart} />
		{/if} -->

		{#if steps}
			<div use:buildArrayOfStepsValues class="ui-slider-steps-container">
				{#each { length: steps } as _, step}
					<slot name="step">
						<span class="ui-slider-step" />
					</slot>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	@layer nova {
		.ui-slider {
			width: 100%;
			display: grid;
			grid-template-rows: repeat(3, 1fr);
			grid-template-columns: repeat(3, 1fr);
			& .ui-slider-bar-container {
				grid-column: 1 / 4;
				grid-row: 2 / 2;
				position: relative;
				width: 100%;
				background-color: var(--color-surface-highest);
				& .ui-slider-bar {
					background-color: var(--color-container);
					display: block;
					height: inherit;
					z-index: 8;
				}
				& .ui-slider-button-start {
					position: absolute;
				}
				& .ui-slider-steps-container {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					user-select: none;
					position: absolute;
					z-index: 9;
					width: 100%;
					top: 0;
					height: 100%;
					& .ui-slider-step {
						width: 10px;
						height: 10px;
						border-radius: 100%;
						background-color: #fffa;
						user-select: none;
					}
				}
			}
		}
	}
</style>
