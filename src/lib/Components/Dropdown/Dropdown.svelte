<script lang="ts">
	import { onMount } from 'svelte';
	import { type Snippet } from 'svelte';
	import Button from '../Button/Button.svelte';
	import { ElementAnimation, type ElementAnimationParams } from '$lib/Animations/Animation.js';
	import { setFloatingPosition, setPositionDropdown } from '$lib/utils/utils.js';
	export let onClickTrigger: undefined | (() => void) = undefined;
	export let trigger: Snippet | undefined = undefined;
	export let offset = 5;
	export let triggerText = '';
	export let position = 'right-start';
	let container: HTMLElement;
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
		// @ts-expect-error Type definition for element
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
	function setDropdownContentPosition(node: HTMLElement) {
		setFloatingPosition({ element: node, position, offset });
	}
</script>

<div class="ui-dropdown" bind:this={container}>
	<slot name="trigger">
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
	</slot>
	{#if trigger}
		<button
			on:click={() => {
				toggleDropdown();
				onClickTrigger && onClickTrigger();
			}}
		>
			{@render trigger()}
		</button>
	{/if}

	{#if render}
		<div
			use:animationOpen
			use:setDropdownContentPosition
			class="ui-dropdown-content ui-color-container-hight ui-variant-solid rounded-xl"
		>
			<slot {toggleDropdown} />
		</div>
	{/if}
</div>

<style>
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
			position: absolute;
		}
	}
</style>
