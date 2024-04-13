<script>
	import Slider from '$lib/Components/Slider/Slider.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
</script>

<main>
	<Title level={2}>Slider Selector</Title>
	<Slider maxValue={1000}></Slider>
</main>

<style>
	main {
		margin: 5px;
	}
	div {
		background-color: red;
	}
</style>
