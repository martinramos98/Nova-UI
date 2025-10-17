<script lang="ts">
	import { Tabs, Tab, TabButton, Selection, Option } from '@nv-org/components';
	import { onMount } from 'svelte';
	import { createHighlighter } from 'shiki';
	const { Component, code, propsv } = $props();
	console.log(propsv);
	let html = $state();
	const selectedProps = {};
	$effect(() => {
		if (propsv) {
			propsv.forEach((prop) => {
				selectedProps[prop.name] = prop.options[0];
			});
		}
	});
	onMount(async () => {
		const highlighter = await createHighlighter({
			themes: ['aurora-x'],
			langs: ['javascript', 'typescript', 'svelte']
		});
		await highlighter.loadLanguage('javascript', 'typescript', 'svelte');
		html = highlighter.codeToHtml(code, { lang: 'svelte', theme: 'aurora-x' });
	});
</script>

<section>
	<section class="controls">
		{#if propsv}
			{#each propsv as prop}
				<Selection
					onSelect={(v) => {
						selectedProps[prop.name] = v;
					}}
				>
					{#each prop.options as option}
						<Option labelSelected={option} value={option}>{option}</Option>
					{/each}
				</Selection>
			{/each}
		{/if}
	</section>

	<Tabs variant="splitted-content">
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
</section>
