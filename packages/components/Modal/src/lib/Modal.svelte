<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import { popOut } from '@nv-org/utils';
	import type { SvelteTransitionFn } from '@nv-org/utils';
	interface ModalProps {
		open?: boolean;
		size?: string;
		class?: string;
		classContent?: string;
		radius?: string;
		onClose?: () => void;
		backdropType?: 'normal' | 'transparent' | 'blur';
		backdropClass?: string;
		header?: Snippet;
		footer?: Snippet;
		children: Snippet;
		animationParams?: any;
		animationFunction?: SvelteTransitionFn;
	}
	const {
		open = $bindable(false),
		size = 'md',
		radius = 'md',
		onClose = () => {},
		backdropClass = '',
		backdropType = 'normal',
		classContent = '',
		header = undefined,
		footer = undefined,
		children,
		animationFunction = popOut,
		animationParams = {}
	}: ModalProps = $props();
	function translateToBody(node: HTMLElement) {
		document.body.append(node);
		node.addEventListener('click', (ev) => {
			const target = ev.target as Element;
			if (target.classList.contains('ui-modal-backdrop')) {
				onClose();
			}
		});
	}
</script>

{#if open}
	<div role="dialog" use:translateToBody class="ui-modal" aria-modal="true">
		<div
			transition:animationFunction={animationParams}
			class="ui-modal-content rounded-{radius} size-{size} {classContent}"
		>
			{#if header}
				{@render header()}
			{/if}
			{@render children()}
			{#if footer}
				{@render footer()}
			{/if}
		</div>
		<div
			transition:fade
			aria-roledescription="Backdrop of modal"
			aria-hidden="true"
			style={backdropType === 'transparent' ? 'background-color:transparent;' : ''}
			class="ui-modal-backdrop {backdropClass}  {backdropType === 'blur' ? 'backdrop-blur-sm' : ''}"
		></div>
	</div>
{/if}

<style>
	@layer nova {
		.ui-modal {
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

		.ui-modal-backdrop {
			width: inherit;
			height: inherit;
			grid-column: 1 / 1;
			grid-row: 1 / 1;
			background-color: rgb(0 0 0 / 0.5);
			z-index: -1;
		}
		.ui-modal-content {
			grid-column: 1 / 1;
			grid-row: 1 / 1;
			background-color: var(--color-surface);
			border-radius: var(--radius-lg);
			padding: 10px;
			display: flex;
			flex-direction: column;
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
