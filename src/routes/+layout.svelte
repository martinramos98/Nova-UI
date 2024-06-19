<script>
	import {
		NovaUIProvider,
		Navbar,
		MenuButton,
		Accordion,
		AccordionSection,
		CloseButton
	} from '$lib/index';
	import ComponentList from '../app/components/ComponentsList/ComponentList.svelte';
</script>

<NovaUIProvider>
	<Navbar
		useContainerQuery={false}
		className="navbar-color  flex flex-row justify-between backdrop-blur-sm fixed top-3 left-[2.5%] w-[95%] h-[40px] rounded-full z-40"
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
		{#snippet menuContent(toggleMenu)}
			<CloseButton className="lg:hidden absolute right-6 top-2" onClose={toggleMenu}></CloseButton>
			<Accordion multiopen variant="" className={'px-4 py-8'}>
				<AccordionSection>
					<span slot="header"> <a href="/components"> Components </a></span>
					<svelte:fragment slot="content">
						<div
							role="list"
							on:click={(ev) => {
								if (ev.target?.tagName === 'A') {
									toggleMenu();
								}
							}}
						>
							<ComponentList className="text-end" />
						</div>
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
</NovaUIProvider>

<style>
	@layer theme, base, nova, components, utilities;

	:root {
		scroll-behavior: smooth;
		background: rgb(20, 20, 20);
	}

	/* TODO: Change media color-scheme for [data-theme] when feat is ready*/
	:global(.navbar-color) {
		background-color: color-mix(in srgb, var(--color-surface-low) 50%, transparent);
	}
</style>
