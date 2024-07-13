<script lang="ts">
	import { Drawer } from '@nova/drawer';
	import { MenuButton } from '@nova/button';
	import type { Snippet } from 'svelte';
	export let direction: 'vertical' | 'horizontal' = 'horizontal';
	export let className = '';
	export let colors = 'container';
	export let variant: 'menu' | 'default' | 'none' = 'default';
	export let radius = '';
	export let useContainerQuery = true;
	export let children: Snippet<[any]> | undefined = undefined;
	export let startContent: Snippet;
	export let centerContent: Snippet;
	export let endContent: Snippet;
	export let menuContent: Snippet<[any]> | undefined = undefined;
	export let menuProps = {
		drawerProps: {}
	};
	export let withMenu = false;
	let openMenu = false;
	function containerQuery(node: Element) {
		if (useContainerQuery) {
			node.parentElement?.classList.add('ui-container-navbar');
		}
	}
	function toggleMenu() {
		openMenu = !openMenu;
	}
</script>

<nav
	use:containerQuery
	data-menu={withMenu}
	class="ui-navbar ui-color-{colors} direction-{direction} ui-variant-{variant}-navbar {radius
		? 'radius-' + radius
		: ''} {className}"
>
	{#if variant === 'none'}
		{#if children}
			{@render children(toggleMenu)}
		{/if}
	{/if}
	{#if variant === 'menu'}
		{#if children}
			{@render children(toggleMenu)}
		{:else}
			<MenuButton onClickMenu={toggleMenu} />
		{/if}
	{/if}
	{#if variant === 'default'}
		{@render startContent()}
		{@render centerContent()}
		{#if children}
			{@render children(toggleMenu)}
		{/if}
		{@render endContent()}
	{/if}
	{#if variant === 'menu'}
		<Drawer
			size="lg"
			{...menuProps.drawerProps}
			open={openMenu}
			onClose={() => {
				openMenu = false;
			}}
		>
			{#if menuContent}
				{@render menuContent(toggleMenu)}
			{/if}
		</Drawer>
	{/if}
</nav>

<!-- </div> -->
<style>
	@layer theme, base, nova, components, utilities;
	@layer nova {
		:global {
			.ui-container-navbar {
				container-type: inline-size;
				container-name: navbar;
			}
			.ui-navbar-menu-button {
				display: none;
			}
		}
		.ui-navbar {
			&.direction-vertical {
				/* grid-template-rows: repeat(3, 1fr); */
				& > .ui-navbar-start-container {
					grid-row: 1 / 1;
					align-self: start;
					justify-self: center;
				}
				& > .ui-navbar-center-container {
					grid-row: 2 /2;
					align-self: center;
					justify-self: center;
				}
				& > .ui-navbar-end-container {
					align-self: end;
					justify-self: center;
					grid-row: 3 / 3;
				}
			}
			&.direction-horizontal {
				/* grid-template-columns: repeat(3, 1fr); */
				& > .ui-navbar-start-container {
					align-self: center;
					justify-self: start;
					grid-column: 1 / 1;
				}
				& > .ui-navbar-center-container {
					place-self: center;
					grid-column: 2 / 2;
				}
				& > .ui-navbar-end-container {
					align-self: center;
					justify-self: end;
					grid-column: 3 / 3;
				}
			}
		}
	}
</style>
