<svelte:options runes={true} />

<script lang="ts">
	import Button from './Button.svelte';
	import { Icon, MenuIcon } from '@nv-org/icon';
	const {
		onClickMenu,
		class: className
	}: {
		onClickMenu: () => void;
		class?: string;
	} = $props();
</script>

<Button class="ui-menu-button {className}" withClickEffect={false} onClick={onClickMenu}>
	<Icon viewBox="0 0 24 24" width="24px" height="24px" stroke="currentcolor">
		<MenuIcon />
	</Icon>
</Button>
