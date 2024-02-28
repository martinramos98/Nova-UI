<script>
	import Button from '$lib/app/Components/Button/Button.svelte';
	import Modal from '$lib/app/Components/Modal/Modal.svelte';
	import Title from '$lib/app/Components/Title/Title.svelte';
	import Divider from '$lib/app/Divider/Divider.svelte';
	let testOpen = false;
</script>

<Title className="px-4">Modals</Title>
<Divider className="my-2" size={1} color={'rgb(var(--primary-10))'}></Divider>
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
		onClose={() => {
			testOpen = false;
		}}
	>
		<p>Holi from Modal!</p>
	</Modal>
</div>
