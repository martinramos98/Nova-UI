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
	import ComponentCodeTabs from '../ComponentShowcase/ComponentCodeTabs.svelte';
	provideContextMenu();
	let openContext = $state(false);
	function closeContextMenu() {
		openContext = false;
	}
</script>

<div class="w-full">
	<ComponentCodeTabs
		code={`<div class="w-full h-[300px] p-2 context-container" use:asContextMenuContainer>
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
	</ContextMenu>
</div>
`}
	>
		{#snippet component()}
			<div class="w-full h-[300px] p-2 context-container" use:asContextMenuContainer>
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
				</ContextMenu>
			</div>
		{/snippet}
	</ComponentCodeTabs>
</div>

<style>
	.context-container {
		border: solid 2px var(--color-surface-highest);
		border-radius: var(--radius-3xl);
		background: var(--color-surface-hight);

		background-repeat: repeat;
	}
</style>
