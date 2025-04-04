<script lang="ts">
	import type { Snippet } from 'svelte';
	import { directionedFly } from '@nv-org/utils';
	import { fade } from 'svelte/transition';
	interface DrawerProps {
		open?: boolean;
		onClose?: () => void;
		class?: string | string[];
		position?: string;
		backdrop?: { class?: string; type?: string };
		contentClass?: string | string[];
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
		position = 'right',
		class: className = '',
		backdrop = { class: '', type: 'normal' },
		contentClass = '',
		animation = {},
		header,
		footer,
		children
	}: DrawerProps = $props();

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
			class={['ui-drawer-content', `drawer-${position}`, contentClass]}
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
			class={[
				'ui-drawer-backdrop',
				backdrop.type === 'blur' && 'backdrop-blur-sm',
				backdrop.type === 'transparent' && 'bg-transparent',
				backdrop.class
			]}
		></div>
	</aside>
{/if}

<style>
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
			width: 40%;
			height: 40%;
			background-color: var(--color-surface);
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
</style>
