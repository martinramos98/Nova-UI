<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from './Button.svelte';
	import { Icon, CrossIcon } from '@nv-org/icon';
	interface CloseButtonProps {
		className?: string;
		variant?: any;
		colors?: any;
		onClose: (ev: MouseEvent) => void;
		children?: Snippet;
		side: 'left' | 'right';
	}
	const {
		className = '',
		variant = 'solid',
		colors = 'primary',
		onClose,
		side = 'left'
	}: CloseButtonProps = $props();
</script>

<Button {variant} {colors} {className} onClick={onClose} withClickEffect={false}>
	{#if children && side === 'left'}
		{@render children()}
	{/if}
	<Icon props={{ fill: 'currentcolor', viewBox: '0 0 24 24', class: 'size-4' }}>
		<CrossIcon />
	</Icon>
	{#if children && side === 'right'}
		{@render children()}
	{/if}
</Button>
