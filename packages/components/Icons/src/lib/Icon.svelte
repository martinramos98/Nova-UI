<svelte:options runes={true} />

<script lang="ts">
	const { props } = $props();
</script>

<svg {...props}>
	<slot />
</svg>
