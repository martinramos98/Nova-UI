<svelte:options runes={true} />

<script lang="ts">
	import { setContext } from 'svelte';
	import '../styles/main.css';
	let { theme = 'default' } = $props();
	setContext('nova-ui-context', {
		theme
	});
	$effect.pre(() => {
		document.body.dataset.theme = theme;
	});
</script>

<slot />
