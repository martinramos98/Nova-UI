<script>
	import Slider from '$lib/Components/Slider/Slider.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<main class="w-[500px]">
	<Title level={2}>Slider Selector</Title>
	<Slider className={'mx-4'} minValue={1000} steps={10} maxValue={2000}></Slider>
	<Slider className={'mx-4'} format="thick" maxValue={1000}></Slider>
	<Slider className={'mx-4'} format="thin" maxValue={1000}></Slider>
</main>

<style>
	main {
		margin: 5px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
