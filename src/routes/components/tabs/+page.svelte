<script>
	import Title from '$lib/Components/Title/Title.svelte';
	import Tabs from '$lib/Components/Tabs/Tabs.svelte';
	import Tab from '$lib/Components/Tabs/Tab/Tab.svelte';
	import TabButton from '$lib/Components/Tabs/TabButton/TabButton.svelte';
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#tabs">Tabs</a></li>
			<li><a href="#positions">Positions</a></li>
			<li><a href="#variants">Variants</a></li>
		</ul>
	</aside>
	<main>
		<article id="tabs">
			<header>
				<Title>Tabs</Title>
			</header>
			<section>
				<div>
					<Tabs>
						{#snippet TabSelection()}
							<TabButton key="1">Salta</TabButton>
							<TabButton key="2">Buenos Aires</TabButton>
							<TabButton key="3">Tierra del Fuego</TabButton>
						{/snippet}
						<Tab className="p-2" key={'1'}>
							<p>
								<b> Salta, la tierra de contrastes y colores vivos: </b><br />
								Sumérgete en la magia del noroeste argentino explorando la provincia de Salta. Desde
								los imponentes picos de los Andes hasta los valles verdes de Cafayate, cada rincón de
								esta provincia te cautivará. Descubre la cultura rica y diversa de sus pueblos originarios,
								degusta la deliciosa gastronomía local y maravíllate con la belleza de sus paisajes.
								Salta te espera con los brazos abiertos para una experiencia inolvidable.
							</p>
						</Tab>
						<Tab className="p-2" key={'2'}>
							<p>
								<b> Buenos Aires, la ciudad que nunca duerme: </b><br />
								Sumérgete en el bullicio y la energía de la capital argentina, Buenos Aires. Con su arquitectura
								impresionante, sus elegantes barrios y su vibrante escena cultural, esta metrópolis te
								atrapará desde el primer momento. Déjate seducir por los ritmos del tango en sus milongas,
								disfruta de una oferta gastronómica incomparable y maravíllate con la pasión del fútbol
								en sus estadios legendarios. En Buenos Aires, cada esquina cuenta una historia y cada
								visita es una aventura inolvidable.
							</p>
						</Tab>
						<Tab className="p-2" key={'3'}>
							<p>
								<b> Tierra del Fuego, el fin del mundo te espera: </b><br />
								Embárcate en una aventura única en la mística Tierra del Fuego, el extremo sur de Argentina.
								Descubre la belleza salvaje de sus paisajes, desde los picos nevados de la cordillera
								hasta los glaciares imponentes que se deslizan hacia el mar. Explora sus parques nacionales
								y reserva natural, hogar de una fauna y flora únicas en el mundo. Sumérgete en la historia
								de los primeros habitantes de la región, los indígenas yámanas, y déjate sorprender por
								la hospitalidad de sus pobladores. En Tierra del Fuego, cada momento es una aventura
								inolvidable en el fin del mundo.
							</p></Tab
						>
					</Tabs>
				</div>
			</section>
		</article>
		<article id="position">
			<section>
				<div></div>
			</section>
		</article>
		<article id="positions">
			<header>
				<Title level={2}>Position</Title>
			</header>
			<section>
				<div>
					<Tabs position="top" className="w-full " variant={'bordered'}>
						{#snippet TabSelection()}
							<TabButton className="w-max" key={'1'}>Tab 1</TabButton>
							<TabButton key="2">Tab 2</TabButton>
							<TabButton key="3">Tab 3</TabButton>
						{/snippet}
						<Tab className="p-2" key={'1'}>
							<h3>Hi from Tab 1</h3>
						</Tab>
						<Tab className="p-2" key={'2'}>
							<h3>Hi from Tab 2</h3>
						</Tab>
						<Tab className="p-2" key={'3'}>
							<h3>Hi from Tab 3</h3>
						</Tab>
					</Tabs>
				</div>
				<div>
					<Tabs position="bottom" className="w-full " variant={'bordered'}>
						{#snippet TabSelection()}
							<TabButton key={'1'}>Tab 1</TabButton>
							<TabButton key="2">Tab 2</TabButton>
							<TabButton key="3">Tab 3</TabButton>
						{/snippet}
						<Tab className="p-2" key={'1'}>
							<h3>Hi from Tab 1</h3>
						</Tab>
						<Tab className="p-2" key={'2'}>
							<h3>Hi from Tab 2</h3>
						</Tab>
						<Tab className="p-2" key={'3'}>
							<h3>Hi from Tab 3</h3>
						</Tab>
					</Tabs>
				</div>
				<div>
					<Tabs position="left" className="w-full " variant={'bordered'}>
						{#snippet TabSelection()}
							<TabButton className="w-max" key={'1'}>Tab 1</TabButton>
							<TabButton key="2">Tab 2</TabButton>
							<TabButton key="3">Tab 3</TabButton>
						{/snippet}
						<Tab className="p-2" key={'1'}>
							<h3>Hi from Tab 1</h3>
						</Tab>
						<Tab className="p-2" key={'2'}>
							<h3>Hi from Tab 2</h3>
						</Tab>
						<Tab className="p-2" key={'3'}>
							<h3>Hi from Tab 3</h3>
						</Tab>
					</Tabs>
				</div>

				<div>
					<Tabs position="right" className="w-full " variant={'bordered'}>
						{#snippet TabSelection()}
							<TabButton className="w-max" key={'1'}>Tab 1</TabButton>
							<TabButton key="2">Tab 2</TabButton>
							<TabButton key="3">Tab 3</TabButton>
						{/snippet}
						<Tab className="p-2" key={'1'}>
							<h3>Hi from Tab 1</h3>
						</Tab>
						<Tab className="p-2" key={'2'}>
							<h3>Hi from Tab 2</h3>
						</Tab>
						<Tab className="p-2" key={'3'}>
							<h3>Hi from Tab 3</h3>
						</Tab>
					</Tabs>
				</div>
			</section>
		</article>
		<article id="variants">
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<div>
					<Tabs position="top" className="w-full " variant={''}>
						{#snippet TabSelection()}
							<TabButton className="w-max" key={'1'}>Tab 1</TabButton>
							<TabButton key="2">Tab 2</TabButton>
							<TabButton key="3">Tab 3</TabButton>
						{/snippet}
						<Tab className="p-2" key={'1'}>
							<h3>Hi from Tab 1</h3>
						</Tab>
						<Tab className="p-2" key={'2'}>
							<h3>Hi from Tab 2</h3>
						</Tab>
						<Tab className="p-2" key={'3'}>
							<h3>Hi from Tab 3</h3>
						</Tab>
					</Tabs>
				</div>
				<div>
					<Tabs position="top" className="w-full " variant={'default'}>
						{#snippet TabSelection()}
							<TabButton className="w-max" key={'1'}>Tab 1</TabButton>
							<TabButton key="2">Tab 2</TabButton>
							<TabButton key="3">Tab 3</TabButton>
						{/snippet}
						<Tab className="p-2" key={'1'}>
							<h3>Hi from Tab 1</h3>
						</Tab>
						<Tab className="p-2" key={'2'}>
							<h3>Hi from Tab 2</h3>
						</Tab>
						<Tab className="p-2" key={'3'}>
							<h3>Hi from Tab 3</h3>
						</Tab>
					</Tabs>
				</div>
				<div>
					<Tabs className="w-full" variant={'bordered'}>
						{#snippet TabSelection()}
							<TabButton key={'1'}>Tab 1</TabButton>
							<TabButton key="2">Tab 2</TabButton>
							<TabButton key="3">Tab 3</TabButton>
						{/snippet}
						<Tab className="p-2" key={'1'}>
							<h3>Hi from Tab 1</h3>
						</Tab>
						<Tab className="p-2" key={'2'}>
							<h3>Hi from Tab 2</h3>
						</Tab>
						<Tab className="p-2" key={'3'}>
							<h3>Hi from Tab 3</h3>
						</Tab>
					</Tabs>
				</div>
			</section>
			<section>
				<div>
					<Tabs className="w-full" variant={'underlined'}>
						{#snippet TabSelection()}
							<TabButton key={'1'}>Tab 1</TabButton>
							<TabButton key="2">Tab 2</TabButton>
							<TabButton key="3">Tab 3</TabButton>
						{/snippet}
						<Tab className="" key={'1'}>
							<h3>Hi from Tab 1</h3>
						</Tab>
						<Tab className="p-2" key={'2'}>
							<h3>Hi from Tab 2</h3>
						</Tab>
						<Tab className="p-2" key={'3'}>
							<h3>Hi from Tab 3</h3>
						</Tab>
					</Tabs>
				</div>
			</section>
		</article>
	</main>
</div>

<style>
	.page-content {
		& > main {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			& > article {
				& > section {
					display: flex;
					/* view-timeline: --block;
			view-timeline-axis: inline;
			animation-timeline: view();
			animation-name: show;
			animation-range: entry 80% cover 70%;
			animation-fill-mode: both; */
					/* align-self: center; */
					width: 100%;
					max-width: 100%;
					flex-direction: column;
					& > div {
						justify-self: center;
						align-items: center;
						align-self: center;
						display: flex;
						flex-wrap: wrap;
						width: 100%;
						padding: var(--spacing-4);
						gap: var(--spacing-8);
						flex-direction: row;
					}
				}
			}
		}
	}
</style>
