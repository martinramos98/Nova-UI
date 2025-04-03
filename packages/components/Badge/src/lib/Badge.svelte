<script lang="ts">
	import type { Snippet } from 'svelte';
	interface BadgeProps {
		hideBadge?: boolean;
		anchor: HTMLElement;
		positionBadge?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
		class?: string;
		variant?: string;
		colors?: string;
		children?: Snippet;
	}
	const {
		anchor,
		positionBadge = 'bottom-right',
		class: className = '',
		variant = '',
		colors = '',
		children
	}: BadgeProps = $props();
	let node: HTMLElement | null = $state(null);
	let width: number | null = $state(null);
	let height: number | null = $state(null);
	$effect(() => {
		if (anchor && node) {
			const [vert, hor] = positionBadge.split('-');
			let verticalOffset, horizontalOffset;
			if (anchor === node.offsetParent) {
				verticalOffset = vert === 'bottom' ? anchor.offsetHeight : 0;
				horizontalOffset = hor === 'left' ? 0 : anchor.offsetWidth;
			} else {
				verticalOffset =
					vert === 'bottom' ? anchor.offsetTop + anchor.offsetHeight : anchor.offsetTop;
				horizontalOffset =
					hor === 'left' ? anchor.offsetLeft : anchor.offsetLeft + anchor.offsetWidth;
			}
			node.style.top = `${verticalOffset - (height ?? node.offsetHeight) / 2}px`;
			node.style.left = `${horizontalOffset - (width ?? node.offsetWidth) / 2}px`;
			node.classList.remove('hidden');
		}
	});
</script>

<span
	bind:offsetWidth={width}
	bind:offsetHeight={height}
	role="status"
	bind:this={node}
	class={[
		'ui-badge',
		colors && `ui-color-${colors}`,
		variant && `ui-variant-${variant}`,
		// `size-${size}`,
		className
	]}
>
	{@render children?.()}
</span>

<style>
	@layer theme, base, nova, components, utilities;
	@layer nova {
		.ui-badge {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			min-width: 10px;
			min-height: 10px;
			width: fit-content;
			padding: 0 4px;
			height: fit-content;
			z-index: 99;
			place-content: center;
			user-select: none;
			&:hover {
				filter: none;
			}
		}
	}
	@layer components {
		.ui-badge {
			&.ui-variant-flat {
				background-color: color-mix(in srgb, var(--color-container), var(--color-surface) 80%);
			}
		}
	}
</style>
