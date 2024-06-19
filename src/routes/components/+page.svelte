<script>
	import Title from '$lib/Components/Title/Title.svelte';
	import ComponentList from '../../app/components/ComponentsList/ComponentList.svelte';
</script>

<main>
	<article>
		<Title className="w-[80%]">Components</Title>
		<ComponentList className="w-[80%]" />
	</article>
</main>

<style>
	article {
		margin: 40px 0;
		flex-direction: column;
		display: flex;
		place-content: center;
		place-items: center;
	}
</style>
