<script lang="ts">
	import Icon from '../Icons/Icon.svelte';
	import UserIcon from '../Icons/IconsPath/UserIcon.svelte';

	export let disabled = false;
	export let avatarSrc: string | undefined = undefined;
	export let defaultIcon = undefined;
	export let avatarName = '';
	export let size: any = 'md';
	export let colors = '';
	export let avatarBordered = false;
	export let className: string = '';
	let FirstLettersOfName = '';
	$: avatarName, () => {};
	avatarName.split(' ').forEach((word) => {
		FirstLettersOfName += word.charAt(0);
	});
</script>

<div
	aria-disabled={disabled}
	class="ui-avatar {colors !== '' ? 'ui-color-' + colors : ''} size-{size} {className}"
	class:avatarBordered
>
	{#if avatarSrc && avatarSrc !== ''}
		<img src={avatarSrc} alt={'Avatar Image ' + avatarName} />
	{/if}
	{#if !avatarSrc && FirstLettersOfName !== ''}
		<span>{FirstLettersOfName}</span>
	{/if}
	{#if !avatarSrc && FirstLettersOfName === ''}
		<Icon
			props={{ fill: 'currentcolor', width: 'inherit', height: 'inherit', viewBox: '0 0 24 24' }}
		>
			<UserIcon />
		</Icon>
	{/if}
</div>

<style>
	@layer nova {
		.ui-avatar {
			display: inline-block;
			flex-shrink: 0;
			width: var(--width-xxs);
			height: var(--width-xxs);
			border-radius: var(--radius-full);
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
			transition:
				translate 0.3s ease 0.1s,
				margin-inline-start 0.1s ease;
			& > span {
				display: flex;
				align-items: center;
				justify-content: center;
				user-select: none;
				background-color: var(--color-subcontainer);
				border: 2px solid transparent;

				width: 100%;
				height: 100%;
				border-radius: inherit;
			}
			& span {
				text-transform: capitalize;
			}
			& img {
				padding: 2.5px;
				width: 100%;
				height: 100%;
				background-color: var(--color-surface-hight);
				border-radius: inherit;
			}
		}
		.avatarBordered {
			border: 2px solid var(--color-container);
		}
		.ui-avatar[aria-disabled='true'] {
			cursor: not-allowed;
			filter: brightness(0.5);
		}
	}
</style>
