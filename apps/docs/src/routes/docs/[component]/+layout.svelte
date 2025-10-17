<script>
	const { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		padding: 1rem 2rem;
	}
</style>
