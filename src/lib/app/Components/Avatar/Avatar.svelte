<script lang="ts">
	import { onMount } from 'svelte';

	export let disabled = false;
	export let avatarSrc: string | undefined = undefined;
	export let defaultIcon = undefined;
	export let avatarName = '';
	export let colors = '';
	export let avatarBordered = false;
	export let className: string = '';
	let FirstLettersOfName = '';
	avatarName.split(' ').forEach((word) => {
		FirstLettersOfName += word.charAt(0);
	});
</script>

<div aria-disabled={disabled} class="ui-avatar {colors} {className}" class:avatarBordered>
	{#if avatarSrc && avatarSrc !== ''}
		<img src={avatarSrc} alt={'Avatar Image ' + avatarName} />
	{/if}
	{#if !avatarSrc && FirstLettersOfName !== ''}
		<span>{FirstLettersOfName}</span>
	{/if}
	{#if !avatarSrc && FirstLettersOfName === ''}
		<span>holi</span>
	{/if}
</div>
