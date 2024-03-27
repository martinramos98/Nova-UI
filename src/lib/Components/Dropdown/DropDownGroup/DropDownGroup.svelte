<script lang="ts">
	import { ElementAnimation } from '$lib/Animations/Animation.js';
	import DropDownItem from '../DropDownItem/DropDownItem.svelte';
	export let textButton: string = '';
	export let colors: string = '';
	export let variant: string = '';
	export let offset = 15;
	export let classNameButton = '';
	export let classNameCotentContainer = '';
	export let position: 'right' | 'left' | 'bottom' | 'top' = 'right';
	let content: HTMLElement;
	let render = false;
	let open = false;

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
		const rects = button?.getBoundingClientRect();
		const selfRects = node.getBoundingClientRect();
		if (position === 'right') {
			const top = '0px';
			console.log(selfRects.width, -((selfRects?.width ?? 0) + offset));
			const right = `${-(selfRects?.width ?? 0) - offset}px`;
			node.style.top = top;
			node.style.right = right;
			return;
		}
		if (position === 'left') {
			const top = '0px';
			const left = `${-(selfRects?.width ?? 0) - offset}px`;
			node.style.top = top;
			node.style.left = left;
			return;
		}
		if (position === 'top') {
			const top = `${-(selfRects?.height ?? 0) - offset}px`;
			const left = '0px';
			node.style.top = top;
			node.style.left = left;
			return;
		}
		if (position === 'bottom') {
			const bottom = `${-(selfRects?.height ?? 0) - offset}px`;
			const left = '0px';
			node.style.bottom = bottom;
			node.style.left = left;
			return;
		}
	}
</script>

<div on:mouseenter={mouseEnter} on:mouseleave={mouseLeave} class="ui-dropdown-group">
	{#if render}
		<div
			use:setPosition
			use:setAnimation
			bind:this={content}
			class="ui-dropdown-group-content {classNameCotentContainer}"
		>
			<slot />
		</div>
	{/if}
	<DropDownItem className={classNameButton}>
		<slot name="trigger">
			{textButton}
		</slot>
	</DropDownItem>
</div>

<style>
	@layer nova {
		.ui-dropdown-group {
			position: relative;
			background-color: inherit;
		}
		.ui-dropdown-group-content {
			position: absolute;
			background-color: inherit;
			border-radius: 12px;
			padding: 10px 10px 10px 0px;
			padding-inline-start: 10px;
			width: max-content;
		}
	}
</style>
