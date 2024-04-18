<script lang="ts">
	import Drawer from '../Drawer/Drawer.svelte';
	import Button from '../Button/Button.svelte';
	import Icon from '../Icons/Icon.svelte';
	import MenuIcon from '../Icons/IconsPath/MenuIcon.svelte';
	import CloseButton from '../CloseButton/CloseButton.svelte';
	import MenuButton from '../MenuButton/MenuButton.svelte';
	export let direction: 'vertical' | 'horizontal' = 'horizontal';
	export let className = '';
	export let colors = 'container-low';
	export let variant: 'menu' | 'default' | 'none' = 'default';
	export let radius = '';
	export let useContainerQuery = true;
	export let menuProps = {
		position: 'start',
		contentOnMenu: { startContent: true, centerContent: true, endContent: true }
	};
	export let withMenu = false;
	let openMenu = false;
	// FIXME: cuando se haga una configuracion y se use un postcss preprocesor que dependiendo que valor se haya cargado se cargue o como container query o como media query
	function containerQuery(node: Element) {
		if (useContainerQuery) {
			node.parentElement?.classList.add('ui-container-navbar');
		}
	}
	function toggleMenu() {
		openMenu = !openMenu;
	}
</script>

<!-- <div class="container-navbar"> -->
<nav
	use:containerQuery
	data-menu={withMenu}
	class="ui-navbar ui-color-{colors} direction-{direction} ui-variant-{variant}-navbar rounded-{radius} {className}"
>
	{#if variant === 'none'}
		<slot />
	{/if}
	{#if variant === 'menu'}
		<slot {toggleMenu}>
			<MenuButton onClickMenu={toggleMenu} />
		</slot>
	{/if}
	{#if variant === 'default'}
		<slot name="start-content" />
		<slot name="center-content" />
		<slot name="end-content" />
		<slot />
	{/if}

	{#if withMenu && menuProps.position === 'start'}{/if}
	{#if withMenu && menuProps.position === 'end'}
		<Button
			className="ui-navbar-menu-button"
			withClickEffect={false}
			onClick={() => {
				openMenu = !openMenu;
			}}
		>
			<Icon props={{ viewBox: '0 0 24 24', width: '24px', height: '24px', stroke: 'currentcolor' }}>
				<MenuIcon />
			</Icon>
		</Button>
	{/if}
	{#if withMenu || variant === 'menu'}
		<Drawer
			size={'full'}
			open={openMenu}
			onClose={() => {
				openMenu = false;
			}}
		>
			<slot name="menu-content" />

			<slot {toggleMenu} name="menu-content">
				<CloseButton className={'absolute top-2 right-7'} variant="flat" onClose={toggleMenu}
				></CloseButton>
			</slot>
		</Drawer>
	{/if}
</nav>

<!-- </div> -->
<style>
	@layer nova {
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
