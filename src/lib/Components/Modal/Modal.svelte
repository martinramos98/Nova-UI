<script lang="ts">
	import { crossfade, fade, scale, slide, type TransitionConfig } from 'svelte/transition';
	import { cubicIn, cubicInOut, quadInOut } from 'svelte/easing';
	import { SequencedAnimation } from '$lib/Animations/SequencedAnimation.js';
	import type { ElementAnimationParams } from '$lib/Animations/Animation.js';
	import { afterUpdate } from 'svelte';
	export let open = false;
	export let size: any = 'md';
	export let radius: any = 'md';
	export let onClose: () => void;
	export let render = false;
	export let backdrop: {
		className: string;
		type: 'normal' | 'blur' | 'transparent';
	} = {
		className: '',
		type: 'normal'
	};
	export let modalContent = {
		className: ''
	};
	let modalElement: HTMLElement, backdropElement: HTMLElement;
	// let backdrop;
	const animationConfig: ElementAnimationParams = {
		animations: {
			keyframes: [{ opacity: '0' }, { opacity: '1' }],
			animationOptions: {
				direction: 'normal',
				fill: 'both',
				duration: 500,
				easing: 'ease',
				iterations: 1
			}
		},
		iterations: 1,
		alternate: false
	};
	function translateToBody(node: HTMLElement) {
		document.body.append(node);
		node.addEventListener('click', (ev) => {
			const target = ev.target as Element;
			if (target.classList.contains('ui-modal-backdrop')) {
				onClose();
			}
		});
	}
	let animationModal: SequencedAnimation;
	function openEffect() {
		console.log({ open }, modalElement, backdropElement);
		if (open) {
			render = true;
		} else {
			render && modalElement && backdropElement && animationModal.reverse();
		}
	}
	function renderEffect() {
		console.log({ render }, modalElement, backdropElement);
		if (render) {
			animationModal = new SequencedAnimation(
				[
					{ element: backdropElement, animationParams: animationConfig },
					{ element: modalElement, animationParams: animationConfig }
				],
				{
					alternate: false,
					iterations: 1,
					onEndSequence() {
						if (!open) {
							render = false;
						}
					}
				}
			);
			animationModal.playForward();
		}
	}
	$: open, openEffect();
	$: render, renderEffect();
	afterUpdate(() => {
		render && backdropElement && modalElement && renderEffect();
	});
	afterUpdate(() => {});
</script>

{#if render}
	<div
		use:translateToBody
		class="ui-modal {render ? 'show-modal' : 'hide-modal'}"
		aria-modal="true"
	>
		<div
			bind:this={modalElement}
			class="ui-modal-content rounded-{radius} size-{size} {modalContent.className}"
		>
			{#if $$slots.header}
				<div class="ui-modal-header">
					<slot name="header" />
				</div>
			{/if}
			<slot />
			{#if $$slots.footer}
				<div class="ui-modal-footer">
					<slot name="footer" />
				</div>
			{/if}
		</div>
		<div
			bind:this={backdropElement}
			aria-roledescription="Backdrop of modal"
			aria-hidden="true"
			class="ui-modal-backdrop {backdrop.className} {backdrop.type === 'transparent'
				? 'opacity-0'
				: ''} {backdrop.type === 'blur' ? 'backdrop-blur-sm' : ''}"
		></div>
	</div>
{/if}

<style>
	@layer nova {
		.show-modal {
			display: grid;
			place-content: center;
			place-items: center;
			width: 100vw;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
		}

		.hide-modal {
			display: none !important;
		}
		.ui-modal-backdrop {
			width: inherit;
			height: inherit;
			opacity: 0;
			grid-column: 1 / 1;
			grid-row: 1 / 1;
			background-color: rgb(0 0 0 / 0.5);
			z-index: -1;
		}
		.ui-modal-content {
			grid-column: 1 / 1;
			grid-row: 1 / 1;
			opacity: 0;
			background-color: var(--color-surface);
			border-radius: var(--radius-lg);
			padding: 10px;
			display: flex;
			flex-direction: column;
			.ui-modal-footer {
				margin-top: auto;
			}
		}
	}
</style>
