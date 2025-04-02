<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { Spring } from 'svelte/motion';
	import { TabsController } from './TabsController.svelte';
	interface TabsProps {
		selectedTabKey?: string | undefined;
		variant?: string;
		class?: string;
		classContent?: string;
		classSelectionContainer?: string;
		classSelector?: string;
		children: Snippet;
		tabSelection: Snippet | undefined;
		animation?: 'slide' | 'fade' | 'fade-slide';
		position?: 'top' | 'left' | 'bottom' | 'right' | '';
	}
	let {
		variant = 'default',
		class: className = '',
		classContent = '',
		classSelectionContainer = '',
		tabSelection = undefined,
		children,
		position = '',
		classSelector = '',
		animation = undefined,
		selectedTabKey = $bindable(undefined)
	}: TabsProps = $props();
	const tabController = new TabsController(animation);
	const keys = new Map<string, HTMLElement>();
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

	const coordSelector = new Spring(
		{ top: 0, left: 0 },
		{
			stiffness: 0.1,
			damping: 0.4
		}
	);
	const sizeSelector = new Spring(
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
	class={[
		'ui-tabs',
		position && `ui-tabs-${position}`,
		variant && `ui-tabs-variant-${variant}`,
		className
	]}
>
	<div class="ui-tab-selection {classSelectionContainer}">
		{#if tabSelection}
			{@render tabSelection()}
		{/if}
		<span
			class={classSelector}
			style="top:{variant === 'underlined'
				? sizeSelector.current.height
				: coordSelector.current.top}px;left:{coordSelector.current.left}px;width:{sizeSelector
				.current.width}px;height:{variant !== 'underlined' ? sizeSelector.current.height : 2}px;"
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
			padding: calc(var(--spacing) * 4);
			/* transition:
				min-height 0.8s ease-in-out,
				min-width 0.8s ease-in-out; */
		}
	}
</style>
