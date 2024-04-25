<script>
	import {
		asContextMenuContainer,
		provideContextMenu
	} from '$lib/Components/ContextMenu/ContextMenu';
	import ContextMenu from '$lib/Components/ContextMenu/ContextMenu.svelte';
	import DropDownGroup from '$lib/Components/Dropdown/DropDownGroup/DropDownGroup.svelte';
	provideContextMenu();
</script>

<main>
	<section use:asContextMenuContainer>
		<ContextMenu className="bg-slate-900 p-2 rounded-lg">
			<p>Hola Mundo From Context Menu!</p>
			<DropDownGroup textButton='SubMenu'>
				<p>Submenu</p>
			</DropDownGroup>
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
