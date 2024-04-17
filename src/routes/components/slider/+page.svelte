<script>
	import Slider from '$lib/Components/Slider/Slider.svelte';
	import Switch from '$lib/Components/Switch/Switch.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Tooltip from '$lib/Components/Tooltip/Tooltip.svelte';
</script>

<main class="w-[500px]">
	<Title level={2}>Slider Selector</Title>
	<Slider className={'mx-4'} minValue={1000} steps={10} maxValue={2000}></Slider>
	<Slider className={'mx-4'} format="thick" maxValue={1000}></Slider>
	<Slider className={'mx-4'} format="thin" maxValue={1000}></Slider>
	<section>
		<Tooltip position="right" className="text-xs" content="Click to toggle!" withArrow={true}>
			<Switch customColor="grey"></Switch>
		</Tooltip>
		<Tooltip
			position="top"
			colors="error"
			className="text-xs"
			withArrow={true}
			content="Be aware! There's an error!"
		>
			<Switch color="info"></Switch>
		</Tooltip>
		<Tooltip
			position="bottom"
			colors="warning"
			className="text-xs text-center"
			withArrow={true}
			content="Warning!!"
		>
			<Switch color="warning"></Switch>
		</Tooltip>
		<Tooltip
			position="left"
			colors="success"
			className="text-xs text-center"
			withArrow={true}
			content="OK"
		>
			<Switch color="success"></Switch>
		</Tooltip>
	</section>
</main>

<style>
	main {
		margin: 5px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	section {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
</style>
