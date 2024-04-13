<script lang="ts">
	export let variant = '';
	export let colors = '';
	export let endValue = undefined;
	export let maxValue: number;
	export let minValue = 0;
	export let startValue = 0;
	export let className = '';
	export let format: 'thick' | 'thin' | 'normal' = 'normal';
	export let withStartSlider = false;
	export let sliderButton = {};
	export let steps: undefined | number[] = undefined;
</script>

<div class="ui-slider ui-colors-{colors} ui-variant-{variant} {className}">
	{#if $$slots['start-up-content']}
		<div class="ui-slider-start-up-content">
			<slot name="start-up-content" />
		</div>
	{/if}
	{#if $$slots['middle-up-content']}
		<div class="ui-slider-middle-up-content">
			<slot name="middle-up-content" />
		</div>
	{/if}
	{#if $$slots['end-up-content']}
		<div class="ui-slider-end-up-content">
			<slot name="end-up-content" />
		</div>
	{/if}
	{#if $$slots['start-down-content']}
		<div class="ui-slider-start-down-content">
			<slot name="start-down-content" />
		</div>
	{/if}
	{#if $$slots['middle-down-content']}
		<div class="ui-slider-middle-down-content">
			<slot name="middle-down-content" />
		</div>
	{/if}
	{#if $$slots['end-down-content']}
		<div class="ui-slider-end-down-content">
			<slot name="end-down-content" />
		</div>
	{/if}
	<div class="ui-slider-bar-container ui-{format}">
		<span class="ui-slider-bar ui-{format}"></span>
		{#if withStartSlider}
			<button class="ui-slider-button-start" />
		{/if}
		<button class="ui-slider-button-end" />
		{#if steps}
			<!-- {#each { length: steps } as _, step}
				<span class="ui-slider-step" />
			{/each} -->
		{/if}
	</div>
</div>

<style>
	@layer components {
		.ui-slider-faded {
		}
		.ui-slider-solid {
		}
	}
	@layer nova {
		.ui-slider {
			width: 100%;
			display: grid;
			grid-template-rows: repeat(3fr);
			grid-template-columns: repeat(3fr);
			& .ui-thick {
				height: 20px;
			}
			& .ui-thin {
				height: 5px;
			}
			& .ui-normal {
				height: 10px;
			}
			& .ui-slider-bar-container {
				grid-column: 1 / 3;
				grid-row: 2 / 2;
				position: relative;
				width: 100%;
				background-color: var(--color-surface-highest);
				& .ui-slider-bar {
					background-color: var(--color-container);
				}
				& .ui-slider-button-start {
					position: absolute;
				}
				& .ui-slider-button-end {
					position: absolute;
				}
				& .ui-slider-step {
					position: absolute;
				}
			}
		}
	}
</style>
