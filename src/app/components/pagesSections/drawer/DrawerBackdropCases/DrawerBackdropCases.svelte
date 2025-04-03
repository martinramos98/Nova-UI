<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Button } from '@nv-org/button';
	import { Drawer } from '@nv-org/drawer';
	import { Title } from '@nv-org/title';
	import { Option, Selection } from '@nv-org/selection';
	import drawerBackdropCases from './codeText.js';
	let openDrawer = $state(false);
	let backdrop = $state(new Set(['normal']));
	let first = $derived(backdrop.values().next().value);
</script>

<section class="relative">
	<aside class="absolute top-0 right-0 w-[150px]">
		<Selection variant="faded" class={'w-full'} bind:selectedValue={backdrop}>
			<Option value={'normal'}>Normal</Option>
			<Option value={'blur'}>Blur</Option>
			<Option value={'transparent'}>Transparent</Option>
		</Selection>
	</aside>
	<div class="w-full">
		<ComponentCodeTabs code={drawerBackdropCases(first)}>
			{#snippet component()}
				<Button
					onClick={() => {
						openDrawer = true;
					}}
				>
					Open Drawer {first}
				</Button>
				<Drawer
					open={openDrawer}
					position={'right'}
					contentClass="p-2 flex flex-col"
					backdrop={{ type: first as string }}
					onClose={() => {
						openDrawer = false;
					}}
				>
					<Title level={2} class="m-2">{first} Drawer</Title>
					<p class="m-2">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
						aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum quae
						expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta quis
						voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem repellendus fugiat
						corporis aliquid cumque est?
					</p>
					<Button
						colors="error"
						variant="flat"
						class="w-fit mt-auto ml-auto mr-2 mb-2"
						onClick={() => {
							openDrawer = false;
						}}
					>
						Close
					</Button>
				</Drawer>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
