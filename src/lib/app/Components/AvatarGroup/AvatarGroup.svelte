<script lang="ts">
	import { afterUpdate } from 'svelte';
	import type { Action } from 'svelte/action';
	import Avatar from '../Avatar/Avatar.svelte';
	export let maxAvatarsToShow = 2;
	export let collapseOnClick = true;
	export let collapse = false;
	// export let isCompressed = true;
	let containerRef: HTMLElement;
	let outOfRangeAvatars = 0;
	const action: Action<HTMLElement, { maxAvatarsToShow: number; collapse: boolean }> = (
		node,
		actionArgs
	) => {
		let idx = 0;
		debugger;
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
				const nextEl = child.nextElementSibling;
				hiddenGroupEl.append(child);
				recursiveInsertionOfAvatars(nextEl as Element, idx + 1);
			}
		}
		node.style.cssText = '';
	};

	function clickExpand() {
		// debugger;
		collapse = !collapse;
		// const firstChildToShow = containerRef.children.item(maxAvatarsToShow);
		// if (collapse) {
		// recursiveAnimationOnEndNextSibling(firstChildToShow, false);
		// } else {
		// recursiveAnimationOnEndNextSibling(firstChildToShow, true);
		// }
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

<div
	bind:this={containerRef}
	use:action={{ maxAvatarsToShow, collapse }}
	style="opacity: 0;"
	class="ui-avatar-group"
>
	<slot />
	<div class="ui-avatars-group-container"></div>
	<div class="ui-avatars-hidden-container" data-collapse={collapse}></div>
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
		& > .ui-avatar {
			margin-inline-start: -10px;
		}
		& > button {
			cursor: pointer;
			margin-inline-start: -10px;
			z-index: 10;
			transition: translate 0.2s ease 0.1s;
			&:hover:not([data-collapse='true']) {
				translate: -20px;
			}
			&[data-collapse='true'] {
				scale: 0.5;
				transition:
					translate 0.2s ease 0.1s,
					scale 0.2s ease;
			}
		}
	}
</style>
