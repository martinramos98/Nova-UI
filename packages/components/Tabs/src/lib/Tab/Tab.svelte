<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { TabsState, type TabsController } from '../TabsController.svelte';
	import type { SvelteTransitionFn } from '@nv-org/utils';
	const {
		key,
		class: className = '',

		children
	}: { key: string; class?: string; children: Snippet } = $props();
	const tabContext = getContext<{
		tabController: TabsController;
	}>('tabContext');
	if (!tabContext) throw Error('Tab is not inside of Tabs Context');
	const { tabController } = tabContext;
	function onOutroEnd() {
		tabController.renderingState = TabsState.FINISHED_OUTRO;
		tabController.renderSelectedTab();
	}
	function onOutroStart() {
		tabController.renderingState = TabsState.PLAYING_OUTRO;
	}
	function onIntroStart() {
		tabController.renderingState = TabsState.PLAYING_INTRO;
	}
	function onIntroEnd() {
		tabController.renderingState = TabsState.FINISHED_INTRO;
	}
	const animation = tabController.animation as SvelteTransitionFn;
</script>

{#if tabController.renderTab === key}
	<div
		in:animation={{ delay: 20, duration: 200 }}
		out:animation={{ duration: 200 }}
		onintrostart={onIntroStart}
		onintroend={onIntroEnd}
		onoutroend={onOutroEnd}
		onoutrostart={onOutroStart}
		class="ui-selected-tab {className}"
	>
		{@render children()}
	</div>
{/if}

<style>
	@layer nova {
		.ui-selected-tab {
			width: 100%;
			height: max-content;
			overflow-y: hidden;
		}
	}
</style>
