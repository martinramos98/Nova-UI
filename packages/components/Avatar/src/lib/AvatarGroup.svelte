<script lang="ts">
	import type { Action } from 'svelte/action';
	import Avatar from './Avatar.svelte';
	import { SequencedAnimation } from '@nv-org/element-animation-js';
	export let maxAvatarsToShow = 2;
	export let collapseOnClick = true;
	export let collapse = false;
	let buttonHiddenControlerEl: HTMLElement;
	let outOfRangeAvatars = 0;
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
		// const seqAnim = SequencedChildrenAnimation(
		// 	hiddenGroupEl,
		// 	{
		// 		animations: {
		// 			keyframes: [
		// 				{
		// 					maxWidth: '100px'
		// 				},
		// 				{ maxWidth: '0px' }
		// 			],
		// 			animationOptions: {
		// 				duration: 300,
		// 				iterations: 1,
		// 				easing: 'ease-in-out',
		// 				fill: 'both',
		// 				direction: 'normal'
		// 			}
		// 		},
		// 		onFinishedAnimation() {
		// 			if (collapse) {
		// 				avatarContainerEl.style.overflowX = 'visible';
		// 			}
		// 		}
		// 	},
		// 	'last'
		// );
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
				// seqAnim,
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
		// hiddenGroupEl.style.translate = `${width}px 0`;
		hiddenGroupEl.style.maxWidth = '0';
		hiddenGroupEl.style.visibility = 'visible';
	}
	function clickExpand() {
		collapse = !collapse;
		collapse ? animation.playForward() : animation.reverse();
	}
</script>

<div bind:this={avatarContainerEl} use:action={{ maxAvatarsToShow }} class="ui-avatar-group">
	<slot />
	<div bind:this={hiddenGroupEl} class="ui-avatars-hidden-container"></div>
	{#if outOfRangeAvatars > 0}
		<button
			use:createAnimation
			class="ui-button-collapse-avatars"
			data-collapse={collapse}
			bind:this={buttonHiddenControlerEl}
			disabled={!collapseOnClick}
			on:click={clickExpand}
		>
			<Avatar className={'bg-[var(--color-container)]'} avatarName={`+ ${outOfRangeAvatars}`}
			></Avatar>
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
