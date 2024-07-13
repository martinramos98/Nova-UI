<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { readonly, writable } from 'svelte/store';
	import { spring } from 'svelte/motion';

	export let selectedTabKey: string | undefined = undefined;
	export let variant = 'default';
	export let className = '';
	export let classNameContent = '';
	export let classNameSelectionContainer = '';
	export let TabSelection: Snippet | undefined = undefined;
	export let children: Snippet;
	export let position: 'top' | 'left' | 'bottom' | 'right' | '' = '';
	export let classNameSelector = '';
	const selectedTabStore = writable(selectedTabKey ?? '');
	const keys = new Map<string, HTMLElement>();
	function subscribeKey(key: string, el: HTMLElement) {
		keys.set(key, el);
	}
	const tabContext = setContext('tabContext', {
		selectTab,
		selectedTab: readonly(selectedTabStore),
		subscribeKey
	});
	function selectTab(key: string) {
		getPositionOfElement(key);
		selectedTabStore.set(key);
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
	function setSelectOnMount(node: HTMLElement) {
		for (const key of keys.keys()) {
			selectTab(key);
			break;
		}
	}
</script>

<div
	use:setSelectOnMount
	class="ui-tabs {position !== ''
		? `ui-tabs-${position}`
		: ''} ui-tabs-variant-{variant} {className}"
>
	<div class="ui-tab-selection {classNameSelectionContainer}">
		{#if TabSelection}
			{@render TabSelection()}
		{/if}
		<span
			class={classNameSelector}
			style="top:{variant === 'underlined'
				? $sizeSelector.height
				: $coordSelector.top}px;left:{$coordSelector.left}px;width:{$sizeSelector.width}px;height:{variant !==
			'underlined'
				? $sizeSelector.height
				: 2}px;"
			aria-hidden="true"
		></span>
	</div>
	<div class="ui-tab-content {classNameContent}">
		{@render children()}
	</div>
</div>
