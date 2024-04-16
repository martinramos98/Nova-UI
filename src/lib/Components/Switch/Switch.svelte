<script lang="ts">
	import type { Snippet } from 'svelte';
	export let className = '';
	export let toggled = false;
	export let icons: 'inside' | 'outside' = 'inside';
	export let iconOn: undefined | Snippet = undefined;
	export let color ='container-highest'
	export let classNameSlider = ''
	export let iconOff: undefined | Snippet = undefined;
	export const toggleSwitch = () => {
		toggled = !toggled;
	};
	let widthButton = 0
	let sliderWidth = 0
</script>

<button on:click={toggleSwitch} bind:offsetWidth={widthButton}  role="switch" aria-checked={toggled} class="ui-switch ui-color-{color} {className}">
	{#if icons === 'outside'}
		{#if toggled}
			{#if iconOn}
				{@render iconOn()}
			{/if}
		{:else if iconOff}
			{@render iconOff()}
		{/if}
	{/if}
	<span bind:offsetWidth={sliderWidth} class="{classNameSlider}" style="left:{toggled ? widthButton - sliderWidth : '0'}px;">
		{#if icons === 'inside'}
			{#if toggled}
				{#if iconOn}
					{@render iconOn()}
				{/if}
			{:else if iconOff}
				{@render iconOff()}
			{/if}
		{/if}
	</span>
</button>
<style>
	button{
		padding:5px;
		position: relative;
		width: 40px;
		display: block;
		background-color: var(--color-surface-highest);
		border-radius: var(--radius-full);	
		height: 20px;
		& > span{
			position: absolute;
			display: block;
			height: 20px;
			width: 20px;
			border-radius: var(--radius-full);
			background-color: white;
			top:0;
			left:0;
			transition: all 0.2s ease;
		}
		&[aria-checked='true'] > span{
			left: 100%;
			/* left: unset; */
			/* right: 0; */
		}
	}
</style>