<svelte:options runes={true} />

<script lang="ts">
	import { CircleIcon, WarningIcon, AlertIcon, InfoIcon, Icon, SuccessIcon } from '@nv-org/icon';

	type TypeIcon = 'default' | 'warning' | 'alert' | 'success' | 'info';
	const { type }: { type: TypeIcon } = $props();
	const icons = {
		default: { viewBox: '0 0 24 24', icon: CircleIcon },
		warning: { viewBox: '0 0 24 24', icon: WarningIcon },
		alert: { viewBox: '0 0 24 24', icon: AlertIcon },
		success: { viewBox: '0 0 24 24', icon: SuccessIcon },
		info: { viewBox: '0 0 24 24', icon: InfoIcon }
	};
	const IconType = icons[type].icon;
</script>

<Icon stroke="currentColor" width="24px" height="24px" fill="none">
	<IconType />
</Icon>
