<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	export let className = '';
	export let toggled = false;
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
	class="ui-switch ui-color-{color} {className}"
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
	button {
		position: relative;
		width: 48px;
		height: 25px;
		display: block;
		background-color: var(--color-surface-low);
		border-radius: var(--radius-full);
		transition: all 0.2s ease;
		& .icon-on-outside,
		.icon-off-outside {
			width: 20px;
			height: 20px;
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
			height: 20px;
			width: 20px;
			border-radius: var(--radius-full);
			background-color: white;
			top: 2.5px;
			left: 5px;
			transition: all 0.2s ease;
		}
		&[aria-checked='true'] {
			background-color: var(--color-container);
			& > span {
				left: 100%;
				/* left: unset; */
				/* right: 0; */
			}
		}
	}
</style>
