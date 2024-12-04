<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { type FullPosition, calculatePosition } from '@nv-org/utils';
	let {
		children,
		open: openPopover = $bindable(false),
		closeOnOutsideClick = true
	}: { children: Snippet<[any, any]>; open?: boolean; closeOnOutsideClick?: boolean } = $props();

	let container: HTMLElement | null = null;
	let trigger: HTMLElement | null = null;
	let anchor: HTMLElement | null = null;
	$inspect(openPopover);
	export function togglePopover() {
		openPopover = !openPopover;
	}
	export function open() {
		openPopover = true;
	}
	export function close() {
		openPopover = false;
	}
	export function asPopoverTrigger(node: HTMLElement) {
		if (node === trigger) return;
		if (trigger) {
			trigger.removeEventListener('click', handleToggleAction);
		}
		trigger = node;
		node.addEventListener('click', handleToggleAction);
	}
	export function asPopoverAnchor(node: HTMLElement) {
		anchor = node;
	}
	function asPopoverContent(node: HTMLElement) {
		container = node;
	}

	function updatePosition(position: FullPosition, offset: number) {
		if (!container || !anchor) return;
		const positionResult = calculatePosition(anchor, container, position, offset);
		console.log(positionResult);
		container.style.translate = `${positionResult.x}px, ${positionResult.y}px`;
	}

	function handleToggleAction(ev: MouseEvent) {
		if (openPopover) {
			close();
			closeOnOutsideClick && window.removeEventListener('click', outsideClickAction);
		} else {
			open();
			closeOnOutsideClick && window.addEventListener('click', outsideClickAction);
		}
	}

	function outsideClickAction(ev: MouseEvent) {
		const el = ev.target as HTMLElement;
		if (
			openPopover &&
			!(el.closest('.ui-popover') || el === container) &&
			!(el === trigger || (trigger && trigger.contains(el)))
		) {
			close();
			closeOnOutsideClick && window.removeEventListener('click', outsideClickAction);
		}
	}
	setContext('popover', {
		updatePosition,
		asPopoverContent,
		get isOpen() {
			return openPopover;
		}
	});
</script>

{@render children?.(asPopoverAnchor, asPopoverTrigger)}
