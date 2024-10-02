<svelte:options runes={true} />

<script lang="ts">
	import SliderButton from './SliderButton.svelte';
	import type { Snippet } from 'svelte';

	// TODO: Implement steps variations for space-around and space-evenly
	// FIXME: reduce value of bar cause when it's moving, complete bar moves a little bit forwards of slider button position.
	// FIXME: on mouse down click event, position the slider button half of its width to the left.
	interface SliderProps {
		variant?:
			| ''
			| 'primary'
			| 'secondary'
			| 'tertiary'
			| 'info'
			| 'success'
			| 'warning'
			| 'danger'
			| string;
		colors?:
			| ''
			| 'primary'
			| 'secondary'
			| 'tertiary'
			| 'info'
			| 'success'
			| 'warning'
			| 'danger'
			| string;
		maxValue: number;
		minValue?: number;
		value?: number;
		class?: string;
		radius?:
			| 'rounded-full'
			| 'rounded-md'
			| 'rounded-lg'
			| 'rounded-xl'
			| 'rounded-2xl'
			| 'rounded-3xl'
			| 'rounded-4xl'
			| 'rounded-5xl'
			| 'rounded-6xl'
			| 'rounded-7xl'
			| 'rounded-none';
		classBar?: string;
		format?: 'thick' | 'thin' | 'normal';
		classStep?: string;
		classButton?: string;
		steps?: number;
		presition?: number;
		customStep?: Snippet<[any]>;
		customButton?: Snippet;
		onChange?: (value: number) => void;
	}
	let {
		variant = '',
		colors = 'info',
		maxValue,
		minValue = 0,
		value = $bindable(minValue),
		class: className = '',
		radius = 'rounded-full',
		classBar = '',
		format = 'normal',
		classStep = '',
		classButton = '',
		customStep,
		presition = 0,
		steps,
		customButton,
		onChange
	}: SliderProps = $props();
	let containerElement: HTMLElement;
	let buttonPositionEnd = $state(0);

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
	function onDrag(ev: MouseEvent | TouchEvent) {
		// @ts-expect-error error of type event
		const pointerPosX = ev.type === 'touchmove' ? ev.touches[0].clientX : ev.clientX;
		const position =
			((pointerPosX - 10 - containerElement.offsetLeft) / containerElement.offsetWidth) * 100;

		if (position >= 0 && position <= 100) {
			if (steps) {
				let foundStep = false;
				let countStep = 0;
				const distanceBetween = 100 / (steps - 1);
				while (countStep < steps && !foundStep) {
					if (positionIntersectsInStep(countStep, distanceBetween, position, steps)) {
						let finalValue = countStep * distanceBetween;
						buttonPositionEnd = finalValue;
						foundStep = true;
					}
					countStep++;
				}

				remapOfPercentToValue(buttonPositionEnd);
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
				while (countStep < steps && !foundStep) {
					if (positionIntersectsInStep(countStep, distanceBetween, position, steps)) {
						let finalValue = countStep * distanceBetween;
						buttonPositionEnd = finalValue;

						foundStep = true;
					}
					countStep++;
				}
				remapOfPercentToValue(buttonPositionEnd);
			} else {
				buttonPositionEnd = position;
				remapOfPercentToValue(position);
			}
		}
	}
	function remapOfPercentToValue(position: number) {
		position = parseInt(position.toFixed(presition));
		const distance = maxValue - minValue;
		value = (distance * position) / 100 + minValue;
	}
	function setStepPositions(node: HTMLElement) {
		let stepCounter = 0;
		if (steps) {
			for (const stepNode of node.children) {
				const el = stepNode as HTMLElement;
				el.style.left = `${calculateStepPosition(stepCounter, steps)}%`;
				stepCounter++;
			}
		}
		node.hidden = false;
	}
	function calculateStepPosition(stepCounter: number, steps: number) {
		if (stepCounter === 0) {
			return 0;
		}
		if (stepCounter === steps - 1) {
			return 100;
		}
		return (stepCounter * 100) / (steps - 1);
	}
</script>

<div class="ui-slider ui-color-{colors} ui-variant-{variant} {className}">
	<div
		role="button"
		tabindex="0"
		onkeydown={() => {}}
		onpointerdown={onClickBar}
		bind:this={containerElement}
		class="ui-slider-bar-container {radius} ui-{format}"
	>
		<SliderButton
			onPointerMove={onDrag}
			bind:buttonPosition={buttonPositionEnd}
			{value}
			className={classButton}
			{customButton}
			triggerOnChange={onChange}
		></SliderButton>
		<span class="ui-slider-total-bar {radius}"></span>
		<span
			class="ui-slider-bar ui-{format} {radius} {classBar}"
			style="width:calc({buttonPositionEnd.toFixed(0)}% + 17px);"
		>
		</span>
		<!-- {#if withStartSlider}
			<SliderButton value={valueStart} {customButton} bind:buttonPosition={buttonPositionStart} />
		{/if} -->

		{#if steps}
			<div hidden use:setStepPositions class="ui-slider-steps-container">
				{#each { length: steps } as _, step}
					{#if customStep}
						{@render customStep(step)}
					{:else}
						<span class="ui-slider-step {classStep}"></span>
					{/if}
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
				& .ui-slider-total-bar {
					background: var(--color-surface-highest);
					width: calc(100% + 18px);
					height: inherit;
					display: block;
				}
				/* background-color: var(--color-surface-highest); */
				& .ui-slider-bar {
					position: absolute;
					background: var(--color-container);
					display: block;
					height: inherit;
					top: 0;
					left: 0;
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
					width: calc(100% + 10px);
					top: 0;
					left: 0.25%;
					height: 100%;
					& .ui-slider-step {
						width: 5px;
						height: 10px;
						position: absolute;
						left: 0;
						border-radius: 0%;
						top: 0;
						background-color: #fffa;
						user-select: none;
					}
				}
			}
		}
	}
</style>
