<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	interface TabButtonProps {
		disabled?: boolean;
		key: string;
		className?: string;
		children: Snippet;
	}
	const { disabled = false, key, className = '', children }: TabButtonProps = $props();
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
	onclick={(ev) => {
		tabContext.selectTab(key);
	}}
>
	{@render children()}
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
