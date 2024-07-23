<svelte:options runes={true} />

<script lang="ts">
	import { setPosisitionPopover, animateRender } from '@nv-org/utils';
	import { type Snippet } from 'svelte';
	interface PopoverProps {
		offset?: number;
		position?: string;
		variant?: string;
		open?: boolean;
		children: Snippet;
		popoverContent: Snippet;
		className?: string;
		color?: string;
	}
	let {
		popoverContent,
		offset = 5,
		position = 'top-start',
		className = '',
		color = '',
		variant = '',
		open = $bindable(false),
		children
	}: PopoverProps = $props();
	let popover: HTMLElement | undefined = $state();
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
	const animationRender = animateRender({
		get open() {
			return open;
		},
		get element() {
			return popover;
		},
		animationParams: {
			animations: {
				keyframes: animationKeyframe,
				animationOptions
			},
			iterations: 1
		}
	});
	$effect(() => {
		if (!open) {
			window.removeEventListener('pointerdown', handleTogglePopover);
		}
	});
	function handleTogglePopover(ev: PointerEvent) {
		const el = ev.target as HTMLElement;
		if (open && !popoverContainer.contains(el)) {
			open = false;
			// animation.reverse();
		}
		ev.preventDefault();
	}

	function onClickPopover(ev: PointerEvent) {
		if (open) {
			if (!popover.contains(ev.target)) {
				open = false;
				// animation.reverse();
			}
		} else {
			open = true;
			// render = true;
		}
	}
	function setPopover(node: HTMLElement) {
		setPosisitionPopover({ offset, position, element: node });

		// animation = new ElementAnimation(popover, {
		// 	animations: {
		// 		keyframes: animationKeyframe,
		// 		animationOptions: animationOptions
		// 	},
		// 	iterations: 1,
		// 	alternate: false,
		// 	onFinishedAnimation() {
		// 		if (!open) {
		// 			render = false;
		// 		}
		// 	}
		// });
		node.style.visibility = 'visible';
		// animation.playForward();
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
	{#if animationRender.render}
		<div
			use:setPopover
			bind:this={popover}
			class="ui-popover ui-color-{color !== '' ? color : ''} ui-variant-{variant !== ''
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
