<script>
	import NovaUiProvider from '$lib/providers/NovaUIProvider.svelte';
	import Navbar from '$lib/Components/Navbar/Navbar.svelte';
	import MenuButton from '$lib/Components/MenuButton/MenuButton.svelte';
	import Accordion from '$lib/Components/Accordion/Accordion.svelte';
	import AccordionSection from '$lib/Components/Accordion/AccordionSection/AccordionSection.svelte';
	import ComponentList from '$lib/app/components/ComponentsList/ComponentList.svelte';
</script>

<NovaUiProvider>
	<Navbar
		useContainerQuery={false}
		className="bg-zinc-700/50 flex flex-row justify-between backdrop-blur-sm sticky top-3 left-[2.5%] w-[95%] h-[40px] rounded-full z-40"
		variant="menu"
		menuProps={{
			drawerProps: {
				className: 'z-50 ',
				size: 'sm',
				modalContent: {
					className: 'overflow-auto'
				},
				backdrop: {
					className: '',
					type: 'blur'
				}
			}
		}}
	>
		{#snippet children(toggleMenu)}
			<span class="font-bold"><a href="/">Nova UI</a></span>
			<MenuButton onClickMenu={toggleMenu} />
		{/snippet}
		{#snippet menuContent()}
			<Accordion multiopen variant="" className={'p-4 '}>
				<AccordionSection>
					<span slot="header"> <a href="/components"> Components </a></span>
					<svelte:fragment slot="content">
						<ComponentList className="text-end" />
					</svelte:fragment>
				</AccordionSection>
				<AccordionSection>
					<span slot="header">Styling</span>
					<ul slot="content">
						<li class="ui-variant-light ui-color-primary">
							<a href="/styling#design_system">Design System</a>
						</li>
						<li class="ui-variant-light ui-color-primary"><a href="/styling#themes">Themes</a></li>
						<li class="ui-variant-light ui-color-primary">
							<a href="/styling#variants">Variants</a>
						</li>
						<li class="ui-variant-light ui-color-primary">
							<a href="/styling#color_scheme">Color Scheme</a>
						</li>
						<li class="ui-variant-light ui-color-primary">
							<a href="/styling#customization">Customization</a>
						</li>
					</ul>
				</AccordionSection>
			</Accordion>
		{/snippet}
	</Navbar>
	<slot />
</NovaUiProvider>

<style>
	@layer theme, base, nova, components, utilities;

	:root {
		scroll-behavior: smooth;
	}
</style>
