<script lang="ts">
	import { setPosition } from '$lib/utils/utils.js';
	import { onMount } from 'svelte';
	export let offset = 5;
	export let position = 'top-start';
	export let className = '';
	export let colors = '';
	export let variant = '';
	let open = false;
	let popover: HTMLElement;
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
		effect = new KeyframeEffect(popover, animationKeyframe, animationOptions);
		animation = new Animation(effect, document.timeline);
		popover.style.visibility = 'hidden';
		animation.addEventListener('finish', () => {
			if (open) {
				popover.style.visibility = 'visible';
			} else {
				popover.style.visibility = 'hidden';
			}
			animation.commitStyles();
		});
	});
	function handleTogglePopover(ev: MouseEvent) {
		const el = ev.target as HTMLElement;
		if (open && !popover.contains(el) && popover !== el) {
			console.log('closing from extern');
			open = false;
			animation.pause();
			animation.reverse();
			window.removeEventListener('click', handleTogglePopover);
		}
		ev.preventDefault();
		ev.stopImmediatePropagation();
	}
	function onClickPopover(ev: MouseEvent) {
		// console.log('click', open);
		ev.preventDefault();
		ev.stopImmediatePropagation();
		if (popover.contains(ev.target) && popover !== ev.target) {
			return;
		}
		if (open) {
			open = false;
			window.removeEventListener('click', handleTogglePopover);
			animation.pause();
			animation.reverse();
		} else {
			popover.style.visibility = 'visible';
			open = true;
			animation.pause();
			animation.playbackRate = 1;
			animation.play();
			window.addEventListener('click', handleTogglePopover);
		}
	}
</script>

<div on:click|capture={onClickPopover} bind:this={container} class="ui-popover-container">
	<slot />
	<div
		bind:this={popover}
		style={cssPosition}
		class="ui-popover ui-color-{colors !== '' ? colors : ''} ui-variant-{variant !== ''
			? variant
			: ''}  {className}"
	>
		<slot name="content" />
	</div>
</div>

<style>
	@layer nova {
		.ui-popover-container {
			position: relative;
			display: inline-block;
		}
		/* .ui-tooltip-container:hover {
			& > .ui-tooltip {
				opacity: 1;
				visibility: visible;
			}
		} */
		.ui-popover {
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
