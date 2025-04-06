<script lang="ts">
	import { Tabs, Tab, TabButton } from '@nv-org/components';
	import { onMount } from 'svelte';
	import { createHighlighter } from 'shiki';
	const { Component, code } = $props();
	let html = $state();
	onMount(async () => {
		const highlighter = await createHighlighter({
			themes: ['aurora-x'],
			langs: ['javascript', 'typescript', 'svelte']
		});
		await highlighter.loadLanguage('javascript', 'typescript', 'svelte');
		html = highlighter.codeToHtml(code, { lang: 'svelte', theme: 'aurora-x' });
	});
</script>

<Tabs>
	{#snippet tabSelection()}
		<TabButton key="1">Component</TabButton>
		<TabButton key="2">Code</TabButton>
	{/snippet}
	<Tab key="1">
		<Component />
	</Tab>
	<Tab key="2">
		{@html html}
	</Tab>
</Tabs>
