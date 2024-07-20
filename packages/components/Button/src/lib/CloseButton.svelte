<script lang="ts">
	import Button from './Button.svelte';
	import { Icon, CrossIcon } from '@nv-org/icon';
	export let className: string = '';
	export let variant: any = 'solid';
	export let colors: any = 'primary';
	export let onClose: (ev: MouseEvent) => void;
</script>

<Button {variant} {colors} {className} onClick={onClose} withClickEffect={false}>
	<slot>
		<Icon props={{ fill: 'currentcolor', viewBox: '0 0 24 24', class: 'size-4' }}>
			<CrossIcon />
		</Icon>
	</slot>
</Button>
