<svelte:options runes={true} />

<script>
	const {
		color = 'var(--color-border)',
		size = 2,
		class: className = '',
		orientation = 'horizontal'
	} = $props();
</script>

<hr
	class="ui-divider {className}"
	data-orientation={orientation}
	style="border-color:{color}; --var-border-width:{size}px; "
/>

<style>
	@layer nova {
		.ui-divider {
			&[data-orientation='vertical'] {
				border-right-style: solid;
				height: auto;
				border-right-width: var(--var-border-width);
			}
			&[data-orientation='horizontal'] {
				border-top-style: solid;
				width: 100%;
				border-top-width: var(--var-border-width);
			}
		}
	}
</style>
