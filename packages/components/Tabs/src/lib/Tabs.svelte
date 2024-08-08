<svelte:options runes={true} />

<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { spring } from 'svelte/motion';
	import { TabsControler } from './utils.svelte.js';
	const {
		variant = 'default',
		class: className = '',
		classContent = '',
		classSelectionContainer = '',
		TabSelection = undefined,
		children,
		position = '',
		classSelector = '',
		selectedTabKey = $bindable(undefined)
	}: {
		selectedTabKey: string | undefined;
		variant: string;
		class: string;
		classContent: string;
		classSelectionContainer: string;
		classSelector: string;
		children: Snippet;
		TabSelection: Snippet | undefined;
		position: 'top' | 'left' | 'bottom' | 'right' | '';
	} = $props();

	const keys = new Map<string, HTMLElement>();
	let tabsControler: TabsControler = new TabsControler(selectedTabKey);

	setContext('tabContext', {
		selectTab,
		subscribeKey,
		subscribeTab
	});

	function subscribeTab(key: string, renderAction: () => void) {
		tabsControler.tabRenderExecutor.set(key, renderAction);
		console.log(tabsControler.tabRenderExecutor);
	}
	// TODO: Debounce de la seleccion ya que al querer cambiar sin terminar la animacion perjudica al renderizado
	function selectTab(key: string) {
		getPositionOfElement(key);
		tabsControler.selectTab(key);
	}
	function subscribeKey(key: string, el: HTMLElement) {
		keys.set(key, el);
	}

	$effect(() => {});
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
	function setControler(node: HTMLElement) {
		tabsControler.tabContainer = node;
	}
	function setFirstKey(node: HTMLElement) {
		const k = keys.keys();
		selectTab(k.next().value);
	}
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
	<div use:setControler use:setFirstKey class="ui-tab-content {classContent}">
		{@render children()}
	</div>
</div>

<style>
	@layer nova {
		.ui-tab-content {
			position: relative;
			padding: var(--spacing-4);
		}
	}
</style>
