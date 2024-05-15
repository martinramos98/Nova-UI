<script lang="ts">
	import type { Action } from 'svelte/action';
	import Avatar from '../Avatar/Avatar.svelte';
	import { ParallelAnimation } from '$lib/Animations/ParallelAnimation.js';
	import {
		buttonControlAnimationProps,
		avatarHiddenContainerAnimationProps
	} from '$lib/Animations/DefinedAnimations/AvatarAnimations.js';
	// TODO: Cambiar por element Animation
	export let maxAvatarsToShow = 2;
	export let collapseOnClick = true;
	export let collapse = false;
	// export let isCompressed = true;
	let showGroupEl: HTMLElement;
	let hiddenGroupEl: HTMLElement;
	let buttonHiddenControlerEl: HTMLElement;
	let outOfRangeAvatars = 0;
	let defaultWidthHidden = '';
	let animation: ParallelAnimation;
	const action: Action<HTMLElement, { maxAvatarsToShow: number; collapse: boolean }> = (node) => {
		let idx = 0;
		const firsChild = node.firstElementChild;
		recursiveInsertionOfAvatars(firsChild, 0);
		function recursiveInsertionOfAvatars(child: Element | null, idx: number) {
			if (!child || child === hiddenGroupEl.parentElement || child === showGroupEl) {
				return;
			}
			if (idx < maxAvatarsToShow) {
				const nextEl = child.nextElementSibling;
				showGroupEl.append(child as Element);
				recursiveInsertionOfAvatars(nextEl as Element, idx + 1);
			} else {
				outOfRangeAvatars++;
				const nextEl = child.nextElementSibling;
				hiddenGroupEl.append(child);
				recursiveInsertionOfAvatars(nextEl as Element, idx + 1);
			}
		}
		defaultWidthHidden = hiddenGroupEl.clientWidth.toString();
		node.style.cssText = '';
		animation = new ParallelAnimation(
			[
				{ element: buttonHiddenControlerEl, animationOptions: buttonControlAnimationProps },
				{ element: hiddenGroupEl, animationOptions: avatarHiddenContainerAnimationProps }
			],
			{ alternate: false, iterations: 1 }
		);
	};

	function clickExpand() {
		collapse = !collapse;
		if (collapse) {
			animation.playForward();
			// hiddenGroupRef.style.maxWidth = defaultWidthHidden + 'px';
		} else {
			animation.reverse();
			// hiddenGroupRef.style.maxWidth = '0';
		}
	}
	// const keyframeToHide: Keyframe[] = [{ maxWidth: '100%' }, { maxWidth: '0' }];
	// const keyframToShow: Keyframe[] = [{ width: '0' }, { maxWidth: '100%' }];
	// const optionsAnimation: KeyframeAnimationOptions = {
	// 	direction: 'normal',
	// 	fill: 'forwards',
	// 	duration: 500,
	// 	easing: 'linear'
	// };
	// function recursiveAnimationOnEndNextSibling(child: Element | null, toHide: boolean) {
	// 	if (!child || child === containerRef.lastElementChild) {
	// 		return;
	// 	} else {
	// 		const animationInstance = child.animate(
	// 			toHide ? keyframeToHide : keyframToShow,
	// 			optionsAnimation
	// 		);
	// 		animationInstance.addEventListener('finish', () => {
	// 			if (!toHide) {
	// 				// @ts-expect-error styling child type
	// 				child.style.borderColor = 'rgb(var(--color-container))';
	// 			} else {
	// 				child.style.borderColor = 'transparent';
	// 			}
	// 			recursiveAnimationOnEndNextSibling(child.nextElementSibling, toHide);
	// 		});
	// 	}
	// }
</script>

<div use:action={{ maxAvatarsToShow }} style="opacity: 0;" class="ui-avatar-group">
	<slot />
	<div bind:this={showGroupEl} class="ui-avatars-group-container"></div>
	<div data-collapse={collapse}>
		<div bind:this={hiddenGroupEl} class="ui-avatars-hidden-container"></div>
	</div>
	{#if outOfRangeAvatars !== 0}
		<button
			class="ui-button-collapse-avatars"
			data-collapse={collapse}
			bind:this={buttonHiddenControlerEl}
			disabled={!collapseOnClick}
			on:click={clickExpand}
		>
			<Avatar
				avatarBordered
				className={'bg-[var(--color-container)]'}
				avatarName={`+ ${outOfRangeAvatars}`}
			></Avatar>
		</button>
	{/if}
</div>

<style>
	@layer nova {
		div[data-collapse] {
			overflow-x: hidden;
			position: relative;
		}
		.ui-avatar-group {
			position: relative;
			gap: 0;
		}
		.ui-button-collapse-avatars {
			position: absolute;
			bottom: 0px;
			right: 0px;
			width: 50px;
			height: 50px;
			z-index: 15;
		}
	}
</style>
