<script lang="ts">
	import { createHighlighter } from 'shiki';
	import { onMount } from 'svelte';
	const {
		importComponents = []
	}: {
		importComponents?: string[];
	} = $props();
	let html = $state();

	onMount(async () => {
		const highlighter = await createHighlighter({
			themes: ['aurora-x'],
			langs: ['javascript', 'typescript']
		});
		await highlighter.loadLanguage('javascript', 'typescript');
		html = highlighter.codeToHtml(
			`import { ${importComponents.join(', ')} } from '@nv-org/components';`,
			{ lang: 'javascript', theme: 'aurora-x' }
		);
	});
</script>

<section>
	{@html html}
</section>

<style>
	section {
		margin: 1rem;
	}
</style>
