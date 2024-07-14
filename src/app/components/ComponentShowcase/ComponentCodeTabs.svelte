<svelte:options runes={true} />

<script lang="ts">
	import { Tab, TabButton, Tabs } from '@nova/tabs';
	import type { Snippet } from 'svelte';
	import CodeSnippet from '../CodeSnippet/CodeSnippet.svelte';

	const {
		code,
		component
	}: {
		code: string;
		component: Snippet;
	} = $props();
</script>

<Tabs classNameContent="bg-transparent w-full" className="w-full">
	{#snippet TabSelection()}
		<TabButton key="Component">Component</TabButton>
		<TabButton key="Code">Code</TabButton>
	{/snippet}
	<Tab key="Component" className="w-full">
		{@render component()}
	</Tab>
	<Tab key="Code" className="w-full">
		<CodeSnippet isSvelte textCode={code}></CodeSnippet>
	</Tab>
</Tabs>
