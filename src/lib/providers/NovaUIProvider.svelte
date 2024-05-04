<script>
	import { onMount } from 'svelte';
	import '../main.css';
	onMount(() => {
		const style = document.createElement('style');
		style.innerHTML = `
		@layer theme, base, nova, components, utilities;
		`;
		document.head.prepend(style);
	});
</script>

<slot />
