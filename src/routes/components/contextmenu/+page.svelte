<script>
	import Button from '$lib/Components/Button/Button.svelte';
	import {
		asContextMenuContainer,
		provideContextMenu
	} from '$lib/Components/ContextMenu/ContextMenu';
	import ContextMenu from '$lib/Components/ContextMenu/ContextMenu.svelte';
	import ContextMenuSection from '$lib/Components/ContextMenu/ContextMenuSection.svelte';
	provideContextMenu();
</script>

<main>
	<section use:asContextMenuContainer>
		<ContextMenu className="bg-slate-900 p-2 rounded-lg">
			<p>Hola Mundo From Context Menu!</p>
			<ContextMenuSection offset={15} classNameContainer="bg-slate-900">
				<p>Test Subsection</p>
				{#snippet triggerContent()}
					<Button
						variant="light"
						className="w-full px-2 text-start"
						withClickEffect={false}
						colors="primary">Test</Button
					>
				{/snippet}
			</ContextMenuSection>
		</ContextMenu>
	</section>
</main>

<style>
	main {
		padding: 20px;
		width: 100vw;
		height: 500px;
		display: flex;
	}
	section {
		padding: 20px;
		border-radius: 50px;
		width: 100%;
		height: 100%;
		background-color: var(--color-surface-highest);
	}
</style>
