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
	let el: HTMLElement;
	function loaded(node: HTMLElement) {
		if (!tabContext.animation) return;
		node.style.opacity = '0';

		const computedStyle = (node.parentElement as HTMLElement).computedStyleMap();
		const minH = (computedStyle.get('min-height') as CSSUnitValue).value;
		const pt = (computedStyle.get('padding-top') as CSSUnitValue).value;
		const pb = (computedStyle.get('padding-bottom') as CSSUnitValue).value;
		const bt = (computedStyle.get('border-top-width') as CSSUnitValue).value;
		const bb = (computedStyle.get('border-bottom-width') as CSSUnitValue).value;

		if (tabContext.animation === 'fade-slide' && minH >= node.offsetHeight + pt + pb + bt + bb) {
			console.log('animation is fade', node.offsetHeight, minH);
			inAnimation = tabAnimationMap['fade']?.(node, {
				ease: 'ease-in'
			});
		} else {
			console.log('animation is fade-slide');
			inAnimation = tabContext.animation
				? tabAnimationMap[tabContext.animation]?.(node, {
						orientation: 'vertical',
						ease: 'ease-in',
						duration: 300,
						initialHeightAnimation: typeof minH === 'number' ? minH - pt - pb - bt - bb : 0
					})
				: undefined;
		}
		outAnimation = tabContext.animation
			? tabAnimationMap[tabContext.animation]?.(node, {
					orientation: 'vertical',
					ease: 'ease-out',
					duration: 500,
					initialHeightAnimation: 0
				})
			: undefined;

		if (outAnimation) {
			outAnimation.subscribeEndCallback(() => {
				render = false;
				if (!(tabContext.animation === 'slide-fade')) tabContext.tabController.notifyEndAnimation();
			});
		}
		if (inAnimation) {
			inAnimation.subscribeEndCallback(() => {
				node.style.height = '';
				node.style.overflow = '';
			});
		}
		tabContext.tabController.updateAnimation(
			inAnimation as BasicAnimation,
			key,
			AnimationState.INTRO
		);
		inAnimation?.playForward();
		const total =
			node.offsetHeight +
			// (computedStyle.get('margin-top') as CSSUnitValue).value +
			// (computedStyle.get('margin-bottom') as CSSUnitValue).value +
			pt +
			pb +
			bt +
			bb;

		(node.parentElement as HTMLElement).style.minHeight = total + 'px';
	}
	// TODO: hacer que slideFade animation ocurra a la vez el in y out
	const renderTabCallback = () => {
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
			const computedStyle = (el.parentElement as HTMLElement).computedStyleMap();
			const total =
				el.offsetHeight +
				// (computedStyle.get('margin-top') as CSSUnitValue).value +
				// (computedStyle.get('margin-bottom') as CSSUnitValue).value +
				(computedStyle.get('padding-top') as CSSUnitValue).value +
				(computedStyle.get('padding-bottom') as CSSUnitValue).value +
				(computedStyle.get('border-top-width') as CSSUnitValue).value +
				(computedStyle.get('border-bottom-width') as CSSUnitValue).value;
			console.log(el.offsetHeight, total, 'minH To set');
			// debugger;
			(el.parentElement as HTMLElement).style.minHeight = `${total}px`;

			outAnimation?.reverse();
			if (tabContext.animation === 'slide-fade') {
				tabContext.tabController.notifyEndAnimation();
			}
		}
	};
	tabContext.tabController.subscribeTabRender(renderTabCallback, key);
</script>

{#if render}
	<div bind:this={el} use:loaded class="ui-selected-tab {className}">
		{@render children()}
	</div>
{/if}

<style>
	@layer nova {
		.ui-selected-tab {
			width: 100%;
			height: max-content;
		}
	}
</style>
