<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	export let className = '';
	export let toggled = false;
	export let size = 'sm';
	export let icons: 'inside' | 'outside' = 'inside';
	export let iconOn: undefined | Snippet = undefined;
	export let color = 'container-highest';
	export let classNameSlider = '';
	export let customColor: string | undefined = undefined;
	export let iconOff: undefined | Snippet = undefined;
	export const toggleSwitch = () => {
		toggled = !toggled;
	};
	let widthButton = 0;
	let sliderWidth = 0;
</script>

<button
	on:click={toggleSwitch}
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
