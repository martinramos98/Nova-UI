/**
 *
 * @param {string} size
 * @returns {string}
 */
export default function modalSizeTextCode(size) {
	return `<div>
<Button
	variant="solid"
	colors="info"
	onClick={() => {
		open = true;
	}}
	>Open Modal {size}
</Button>
<Modal
	{open}
	radius={'2xl'}
	size={'${size}'}
	onClose={() => {
		open = false;
	}}
>
	{#snippet header()}
		<Title level={3} class="text-center w-full">Modal</Title>
	{/snippet}
	<p></p>
	{#snippet footer()}
		<Button variant="solid" colors="success">Accept</Button>
		<Button
			variant="flat"
			colors="error"
			onClick={() => {
				open = !open;
			}}>Cancel</Button
		>
	{/snippet}
</Modal>
  `;
}
