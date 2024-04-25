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
			<Switch icons="outside" color="warning">
				{#snippet iconOn()}
					<svg viewBox="0 0 24 24" fill="none">
						<path
							d="M12 6.00011L14 8.00011L10 10.0001L13 13.0001M12 6.00011C10.2006 3.90309 7.19377 3.25515 4.93923 5.17539C2.68468 7.09563 2.36727 10.3062 4.13778 12.5772C5.60984 14.4655 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9816C11.9483 20.0063 12.0393 20.0063 12.1225 19.9816C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4655 19.8499 12.5772C21.6204 10.3062 21.3417 7.07543 19.0484 5.17539C16.7551 3.27535 13.7994 3.90309 12 6.00011Z"
							stroke="#242424"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				{/snippet}
				{#snippet iconOff()}
					<svg viewBox="0 0 24 24" fill="none">
						<path
							d="M12 20V5.99995M12 5.99995C10.2006 3.90293 7.19377 3.25485 4.93923 5.17509C2.68468 7.09533 2.36727 10.3059 4.13778 12.577C5.60984 14.4652 10.0648 18.4477 11.5249 19.7366C11.6882 19.8808 11.7699 19.9529 11.8652 19.9813C11.9483 20.006 12.0393 20.006 12.1225 19.9813C12.2178 19.9529 12.2994 19.8808 12.4628 19.7366C13.9229 18.4477 18.3778 14.4652 19.8499 12.577C21.6204 10.3059 21.3417 7.07513 19.0484 5.17509C16.7551 3.27505 13.7994 3.90293 12 5.99995Z"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				{/snippet}
			</Switch>
		</Tooltip>
		<Tooltip
			position="left"
			colors="success"
			className="text-xs text-center"
			withArrow={true}
			content="OK"
		>
			<Switch color="success">
				{#snippet iconOn()}
					<svg viewBox="0 0 24 24" fill="none">
						<path
							d="M12 6.00011L14 8.00011L10 10.0001L13 13.0001M12 6.00011C10.2006 3.90309 7.19377 3.25515 4.93923 5.17539C2.68468 7.09563 2.36727 10.3062 4.13778 12.5772C5.60984 14.4655 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9816C11.9483 20.0063 12.0393 20.0063 12.1225 19.9816C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4655 19.8499 12.5772C21.6204 10.3062 21.3417 7.07543 19.0484 5.17539C16.7551 3.27535 13.7994 3.90309 12 6.00011Z"
							stroke="#242424"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				{/snippet}
				{#snippet iconOff()}
					<svg viewBox="0 0 24 24" fill="none">
						<path
							d="M12 20V5.99995M12 5.99995C10.2006 3.90293 7.19377 3.25485 4.93923 5.17509C2.68468 7.09533 2.36727 10.3059 4.13778 12.577C5.60984 14.4652 10.0648 18.4477 11.5249 19.7366C11.6882 19.8808 11.7699 19.9529 11.8652 19.9813C11.9483 20.006 12.0393 20.006 12.1225 19.9813C12.2178 19.9529 12.2994 19.8808 12.4628 19.7366C13.9229 18.4477 18.3778 14.4652 19.8499 12.577C21.6204 10.3059 21.3417 7.07513 19.0484 5.17509C16.7551 3.27505 13.7994 3.90293 12 5.99995Z"
							stroke="#242424"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				{/snippet}
			</Switch>
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
