<script lang="ts">
	// TODO: Ver el alert type promt
	import Button from '../Button/Button.svelte';
	import { ElementAnimation } from '$lib/Animations/Animation.js';
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
	let render = false;
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

	$: open && openEffect();
	function closeAnimation(node: HTMLElement, open: boolean) {
		return {
			update(open: boolean) {
				if (!open) {
					animationBackdrop.reverse();
					animationContent.reverse();
				}
			}
		};
	}
	function openAnimation(node: HTMLElement) {
		const backdropElement = node.lastElementChild as HTMLElement;
		const contentElement = node.firstElementChild as HTMLElement;
		animationBackdrop = new ElementAnimation(backdropElement, backdropAnimationConfig);
		animationContent = new ElementAnimation(contentElement, contentAnimationConfig);
		animationBackdrop.playForward();
		animationContent.playForward();
	}
</script>

{#if render}
	<div
		use:translateToBody
		use:openAnimation
		use:closeAnimation={open}
		class="ui-alert"
		aria-modal="true"
	>
		<div class="ui-alert-content rounded-{radius} size-{size} {className}">
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
