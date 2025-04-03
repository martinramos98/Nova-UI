<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Button } from '@nv-org/button';
	import { Drawer } from '@nv-org/drawer';
	import { Title } from '@nv-org/title';
	import drawerPositionCases from './codeText.js';
	import { Option, Selection } from '@nv-org/selection';
	let openDrawer = $state(false);
	let position = $state(new Set(['top']));
	let first = $derived(position.values().next().value);
</script>

<section class="relative">
	<aside class="absolute top-0 right-0 w-[100px]">
		<Selection variant="faded" class={'w-full'} bind:selectedValue={position}>
			<Option value={'top'}>Top</Option>
			<Option value={'left'}>Left</Option>
			<Option value={'bottom'}>Bottom</Option>
			<Option value={'right'}>Right</Option>
		</Selection>
	</aside>
	<div class="w-full">
		<ComponentCodeTabs code={drawerPositionCases(first)}>
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
					position={first}
					contentClass="p-2 flex flex-col"
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
