<script lang="ts">
	import Title from '$lib/Components/Title/Title.svelte';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import Drawer from '$lib/Components/Drawer/Drawer.svelte';
	let testOpen = false;
	let openModalXL = false;
	let openModalFull = false;
	let openDrawer = false;
	let openDrawerTop = false;
	let openDrawerLeft = false;
	let openDrawerRight = false;
	let openDrawerBottom = false;
	let openBlur = false;
	let openNormal = false;
	let openTransparent = false;
</script>

<Title className="px-4">Modals</Title>
<Divider className="my-2" size={1} color={'rgb(var(--primary-10))'}></Divider>
<div class="div-row">
	<Button
		variant="solid"
		colors="info"
		onClick={() => {
			testOpen = !testOpen;
		}}>Open Modal</Button
	>

	<Button
		variant="solid"
		colors="info"
		onClick={() => {
			openModalXL = !openModalXL;
		}}
	>
		Open Modal XL
	</Button>
	<Button
		variant="solid"
		colors="info"
		onClick={() => {
			openModalFull = !openModalFull;
		}}
	>
		Open Modal Full
	</Button>
	<Modal
		open={openModalFull}
		radius={'2xl'}
		size={'full'}
		onClose={() => {
			openModalFull = false;
		}}
	>
		<svelte:fragment slot="header">
			<Title level={3} className="text-center w-full">Modal</Title>
		</svelte:fragment>
		<svelte:fragment slot="footer">
			<Button variant="solid" colors="success">Accept</Button>
			<Button
				variant="flat"
				colors="error"
				onClick={() => {
					openModalFull = !openModalFull;
				}}>Cancel</Button
			>
		</svelte:fragment>
	</Modal>

	<Modal
		open={openModalXL}
		radius={'2xl'}
		size={'3xl'}
		onClose={() => {
			openModalXL = false;
		}}
	>
		<svelte:fragment slot="header">
			<Title level={3} className="text-center w-full">Modal</Title>
		</svelte:fragment>
		<svelte:fragment slot="footer">
			<Button variant="solid" colors="success">Accept</Button>
			<Button
				variant="flat"
				colors="error"
				onClick={() => {
					openModalXL = !openModalXL;
				}}>Cancel</Button
			>
		</svelte:fragment>
	</Modal>
	<Modal
		open={testOpen}
		radius={'2xl'}
		backdrop={{
			type: 'blur',
			className: ''
		}}
		onClose={() => {
			testOpen = false;
		}}
	>
		<svelte:fragment slot="header">
			<Title level={3} className="text-center w-full">Modal</Title>
		</svelte:fragment>
		<svelte:fragment slot="footer">
			<Button variant="solid" colors="success">Accept</Button>
			<Button
				variant="flat"
				colors="error"
				onClick={() => {
					testOpen = !testOpen;
				}}>Cancel</Button
			>
		</svelte:fragment>
	</Modal>
</div>

<Title className="px-4">Drawers</Title>
<Divider className="my-2" size={1} color={'rgb(var(--primary-10))'}></Divider>
<div class="div-row">
	<Button
		onClick={() => {
			openDrawer = true;
		}}
	>
		Open drawer
	</Button>
	<Drawer
		open={openDrawer}
		size={'xs'}
		onClose={() => {
			openDrawer = false;
		}}
	>
		<p>Holi from Drawer</p>
	</Drawer>
</div>

<Title level={2} className="px-4">Drawers Variants</Title>
<Divider className="my-2" size={1} color={'rgb(var(--primary-10))'}></Divider>

<Title level={3} className="px-4">Drawers Positions</Title>
<div class="div-row">
	<Button
		variant={'solid'}
		onClick={() => {
			openDrawerTop = true;
		}}
	>
		Open drawer Top
	</Button>
	<Drawer
		position={'top'}
		open={openDrawerTop}
		size={'xs'}
		onClose={() => {
			openDrawerTop = false;
		}}
	>
		<p>Holi from Drawer Top</p>
	</Drawer>
	<Button
		variant={'solid'}
		onClick={() => {
			openDrawerLeft = true;
		}}
	>
		Open drawer Left
	</Button>
	<Drawer
		position={'left'}
		open={openDrawerLeft}
		size={'xs'}
		onClose={() => {
			openDrawerLeft = false;
		}}
	>
		<p>Holi from Drawer Left</p>
	</Drawer>
	<Button
		variant={'solid'}
		onClick={() => {
			openDrawerBottom = true;
		}}
	>
		Open drawer Bottom
	</Button>
	<Drawer
		position={'bottom'}
		open={openDrawerBottom}
		size={'full'}
		onClose={() => {
			openDrawerBottom = false;
		}}
	>
		<p>Holi from Drawer Bottom</p>
		<Button
			onClick={() => {
				openDrawerBottom = false;
			}}
			colors="error"
			variant="flat"
		>
			close</Button
		>
	</Drawer>
	<Button
		variant={'solid'}
		onClick={() => {
			openDrawerRight = true;
		}}
	>
		Open drawer Right
	</Button>
	<Drawer
		open={openDrawerRight}
		size={'xs'}
		onClose={() => {
			openDrawerRight = false;
		}}
	>
		<p>Holi from Drawer Right</p>
	</Drawer>
</div>
<Title level={3} className="px-4">Drawers Backrops</Title>
<div class="div-row">
	<Button
		variant={'solid'}
		onClick={() => {
			openNormal = true;
		}}
	>
		Open drawer Normal
	</Button>
	<Drawer
		open={openNormal}
		size={'xs'}
		onClose={() => {
			openNormal = false;
		}}
	>
		<p>Holi from Drawer Normal</p>
	</Drawer>
	<Button
		variant={'solid'}
		onClick={() => {
			openBlur = true;
		}}
	>
		Open drawerblur
	</Button>
	<Drawer
		backdrop={{
			type: 'blur',
			className: ''
		}}
		open={openBlur}
		size={'xs'}
		onClose={() => {
			openBlur = false;
		}}
	>
		<p>Holi from Drawer Blur</p>
	</Drawer>
	<Button
		variant={'solid'}
		onClick={() => {
			openTransparent = true;
		}}
	>
		Open drawer Transparent
	</Button>
	<Drawer
		backdrop={{
			type: 'transparent',
			className: ''
		}}
		open={openTransparent}
		size={'xs'}
		onClose={() => {
			openTransparent = false;
		}}
	>
		<p>Holi from Drawer transparent</p>
	</Drawer>
</div>
