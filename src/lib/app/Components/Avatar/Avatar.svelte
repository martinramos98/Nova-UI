<script lang="ts">
	export let disabled = false;
	export let avatarSrc: string | undefined = undefined;
	export let defaultIcon = undefined;
	export let avatarName = '';
	export let colors = '';
	export let avatarBordered = false;
	export let rounded = '';
	export let className: string = '';
	let FirstLettersOfName = '';
	avatarName.split(' ').forEach((word) => {
		FirstLettersOfName += word.charAt(0);
	});
</script>

<div class="ui-avatar {colors} {'rounded-' + rounded} {className}" class:avatarBordered>
	{#if avatarSrc && avatarSrc !== ''}
		<img class={'rounded-' + rounded} src={avatarSrc} alt={'Avatar Image ' + avatarName} />
	{/if}
	{#if !avatarSrc && FirstLettersOfName !== ''}
		<span>{FirstLettersOfName}</span>
	{/if}
	{#if !avatarSrc && FirstLettersOfName === ''}
		<span>holi</span>
	{/if}
</div>

<style>
	span {
		text-transform: capitalize;
	}
	.avatarBordered {
		border: 2px solid rgb(var(--color-container));
	}
</style>
