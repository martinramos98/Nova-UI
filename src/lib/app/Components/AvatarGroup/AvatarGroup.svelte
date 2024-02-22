<script lang="ts">
	import { afterUpdate } from 'svelte';
	import type { Action } from 'svelte/action';
	import Avatar from '../Avatar/Avatar.svelte';
	export let maxAvatarsToShow = 2;
	export let collapseOnClick = true;
	export let collapse = false;
	// export let isCompressed = true;
	let hiddenGroupRef;
	let outOfRangeAvatars = 0;
	let defaultWidthHidden = '';
	const action: Action<HTMLElement, { maxAvatarsToShow: number; collapse: boolean }> = (
		node,
		actionArgs
	) => {
		let idx = 0;
		const hiddenGroupEl = node.querySelector('.ui-avatars-hidden-container') as Element;
		const showGroupEl = node.querySelector('.ui-avatars-group-container') as Element;
		const firsChild = node.firstElementChild;
		recursiveInsertionOfAvatars(firsChild, 0);
		function recursiveInsertionOfAvatars(child: Element | null, idx: number) {
			if (!child || child === hiddenGroupEl || child === showGroupEl) {
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
		// @ts-expect-error styling type
		hiddenGroupEl.style.maxWidth = '0';
		node.style.cssText = '';
	};

	function clickExpand() {
		collapse = !collapse;
		if (collapse) {
			// @ts-expect-error styling type
			hiddenGroupRef.style.maxWidth = defaultWidthHidden + 'px';
		} else {
			// @ts-expect-error styling type
			hiddenGroupRef.style.maxWidth = '0';
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
	// 				// @ts-expect-error styling child type
	// 				child.style.borderColor = 'transparent';
	// 			}
	// 			recursiveAnimationOnEndNextSibling(child.nextElementSibling, toHide);
	// 		});
	// 	}
	// }
</script>

<div use:action={{ maxAvatarsToShow, collapse }} style="opacity: 0;" class="ui-avatar-group">
	<slot />
	<div class="ui-avatars-group-container"></div>
	<div
		bind:this={hiddenGroupRef}
		class="ui-avatars-hidden-container"
		data-collapse={collapse}
	></div>
	{#if outOfRangeAvatars !== 0}
		<button
			class="ui-button-collapse-avatars"
			data-collapse={collapse}
			disabled={!collapseOnClick}
			on:click={clickExpand}
		>
			<Avatar avatarBordered avatarName={`+ ${outOfRangeAvatars}`}></Avatar>
		</button>
	{/if}
</div>

<style>
	.ui-avatar-group {
		display: flex;
		align-items: center;
		width: max-content;
		flex-direction: row;
		transition: opacity 0.15s ease;
		& > .ui-avatars-group-container {
			display: flex;
			z-index: 9;
			:global(& > .ui-avatar) {
				margin-inline-start: -10px;
			}
		}
		& > .ui-avatars-hidden-container {
			display: flex;
			z-index: 10;
			transition: max-width 0.3s ease;
			&[data-collapse='false'] {
				transition: max-width 0.3s ease 0.3s;
			}
			:global(& > .ui-avatar) {
				margin-inline-start: -15px;
				overflow: hidden;
			}
		}
		& > button {
			cursor: pointer;
			margin-inline-start: -10px;
			z-index: 10;
			transition: translate 0.2s ease 0.1s;
			&:hover:not([data-collapse='true']) {
				/* translate: -20px; */
			}
			&[data-collapse='true'] {
				translate: -20px 20px;
				scale: 0.5;
				transition:
					translate 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.4s,
					scale 0.3s ease 0.4s;
			}
			&[data-collapse='false'] {
				transition:
					translate 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55),
					scale 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
			}
		}
	}
</style>
