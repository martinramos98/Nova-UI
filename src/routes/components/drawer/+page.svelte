<script>
	import { Button } from '@nv-org/button';
	import { Drawer } from '@nv-org/drawer';
	import { Title } from '@nv-org/title';
	import { Divider } from '@nv-org/divider';
	import DrawerPositionCases from '../../../app/components/pagesSections/drawer/DrawerPositionCases/DrawerPositionCases.svelte';
	import DrawerBackdropCases from '../../../app/components/pagesSections/drawer/DrawerBackdropCases/DrawerBackdropCases.svelte';
	import DrawerSizeCases from '../../../app/components/pagesSections/drawer/DrawerSizeCases/DrawerSizeCases.svelte';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';

	let openDrawer = $state(false);
</script>

<div class="page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#drawer', text: 'Drawer' },
			{ ref: '#positions', text: 'Positions' },
			{ ref: '#sizes', text: 'Sizes' },
			{ ref: '#backdrop', text: 'Backdrop' },
			{ ref: '#properties', text: 'Properties' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
	<main>
		<article>
			<header>
				<Title>Drawer</Title>
			</header>
			<section>
				<div>
					<Button
						variant="solid"
						colors="primary"
						onClick={() => {
							openDrawer = true;
						}}>Open Drawer</Button
					>
					<Drawer
						contentClass="p-2 flex flex-col"
						open={openDrawer}
						onClose={() => {
							openDrawer = false;
						}}
					>
						<Title class="m-2">Drawer</Title>
						<p class="m-2">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
							aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
							quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta quis
							voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem repellendus
							fugiat corporis aliquid cumque est?
						</p>
						<Button
							colors="error"
							variant="flat"
							class="w-fit mt-auto ml-auto mr-2 mb-2"
							onClick={() => {
								openDrawer = false;
							}}>Close</Button
						>
					</Drawer>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Positions</Title>
			</header>
			<DrawerPositionCases />
		</article>

		<article>
			<header>
				<Title level={2}>Sizes</Title>
			</header>
			<DrawerSizeCases />
		</article>
		<article id="backdrop">
			<header>
				<Title level={2}>Backdrop</Title>
			</header>
			<DrawerBackdropCases />
		</article>
	</main>
</div>
