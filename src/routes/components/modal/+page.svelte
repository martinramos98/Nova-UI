<script lang="ts">
	import { Title } from '@nv-org/title';
	import { Divider } from '@nv-org/divider';
	import { Button } from '@nv-org/button';
	import { Modal } from '@nv-org/modal';
	let testOpen = false;
	let testOpen1 = false;
	let openLG = false;
	let openMD = false;
	let openModalXL = false;
	let openModalFull = false;
	let openDefault = false;
	let openBlurred = false;
	let openTransparent = false;
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
							testOpen1 = !testOpen1;
						}}>Open Modal</Button
					>
					<Modal
						open={testOpen1}
						radius={'2xl'}
						onClose={() => {
							testOpen1 = false;
						}}
					>
						{#snippet header()}
							<Title level={3} class="text-center w-full">Modal</Title>
						{/snippet}
						<p>Modal Body</p>
						{#snippet footer()}
							<div class="modal-footer">
								<Button variant="solid" colors="success">Accept</Button>
								<Button
									variant="flat"
									colors="error"
									onClick={() => {
										testOpen1 = !testOpen1;
									}}>Cancel</Button
								>
							</div>
						{/snippet}
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
							<Title level={3} class="text-center w-full">Modal</Title>
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
							<Title level={3} class="text-center w-full">Modal</Title>
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
							<Title level={3} class="text-center w-full">Modal</Title>
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
							<Title level={3} class="text-center w-full">Modal</Title>
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
							<Title level={3} class="text-center w-full">Modal</Title>
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
	.modal-footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>
