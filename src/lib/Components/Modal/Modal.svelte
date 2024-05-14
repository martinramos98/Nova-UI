<script lang="ts">
	import type { ElementAnimationParams } from '$lib/Animations/Animation.js';
	import { ParallelAnimation } from '$lib/Animations/ParallelAnimation.js';
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
	const animationConfig: ElementAnimationParams = {
		animations: {
			keyframes: [{ opacity: '0' }, { opacity: '1' }],
			animationOptions: {
				direction: 'normal',
				fill: 'both',
				duration: 300,
				easing: 'ease-in-out',
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
	let animationModal: ParallelAnimation;
	function openEffect() {
		if (open) {
			render = true;
		}
	}
	// {
	// 			alternate: false,
	// 			iterations: 1,
	// 			onEndSequence() {
	// 				if (!open) {
	// 					render = false;
	// 				}
	// 			}
	// 		}

	function animationsOpen(node: HTMLElement) {
		const backdropElement = node.lastElementChild as HTMLElement;
		const contentElement = node.firstElementChild as HTMLElement;

		animationModal = new ParallelAnimation(
			[
				{ element: backdropElement, animationOptions: animationConfig },
				{ element: contentElement, animationOptions: animationConfig }
			],
			{
				endCallback: () => {
					if (!open) {
						render = false;
					}
				}
			}
		);
		animationModal.playForward();
	}
	function animationsClose(node: HTMLElement, open: boolean) {
		return {
			update: (open: boolean) => {
				if (!open) {
					animationModal.reverse();
				}
			}
		};
	}
	$: open && openEffect();
</script>

{#if render}
	<div
		use:animationsClose={open}
		use:animationsOpen
		use:translateToBody
		class="ui-modal {render ? 'show-modal' : 'hide-modal'}"
		aria-modal="true"
	>
		<div class="ui-modal-content rounded-{radius} size-{size} {modalContent.className}">
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
			aria-roledescription="Backdrop of modal"
			aria-hidden="true"
			style={backdrop.type === 'transparent' ? 'background-color:transparent;' : ''}
			class="ui-modal-backdrop {backdrop.className}  {backdrop.type === 'blur'
				? 'backdrop-blur-sm'
				: ''}"
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
		.size-full {
			border-radius: 0 !important;
			width: 100%;
			height: 100%;
		}
		.size-md {
			min-width: 40%;
			min-height: 30%;
		}
		.size-lg {
			min-width: 50%;
			min-height: 40%;
		}
		.size-xl {
			min-width: 60%;
			min-height: 40%;
		}
	}
</style>
