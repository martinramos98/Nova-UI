<script>
	import NovaUiProvider from '$lib/providers/NovaUIProvider.svelte';
	import Navbar from '$lib/Components/Navbar/Navbar.svelte';
	import MenuButton from '$lib/Components/MenuButton/MenuButton.svelte';
</script>

<NovaUiProvider>
	<Navbar
		useContainerQuery={false}
		className="bg-zinc-700/50 flex flex-row justify-between backdrop-blur-sm sticky top-3 left-[2.5%] w-[95%] h-[40px] rounded-full z-40"
		variant="menu"
		menuProps={{
			drawerProps: {
				className: 'z-50',
				size: 'sm',
				backdrop: {
					className: '',
					type: 'blur'
				}
			}
		}}
		let:toggleMenu
	>
		<span class="font-bold">Nova UI</span>
		<MenuButton onClickMenu={toggleMenu} />
	</Navbar>
	<slot />
</NovaUiProvider>
