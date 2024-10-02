<svelte:options runes={true} />

<script lang="ts">
	import { Drawer } from '@nv-org/drawer';
	import { MenuButton } from '@nv-org/button';
	import type { Snippet } from 'svelte';
	interface NavbarProps {
		direction?: 'vertical' | 'horizontal';
		class?: string;
		colors?: string;
		variant?: 'menu' | 'default' | 'none';
		radius?: string;
		useContainerQuery?: boolean;
		children: Snippet<[any]> | undefined;
		startContent?: Snippet;
		centerContent?: Snippet;
		endContent?: Snippet;
		menuContent?: Snippet<[any]> | undefined;
		menuProps?: {
			drawerProps: any;
		};
		withMenu?: boolean;
	}
	const {
		direction = 'horizontal',
		class: className = '',
		colors = 'container',
		variant = 'default',
		radius = '',
		useContainerQuery = true,
		children = undefined,
		startContent,
		centerContent,
		endContent,
		menuContent = undefined,
		menuProps = {
			drawerProps: {}
		},
		withMenu = false
	}: NavbarProps = $props();
	let openMenu = $state(false);
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
		{#if startContent}
			{@render startContent()}
		{/if}
		{#if centerContent}
			{@render centerContent()}
		{/if}
		{#if children}
			{@render children(toggleMenu)}
		{/if}
		{#if endContent}
			{@render endContent()}
		{/if}
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
