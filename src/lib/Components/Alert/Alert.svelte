<svelte:options runes={true} />

<script lang="ts">
	import Button from '../Button/Button.svelte';
	import { ElementAnimation } from '@nova/element-animation-js';
	import type { Snippet } from 'svelte';
	import Input from '../Input/Input.svelte';
	let {
		open = $bindable(false),
		size = 'md',
		radius = 'md',
		className = '',
		text,
		type = 'default',
		children,
		onClose,
		footer,
		promptProps = { inputProps: {} },
		backdrop = { className: '', type: 'normal' }
	}: {
		open?: boolean;
		size?: any;
		radius?: any;
		footer?: Snippet<[any, any]>;
		children?: Snippet;
		className?: string;
		text?: string;
		type?: 'default' | 'prompt' | 'confirm';
		onClose: (value: string | undefined | boolean) => void;
		promptProps?: { inputProps?: any };
		backdrop?: {
			className?: string;
			type: 'normal' | 'blur' | 'transparent';
		};
	} = $props();
	let render = $state(false);
	let value = $state('');
	function translateToBody(node: HTMLElement) {
		document.body.append(node);
	}
	function openEffect() {
		render = true;
	}
	let animationBackdrop: ElementAnimation, animationContent: ElementAnimation;
	const backdropAnimationConfig = {
		animations: {
			keyframes: [{ opacity: 0 }, { opacity: 1 }],
			animationOptions: {
				iterations: 1,
				duration: 300,
				easing: 'ease-in-out',
				fill: 'both'
			}
		},
		iterations: 1,
		alternate: false,
		onFinishedAnimation() {
			if (!open) {
				render = false;
			}
		}
	};
	const contentAnimationConfig = {
		animations: {
			keyframes: [
				{ scale: '1.05', opacity: '0' },
				{ scale: '1', opacity: '1' }
			],
			animationOptions: {
				iterations: 1,
				duration: 300,
				easing: 'ease-in-out',
				fill: 'both'
			}
		},
		iterations: 1,
		alternate: false
	};
	$effect(() => {
		if (open) {
			value = '';
			openEffect();
		}
	});

	function openAnimation(node: HTMLElement) {
		const backdropElement = node.lastElementChild as HTMLElement;
		const contentElement = node.firstElementChild as HTMLElement;
		animationBackdrop = new ElementAnimation(backdropElement, backdropAnimationConfig);
		animationContent = new ElementAnimation(contentElement, contentAnimationConfig);
		animationBackdrop.playForward();
		animationContent.playForward();
	}
	function closeAlert() {
		open = false;
		animationBackdrop.reverse();
		animationContent.reverse();
		onClose(type === 'default' ? undefined : false);
	}
	function confirmAlert() {
		open = false;
		animationBackdrop.reverse();
		animationContent.reverse();
		onClose(type === 'confirm' ? true : value);
	}
</script>

{#if render}
	<div use:translateToBody use:openAnimation class="ui-alert" aria-modal="true">
		<div class="ui-alert-content rounded-{radius} size-{size} {className}">
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
			aria-roledescription="Backdrop of alert"
			aria-hidden="true"
			class="ui-alert-backdrop {backdrop.className} {backdrop.type === 'transparent'
				? 'opacity-0'
				: ''} {backdrop.type === 'blur' ? 'backdrop-blur-sm' : ''}"
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

		.hide-alert {
			display: none !important;
		}
		.ui-alert-backdrop {
			width: inherit;
			opacity: 0;
			height: inherit;
			grid-column: 1 / 1;
			grid-row: 1 / 1;
			background-color: rgb(0 0 0 / 0.5);
			z-index: -1;
		}
		.ui-alert-content {
			height: fit-content;
			opacity: 0;
			grid-column: 1 / 1;
			grid-row: 1 / 1;
			background-color: var(--color-surface);
			border-radius: var(--radius-lg);
			padding: var(--spacing-4) var(--spacing-8);
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
			gap: var(--spacing-2);
		}
	}
</style>
