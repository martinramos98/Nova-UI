<script>
	// import { Navbar, MenuButton, Accordion, AccordionSection, CloseButton } from '$lib/index';
	import { Navbar } from '@nv-org/navbar';
	import NovaUIProvider from '$lib/providers/NovaUIProvider.svelte';
</script>

<NovaUIProvider>
	<Navbar
		useContainerQuery={false}
		class="navbar-color  flex flex-row justify-between backdrop-blur-sm sticky top-0 rounded-b-3xl left-[2.5%] w-[95%] h-[40px] z-40"
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
		{#snippet children()}
			<span class="font-bold ml-2"><a href="/">Nova UI</a></span>
		{/snippet}
	</Navbar>
	<slot />
</NovaUIProvider>

<style>
	@layer theme, base, nova, components, utilities;

	:root {
		scroll-behavior: smooth;
		/* background: rgb(20, 20, 20); */
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
