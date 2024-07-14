<script>
	import { Slider } from '@nova/slider';
	import { Title } from '@nova/title';
	let value = 0;
	let value2 = 500;
	let valueSteps = 0;
</script>

<div class="page-content">
	<main>
		<article>
			<header>
				<Title>Slider</Title>
			</header>
			<section>
				<Slider className={'mx-4'} format="thin" maxValue={1000}></Slider>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Formats</Title>
			</header>
			<section>
				<Slider className={'mx-4'} format="thin" maxValue={1000}></Slider>
				<Slider className={'mx-4'} minValue={1000} maxValue={2000}></Slider>
				<Slider className={'mx-4'} format="thick" maxValue={1000}></Slider>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Steps</Title>
			</header>
			<section>
				<Slider className={'mx-4'} steps={10} maxValue={1000}></Slider>
				<Slider className={'mx-4'} steps={20} minValue={1000} maxValue={2000}></Slider>
				<Slider className={'mx-4'} steps={5} maxValue={1000}></Slider>
			</section>
		</article>
		<article>
			<header><Title level={2}>Value</Title></header>
			<section>
				<p class="w-full text-end mr-2">
					value:
					<span class="font-bold">
						{value}
					</span>
				</p>
				<Slider className={'mx-4'} colors="warning" bind:value maxValue={1000}></Slider>
			</section>
			<section>
				<Title level={3}>With min value</Title>
				<p class="w-full text-end mr-2">
					value:
					<span class="font-bold">
						{value2}
					</span>
				</p>
				<Slider
					className={'mx-4'}
					colors="warning"
					bind:value={value2}
					minValue={500}
					maxValue={1000}
				></Slider>
			</section>
			<section>
				<Title level={3}>With Steps</Title>
				<p class="w-full text-end mr-2">
					value:
					<span class="font-bold">
						{valueSteps}
					</span>
				</p>
				<Slider className={'mx-4'} steps={5} bind:value={valueSteps} maxValue={1000}></Slider>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Custom Slider</Title>
			</header>
			<section>
				<Slider
					className={'mx-4'}
					classNameBar="bg-gradient-to-r from-red-500 to-indigo-500"
					format="thick"
					maxValue={1000}
				>
					{#snippet customButton()}
						<span class="bg-white rounded-full p-1">🚀</span>
					{/snippet}
				</Slider>
			</section>
		</article>
	</main>
</div>

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
