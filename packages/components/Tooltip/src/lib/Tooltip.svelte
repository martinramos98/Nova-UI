<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { setPosisitionPopover } from '@nv-org/utils';
	export let className = '';
	export let colors = '';
	export let variant = '';
	export let offset = 5;
	export let position = 'top-start';
	export let withArrow = false;
	export let content: string | Snippet = '';
	export let children: Snippet | undefined = undefined;
	let open = false;
	let tooltip: HTMLElement;
	let container: HTMLElement;
	// let cssPosition = '';
	let effect: KeyframeEffect;
	let animation: Animation;
	let arrowPosition = '';
	const animationKeyframe: Keyframe[] = [
		{ opacity: 0, scale: 0.9, offset: 0 },
		{ opacity: 1, scale: 1, offset: 1 }
	];
	const animationOptions: KeyframeEffectOptions = {
		duration: 300,
		easing: 'ease-in-out',
		iterations: 1,
		fill: 'forwards'
	};
	onMount(() => {
		// cssPosition = setPosition(container, { offset: withArrow ? offset + 5 : offset, position });

		effect = new KeyframeEffect(tooltip, animationKeyframe, animationOptions);
		animation = new Animation(effect, document.timeline);
		animation.addEventListener('finish', () => {
			if (open) {
				// tooltip.style.visibility = 'visible';
			} else {
				tooltip.style.visibility = 'hidden';
			}
		});
	});
	function onMouseIn(ev: MouseEvent) {
		tooltip.style.visibility = 'visible';
		open = true;
		animation.pause();
		animation.playbackRate = 1;
		animation.play();
	}
	function onMouseOut(ev: MouseEvent) {
		open = false;
		animation.pause();
		animation.reverse();
	}
	function setArrowPosition(node: SVGElement) {
		if (position === 'top' || position === 'top-start' || position === 'top-end') {
			node.style.cssText = `bottom:-8px;left:calc(50% - 7px);rotate:180deg;`;
		} else if (position === 'bottom' || position === 'bottom-start' || position === 'bottom-end') {
			node.style.cssText = `top:-8px;left:calc(50% - 7px); `;
		} else if (position === 'left' || position === 'left-start' || position === 'left-end') {
			node.style.cssText = `top:25%;right:-8px;rotate:90deg;`;
		} else if (position === 'right' || position === 'right-start' || position === 'right-end') {
			node.style.cssText = `top:25%;left:-8px;rotate:270deg`;
		}
	}
	function setPosition(node: HTMLElement) {
		setPosisitionPopover({
			position: position,
			element: node,
			offset: withArrow ? offset + 5 : offset
		});
	}
</script>

<div
	bind:this={container}
	role="tooltip"
	on:mouseenter|self={onMouseIn}
	on:mouseleave|self={onMouseOut}
	class="ui-tooltip-container"
>
	{#if children}
		{@render children()}
	{/if}
	<div
		use:setPosition
		bind:this={tooltip}
		class="ui-tooltip ui-color-{colors !== '' ? colors : ''} ui-variant-{variant !== ''
			? variant
			: ''} {className}"
	>
		{#if withArrow}
			<svg use:setArrowPosition class="ui-tooltip-arrow" style={arrowPosition} viewBox="0 0 5 5">
				<path d="M2.5 0L4.66506 3.75H0.334936L2.5 0Z" />
			</svg>
		{/if}
		{#if typeof content === 'string'}
			{content}
		{:else}
			{@render content()}
		{/if}
	</div>
</div>

<style>
	@layer nova {
		.ui-tooltip-container {
			position: relative;
			display: inline-block;
			width: fit-content;
		}
		.ui-tooltip {
			background-color: var(--color-container);
			color: var(--color-text);
			width: max-content;
			min-width: 20px;
			border-radius: var(--radius-xl);
			visibility: hidden;
			padding: 0.35rem;
			height: auto;
			min-height: 25px;
			position: absolute;
			opacity: 0;
			z-index: 50;
		}
		.ui-tooltip-arrow {
			position: absolute;
			fill: var(--color-container);
			width: 15px;
			height: 15px;
		}
	}
</style>
