<script lang="ts">
	import { ElementAnimation } from '$lib/Animations/Animation.js';
	import { setPosisitionPopover } from '$lib/utils/utils.js';
	import { type Snippet } from 'svelte';
	export let popoverContent: Snippet;
	export let offset = 5;
	export let position = 'top-start';
	export let className = '';
	export let colors = '';
	export let variant = '';
	export let open = false;
	export let children: Snippet;
	let render = false;
	let popover: HTMLElement;
	let animation: ElementAnimation;
	let popoverContainer: HTMLElement;
	const animationKeyframe: Keyframe[] = [
		{ opacity: 0, scale: 0.9 },
		{ opacity: 1, scale: 1 }
	];
	const animationOptions: KeyframeEffectOptions = {
		duration: 300,
		easing: 'ease-in-out',
		iterations: 1,
		direction: 'normal',
		fill: 'both'
	};
	function handleTogglePopover(ev: PointerEvent) {
		const el = ev.target as HTMLElement;
		if (open && !popoverContainer.contains(el)) {
			open = false;
			animation.reverse();
			window.removeEventListener('pointerdown', handleTogglePopover);
		}
		ev.preventDefault();
	}

	function onClickPopover(ev: PointerEvent) {
		if (open) {
			if (!popover.contains(ev.target)) {
				open = false;
				window.removeEventListener('pointerdown', handleTogglePopover);
				animation.reverse();
			}
		} else {
			open = true;
			render = true;
		}
	}
	function setPopover(node: HTMLElement) {
		setPosisitionPopover({ offset, position, element: node });

		animation = new ElementAnimation(popover, {
			animations: {
				keyframes: animationKeyframe,
				animationOptions: animationOptions
			},
			iterations: 1,
			alternate: false,
			onFinishedAnimation() {
				if (!open) {
					render = false;
				}
			}
		});
		node.style.visibility = 'visible';
		animation.playForward();
		window.addEventListener('pointerdown', handleTogglePopover);
	}
</script>

<div
	on:pointerdown|capture={onClickPopover}
	on:keydown={() => {}}
	role="tooltip"
	bind:this={popoverContainer}
	class="ui-popover-container"
>
	{@render children()}
	{#if render}
		<div
			use:setPopover
			bind:this={popover}
			class="ui-popover ui-color-{colors !== '' ? colors : ''} ui-variant-{variant !== ''
				? variant
				: ''}  {className}"
		>
			{@render popoverContent()}
		</div>
	{/if}
</div>

<style>
	@layer nova {
		.ui-popover-container {
			position: relative;
			display: inline-block;
			width: max-content;
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
			z-index: 10;
		}
	}
</style>
