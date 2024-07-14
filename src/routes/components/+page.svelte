<script>
	import { Title } from '@nova/title';
	import ComponentList from '../../app/components/ComponentsList/ComponentList.svelte';
</script>

<main>
	<article>
		<Title class="w-[80%]">Components</Title>
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
