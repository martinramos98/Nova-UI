<script lang="ts">
	import { Icon, UserIcon } from '@nv-org/icon';
	import type { Snippet } from 'svelte';
	interface AvatarProps {
		disabled?: boolean;
		avatarSrc?: string;
		defaultIcon?: Snippet | string;
		avatarName?: string;
		size?: 'sm' | 'md' | 'lg';
		colors?: string;
		avatarBordered?: boolean;
		class?: string;
		ref?: HTMLElement;
	}
	let {
		disabled = false,
		avatarSrc = undefined,
		defaultIcon,
		avatarName = '',
		colors = '',
		avatarBordered = false,
		class: className = '',
		ref = $bindable()
	}: AvatarProps = $props();
	let firstLettersOfName = $state('');
	$effect(() => {
		if (!avatarSrc) {
			let firstLetters = '';
			avatarName.split(' ').forEach((word: string) => {
				firstLetters += word.charAt(0);
			});
			firstLettersOfName = firstLetters;
		}
	});
</script>

<div
	bind:this={ref}
	class={['ui-avatar', colors && `ui-color-${colors}`, className]}
	aria-disabled={disabled}
	class:avatarBordered
>
	{#if avatarSrc && avatarSrc !== ''}
		<img src={avatarSrc} alt={'Avatar Image ' + avatarName} />
	{/if}
	{#if !avatarSrc && firstLettersOfName !== ''}
		{firstLettersOfName}
	{/if}
	{#if !avatarSrc && firstLettersOfName === ''}
		{#if typeof defaultIcon === 'string'}
			<img src={defaultIcon} alt={avatarName} />
		{:else if defaultIcon}
			{@render defaultIcon()}
		{:else}
			<Icon fill="currentcolor" width="inherit" height="inherit" viewBox="0 0 24 24">
				<UserIcon />
			</Icon>
		{/if}
	{/if}
</div>

<style>
	@layer theme, base, nova, components, utilities;
	@layer nova {
		.ui-avatar {
			display: inline-block;
			color: var(--color-text);
			flex-shrink: 0;
			width: var(--width-xxs);
			height: var(--width-xxs);
			border-radius: var(--radius-full);
			background: var(--color-surface);
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
