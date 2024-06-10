<script lang="ts">
	// TODO: Prop activeEffect: when is open dropdown mantains click effect styling
	// FIXME: When click autside validate if is self too, not only if is a ui-dropdown-trigger
	import { onMount } from 'svelte';
	import { type Snippet } from 'svelte';
	import Button from '../Button/Button.svelte';
	import { ElementAnimation, type ElementAnimationParams } from '$lib/Animations/Animation.js';
	import { setFloatingPosition } from '$lib/utils/utils.js';
	export let onClickTrigger: undefined | (() => void) = undefined;
	export let children: Snippet<[any]> | undefined = undefined;
	export let offset = 5;
	export let triggerText = '';
	export let position = 'right-start';
	export let Trigger: Snippet | undefined = undefined;
	let container: HTMLElement;
	let open = false;
	let render = false;
	let animationDropdown: ElementAnimation;
	let dropdownEL: HTMLElement;
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
		if (!dropdownEL || !dropdownEL.contains(ev.target as Element)) {
			window.removeEventListener('click', clickOnOpenedDropdown);
			open = false;
			animationDropdown.reverse();
		}
		ev.preventDefault();
	};
	function setDropdownContentPosition(node: HTMLElement) {
		dropdownEL = node.closest('.ui-dropdown') as HTMLElement;
		setFloatingPosition({ element: node, position, offset });
	}
</script>

<div class="ui-dropdown" bind:this={container}>
	{#if Trigger}
		<button
			on:click={() => {
				toggleDropdown();
				onClickTrigger && onClickTrigger();
			}}
		>
			{@render Trigger()}
		</button>
	{:else}
		<Button
			variant="solid"
			colors="container"
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
	{#if render}
		<div use:animationOpen use:setDropdownContentPosition class="ui-dropdown-content rounded-xl">
			{#if children}
				{@render children(toggleDropdown)}
			{/if}
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
			border: 1px solid var(--color-border);
			background-color: var(--color-surface);
			height: auto;
			padding: 10px;
			z-index: 99;
			position: absolute;
		}
	}
</style>
