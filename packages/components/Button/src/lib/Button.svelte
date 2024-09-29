<svelte:options runes={true} />

<script lang="ts">
	import buttonAction, { type ButtonElementProps } from './ButtonAction.js';
	import type { Snippet } from 'svelte';
	interface ButtonProps {
		css?: string;
		class?: string;
		variant?: string;
		colors?: string;
		disabled?: boolean;
		isLoading?: boolean;
		spinnerPosition?: 'left' | 'right';
		withClickEffect?: boolean;
		buttonProps?: ButtonElementProps | undefined;
		onClick?: ((ev: MouseEvent) => void) | undefined;
		spinner?: Snippet;
		children: Snippet;
	}
	const {
		css = '',
		class: className = '',
		variant = '',
		colors = '',
		disabled = false,
		isLoading = false,
		spinnerPosition = 'left',
		withClickEffect = true,
		buttonProps = {},
		onClick = undefined,
		spinner = undefined,
		children
	}: ButtonProps = $props();
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
		{@render spinner()}
	{/if}
	{@render children()}
	{#if spinnerPosition === 'right' && isLoading}
		{@render spinner()}
	{/if}
</button>

<style>
	@layer theme, base, nova, components, utilities;
	@layer nova {
		.ui-button {
			appearance: none;
			border: none;
			transition: all 0.25s ease;
			overflow: hidden;
			padding: 0.25rem 1.25rem;
			position: relative;
			cursor: pointer;
			&.ui-variant-faded {
				padding: calc(0.25rem - 2px) calc(1.25rem - 2px);
			}
			&.ui-variant-ghost {
				padding: calc(0.25rem - 2px) calc(1.25rem - 2px);
			}
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
