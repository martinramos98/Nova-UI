export function codeConstraintsCase() {
	return `<script>
	import { Button } from '@nv-org/button';
	import { Modal } from '@nv-org/modal';
	import { Title } from '@nv-org/title';
	let open = $state(false);
</script>
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
			<p>Header constrain is optional and is always on top of modal</p>
		{/snippet}
		<p>Content in a modal always is required for the component, you must provide it!</p>
		{#snippet footer()}
			<p>Footer constrain is optional and always on top of your modal</p>
			<div class="flex flex-row justify-end">
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
  `;
}
