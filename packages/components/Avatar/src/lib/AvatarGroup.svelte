<svelte:options runes={true} />

<script lang="ts">
	import type { Action } from 'svelte/action';
	import Avatar from './Avatar.svelte';
	import { SequencedAnimation } from '@nv-org/element-animation-js';
	import type { Snippet } from 'svelte';
	interface AvatarGroupProps {
		maxAvatarsToShow?: number;
		collapseOnClick?: boolean;
		collapse?: boolean;
		children: Snippet;
	}
	let {
		maxAvatarsToShow = 2,
		collapseOnClick = true,
		collapse = $bindable(false),
		children
	}: AvatarGroupProps = $props();
	let buttonHiddenControlerEl: HTMLElement;
	let outOfRangeAvatars = $state(0);
	let animation: SequencedAnimation;
	let hiddenGroupEl: HTMLElement;
	let avatarContainerEl: HTMLElement;
	const action: Action<HTMLElement, { maxAvatarsToShow: number }> = (node) => {
		const firstChild = node.firstChild as HTMLElement;
		recursiveInsertionOfAvatars(firstChild, 0);
		function recursiveInsertionOfAvatars(child: Element | null, idx: number) {
			if (!child || child === hiddenGroupEl || child === buttonHiddenControlerEl) {
				return;
			}
			if (idx < maxAvatarsToShow) {
				const nextEl = child.nextElementSibling;
				recursiveInsertionOfAvatars(nextEl as Element, idx + 1);
			} else {
				outOfRangeAvatars++;
				const nextEl = child.nextElementSibling;
				hiddenGroupEl.append(child);
				recursiveInsertionOfAvatars(nextEl as Element, idx + 1);
			}
		}

		hiddenGroupEl.style.visibility = 'hidden';
		node.style.visibility = 'visible';
	};

	function createAnimation(btn: HTMLElement) {
		const width = hiddenGroupEl.offsetWidth;
		animation = new SequencedAnimation(
			[
				{
					element: hiddenGroupEl,
					animationParams: {
						animations: {
							keyframes: [
								{ maxWidth: '0px', offset: 0, opacity: 0 },
								{ maxWidth: `${width}px`, opacity: '1', offset: 1 }
							],
							animationOptions: {
								duration: hiddenGroupEl.childElementCount * 120,
								iterations: 1,
								easing: 'ease-in-out',
								direction: 'normal',
								fill: 'both'
							}
						},
						onFinishedAnimation() {
							if (collapse) {
								avatarContainerEl.style.overflowX = 'visible';
							}
						}
					}
				},
				{
					element: buttonHiddenControlerEl,
					animationParams: {
						animations: {
							keyframes: [
								{ scale: '1', translate: '0 0' },
								{ scale: '0.5', translate: '-20px 25px' }
							],
							animationOptions: {
								duration: 200,
								iterations: 1,
								easing: 'ease-in-out',
								direction: 'normal',
								fill: 'both'
							}
						},
						onFinishedAnimation() {
							if (!collapse) {
								avatarContainerEl.style.overflowX = 'hidden';
							}
						}
					}
				}
			],
			{
				alternate: false,
				iterations: 1
			}
		);
		hiddenGroupEl.style.maxWidth = '0';
		hiddenGroupEl.style.visibility = 'visible';
	}
	function clickExpand() {
		collapse = !collapse;
		collapse ? animation.playForward() : animation.reverse();
	}
</script>

<div bind:this={avatarContainerEl} use:action={{ maxAvatarsToShow }} class="ui-avatar-group">
	{@render children()}
	<div bind:this={hiddenGroupEl} class="ui-avatars-hidden-container"></div>
	{#if outOfRangeAvatars > 0}
		<button
			use:createAnimation
			class="ui-button-collapse-avatars"
			data-collapse={collapse}
			bind:this={buttonHiddenControlerEl}
			disabled={!collapseOnClick}
			onclick={clickExpand}
		>
			<Avatar class={'bg-[var(--color-container)]'} avatarName={`+ ${outOfRangeAvatars}`}></Avatar>
		</button>
	{/if}
</div>

<style>
	@layer nova {
		.ui-button-collapse-avatars {
			cursor: pointer;
		}
		.ui-avatar-group {
			position: relative;
			visibility: hidden;
			gap: 0;
		}
		.ui-button-collapse-avatars {
			width: fit-content;
			height: fit-content;
			z-index: 15;
		}
		.ui-avatars-hidden-container {
			opacity: 0;
		}
		:global(.ui-avatars-hidden-container > .ui-avatar) {
			overflow-x: hidden;
			flex-shrink: 0;
		}
	}
</style>
