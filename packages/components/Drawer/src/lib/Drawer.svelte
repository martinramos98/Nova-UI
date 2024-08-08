<svelte:options runes={true} />

<script lang="ts">
	// import { SequencedAnimation, type ElementAnimationParams } from '@nv-org/element-animation-js';
	import type { Snippet } from 'svelte';
	import { directionedFly } from '@nv-org/utils';
	import { fade } from 'svelte/transition';
	interface DrawerProps {
		open?: boolean;
		onClose?: () => void;
		size?: string;
		className?: string;
		position?: string;
		backdrop?: { className: string; type: string };
		drawerContentClassName?: string;
		header?: Snippet;
		footer?: Snippet;
		children?: Snippet;
		animation?: {
			delay?: number;
			withFade?: boolean;
			moveUntil?: number;
			easing?: any;
			duration?: number;
		};
	}
	let {
		open = $bindable(false),
		onClose = () => {
			open = false;
		},
		size,
		position = 'right',
		className = '',
		backdrop = { className: '', type: 'normal' },
		drawerContentClassName = '',
		animation = {},
		header,
		footer,
		children
	}: DrawerProps = $props();
	// let animationInstance: SequencedAnimation;
	// const positionTransition = {
	// 	top: [
	// 		{ translate: '0 -100%', opacity: '0' },
	// 		{ translate: '0 0', opacity: '1' }
	// 	],
	// 	left: [
	// 		{ translate: '-100% 0%', opacity: '0' },
	// 		{ translate: '0 0', opacity: '1' }
	// 	],
	// 	bottom: [
	// 		{ translate: '0 100%', opacity: '0' },
	// 		{ translate: '0 0', opacity: '1' }
	// 	],
	// 	right: [
	// 		{ translate: '100% 0%', opacity: '0' },
	// 		{ translate: '0 0', opacity: '1' }
	// 	]
	// };
	// let render = $state(false);
	// const backdropAnimationConfig: ElementAnimationParams = {
	// 	animations: {
	// 		keyframes: [{ opacity: 0 }, { opacity: backdrop.type === 'transparent' ? 0 : 1 }],
	// 		animationOptions: {
	// 			iterations: 1,
	// 			duration: 200,
	// 			easing: 'ease-in-out',
	// 			fill: 'both'
	// 		}
	// 	},
	// 	iterations: 1,
	// 	alternate: false
	// };
	// const contentAnimationConfig: ElementAnimationParams = {
	// 	animations: {
	// 		keyframes: positionTransition[position as keyof positionTransition] as Keyframe[],
	// 		animationOptions: {
	// 			iterations: 1,
	// 			duration: 300,
	// 			easing: 'ease-in-out',
	// 			fill: 'both'
	// 		}
	// 	},
	// 	iterations: 1,
	// 	alternate: false
	// };

	function translateToBody(node: HTMLElement) {
		document.body.append(node);
		node.addEventListener('click', (ev) => {
			const target = ev.target as Element;
			if (target.classList.contains('ui-drawer-backdrop')) {
				onClose();
			}
		});
	}
</script>

{#if open}
	<aside use:translateToBody class="ui-drawer {className}">
		<div
			transition:directionedFly={{ direction: position, ...animation }}
			class="ui-drawer-content {size
				? 'size-' + size
				: ''} drawer-{position} {drawerContentClassName}"
		>
			{#if header}
				<div class="ui-drawer-header">
					{@render header()}
				</div>
			{/if}
			{#if children}
				{@render children()}
			{/if}
			{#if footer}
				<div class="ui-drawer-footer">
					{@render footer()}
				</div>
			{/if}
		</div>
		<div
			transition:fade
			aria-roledescription="Backdrop of Drawer"
			aria-hidden="true"
			class="ui-drawer-backdrop {backdrop.className}  {backdrop.type === 'blur'
				? 'backdrop-blur-sm'
				: ''}"
		></div>
	</aside>
{/if}

<style>
	@layer theme, base, nova, components, utilities;
	@layer nova {
		.ui-drawer {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 90;
		}

		.ui-drawer-backdrop {
			position: absolute;
			width: inherit;
			height: inherit;
			top: 0;
			left: 0;
			background-color: rgb(0 0 0 / 0.5);
			z-index: -1;
		}
		.ui-drawer-content {
			position: absolute;
			overflow: auto;
			background-color: var(--color-surface);
			&.size-xs {
				width: 20%;
				height: 20%;
			}
			&.size-sm {
				width: 30%;
				height: 30%;
			}
			&.size-md {
				width: 40%;
				height: 40%;
			}
			&.size-lg {
				width: 50%;
				height: 50%;
			}
			&.size-xl {
				width: 60%;
				height: 60%;
			}
			&.size-full {
				width: 100%;
				height: 100%;
				max-width: 100%;
				max-height: 100%;
				border-radius: var(--border-radius-none);
			}
			&.drawer-top {
				top: 0;
				left: 0;
				width: 100%;
			}
			&.drawer-bottom {
				bottom: 0;
				left: 0;
				width: 100%;
			}
			&.drawer-left {
				top: 0;
				left: 0;
				height: 100%;
			}
			&.drawer-right {
				top: 0;
				right: 0;
				height: 100%;
			}
		}

		@media screen and (width <= 768px) {
			.ui-drawer-content.drawer-left,
			.ui-drawer-content.drawer-right {
				width: 80%;
			}
		}
		@media screen and (width <= 540px) {
			.ui-drawer-content.drawer-left,
			.ui-drawer-content.drawer-right {
				width: 100%;
			}
		}
	}
</style>
