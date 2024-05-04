<script lang="ts">
	import Title from '$lib/Components/Title/Title.svelte';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Modal from '$lib/Components/Modal/Modal.svelte';
	// import Drawer from '$lib/Components/Drawer/Drawer.svelte';
	let testOpen = false;
	let openLG = false;
	let openMD = false;
	let openModalXL = false;
	let openModalFull = false;
	let openDefault = false;
	let openBlurred = false;
	let openTransparent = false;
	// let openDrawer = false;
	// let openDrawerTop = false;
	// let openDrawerLeft = false;
	// let openDrawerRight = false;
	// let openDrawerBottom = false;
	// let openBlur = false;
	// let openNormal = false;
	// let openTransparent = false;
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#card">Modal</a></li>
			<li><a href="#disabled">Sizes</a></li>
			<li><a href="#variants">Backdrop</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title level={1}>Modal</Title>
			</header>
			<section>
				<div>
					<Button
						variant="solid"
						colors="info"
						onClick={() => {
							testOpen = !testOpen;
						}}>Open Modal</Button
					>
					<Modal
						open={testOpen}
						radius={'2xl'}
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
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Constrains</Title>
			</header>
			<section>
				<div>
					<Button
						variant="solid"
						colors="info"
						onClick={() => {
							testOpen = !testOpen;
						}}>Open Modal</Button
					>
					<Modal
						open={testOpen}
						radius={'2xl'}
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
			</section>
		</article>

		<article>
			<header>
				<Title level={2}>Sizes</Title>
			</header>
			<section>
				<div>
					<Button
						variant="solid"
						colors="info"
						onClick={() => {
							openMD = true;
						}}>Open md</Button
					>
					<Button
						variant="solid"
						colors="info"
						onClick={() => {
							openLG = true;
						}}>Open lg</Button
					>
					<Button
						variant="solid"
						colors="info"
						onClick={() => {
							openModalXL = true;
						}}>Open xl</Button
					>
					<Button
						variant="solid"
						colors="info"
						onClick={() => {
							openModalFull = true;
						}}>Open full</Button
					>
					<Modal
						open={openMD}
						radius={'2xl'}
						size={'md'}
						onClose={() => {
							openMD = false;
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
						open={openLG}
						radius={'2xl'}
						size={'lg'}
						onClose={() => {
							openLG = false;
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
						size={'xl'}
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
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Backdrop</Title>
			</header>
			<section>
				<div>
					<Button
						variant="solid"
						colors="info"
						onClick={() => {
							openDefault = true;
						}}>Open Normal Backdrop</Button
					>
					<Button
						variant="solid"
						colors="info"
						onClick={() => {
							openBlurred = true;
						}}>Open Blurred Backdrop</Button
					>
					<Button
						variant="solid"
						colors="info"
						onClick={() => {
							openTransparent = true;
						}}>Open Transparent Backdrop</Button
					>
					<Modal
						open={openDefault}
						radius={'2xl'}
						size={'md'}
						onClose={() => {
							openDefault = false;
						}}
						backdrop={{
							className: '',
							type: 'normal'
						}}
					></Modal>
					<Modal
						open={openBlurred}
						radius={'2xl'}
						size={'md'}
						onClose={() => {
							openBlurred = false;
						}}
						backdrop={{
							className: '',
							type: 'blur'
						}}
					></Modal>
					<Modal
						open={openTransparent}
						radius={'2xl'}
						size={'md'}
						backdrop={{
							className: '',
							type: 'transparent'
						}}
						onClose={() => {
							openTransparent = false;
						}}
					></Modal>
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
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 70%;
				background-color: var(--color-surface-low);
				padding: var(--spacing-2) var(--spacing-6) var(--spacing-6) var(--spacing-6);
				border-radius: var(--radius-xl);
				gap: var(--spacing-4);
				margin: var(--spacing-6) 0;
				& > section {
					display: flex;
					/* view-timeline: --block;
			view-timeline-axis: inline;
			animation-timeline: view();
			animation-name: show;
			animation-range: entry 80% cover 70%;
			animation-fill-mode: both; */
					/* align-self: center; */
					width: fit-content;
					max-width: 100%;
					flex-direction: column;
					background-color: var(--color-surface-low);
					justify-content: center;
					gap: var(--spacing-2);
					& > div {
						justify-self: center;
						align-items: center;
						align-self: center;
						display: flex;
						flex-wrap: wrap;
						width: fit-content;
						padding: var(--spacing-4);
						gap: var(--spacing-8);
						flex-direction: row;
					}
				}
			}
		}
		& > aside {
			& > span {
				width: max-content;
				display: block;
			}
			position: sticky;
			height: fit-content;
			top: 65px;
			width: max-content;
			left: 2.5%;
			padding: var(--spacing-4);
			border-radius: var(--radius-xl);
			background-color: var(--color-surface-low);
			& ul {
				width: max-content;
			}
		}
	}
</style>
