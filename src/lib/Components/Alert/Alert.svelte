<script lang="ts">
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';

	// TODO: Ver el alert type promt
	import Button from '../Button/Button.svelte';
	export let open = false;
	export let size: any = 'md';
	export let radius: any = 'md';
	export let className = '';
	export let text = '';
	export let type: 'default' | 'promp' = 'default';
	export let onClose: () => void;
	export let backdrop: {
		className: string;
		type: 'normal' | 'blur' | 'transparent';
	} = {
		className: '',
		type: 'normal'
	};
	let effectModal: KeyframeEffect;
	let effectBackdrop: KeyframeEffect;
	let animationModal: Animation;
	let animationBackdrop: Animation;
	const animationKeyframe: Keyframe[] = [{ opacity: 0 }, { opacity: 1 }];
	const animationOptions: KeyframeEffectOptions = {
		duration: 200,
		easing: 'ease',
		iterations: 1,
		fill: 'forwards'
	};
	let backdropElement: HTMLElement;
	let modal: HTMLElement;
	let render = open;
	function translateToBody(node: HTMLElement) {
		document.body.append(node);
		effectModal = new KeyframeEffect(modal, animationKeyframe, animationOptions);
		effectBackdrop = new KeyframeEffect(backdropElement, animationKeyframe, animationOptions);
		animationModal = new Animation(effectModal, document.timeline);
		animationBackdrop = new Animation(effectBackdrop, document.timeline);
		animationModal.addEventListener('finish', () => {
			if (!open) {
				animationModal.pause();
				animationBackdrop.pause();
				animationBackdrop.playbackRate = -1;
				animationBackdrop.play();
			}
		});
		animationBackdrop.addEventListener('finish', () => {
			if (open) {
				animationBackdrop.pause();
				animationModal.pause();
				animationModal.playbackRate = 1;
				animationModal.play();
			} else {
				render = false;
			}
		});
	}
	beforeUpdate(async () => {
		if (open) {
			render = true;
		}
		if (!open && render && animationModal) {
			animationModal.pause();
			animationBackdrop.pause();
			animationModal.reverse();
		}
	});
	afterUpdate(() => {
		if (open && render && animationBackdrop) {
			animationBackdrop.pause();
			animationModal.pause();
			animationBackdrop.playbackRate = 1;
			animationBackdrop.play();
		}
	});
	// afterUpdate(() => {
	// 	if(open){

	// 	}
	// })
</script>

{#if render}
	<div use:translateToBody class="ui-alert" aria-modal="true">
		<div bind:this={modal} class="ui-alert-content rounded-{radius} size-{size} {className}">
			{#if $$slots.header}
				<div class="ui-alert-header">
					<slot name="header" />
				</div>
			{/if}
			<slot>
				{text}
			</slot>
			<div class="ui-alert-footer">
				<slot name="footer">
					<Button colors="error" variant="flat" onClick={onClose}>Close</Button>
				</slot>
			</div>
		</div>
		<div
			bind:this={backdropElement}
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
		}
	}
</style>
