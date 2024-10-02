<svelte:options runes={true} />

<script>
	import { Button } from '@nv-org/button';
	import { Modal } from '@nv-org/modal';
	import { Title } from '@nv-org/title';
	let open = $state(false);
</script>

<section>
	<div>
		<Button
			variant="solid"
			colors="info"
			onClick={() => {
				open = !open;
			}}>Open Modal</Button
		>
		<Modal
			{open}
			radius={'2xl'}
			onClose={() => {
				open = false;
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
							open = !open;
						}}>Cancel</Button
					>
				</div>
			{/snippet}
		</Modal>
	</div>
</section>
