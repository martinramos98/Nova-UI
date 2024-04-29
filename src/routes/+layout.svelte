<script>
	import NovaUiProvider from '$lib/providers/NovaUIProvider.svelte';
	import Navbar from '$lib/Components/Navbar/Navbar.svelte';
	import MenuButton from '$lib/Components/MenuButton/MenuButton.svelte';
	import Accordion from '$lib/Components/Accordion/Accordion.svelte';
	import AccordionSection from '$lib/Components/Accordion/AccordionSection/AccordionSection.svelte';
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
	>
		{#snippet children(toggleMenu)}
			<span class="font-bold"><a href="/">Nova UI</a></span>
			<MenuButton onClickMenu={toggleMenu} />
		{/snippet}
		{#snippet menuContent()}
			<Accordion multiopen variant="" className={'p-4'}>
				<AccordionSection>
					<span slot="header"> Components </span>
					<ul slot="content">
						<li class="ui-variant-light ui-color-primary">
							<a href="/components/button">Button</a>
						</li>
						<li class="ui-variant-light ui-color-primary">
							<a href="/components/avatar">Avatar</a>
						</li>
						<li class="ui-variant-light ui-color-primary">
							<a href="/components/badge">Badge</a>
						</li>
						<li class="ui-variant-light ui-color-primary">
							<a href="/components/chip">Chip</a>
						</li>
						<li class="ui-variant-light ui-color-primary">
							<a href="/components/card">Card</a>
						</li>
						<li class="ui-variant-light ui-color-primary">
							<a href="/components/image">Image</a>
						</li>
					</ul>
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
	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-right: var(--spacing-2);
		text-align: end;
		& li {
			width: 100%;
			transition: all 0.2s ease;
			& a {
				width: 100%;
				display: block;
				padding: var(--spacing-1) var(--spacing-2);
			}
		}
	}

	:root {
		scroll-behavior: smooth;
	}
</style>
