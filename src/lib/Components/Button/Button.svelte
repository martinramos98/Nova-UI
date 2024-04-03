<script lang="ts">
	import buttonAction, { type ButtonElementProps } from './ButtonAction.js';
	export let css: string = '';
	export let className: string = '';
	// TODO: Definir los tipos existentes y que se haga extensible
	export let variant: string = '';
	export let colors: string = '';
	export let disabled: boolean = false;
	export let isLoading: boolean = false;
	export let spinnerPosition: 'left' | 'right' = 'left';
	export let withClickEffect: boolean = true;
	export let buttonProps: ButtonElementProps | undefined = {};
	export let onClick: ((ev: MouseEvent) => void) | undefined = undefined;
</script>

<button
	use:buttonAction={{ buttonElementProps: buttonProps, withClickEffect, onClick }}
	class="ui-button {colors !== '' ? 'ui-color-' + colors : ''} {variant !== ''
		? 'ui-variant-' + variant
		: ''} {className}"
	style={css}
	{disabled}
>
	{#if spinnerPosition === 'left' && isLoading}
		<slot name="spinner" />
	{/if}
	<slot />
	{#if spinnerPosition === 'right' && isLoading}
		<slot name="spinner" />
	{/if}
</button>

<style>
	@layer nova {
		.ui-button {
			appearance: none;
			border: none;
			transition: all 0.25s ease;
			overflow: hidden;
			padding: 0.25rem 1.25rem;
			position: relative;
			cursor: pointer;
			&:active {
				scale: 98%;
			}
			&:disabled {
				filter: opacity(0.7);
				cursor: not-allowed;
				&:hover {
					filter: opacity(0.7);
				}
				&:active {
					scale: 1;
				}
			}
			& > .click-effect-element {
				position: absolute;
				border-radius: 100%;
				background: radial-gradient(
					ellipse at center,
					transparent 0%,
					color-mix(in srgb, var(--color-text) 10%, var(--color-white)) 40%
				);
			}
			&.solid {
				&:hover {
					filter: brightness(0.95);
				}
			}
		}
		:global(.ui-button > .click-effect-element) {
			position: absolute;
			border-radius: 100%;
			background: radial-gradient(
				ellipse at center,
				transparent 0%,
				color-mix(in srgb, var(--color-text), transparent 65%) 40%
			);
		}
	}
</style>
