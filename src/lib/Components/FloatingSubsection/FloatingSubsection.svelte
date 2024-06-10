<script lang="ts">
	import { ElementAnimation } from '$lib/Animations/Animation.js';
	export let offset = 15;
	export let classNameContainer = '';
	export let position: string = 'right';
	export let openOnHover = true;
	export let open = false;
	// let content: HTMLElement;
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
		const button = node.previousElementSibling;
		// const rects = button?.getBoundingClientRect();
		const selfRects = node.getBoundingClientRect();
		if (position === 'right') {
			const top = '0px';
			const right = `${offset}px`;
			node.style.top = '0';
			node.style.right = `-${node.offsetWidth + offset}px`;
			node.style.paddingTop = top;
			node.style.paddingLeft = right;
			return;
		}
		if (position === 'left') {
			const top = '0px';
			const left = `${-(selfRects?.width ?? 0) - offset}px`;
			node.style.paddingTop = top;
			node.style.paddingLeft = left;
			return;
		}
		if (position === 'top') {
			const top = `${-(selfRects?.height ?? 0) - offset}px`;
			const left = '0px';
			node.style.paddingTop = top;
			node.style.paddingLeft = left;
			return;
		}
		if (position === 'bottom') {
			const bottom = `${-(selfRects?.height ?? 0) - offset}px`;
			const left = '0px';
			node.style.paddingBottom = bottom;
			node.style.paddingLeft = left;
			return;
		}
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
