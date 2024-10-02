<script>
	import { Navbar, MenuButton, Accordion, AccordionSection, CloseButton } from '$lib/index';
	import ComponentList from '../app/components/ComponentsList/ComponentList.svelte';
	import NovaUIProvider from '$lib/providers/NovaUIProvider.svelte';
</script>

<NovaUIProvider>
	<Navbar
		useContainerQuery={false}
		class="navbar-color  flex flex-row justify-between backdrop-blur-sm fixed top-3 left-[2.5%] w-[95%] h-[40px] rounded-full z-40"
		variant="menu"
		menuProps={{
			drawerProps: {
				class: 'z-50 ',
				size: 'sm',
				modalContent: {
					class: 'overflow-auto'
				},
				backdrop: {
					class: '',
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
			<CloseButton class="lg:hidden absolute right-6 top-2" onClose={toggleMenu}></CloseButton>
			<Accordion multiopen variant="" className={'px-4 py-8'}>
				<AccordionSection>
					{#snippet header()}
						<span> <a href="/components"> Components </a></span>
					{/snippet}
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
				</AccordionSection>
				<AccordionSection>
					{#snippet header()}
						<span>Styling</span>
					{/snippet}
					<ul>
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

	:global {
		html {
			tab-size: 2 !important;
		}
	}
</style>
