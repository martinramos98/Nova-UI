<script lang="ts">
	import { getContext } from 'svelte';

	export let disabled = false;
	export let key: string;
	export let className = '';
	const tabContext = getContext<{ selectTab: (key: string) => void }>('tabContext');
	if (!tabContext) throw Error('Tab Button is no inside of a Tabs Components');
</script>

<button
	class="ui-tab-button {className}"
	{disabled}
	on:click={() => {
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
			padding: 10px;
		}
	}
</style>
