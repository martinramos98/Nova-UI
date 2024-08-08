<svelte:options runes={true} />

<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	const {
		key,
		class: className = '',
		children
	}: { key: string; class?: string; children: Snippet } = $props();
	let render = $state(false);
	const tabContext = getContext<{
		selectTab: (key: string) => void;
		subscribeTab: (key: string, fn: () => void) => void;
	}>('tabContext');
	if (!tabContext) throw Error('Tab is not inside of Tabs Context');

	tabContext.subscribeTab(key, () => {
		render = !render;
	});
	function loadedRefEvent(node: HTMLElement) {
		const tabContainer = node.closest('.ui-tab-content') as HTMLElement;
		const ev = new CustomEvent('loadedChildrenTab', { detail: { key, node } });
		tabContainer.dispatchEvent(ev);
	}
</script>

{#if render}
	<div use:loadedRefEvent class="ui-selected-tab absolute {className}">
		{@render children()}
	</div>
{/if}

<style>
	@layer nova {
		.ui-selected-tab {
			width: 100%;
			visibility: hidden;
			height: max-content;
			top: 0;
			left: 0;
			transition: opacity 0.15s ease;
		}
	}
</style>
