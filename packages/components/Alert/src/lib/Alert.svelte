<svelte:options runes={true} />

<script lang="ts">
	import { Button } from '@nv-org/button';
	import { fade } from 'svelte/transition';
	import type { Snippet } from 'svelte';
	import { Input } from '@nv-org/input';
	import { popOut, type SvelteTransitionFn } from '@nv-org/utils';

	interface AlertProps {
		open?: boolean;
		size?: string;
		radius?: string;
		footer?: Snippet<[any, any]>;
		children?: Snippet;
		class?: string;
		text?: string;
		type?: 'default' | 'prompt' | 'confirm';
		onClose: (value: string | undefined | boolean) => void;
		promptProps?: { inputProps?: any };
		backdropClass?: string;
		backdropType?: 'normal' | 'blur' | 'transparent';
		animationFunction?: SvelteTransitionFn;
		animationParams?: any;
	}
	let {
		open = $bindable(false),
		size = 'md',
		radius = 'md',
		class: className = '',
		text,
		type = 'default',
		children,
		onClose,
		footer,
		promptProps = { inputProps: {} },
		backdropClass = '',
		backdropType = 'normal',
		animationFunction = popOut,
		animationParams = { duration: 300 }
	}: AlertProps = $props();
	let value = $state('');
	function translateToBody(node: HTMLElement) {
		document.body.append(node);
	}
	function closeAlert() {
		open = false;
		onClose(type === 'default' ? undefined : false);
	}
	function confirmAlert() {
		open = false;
		onClose(type === 'confirm' ? true : value);
	}
</script>

{#if open}
	<div use:translateToBody class="ui-alert" aria-modal="true">
		<div
			transition:animationFunction={animationParams}
			class="ui-alert-content rounded-{radius} size-{size} {className}"
		>
			{#if children}
				{@render children()}
			{:else}
				{text}
			{/if}
			{#if type === 'default'}
				{#if footer}
					{@render footer(closeAlert, null)}
				{:else}
					<div class="ui-alert-footer">
						<Button
							colors="error"
							variant="flat"
							onClick={() => {
								closeAlert();
							}}>Close</Button
						>
					</div>
				{/if}
			{/if}
			{#if type === 'confirm'}
				{#if footer}
					{@render footer(closeAlert, confirmAlert)}
				{:else}
					<div class="ui-alert-footer">
						<Button
							colors="info"
							variant="flat"
							onClick={() => {
								confirmAlert();
							}}>OK</Button
						>
						<Button
							colors="error"
							variant="light"
							onClick={() => {
								closeAlert();
							}}
						>
							Close
						</Button>
					</div>
				{/if}
			{/if}
			{#if type === 'prompt'}
				<Input
					name="prompt"
					colors="container-low"
					classNameContainer={'mt-4'}
					{...promptProps.inputProps}
					bind:value
				/>
				{#if footer}
					{@render footer(closeAlert, confirmAlert)}
				{:else}
					<div class="ui-alert-footer">
						<Button
							colors="info"
							variant="flat"
							onClick={() => {
								confirmAlert();
							}}
						>
							OK
						</Button>
						<Button
							colors="error"
							variant="light"
							onClick={() => {
								closeAlert();
							}}
						>
							Close
						</Button>
					</div>
				{/if}
			{/if}
		</div>
		<div
			transition:fade
			aria-roledescription="Backdrop of alert"
			aria-hidden="true"
			class="ui-alert-backdrop {backdropClass} {backdropType === 'transparent'
				? 'opacity-0'
				: ''} {backdropType === 'blur' ? 'backdrop-blur-sm' : ''}"
		></div>
	</div>
{/if}

<style>
	@layer nova {
		.ui-alert {
			display: grid;
			justify-content: center;
			justify-items: center;
			align-items: safe;
			align-content: start;
			width: 100vw;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
		}

		.ui-alert-backdrop {
			width: inherit;
			height: inherit;
			grid-column: 1 / 1;
			grid-row: 1 / 1;
			background-color: rgb(0 0 0 / 0.5);
			z-index: -1;
		}
		.ui-alert-content {
			height: fit-content;
			grid-column: 1 / 1;
			grid-row: 1 / 1;
			background-color: var(--color-surface);
			border-radius: var(--radius-lg);
			padding: calc(var(--spacing) * 4) calc(var(--spacing) * 8);
			margin-top: 20px;
			display: flex;
			flex-direction: column;
			.ui-modal-footer {
				margin-top: auto;
			}
		}
		.ui-alert-footer {
			display: flex;
			padding-top: 20px;
			align-items: center;
			justify-content: end;
			gap: calc(var(--spacing) * 2);
		}
	}
</style>
