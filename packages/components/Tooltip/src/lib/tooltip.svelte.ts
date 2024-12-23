import { setContext } from 'svelte';
import { calculatePosition, type FullPosition } from '@nv-org/utils';

export function createTooltipControls(contextKey?: string) {
	let openTooltip = $state(false);
	let container: HTMLElement | null = null;
	let trigger: HTMLElement | null = null;
	let anchor: HTMLElement | null = null;
	function togglePopover() {
		openTooltip = !openTooltip;
	}
	function open() {
		openTooltip = true;
	}
	function close() {
		openTooltip = false;
	}
	function asTooltipTrigger(node: HTMLElement) {
		if (node === trigger) return;
		if (trigger) {
			trigger.removeEventListener('mouseenter', open);
			trigger.removeEventListener('mouseleave', close);
		}
		trigger = node;
		node.addEventListener('mouseenter', open);
		node.addEventListener('mouseleave', close);
	}
	function asTooltipAnchor(node: HTMLElement) {
		anchor = node;
	}
	function asTooltipContent(node: HTMLElement) {
		container = node;
	}

	function updatePosition(position: FullPosition, offset: number) {
		if (!container || !anchor) return;
		const positionResult = calculatePosition(anchor, container, position, offset);
		console.log(positionResult);
		// container.style.translate = `${positionResult.x}px ${positionResult.y}px`;
		container.style.top = `${positionResult.top}px`;
		container.style.left = `${positionResult.left}px`;
	}

	setContext(contextKey ?? 'tooltip', {
		updatePosition,
		asTooltipContent,
		get isOpen() {
			return openTooltip;
		}
	});
	return {
		open,
		close,
		togglePopover,
		asTooltipTrigger,
		asTooltipAnchor,
		get trigger(){
			return trigger;
		},
		get isOpen() {
			return openTooltip;
		}
	};
}
