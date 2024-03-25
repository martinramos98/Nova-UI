<script lang="ts">
	// TODO: Define type of variantas and colors
	export let variant: any | '' = '';
	export let colors: any | '' = '';
	export let className = '';
	export let size: 'sm' | 'md' | 'lg' = 'sm';
</script>

<span
	class="ui-chip sizes-{size} {colors !== '' ? 'ui-color-' + colors : ''} {variant !== ''
		? 'ui-variant-' + variant
		: ''} {className}"
>
	<slot />
</span>

<style>
	@layer components {
		@layer nova {
			.ui-chip {
				display: flex;
				align-items: center;
				place-items: center;
				place-content: center;
				transition: all 0.3s ease;
			}
			.sizes-sm {
				border-radius: var(--radius-2xl);
				min-width: var(--spacing-6);
				min-height: var(--spacing-7);
				font-size: var(--font-size-sm);
				height: fit-content;
				padding: 0rem 1rem;
			}
			.sizes-md {
				border-radius: var(--radius-2xl);
				min-width: var(--spacing-8);
				min-height: var(--spacing-8);
				font-size: var(--font-size-lg);
				height: fit-content;
				padding: 0.1rem 1.2rem;
			}
			.sizes-lg {
				border-radius: var(--radius-3xl);
				min-width: var(--spacing-24);
				min-height: var(--spacing-5);
				font-size: var(--font-size-2xl);
				padding: 0.1rem 1.2rem;
			}
		}
	}
</style>
