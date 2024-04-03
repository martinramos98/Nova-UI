<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../Button/Button.svelte';
	import { ElementAnimation, type ElementAnimationParams } from '$lib/Animations/Animation.js';
	export let onClickTrigger: undefined | (() => void) = undefined;
	export let triggerText = '';
	let container: HTMLElement;
	let positionContent = { top: 0, left: 0 };
	let open = false;
	let render = false;
	let animationDropdown: ElementAnimation;
	let toggleDropdown: () => void;
	const animationConfig: ElementAnimationParams = {
		animations: {
			keyframes: [{ opacity: '0' }, { opacity: '1' }],
			animationOptions: {
				fill: 'both',
				direction: 'normal',
				iterations: 1,
				duration: 200,
				easing: 'ease-in-out'
			}
		},
		iterations: 1,
		alternate: false,
		onFinishedAnimation() {
			if (!open) {
				render = false;
			}
		}
	};
	function animationOpen(node: HTMLElement) {
		animationDropdown = new ElementAnimation(node, animationConfig);
		animationDropdown.playForward();
	}
	toggleDropdown = () => {
		open = !open;
		if (open === false) {
			window.removeEventListener('click', clickOnOpenedDropdown);
			animationDropdown.reverse();
		} else {
			window.addEventListener('click', clickOnOpenedDropdown);
			render = true;
		}
	};
	onMount(() => {
		const buttonElement = container.firstElementChild;
		const rects = buttonElement?.getBoundingClientRect();
		positionContent = { top: (rects?.height as number) + 8, left: 0 };
		// @ts-expect-error Element custom prop
		container['toggleDropdown'] = toggleDropdown;
	});
	const clickOnOpenedDropdown = (ev: MouseEvent) => {
		if (!(ev.target as Element).closest('.ui-dropdown')) {
			window.removeEventListener('click', clickOnOpenedDropdown);
			open = false;
			animationDropdown.reverse();
		}
		ev.preventDefault();
	};
	console.log(triggerText);
</script>

<div class="ui-dropdown" bind:this={container}>
	{#if !$$slots.trigger}
		<Button
			variant="solid"
			colors="container-hight"
			className="rounded-lg py-2"
			buttonProps={{
				events: {
					click: () => {
						toggleDropdown();
						onClickTrigger && onClickTrigger();
					}
				}
			}}
		>
			{triggerText.toString()}
		</Button>
	{/if}

	<button on:click={toggleDropdown}>
		<slot name="trigger" />
	</button>

	{#if render}
		<div
			use:animationOpen
			style="top:{positionContent.top}px;left:0;"
			class="ui-dropdown-content ui-color-container-hight ui-variant-solid rounded-xl"
		>
			<slot {toggleDropdown} />
		</div>
	{/if}
</div>

<style>
	/* :global(.dropdown[open='true'] > .dropdown-content) {
		transition:
			translate 0.3s var(--ease-elastic-in-out-4),
			scale 0.2s var(--ease-5),
			opacity 0.4s var(--ease-4);
		position: absolute;
		scale: 100%;
		opacity: 1;
	}
	.ui-dropdown[open='false'] > .ui-dropdown-content {
		scale: 0;
		opacity: 0;
	} */
	@layer nova {
		.ui-dropdown {
			position: relative;
			display: inline-block;
		}
		.ui-dropdown-content {
			width: 100%;
			height: auto;
			padding: 10px;
			z-index: 99;
			/* transition:
			translate 0.3s var(--ease-elastic-in-out-4),
			scale 0.4s var(--ease-5) 0.1s,
			opacity 0.3s var(--ease-4); */
			position: absolute;
		}
	}
</style>
