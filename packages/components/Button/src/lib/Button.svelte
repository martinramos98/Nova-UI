<script lang="ts">
	import buttonAction from './ButtonAction.js';
	import { type HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	interface ButtonProps {
		css?: string;
		class?: string[] | string;
		variant?: string;
		colors?: string;
		disabled?: boolean;
		isLoading?: boolean;
		spinnerPosition?: 'left' | 'right';
		withClickEffect?: boolean;
		onClick?: ((ev: MouseEvent) => void) | undefined;
		spinner?: Snippet;
		children: Snippet;
		action?: (node: HTMLElement, params?: unknown) => any;
		ref?: HTMLElement;
	}
	let {
		class: className,
		variant,
		colors,
		isLoading = false,
		spinnerPosition = 'left',
		withClickEffect = true,
		onClick = undefined,
		spinner = undefined,
		children,
		action = () => {},
		ref = $bindable(undefined),
		...props
	}: ButtonProps & HTMLButtonAttributes = $props();
</script>

<button
	bind:this={ref}
	use:buttonAction={{ withClickEffect, onClick }}
	use:action
	{...props}
	class={[
		'ui-button',
		variant && `ui-variant-${variant}`,
		colors && `ui-color-${colors}`,
		className
	]}
>
	{#if spinnerPosition === 'left' && isLoading && spinner}
		{@render spinner()}
	{/if}
	{@render children()}
	{#if spinnerPosition === 'right' && isLoading && spinner}
		{@render spinner()}
	{/if}
</button>

<style>
	@media (prefers-color-scheme: dark) {
		@layer nova {
			.ui-button {
				&:hover {
					filter: brightness(0.85);
				}
			}
		}
	}
	@media (prefers-color-scheme: light) {
		@layer nova {
			.ui-button {
				&:hover {
					filter: brightness(1.1);
				}
			}
		}
	}
	@layer nova {
		.ui-button {
			appearance: none;
			border: none;
			user-select: none;
			transition:
				all 0.25s ease,
				filter 0.3s ease-in-out;
			overflow: hidden;
			padding: 0.25rem 1.25rem;
			position: relative;
			cursor: pointer;
			&:active {
				scale: 97%;
			}

			&:disabled {
				filter: opacity(0.7);
				cursor: not-allowed;
				&:active {
					scale: 1;
				}
			}
		}
	}
	@layer components {
		.ui-button {
			&.ui-variant-faded {
				padding: calc(0.25rem - 2px) calc(1.25rem - 2px);
			}
			&.ui-variant-ghost {
				padding: calc(0.25rem - 2px) calc(1.25rem - 2px);
			}
		}
	}
	:global {
		.ui-button > .click-effect-element {
			position: absolute;
			border-radius: 100%;
			background-color: var(--color-text);
			/* background: radial-gradient(
				ellipse at center,
				transparent 0%,
				color-mix(in srgb, var(--color-text), transparent 65%) 40%
			); */
		}
	}
</style>
