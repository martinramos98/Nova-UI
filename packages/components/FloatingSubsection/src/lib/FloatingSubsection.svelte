<svelte:options runes={true} />

<script lang="ts">
	import { ElementAnimation } from '@nv-org/element-animation-js';
	import { setSubsectionPosition } from './utils';
	import type { Snippet } from 'svelte';
	interface FloatinSubsectionProp {
		offset?: number;
		classContainer?: string;
		position?: string;
		openOnHover?: boolean;
		open?: boolean;
		children: Snippet;
		trigger: Snippet;
	}
	let {
		offset = 15,
		classContainer = '',
		position = 'right',
		openOnHover = true,
		open = false,
		children,
		trigger
	}: FloatinSubsectionProp = $props();
	let render = $state(false);

	let elementAnimation: ElementAnimation;

	function mouseEnter(ev: any) {
		open = true;
		if (!render) render = true;
		else elementAnimation.playForward();
	}

	function mouseLeave(ev: any) {
		open = false;
		elementAnimation.reverse();
	}
	function setHover(node: HTMLElement) {
		if (openOnHover) {
			node.addEventListener('mouseenter', mouseEnter);
			node.addEventListener('mouseleave', mouseLeave);
		}
	}
	function setAnimation(node: HTMLElement) {
		elementAnimation = new ElementAnimation(node, {
			animations: {
				keyframes: [{ opacity: 0 }, { opacity: 1 }],
				animationOptions: { fill: 'forwards', iterations: 1, duration: 300, easing: 'ease' }
			},
			iterations: 1,
			alternate: false,
			onFinishedAnimation() {
				if (!open) {
					render = false;
				}
			}
		});
		elementAnimation.playForward();
	}
	function setPosition(node: HTMLElement) {
		setSubsectionPosition({ element: node, offset, position });
	}
</script>

<div use:setHover class="ui-subsection-group">
	{#if render}
		<div class="ui-floating-container" use:setPosition use:setAnimation>
			<div class="ui-subsection-group-content {classContainer}">
				{@render children?.()}
			</div>
		</div>
	{/if}
	{@render trigger?.()}
</div>

<style>
	@layer nova {
		.ui-subsection-group {
			position: relative;
		}
		.ui-floating-container {
			position: absolute;
			background-color: transparent;
			width: fit-content;
		}
		.ui-subsection-group-content {
			background-color: var(--color-surface);
			border-radius: 12px;
			padding: 10px 10px 10px 0px;
			padding-inline-start: 10px;
			width: max-content;
		}
	}
</style>
