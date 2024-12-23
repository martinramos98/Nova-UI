<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import '../styles/main.css';
	let { theme = 'default', children }: { theme?: string; children: Snippet } = $props();
	setContext('nova-ui-context', {
		theme
	});
	$effect.pre(() => {
		document.body.dataset.theme = theme;
	});
</script>

{@render children()}
