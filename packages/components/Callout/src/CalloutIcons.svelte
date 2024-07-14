<script lang="ts">
	import { CircleIcon, WarningIcon, AlertIcon, InfoIcon, Icon, SuccessIcon } from '@nova/icon';

	export let type: 'default' | 'warning' | 'alert' | 'success' | 'info' = 'default';
	const icons = {
		default: { viewBox: '0 0 24 24', icon: CircleIcon },
		warning: { viewBox: '0 0 24 24', icon: WarningIcon },
		alert: { viewBox: '0 0 24 24', icon: AlertIcon },
		success: { viewBox: '0 0 24 24', icon: SuccessIcon },
		info: { viewBox: '0 0 24 24', icon: InfoIcon }
	};
</script>

<Icon
	props={{
		viewBox: icons[type].viewBox,
		stroke: 'currentColor',
		width: '24px',
		height: '24px',
		fill: 'none'
	}}
>
	<svelte:component this={icons[type].icon} />
</Icon>
