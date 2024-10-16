<svelte:options runes={true} />

<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { AnimationState, type AnimationTabController } from './AnimationTabController.svelte.js';
	import { type BasicAnimation } from '@nv-org/element-animation-js';
	import tabAnimationMap from './tabAnimation.svelte.js';
	const {
		key,
		class: className = '',
		children
	}: { key: string; class?: string; children: Snippet } = $props();
	let render = $state(false);
	// --- Tab Contenxt
	const tabContext = getContext<{
		tabController: AnimationTabController;
		animation?: string;
	}>('tabContext');
	if (!tabContext) throw Error('Tab is not inside of Tabs Context');
	// ---
	let inAnimation: BasicAnimation | undefined;
	let outAnimation: BasicAnimation | undefined;
	function loaded(node: HTMLElement) {
		if (!tabContext.animation) return;
		node.style.opacity = '0';
		inAnimation = tabContext.animation
			? tabAnimationMap[tabContext.animation]?.(node, 'vertical')
			: undefined;
		outAnimation = tabContext.animation
			? tabAnimationMap[tabContext.animation]?.(node, 'vertical')
			: undefined;

		if (outAnimation) {
			outAnimation.subscribeEndCallback(() => {
				render = false;
				console.log('ounmounting after animation');
				tabContext.tabController.notifyEndAnimation();
			});
		}
		tabContext.tabController.updateAnimation(
			inAnimation as BasicAnimation,
			key,
			AnimationState.INTRO
		);
		(node.parentElement as HTMLElement).style.minHeight = `${node.clientHeight}px`;
		inAnimation?.playForward();
	}
	// TODO: hacer que slideFade animation ocurra a la vez el in y out
	const renderTabCallback = () => {
		console.log(render);
		if (!render) render = true;
		else {
			if (!tabContext.animation) {
				render = false;
				tabContext.tabController.notifyEndAnimation();
				return;
			}

			tabContext.tabController.updateAnimation(
				outAnimation as BasicAnimation,
				key,
				AnimationState.OUTRO
			);

			outAnimation?.reverse();
		}
	};
	tabContext.tabController.subscribeTabRender(renderTabCallback, key);
</script>

{#if render}
	<div use:loaded class="ui-selected-tab {className}">
		{@render children()}
	</div>
{/if}

<style>
	@layer nova {
		.ui-selected-tab {
			width: 100%;
			height: max-content;
			transition: opacity 0.15s ease;
		}
	}
</style>
