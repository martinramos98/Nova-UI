<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	interface SwitchProps {
		className?: string;
		toggled?: boolean;
		size?: 'sm' | 'md' | 'lg';
		icons?: 'inside' | 'outside';
		iconOn?: Snippet;
		color?: string;
		classNameSlider?: string;
		customColor?: string;
		iconOff?: Snippet;
	}
	let {
		className = '',
		toggled = $bindable(false),
		size = 'sm',
		icons = 'inside',
		iconOff = undefined,
		iconOn = undefined,
		color = 'container-highest',
		classNameSlider = '',
		customColor = undefined
	}: SwitchProps = $props();
	let widthButton = $state(0);
	let sliderWidth = $state(0);
	function toggleSwitch() {
		toggled = !toggled;
	}
</script>

<button
	onclick={toggleSwitch}
	bind:offsetWidth={widthButton}
	role="switch"
	aria-checked={toggled}
	style={customColor && toggled ? `background-color:${customColor};` : ''}
	class="ui-switch size-{size} ui-color-{color} {className}"
>
	{#if icons === 'outside'}
		{#if toggled}
			{#if iconOn}
				<div class="icon-on-outside" transition:fade={{ duration: 150 }}>
					{@render iconOn()}
				</div>
			{/if}
		{:else if iconOff}
			<div class="icon-off-outside" transition:fade={{ duration: 150 }}>
				{@render iconOff()}
			</div>
		{/if}
	{/if}
	<span
		bind:offsetWidth={sliderWidth}
		class={classNameSlider}
		style="left:{toggled ? widthButton - sliderWidth - 4 : '4'}px;"
	>
		{#if icons === 'inside'}
			{#if toggled}
				{#if iconOn}
					<div class="icon-on-inside">
						{@render iconOn()}
					</div>
				{/if}
			{:else if iconOff}
				<div class="icon-off-inside">
					{@render iconOff()}
				</div>
			{/if}
		{/if}
	</span>
</button>

<style>
	.ui-switch {
		&.size-sm {
			--width: 48px;
			--height: 25px;
			width: var(--width);
			height: var(--height);
			width: var(--width);
			height: var(--height);
			border-radius: var(--radius-xl);
			& > span {
				height: calc(var(--height) - 5px);
				width: calc(var(--height) - 5px);
			}
		}
		&.size-md {
			--width: 58px;
			--height: 30px;
			width: var(--width);
			height: var(--height);
			border-radius: var(--radius-2xl);
			& > span {
				height: calc(var(--height) - 5px);
				width: calc(var(--height) - 5px);
			}
		}
		&.size-lg {
			--width: 68px;
			--height: 35px;
			width: var(--width);
			height: var(--height);
			border-radius: var(--radius-3xl);
			& > span {
				height: calc(var(--height) - 5px);
				width: calc(var(--height) - 5px);
			}
		}
	}
	button {
		position: relative;
		display: block;
		cursor: pointer;
		background-color: var(--color-surface);
		transition: all 0.2s ease;
		& .icon-on-outside,
		.icon-off-outside {
			height: calc(var(--height) - 5px);
			width: calc(var(--height) - 5px);
			position: absolute;
		}
		& .icon-on-outside {
			left: 3px;
			top: 2.5px;
		}
		& .icon-off-outside {
			right: 3px;
			top: 2.5px;
		}
		& > span {
			position: absolute;
			display: block;
			border-radius: var(--radius-full);
			background-color: white;
			top: 2.5px;
			left: 5px;
			transition: all 0.2s ease;
		}
		&[aria-checked='true'] {
			background: var(--color-container);
			& > span {
				left: 100%;
				/* left: unset; */
				/* right: 0; */
			}
		}
	}
</style>
