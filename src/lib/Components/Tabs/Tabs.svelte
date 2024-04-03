<script lang="ts">
	import { setContext } from 'svelte';
	import { readonly, writable } from 'svelte/store';

	export let selectedTabKey: string | undefined = undefined;

	const selectedTabStore = writable(selectedTabKey ?? '');
	const keys = new Set<string>();
	let tabsElement: HTMLElement;
	const tabContext = setContext('tabContext', {
		selectTab,
		selectedTab: readonly(selectedTabStore),
		keys
	});
	function selectTab(key: string) {
		selectedTabStore.set(key);
	}
</script>

<div bind:this={tabsElement} class="ui-tabs">
	<div class="ui-tab-selection">
		<slot name="tab-selection" />
	</div>
	<div class="ui-tab-content">
		<slot />
	</div>
</div>

<style>
	@layer components {
	}
	@layer nova {
	}
</style>
