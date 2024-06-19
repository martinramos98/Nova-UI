<svelte:options runes={true} />

<script>
	import ContextMenu from '$lib/Components/ContextMenu/ContextMenu.svelte';
	import ContextMenuSection from '$lib/Components/ContextMenu/ContextMenuSection.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import {
		provideContextMenu,
		asContextMenuContainer
	} from '$lib/Components/ContextMenu/ContextMenu';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	provideContextMenu();
	let openContext = $state(false);
	function closeContextMenu() {
		openContext = false;
	}
</script>

<div class="w-full h-full p-2 context-container" use:asContextMenuContainer>
	<ContextMenu bind:open={openContext} onClose={closeContextMenu} className="p-2 rounded-lg">
		<Button
			variant="light"
			className="w-full px-2 text-start"
			onClick={() => {
				closeContextMenu();
			}}
			withClickEffect={false}
			colors="primary">Copy</Button
		>
		<Button
			variant="light"
			className="w-full px-2 text-start"
			onClick={() => {
				closeContextMenu();
			}}
			withClickEffect={false}
			colors="primary">Cut</Button
		>
		<Button
			variant="light"
			className="w-full px-2 text-start"
			onClick={() => {
				closeContextMenu();
			}}
			withClickEffect={false}
			colors="primary">Paste</Button
		>
		<Button
			variant="light"
			className="w-full px-2 text-start"
			onClick={() => {
				closeContextMenu();
			}}
			withClickEffect={false}
			colors="primary">Test</Button
		>
		<Divider size={1} className="my-2"></Divider>
		<ContextMenuSection offset={10} classNameContainer="">
			<Button
				variant="light"
				className="w-full px-2 text-start"
				withClickEffect={false}
				colors="primary">Instagram</Button
			>
			<Button
				variant="light"
				className="w-full px-2 text-start"
				withClickEffect={false}
				colors="primary">X</Button
			>
			<Button
				variant="light"
				className="w-full px-2 text-start"
				withClickEffect={false}
				colors="primary">Facebook</Button
			>
			{#snippet triggerContent()}
				<Button
					variant="light"
					onClick={() => {
						closeContextMenu();
					}}
					className="w-full px-2 text-start"
					withClickEffect={false}
					colors="primary">Share</Button
				>
			{/snippet}
		</ContextMenuSection>
	</ContextMenu>
</div>

<style>
	.context-container {
		border: solid 2px var(--color-surface-highest);
		border-radius: var(--radius-3xl);
		background: var(--color-surface-hight);

		background-repeat: repeat;
	}
</style>
