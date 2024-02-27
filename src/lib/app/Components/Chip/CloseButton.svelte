<script lang="ts">
	import type { Colors, Variants } from '$lib/app/Entities/styles.js';
	import Button from '../Button/Button.svelte';
	export let className: string = '';
	export let variant: Variants = 'solid';
	export let colors: Colors = 'primary';
	export let onClose: (ev: MouseEvent) => void;
</script>

<Button {variant} {colors} {className} withClickEffect={false}>
	<slot>close</slot>
</Button>
