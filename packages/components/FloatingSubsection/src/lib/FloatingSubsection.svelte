<script lang="ts">
	import { ElementAnimation } from '@nv-org/element-animation-js';
	import { setSubsectionPosition } from './utils';
	export let offset = 15;
	export let classNameContainer = '';
	export let position: string = 'right';
	export let openOnHover = true;
	export let open = false;
	let render = false;

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
			<div class="ui-subsection-group-content {classNameContainer}">
				<slot />
			</div>
		</div>
	{/if}
	<slot name="trigger" />
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
