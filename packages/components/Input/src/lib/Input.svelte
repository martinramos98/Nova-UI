<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { type HTMLInputAttributes } from 'svelte/elements';
	export interface InputProps {
		label: Snippet | string;
		labelVariant?: 'inside' | 'outside' | 'leftside';
		labelStatic?: boolean;
		labelClass?: string;
		containerClass?: string;
		error?: boolean | ((value: any) => boolean);
		errorContent?: string | Snippet;
		errorClass?: string;
		startContentClass: string;
		endContentClass: string;
		containerContentClass: string;
		variant?: string;
		colors?: string;
		ref?: HTMLDivElement;
		startContent?: Snippet;
		endContent?: Snippet;
	}
	let {
		label,
		error,
		errorContent,
		errorClass,
		containerClass,
		labelClass,
		labelStatic = false,
		labelVariant = 'outside',
		colors,
		value = $bindable(),
		variant,
		ref = $bindable(),
		startContentClass,
		endContentClass,
		containerContentClass,
		startContent,
		endContent,
		...attr
	}: InputProps & HTMLInputAttributes = $props();
	// svelte-ignore non_reactive_update
	let labelRef: HTMLLabelElement | null = null;
	let labelWidth: number | undefined = $state();
	let labelOffsetLeft: number | undefined = $state();
	onMount(() => {
		if (ref) {
			labelOffsetLeft = ref.offsetLeft;
			labelRef?.classList.remove('invisible');
		}
	});
	function onClickContainer() {
		ref?.focus();
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class={[
		'ui-input-container',
		variant && `ui-input-variant-${variant}`,
		colors && `ui-color-${colors}`,
		containerClass
	]}
	data-label-variant={labelVariant}
	data-label-static={labelStatic}
	style="--label-width:{labelWidth}px;--label-offset:{labelOffsetLeft}px"
	onclick={onClickContainer}
>
	{#if label}
		<label
			bind:this={labelRef}
			bind:offsetWidth={labelWidth}
			class={[labelClass && labelClass, 'invisible']}
			for={attr.name}
			>{#if typeof label === 'string'}
				{label}
			{:else}
				{@render label()}
			{/if}
		</label>
	{/if}
	<div class={['ui-input-group', containerContentClass]}>
		{#if startContent}
			<div class={['ui-input-start-content', startContentClass]}>
				{@render startContent()}
			</div>
		{/if}
		<input
			bind:this={ref}
			{...attr}
			class={['ui-input', attr.class]}
			bind:value
			data-filled={!!value}
		/>
		{#if endContent}
			<div class={['ui-input-end-content', endContentClass]}>
				{@render endContent()}
			</div>
		{/if}
	</div>
</div>
{#if (typeof error === 'function' && error(value)) || error === true}
	<div class={['ui-input-error', 'ui-color-error', errorClass]}>
		{#if typeof errorContent === 'string'}
			{errorContent}
		{:else}
			{@render errorContent?.()}
		{/if}
	</div>
{/if}

<style>
	@layer nova {
		.ui-error-message {
			color: var(--color-container);
			padding: 5px;
		}
		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		input:-webkit-autofill,
		input:-webkit-autofill:focus {
			transition:
				background-color 0s 600000s,
				color 0s 600000s !important;
		}
		input {
			appearance: none;
			border: none;
			&:focus {
				border: none;
				outline: none;
			}
		}
		/* === CONTAINER === */

		.ui-input-container {
			--font-size: var(--text-base);
			cursor: text;
			/* === LABEL === */
			& > label {
				display: block;
				transition:
					top 0.2s ease,
					left 0.2s ease,
					translate 0.2s ease,
					opacity 0.2s ease,
					scale 0.2s ease;
				font-size: var(--text-sm);
				width: max-content;
				height: max-content;
			}
			& .ui-input-group {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 5px;
			}
			& > div > input {
				width: 100%;
			}
			&[data-label-variant='inside'] {
				padding: 4px 10px 10px 10px;
				position: relative;

				&:has(:not(input[placeholder])) > label {
					translate: var(--label-offset) 105%;
					/* top: 29%; */
					/* left: var(--label-offset, 8px); */
					opacity: 0.6;
				}
				&:has(input:focus) > label,
				&:has(input[data-filled='true']) > label,
				&:has(input[placeholder]) > label {
					scale: 0.8;
					translate: -10% 0;
					opacity: 1;
				}
				&[data-label-static='true'] > label {
					scale: 0.8 !important;
					translate: -10% 0 !important;
				}
			}
			&[data-label-variant='outside'] {
				position: relative;
				padding: 10px;
				& label {
					position: absolute;
				}
				&:has(:not(input[placeholder])) > label {
					top: 29%;
					left: var(--label-offset);
					/* left: 4%; */
					opacity: 0.6;
				}
				&:has(input:focus) > label,
				&:has(input[data-filled='true']) > label,
				&:has(input[placeholder]) > label {
					scale: 0.8;
					top: -50%;
					left: 0px;
					opacity: 1;
				}
				&[data-label-static='true'] > label {
					scale: 0.8 !important;
					top: -50% !important;
					left: 0px !important;
				}
			}
			&[data-label-variant='leftside'] {
				padding: 10px;
				position: relative;
				& > label {
					position: absolute;
				}
				&:has(:not(input[placeholder])) > label {
					top: 29%;
					/* left: 4%; */
					left: var(--label-offset);
					opacity: 0.6;
				}
				&:has(input:focus) > label,
				&:has(input[data-filled='true']) > label,
				&:has(input[placeholder]) > label {
					top: 29%;
					/* left: calc(calc((calc(var(--label-width))) + var(--label-offset, 8px)) * -1); */
					left: calc(calc(var(--label-width) * -1) - 10px);
					opacity: 1;
				}
				&[data-label-static='true'] > label {
					top: 29% !important;
					left: calc(calc(var(--label-width) * -1) - 10px) !important;
					opacity: 1 !important;
				}
			}
		}
	}

	/* === VARIANTS === */
	@layer components {
		.ui-input-variant-solid {
			background-color: var(--color-container);
			color: var(--color-text);
			border-radius: var(--radius-xl);
		}
		.ui-input-variant-blurred {
			background-color: var(--color-surface);
			border-radius: var(--radius-lg);
			backdrop-filter: blur(5px);
		}
		.ui-input-variant-faded {
			background-color: var(--color-surface);
			color: var(--color-container);
			border-radius: var(--radius-xl);
			& > label {
				color: var(--color-container);
			}
		}
		@media (prefers-color-scheme: dark) {
			.ui-input-variant-faded {
				border: 2px solid var(--color-surface-hight);
			}
		}
		@media (prefers-color-scheme: light) {
			.ui-input-variant-faded {
				border: 2px solid var(--color-surface-low);
			}
		}

		.ui-input-variant-underlined {
			position: relative;
			border-radius: 0;
			background-color: var(--color-surface);
			&::after {
				position: absolute;
				transition: all 0.3s ease;
				content: '';
				height: 2px;
				width: 100%;
				left: 0;
				bottom: -1px;
				background-color: var(--color-border);
			}
		}
	}
</style>
