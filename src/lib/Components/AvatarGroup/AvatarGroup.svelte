<script lang="ts">
	import type { Action } from 'svelte/action';
	import Avatar from '../Avatar/Avatar.svelte';
	import { SequencedAnimation } from '$lib/Animations/SequencedAnimation.js';
	export let maxAvatarsToShow = 2;
	export let collapseOnClick = true;
	export let collapse = false;
	let buttonHiddenControlerEl: HTMLElement;
	let outOfRangeAvatars = 0;
	let animation: SequencedAnimation;
	let hiddenGroupEl: HTMLElement;
	const action: Action<HTMLElement, { maxAvatarsToShow: number }> = (node) => {
		const firstChild = node.firstChild as HTMLElement;
		recursiveInsertionOfAvatars(firstChild, 0);
		function recursiveInsertionOfAvatars(child: Element | null, idx: number) {
			if (!child || child === hiddenGroupEl) {
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
		animation = new SequencedAnimation([], {
			alternate: false,
			iterations: 1
		});
		node.hidden = false;
	};

	function clickExpand() {}
</script>

<div use:action={{ maxAvatarsToShow }} class="ui-avatar-group">
	<slot />
	<div bind:this={hiddenGroupEl} class="ui-avatars-hidden-container"></div>
	{#if outOfRangeAvatars > 0}
		<button
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
		.ui-avatar-group {
			position: relative;
			gap: 0;
		}
		.ui-button-collapse-avatars {
			width: fit-content;
			height: fit-content;
			z-index: 15;
		}
	}
</style>
