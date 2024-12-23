import { setContext } from 'svelte';
import { calculatePosition, type FullPosition } from '@nv-org/utils';

export function createPopoverControls(contextKey?: string, closeOnOutsideClick = true) {
	let openPopover = $state(false);
	let container: HTMLElement | null = null;
	let trigger: HTMLElement | null = null;
	let anchor: HTMLElement | null = null;
	function togglePopover() {
		openPopover = !openPopover;
	}
	function open() {
		openPopover = true;
	}
	function close() {
		openPopover = false;
	}
	function asPopoverTrigger(node: HTMLElement) {
		if (node === trigger) return;
		if (trigger) {
			trigger.removeEventListener('click', handleToggleAction);
		}
		trigger = node;
		node.addEventListener('click', handleToggleAction);
	}
	function asPopoverAnchor(node: HTMLElement) {
		anchor = node;
	}
	function asPopoverContent(node: HTMLElement) {
		container = node;
	}

	function updatePosition(position: FullPosition, offset: number) {
		if (!container || !anchor) return;
		const positionResult = calculatePosition(anchor, container, position, offset);
		container.style.top = `${positionResult.top}px`;
		container.style.left = `${positionResult.left}px`;
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
	setContext(contextKey ?? 'popover', {
		updatePosition,
		asPopoverContent,
		get trigger(){
			return trigger
		},
		get isOpen() {
			return openPopover;
		}
	});
	return {
		open,
		close,
		togglePopover,
		asPopoverTrigger,
		asPopoverAnchor,
		get isOpen() {
			return openPopover;
		}
	};
}
