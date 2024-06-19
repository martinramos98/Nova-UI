<svelte:options runes={true} />

<script lang="ts">
	import { ElementAnimation } from '@nova/element-animation-js';
	import type { Snippet } from 'svelte';

	const {
		children,
		className = '',
		open = $bindable(false),
		as = 'div',
		classNameContainer = '',
		position = 'top',
		content
	}: {
		children: Snippet;
		classNameContainer?: string;
		className?: string;
		open: boolean;
		content: Snippet;
		as?: string;
		position?: string;
	} = $props();
	let render = $state(false);
	let animation: ElementAnimation;
	function animate(node: HTMLElement) {
		const size = position === 'top' || position === 'bottom' ? node.offsetHeight : node.offsetWidth;
		const animProp = position === 'top' || position === 'bottom' ? 'maxHeight' : 'maxWidth';
		animation = new ElementAnimation(node, {
			animations: {
				keyframes: [{ [animProp]: '0px' }, { [animProp]: size + 'px' }],
				animationOptions: {
					iterations: 1,
					fill: 'both',
					direction: 'normal',
					easing: 'ease',
					duration: 300
				}
			},
			onFinishedAnimation() {
				if (!open) {
					render = false;
				}
			}
		});
		animation.playForward();
	}
	$effect(() => {
		if (open) {
			render = true;
		} else if (!open && animation) {
			animation.reverse();
		}
	});
</script>

<div class="ui-collapsable-block-container ui-collapsable-{position} {classNameContainer}">
	{#if render}
		<svelte:element
			this={as}
			data-collapsed={open}
			use:animate
			class="ui-collapsable-block {className}"
		>
			{@render content()}
		</svelte:element>
	{/if}
	{@render children()}
</div>

<style>
	@layer nova {
		.ui-collapsable-block-container {
			gap: 0;
			place-items: start;
		}
	}
	.ui-collapsable-block-container {
		display: flex;
		width: fit-content;
		flex-wrap: nowrap;
		place-items: start;
	}
	.ui-collapsable-block {
		overflow: hidden;
		flex-shrink: 0;
	}
	.ui-collapsable-top {
		flex-direction: column;
	}
	.ui-collapsable-bottom {
		flex-direction: column-reverse;
	}
	.ui-collapsable-left {
		flex-direction: row;
	}
	.ui-collapsable-right {
		flex-direction: row-reverse;
	}
</style>
