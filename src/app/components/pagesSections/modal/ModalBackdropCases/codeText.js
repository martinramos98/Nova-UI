/**
 *
 * @param {string} backdrop
 * @returns {string}
 */
export default function codeTextBackdrop(backdrop) {
	return `<script>
	import { Button } from '@nv-org/button';
	import { Modal } from '@nv-org/modal';
	import { Title } from '@nv-org/title';
	let open = $state(false);
</script>
<Button
	variant="solid"
	colors="info"
	onClick={() => {
		open = true;
	}}>Open {backdrop}</Button
>
<Modal
	{open}
	radius={'2xl'}
	size={'md'}
	onClose={() => {
		open = false;
	}}
	backdropType={${backdrop}}
>
	{#snippet header()}
		<Title level={3} class="text-center w-full">Modal {backdrop}</Title>
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
</Modal>`;
}
