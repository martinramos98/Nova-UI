<script lang="ts">
	import { getContext } from 'svelte';

	export let disabled = false;
	export let key: string;
	export let className = '';
	const tabContext = getContext<{
		selectTab: (key: string) => void;
		subscribeKey: (key: string, el: HTMLElement) => void;
	}>('tabContext');
	if (!tabContext) throw Error('Tab Button is no inside of a Tabs Components');
	function subscribeButton(node: HTMLElement) {
		tabContext.subscribeKey(key, node);
	}
</script>

<button
	class="ui-tab-button {className}"
	use:subscribeButton
	{disabled}
	on:click={(ev) => {
		tabContext.selectTab(key);
	}}
>
	<slot />
</button>

<style>
	@layer nova {
		button {
			background-color: transparent;
			cursor: pointer;
			padding: 5px 10px;
			position: relative;
			z-index: 2;
		}
	}
</style>
