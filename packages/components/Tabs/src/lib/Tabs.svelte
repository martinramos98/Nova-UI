<svelte:options runes={true} />

<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { spring } from 'svelte/motion';
	import { AnimationTabController } from './Tab/AnimationTabController.svelte.js';
	interface TabsProps {
		selectedTabKey: string | undefined;
		variant: string;
		class: string;
		classContent: string;
		classSelectionContainer: string;
		classSelector: string;
		children: Snippet;
		TabSelection: Snippet | undefined;
		animation?: string;
		position: 'top' | 'left' | 'bottom' | 'right' | '';
	}
	let {
		variant = 'default',
		class: className = '',
		classContent = '',
		classSelectionContainer = '',
		TabSelection = undefined,
		children,
		position = '',
		classSelector = '',
		animation = undefined,
		selectedTabKey = $bindable(undefined)
	}: TabsProps = $props();

	const keys = new Map<string, HTMLElement>();
	const tabController: AnimationTabController = new AnimationTabController();
	setContext('tabContext', {
		selectTab,
		subscribeKey,
		animation,
		tabController,
		isSelected(key: string) {
			return selectedTabKey === key;
		}
	});
	function selectTab(key: string) {
		if (selectedTabKey === key) return;
		getPositionOfElement(key);
		selectedTabKey = key;
		tabController.selectTab(key);
	}
	function subscribeKey(key: string, el: HTMLElement) {
		keys.set(key, el);
	}

	const coordSelector = spring(
		{ top: 0, left: 0 },
		{
			stiffness: 0.1,
			damping: 0.4
		}
	);
	const sizeSelector = spring(
		{
			width: 0,
			height: 0
		},
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	function getPositionOfElement(key: string) {
		const el = keys.get(key) as HTMLElement;
		coordSelector.set({ top: el.offsetTop, left: el.offsetLeft });
		sizeSelector.set({ width: el.offsetWidth, height: el.offsetHeight });
	}
	function setFirstKey(node: HTMLElement) {
		const k = keys.keys();
		selectTab(k.next().value as string);
	}
	$effect(() => {
		if (selectedTabKey) selectTab(selectedTabKey);
	});
</script>

<div
	class="ui-tabs {position !== ''
		? `ui-tabs-${position}`
		: ''} ui-tabs-variant-{variant} {className}"
>
	<div class="ui-tab-selection {classSelectionContainer}">
		{#if TabSelection}
			{@render TabSelection()}
		{/if}
		<span
			class={classSelector}
			style="top:{variant === 'underlined'
				? $sizeSelector.height
				: $coordSelector.top}px;left:{$coordSelector.left}px;width:{$sizeSelector.width}px;height:{variant !==
			'underlined'
				? $sizeSelector.height
				: 2}px;"
			aria-hidden="true"
		></span>
	</div>
	<div use:setFirstKey class="ui-tab-content {classContent}">
		{@render children()}
	</div>
</div>

<style>
	@layer nova {
		.ui-tab-content {
			position: relative;
			padding: var(--spacing-4);
			/* transition:
				min-height 0.8s ease-in-out,
				min-width 0.8s ease-in-out; */
		}
	}
</style>
