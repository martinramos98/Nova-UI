<script lang="ts">
	import type { Colors, Variants } from '$lib/app/Entities/styles.js';
	export let variant: Variants | '' = '';
	export let colors: Colors | '' = '';
	export let className = '';
	export let size: 'sm' | 'md' | 'lg' = 'sm';
</script>

<span class="ui-chip {colors} {variant} sizes-{size} {className}">
	<slot />
</span>

<style lang="postcss">
	:global(.ui-chip) {
		display: flex;
		align-items: center;
		place-items: center;
		place-content: center;
		transition: all 0.3s ease;
	}
	.sizes-sm {
		border-radius: theme(borderRadius.2xl);
		min-width: theme(minWidth.6);
		min-height: theme(minHeight.7);
		font-size: theme(fontSize.sm);
		height: theme(height.fit);
		padding: 0rem 1rem;
	}
	.sizes-md {
		border-radius: theme(borderRadius.2xl);
		min-width: theme(minWidth.8);
		min-height: theme(minHeight.8);
		font-size: theme(fontSize.lg);
		height: theme(height.fit);
		padding: 0.1rem 1.2rem;
	}
	.sizes-lg {
		border-radius: theme(borderRadius.3xl);
		min-width: theme(minWidth.24);
		min-height: theme(minHeight.5);
		font-size: theme(fontSize.2xl);
		padding: 0.1rem 1.2rem;
	}
</style>
