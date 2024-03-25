<script lang="ts">
	import Button from '../Button/Button.svelte';
	import Icon from '../Icons/Icon.svelte';
	import MenuIcon from '../Icons/IconsPath/MenuIcon.svelte';
	export let onClickMenu: () => void;
	export let className = '';
</script>

<Button className="ui-menu-button {className}" withClickEffect={false} onClick={onClickMenu}>
	<slot>
		<Icon props={{ viewBox: '0 0 24 24', width: '24px', height: '24px', stroke: 'currentcolor' }}>
			<MenuIcon />
		</Icon>
	</slot>
</Button>
