<svelte:options runes={true} />

<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { ContextMenuContext } from './ContextMenu.js';
	import { setPositionContextMenu } from '$lib/utils/utils.js';
	import type { ElementAnimation } from '@nova/element-animation-js';
	import { fadeAnimation } from '$lib/DefinedAnimations/Animations.js';
	let {
		children,
		className = '',
		open = $bindable(false),
		offset = 0,
		position = 'bottom',
		onClose = () => {
			open = false;
		}
	}: {
		children?: Snippet;
		className?: string;
		onClose?: () => void;
		open?: boolean;
		offset?: number;
		position?: string;
	} = $props();
	let menuElement: HTMLElement;
	let context = getContext<ContextMenuContext>('contexMenu-context');
	let openContextMenu = $state(open);
	let lastRealMousePosition = { x: 0, y: 0 };
	let lastRelativeMousePosition = { x: 0, y: 0 };
	let renderAnimation: ElementAnimation;
	if (context) {
		context.openContextMenu = onOpenMenu;
		context.closeContextMenu = onCloseMenu;
	}
	function setContextMenuPosition(node: HTMLElement) {
		context.ref = node;
		setPositionContextMenu({
			element: node,
			offset,
			position,
			mouseRelativePosition: lastRelativeMousePosition,
			mouseRealPosition: lastRealMousePosition
		});
	}
	function animationRender(node: HTMLElement) {
		node.hidden = false;
		// Play Animate, on End if open is false then on end set to false openContextMenu
		// renderAnimation = flyAnimation({
		// 	element: node,
		// 	duration: 200,
		// 	x: new CSSUnitValue(0, 'px'),
		// 	y: new CSSUnitValue(30, 'px'),
		// 	onEndAnimation() {
		// 		if (!open) {
		// 			openContextMenu = false;
		// 		}
		// 	}
		// });
		renderAnimation = fadeAnimation({
			element: node,
			duration: 200,
			onEndAnimation() {
				if (!open) {
					openContextMenu = false;
				}
			}
		});
		renderAnimation.playForward();
	}
	$effect(() => {
		if (open) {
			openContextMenu = true;
		} else {
			// Reverse animation
			renderAnimation && renderAnimation.reverse();
		}
	});

	function onOpenMenu(ev: MouseEvent) {
		lastRealMousePosition = { x: ev.clientX, y: ev.clientY };
		lastRelativeMousePosition = { x: ev.offsetX, y: ev.offsetY };
		if (open) {
			setContextMenuPosition(menuElement);
			animationRender(menuElement);
		} else {
			open = true;
		}
	}
	function onCloseMenu() {
		onClose();
	}
</script>

{#if openContextMenu}
	<div
		bind:this={menuElement}
		use:setContextMenuPosition
		hidden
		use:animationRender
		class="ui-context-menu {className}"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
{/if}

<style>
	@layer nova {
		.ui-context-menu {
			position: absolute;
			opacity: 0;
			background: var(--color-surface);
			border: 1px solid var(--color-border);
			width: max-content;
			height: fit-content;
		}
	}
</style>
