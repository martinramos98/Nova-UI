<svelte:options runes={true} />

<script>
	import ContextMenu from '$lib/Components/ContextMenu/ContextMenu.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import {
		provideContextMenu,
		asContextMenuContainer
	} from '$lib/Components/ContextMenu/ContextMenu';
	provideContextMenu();
</script>

<div class="w-full h-full p-2 context-container" use:asContextMenuContainer>
	<ContextMenu className="bg-slate-900 p-2 rounded-lg">
		<Button
			variant="light"
			className="w-full px-2 text-start"
			withClickEffect={false}
			colors="primary">Copy</Button
		>
		<Button
			variant="light"
			className="w-full px-2 text-start"
			withClickEffect={false}
			colors="primary">Cut</Button
		>
		<Button
			variant="light"
			className="w-full px-2 text-start"
			withClickEffect={false}
			colors="primary">Paste</Button
		>
		<Button
			variant="light"
			className="w-full px-2 text-start"
			withClickEffect={false}
			colors="primary">Test</Button
		>
		<!-- <ContextMenuSection offset={15} classNameContainer="bg-slate-900">
		<p>Test Subsection</p>
		{#snippet triggerContent()}
		{/snippet}
	</ContextMenuSection> -->
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
