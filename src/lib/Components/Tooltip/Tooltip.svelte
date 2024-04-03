<script lang="ts">
	import { onMount } from 'svelte';
	import { setPosition } from '$lib/utils/utils.js';
	export let className = '';
	export let colors = '';
	export let variant = '';
	export let offset = 5;
	export let position = 'top-start';
	export let withArrow = false;
	export let content = '';
	let open = false;
	let tooltip: HTMLElement;
	let container: HTMLElement;
	let cssPosition = '';
	let effect: KeyframeEffect;
	let animation: Animation;
	const animationKeyframe: Keyframe[] = [
		{ opacity: 0, scale: 0, offset: 0 },
		{ opacity: 0, offset: 0.5 },
		{ opacity: 1, scale: 1, offset: 1 }
	];
	const animationOptions: KeyframeEffectOptions = {
		duration: 300,
		easing: 'ease-in-out',
		iterations: 1,
		fill: 'forwards'
	};
	onMount(() => {
		cssPosition = setPosition(container, { offset, position });
		effect = new KeyframeEffect(tooltip, animationKeyframe, animationOptions);
		animation = new Animation(effect, document.timeline);
		tooltip.style.visibility = 'hidden';
		animation.addEventListener('finish', () => {
			if (open) {
				tooltip.style.visibility = 'visible';
			} else {
				tooltip.style.visibility = 'hidden';
			}
			animation.commitStyles();
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
</script>

<div
	bind:this={container}
	on:mouseenter={onMouseIn}
	on:mouseleave={onMouseOut}
	class="ui-tooltip-container"
>
	<slot />
	<div
		bind:this={tooltip}
		style={cssPosition}
		class="ui-tooltip ui-color-{colors !== '' ? colors : ''} ui-variant-{variant !== ''
			? variant
			: ''} {className}"
	>
		<slot name="content">
			{content}
		</slot>
	</div>
</div>

<style>
	@layer nova {
		.ui-tooltip-container {
			position: relative;
			display: inline-block;
		}
		/* .ui-tooltip-container:hover {
			& > .ui-tooltip {
				opacity: 1;
				visibility: visible;
			}
		} */
		.ui-tooltip {
			background-color: var(--color-container);
			color: var(--color-text);
			width: max-content;
			min-width: 100px;
			border-radius: var(--radius-xl);
			visibility: hidden;
			padding: 0.35rem;
			height: auto;
			position: absolute;
			opacity: 0;
		}
	}
</style>
