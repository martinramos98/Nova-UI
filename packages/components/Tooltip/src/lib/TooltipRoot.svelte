<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { type FullPosition, calculatePosition } from '@nv-org/utils';
	let {
		children,
		open: openTooltip = $bindable(false)
	}: { children: Snippet<[any, any]>; open?: boolean } = $props();

	let container: HTMLElement | null = null;
	let trigger: HTMLElement | null = null;
	let anchor: HTMLElement | null = null;
	export function togglePopover() {
		openTooltip = !openTooltip;
	}
	export function open() {
		openTooltip = true;
	}
	export function close() {
		openTooltip = false;
	}
	export function asTooltipTrigger(node: HTMLElement) {
		if (node === trigger) return;
		if (trigger) {
			trigger.removeEventListener('mouseenter', open);
			trigger.removeEventListener('mouseout', close);
		}
		trigger = node;
		node.addEventListener('mouseenter', open);
		node.addEventListener('mouseout', close);
	}
	export function asTooltipAnchor(node: HTMLElement) {
		anchor = node;
	}
	function asTooltipContent(node: HTMLElement) {
		container = node;
	}

	function updatePosition(position: FullPosition, offset: number) {
		if (!container || !anchor) return;
		const positionResult = calculatePosition(anchor, container, position, offset);
		container.style.translate = `${positionResult.x}px, ${positionResult.y}px`;
	}

	setContext('popover', {
		updatePosition,
		asTooltipContent,
		get isOpen() {
			return openTooltip;
		}
	});
</script>

{@render children?.(asTooltipAnchor, asTooltipTrigger)}
