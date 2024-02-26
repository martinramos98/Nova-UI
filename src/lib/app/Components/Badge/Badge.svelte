<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';
	export let hideBadge: boolean = false;
	export let contentBadge: string = '';
	export let positionBadge: 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'bottomright';
	export let className = '';
</script>

<div class="ui-badge-container">
	<slot />
	<div class="ui-badge {positionBadge} {className}">
		{#if !hideBadge}
			<slot name="contentBadge" />
			{#if !$$slots.contentBadge}
				{contentBadge}
			{/if}
		{/if}
	</div>
</div>

<style lang="postcss">
	.ui-badge-container {
		position: relative;
		background-color: inherit;
	}
	.ui-badge {
		position: absolute;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 99;
	}
	.topleft {
		top: theme(inset[0]);
		left: -10px;
	}
	.topright {
		top: theme(inset[0]);
		right: -10px;
	}
	.bottomleft {
		bottom: theme(inset[0.5]);
		left: -10px;
	}
	.bottomright {
		bottom: theme(inset[0]);
		right: -10px;
	}
</style>
