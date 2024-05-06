<script lang="ts">
	import type { Snippet } from 'svelte';

	export let type: 'text' | 'password' | 'number' | 'email' = 'text';
	export let value: string | undefined = undefined;
	export let onChange: undefined | ((ev: Event) => void) = undefined;
	export let labelText = '';
	export let classNameLabel = '';
	export let classNameInput = '';
	export let classNameError = '';
	export let classNameContainer = '';
	export let name: string;
	export let colors = '';
	export let placeholder = '';
	export let labelProps = { position: 'inside', dynamic: true, className: '' };
	export let variant = 'default';
	export let id: string | null = null;
	export let error: boolean | ((value: any) => boolean) = false;
	export let textError = '';
	export let errorContent: Snippet | undefined = undefined;
	export let labelContent: Snippet | undefined = undefined;
	export let inputAttributes = {};

	function translateLabelwithTransition(label: HTMLElement) {
		const input = label.nextElementSibling as HTMLInputElement;
		const { position, dynamic } = labelProps;
		const initialPaddingTop = input.computedStyleMap().get('padding-top')?.value;
		if (!dynamic) {
			if (position === 'inside') {
				label.style.translate = `${label.offsetHeight}px`;
			}
		} else {
			if (position === 'outside') {
				// label.style.setProperty('top', `0 -${label.offsetHeight + 15}px`);
				label.style.top =
					!value || placeholder === ''
						? `${label.offsetHeight / 2 - 3}px`
						: `-${label.offsetHeight + 3}px`;
				label.style.left = '0.5rem';
			} else if (position === 'leftside') {
				label.style.left = !value || placeholder === '' ? `0.5rem` : `-${label.offsetWidth + 15}px`;
			} else if (position === 'inside') {
				input.style.paddingTop = `${label.offsetHeight + initialPaddingTop}px`;
				label.style.top =
					!value && placeholder === '' ? `${label.offsetHeight + initialPaddingTop}px` : `5px`;
				label.style.left = '0.5rem';
			}
		}
		input.addEventListener('focusin', () => {
			if (dynamic) {
				if (position === 'outside') {
					label.style.top = `-${label.offsetHeight + 3}px`;
				} else if (position === 'leftside') {
					label.style.left = `-${label.offsetWidth + 15}px`;
				} else if (position === 'inside') {
					label.style.top = `5px`;
				}
			}
		});
		input.addEventListener('focusout', () => {
			if (dynamic) {
				if (position === 'outside' && !value && placeholder === '') {
					label.style.top = `${label.offsetHeight / 2 - 3}px`;
				} else if (position === 'leftside' && !value && placeholder === '') {
					label.style.left = `0.5rem`;
				} else if (position === 'inside' && !value && placeholder === '') {
					input.style.paddingTop = `${label.offsetHeight + initialPaddingTop}px`;
					label.style.top = `${label.offsetHeight + initialPaddingTop}px`;
				}
			}
		});
	}
</script>

<div
	class="ui-input-container ui-color-{colors} {labelProps.position === 'leftside'
		? 'flex-row'
		: 'flex-col'} ui-input-variant-{variant} {classNameContainer} "
>
	<label use:translateLabelwithTransition for={name} class={classNameLabel}>
		{#if labelContent}
			{@render labelContent()}
		{:else}
			<div class={labelProps.className}>
				{labelText}
			</div>
		{/if}
	</label>
	<input
		bind:value
		{name}
		{id}
		{...inputAttributes}
		{placeholder}
		class="ui-input {classNameInput}"
		{type}
		on:change={onChange}
	/>
	{#if error === true || (typeof error === 'function' && error(value))}
		{#if errorContent}
			{@render errorContent()}
		{:else}
			<div class=" ui-color-error ui-error-message {classNameError}">
				{textError}
			</div>
		{/if}
	{/if}
</div>

<style>
	@layer nova {
		.ui-error-message {
			color: var(--color-container);
			padding: 5px;
		}
		input[type='number'] {
			-moz-appearance: textfield;
		}
		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
		input {
			appearance: none;
			padding: 8px;
			border: none;
			&:focus {
				border: none;
				outline: none;
			}
		}
		input:-webkit-autofill,
		input:-webkit-autofill:focus {
			transition:
				background-color 0s 600000s,
				color 0s 600000s !important;
			/* background-color: black !important; */
		}
		.ui-input-container {
			position: relative;
			& label {
				font-size: 0.9rem;
				position: absolute;
				transition: all 0.3s ease;
			}
			&.flex-row {
				align-items: center;
				gap: 0.4rem;
			}
			display: flex;
			height: fit-content;
			width: fit-content;
		}
	}
	@layer components {
		.ui-input-variant-default {
			& input {
				background-color: var(--color-surface);
				border-radius: var(--radius-lg);
			}
		}
		.ui-input-variant-blurred {
			backdrop-filter: blur(5px);
			& input {
				background-color: var(--color-surface);
				border-radius: var(--radius-lg);
			}
		}
		.ui-input-variant-faded {
			& input {
				background-color: var(--color-surface);
				color: var(--color-container);
				border-radius: var(--radius-lg);
				/* background-color: transparent; */
			}
		}
		@media (prefers-color-scheme: dark) {
			.ui-input-variant-faded {
				& input {
					border: 2px solid var(--color-surface-hight);
				}
			}
		}
		@media (prefers-color-scheme: light) {
			.ui-input-variant-faded {
				& input {
					border: 2px solid var(--color-surface-low);
				}
			}
		}
		.ui-input-variant-bordered {
			& input {
				border: solid 2px var(--color-container);
				border-radius: var(--radius-lg);
				/* background-color: transparent; */
			}
		}
		.ui-input-variant-flat {
			& label {
				color: var(--color-container);
			}
			& input {
				background-color: color-mix(in srgb, var(--color-container), transparent 90%);
				border-radius: var(--radius-lg);
				color: var(--color-container);
				border: none;
			}
		}
		.ui-input-variant-underlined {
			position: relative;

			&::after {
				position: absolute;
				transition: all 0.3s ease;
				content: '';
				height: 2px;
				/* width: 0; */
				/* left: 50%; */
				width: 100%;
				left: 0;
				bottom: -1px;
				background-color: var(--color-border);
			}
			& input {
				border-radius: 0;
				background-color: var(--color-surface);
				/* &:has(input:focus)::after {
				width: 100%;
				left: 0;
			} */
				/* border-bottom: solid 2px var(--color-border); */
			}
		}
	}
</style>
