<script lang="ts">
	export let level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
	export let className = '';
</script>

<svelte:element this={'h' + level} class="ui-title {className}">
	<slot />
</svelte:element>

<style>
	@layer nova {
		h1.ui-title {
			font-size: 2.8rem;
			font-weight: 500;
		}
		h2.ui-title {
			font-size: 2.2rem;
			font-weight: 500;
		}
		h3.ui-title {
			font-size: 1.8rem;
			font-weight: 500;
		}
		h4.ui-title {
			font-size: 1.4rem;
			font-weight: 500;
		}
		h5.ui-title {
			font-size: 1rem;
			font-weight: 500;
		}
		h6.ui-title {
			font-size: 0.8rem;
			font-weight: 500;
		}
	}
</style>
