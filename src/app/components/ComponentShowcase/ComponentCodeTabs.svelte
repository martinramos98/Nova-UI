<svelte:options runes={true} />

<script lang="ts">
	import { Tab, TabButton, Tabs } from '@nv-org/tabs';
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

<Tabs classContent="w-full " animation="fade-slide" class="w-full">
	{#snippet TabSelection()}
		<TabButton key="Component">Component</TabButton>
		<TabButton key="Code">Code</TabButton>
	{/snippet}
	<Tab key="Component" class="w-full flex items-center justify-center">
		{@render component()}
	</Tab>
	<Tab key="Code" class="w-full">
		<CodeSnippet isSvelte textCode={code}></CodeSnippet>
	</Tab>
</Tabs>
