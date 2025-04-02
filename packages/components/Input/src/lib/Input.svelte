<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { type HTMLInputAttributes } from 'svelte/elements';
	export interface InputProps {
		label?: Snippet | string;
		labelVariant?: 'inside' | 'outside' | 'leftside';
		labelStatic?: boolean;
		labelClass?: string;
		labelEnsureSpacing?: boolean;
		containerClass?: string;
		error?: boolean | ((value: any) => boolean);
		errorContent?: string | Snippet;
		errorClass?: string;
		variant?: string;
		colors?: string;
		ref?: HTMLDivElement;
	}
	let {
		label,
		error,
		errorContent,
		errorClass,
		labelClass,
		labelStatic = false,
		labelVariant = 'outside',
		labelEnsureSpacing = true,
		name,
		colors,
		value = $bindable(),
		variant,
		class: className,
		ref = $bindable(),
		...attr
	}: InputProps & HTMLInputAttributes = $props();
	let input: HTMLInputElement;
	let labelEl: HTMLLabelElement;
	function focusInput() {
		input.focus();
	}
	function onInputFocusIn() {
		setLabelPositionByVariant();
	}
	function onInputFocusOut(ev: FocusEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		if (!value && !labelStatic && !attr.placeholder) {
			setLabelAsPlaceholder();
		}
		attr.onfocusout && attr.onfocusout(ev);
	}
	function setLabelAsPlaceholder() {
		const computedInput = input.computedStyleMap();
		labelEl.style.left = input.offsetLeft + 'px';
		labelEl.style.top = input.offsetTop + 'px';
		labelEl.style.fontSize = 'var(--font-size)';
		labelEl.style.marginTop = computedInput.get('padding-top')?.toString() ?? '0px';
		labelEl.style.marginLeft = computedInput.get('padding-left')?.toString() ?? '0px';
	}
	function setLabelPositionByVariant() {
		labelEl.style.removeProperty('font-size');
		if (labelVariant === 'outside') {
			labelEl.style.top = input.offsetTop - 10 - labelEl.offsetHeight + 'px';
			labelEl.style.marginLeft = '0';
			labelEl.style.left = input.offsetLeft + 'px';
		}
		if (labelVariant === 'leftside') {
			console.log('setting leftside', labelEl.offsetWidth);
			labelEl.style.top = input.offsetTop + 'px';
			labelEl.style.left = input.offsetLeft - 10 - labelEl.offsetWidth + 'px';
			labelEl.style.marginLeft = '0';
		}
		if (labelVariant === 'inside') {
			labelEl.style.marginTop = '5px';
			const computedInput = input.computedStyleMap();
			labelEl.style.marginLeft = computedInput.get('padding-left')?.toString() ?? '0px';

			labelEl.style.top = input.offsetTop + 'px';
			labelEl.style.left = input.offsetLeft + 'px';
		}
	}
	$effect(() => {
		if (labelEnsureSpacing) {
			const computed = input.computedStyleMap();
			if (labelVariant === 'leftside') {
				(input.parentElement as HTMLElement).style.marginLeft =
					(computed.get('margin-left')?.value ?? 0) + labelEl.offsetWidth + 'px';
			}
			if (labelVariant === 'outside') {
				(input.parentElement as HTMLElement).style.marginTop =
					(computed.get('margin-top')?.value ?? 0) + labelEl.offsetHeight + 'px';
			}
			if (labelVariant === 'inside') {
				input.style.paddingTop =
					(computed.get('padding-top')?.value ?? 0) + labelEl.offsetHeight + 'px';
			}
		}
	});
	onMount(() => {
		if (labelStatic || value || attr.placeholder) {
			setLabelPositionByVariant();
		} else {
			setLabelAsPlaceholder();
		}
	});
</script>

<div
	class={[
		'ui-input-container',
		variant && `ui-input-variant-${variant}`,
		colors && `ui-color-${colors}`
	]}
	bind:this={ref}
>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<label
		bind:this={labelEl}
		onclick={focusInput}
		class={labelClass}
		data-label-variant={variant}
		data-label-static={labelStatic}
		for={name}
		>{#if typeof label === 'string'}
			{label}
		{:else}
			{@render label?.()}
		{/if}
	</label>
	<input
		bind:this={input}
		{...attr}
		class={['ui-input', className]}
		bind:value
		onfocusin={onInputFocusIn}
		onfocusout={onInputFocusOut}
	/>
	{#if (typeof error === 'function' && error(value)) || error === true}
		<div class={['ui-input-error', 'ui-color-error', errorClass]}>
			{#if typeof errorContent === 'string'}
				{errorContent}
			{:else}
				{@render errorContent?.()}
			{/if}
		</div>
	{/if}
</div>

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
			padding: 8px;
			border: none;
			&:focus {
				border: none;
				outline: none;
			}
		}
		/* === CONTAINER === */

		.ui-input-container {
			--font-size: var(--text-base);
			position: relative;
			transition: padding 0.3s ease;
			/* === LABEL === */
			& > label {
				transition:
					top 0.3s ease,
					font-size 0.3s ease,
					margin-top 0.3s ease,
					margin-left 0.3s ease,
					left 0.3s ease;
				font-size: var(--text-sm);
				position: absolute;
				width: max-content;
				height: max-content;
			}
			& > input {
				width: 100%;
			}
		}
	}

	/* === VARIANTS === */
	@layer components {
		.ui-input-variant-solid {
			background-color: var(--color-container);
			color: var(--color-text);
			border-radius: var(--radius-lg);
		}
		.ui-input-variant-blurred {
			backdrop-filter: blur(5px);
			& input {
				background-color: var(--color-surface);
				border-radius: var(--radius-lg);
			}
		}
		.ui-input-variant-faded {
			& > label {
				color: var(--color-container);
			}
			& input {
				background-color: var(--color-surface);
				color: var(--color-container);
				border-radius: var(--radius-lg);
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

		.ui-input-variant-underlined {
			position: relative;

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
			& input {
				border-radius: 0;
				background-color: var(--color-surface);
			}
		}
	}
</style>
