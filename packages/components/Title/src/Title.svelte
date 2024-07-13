<svelte:options runes={true} />

<script>
	/** @type {{level?:number,class?:string,children:import('svelte').Snippet}} */
	const { level = 1, class: className = '', children } = $props();
</script>

<svelte:element this={'h' + level} class="ui-title {className}">
	{@render children()}
</svelte:element>

<style>
	@layer nova {
		h1.ui-title {
			font-size: 2.8rem;
		}
		h2.ui-title {
			font-size: 2.2rem;
		}
		h3.ui-title {
			font-size: 1.8rem;
		}
		h4.ui-title {
			font-size: 1.4rem;
		}
		h5.ui-title {
			font-size: 1rem;
		}
		h6.ui-title {
			font-size: 0.8rem;
		}
	}
</style>
