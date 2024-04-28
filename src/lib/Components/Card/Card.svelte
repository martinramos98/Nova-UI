<script>
	export let footerProps = { className: '' };
	export let bodyProps = { className: '' };
	export let headerProps = { className: '' };
	export let variant = '';
	export let color = '';
	export let className = '';
	/**
	 * @type {(import('svelte').Snippet) | undefined}
	 */
	export let header = undefined;
	/**
	 * @type {(import('svelte').Snippet) | undefined}
	 */

	export let body = undefined;
	/**
	 * @type {(import('svelte').Snippet) | undefined}
	 */

	export let footer = undefined;
</script>

<div
	class="ui-card {variant ? 'ui-variant-' + variant : ''} {color
		? 'ui-color-' + color
		: ''} {className}"
>
	{#if header}
		<div class="ui-card-header {headerProps.className}">
			{@render header()}
		</div>
	{/if}
	{#if body}
		<div class="ui-card-body{bodyProps.className}">
			{@render body()}
		</div>
	{/if}
	<slot />
	{#if footer}
		<div class="ui-card-footer {footerProps.className}">
			{@render footer()}
		</div>
	{/if}

	{#if $$slots['card-backface']}
		<slot name="card-backface">
			<slot />
		</slot>
	{/if}
</div>

<style>
	@layer theme, base, nova, components, utilities;
	@layer nova {
		.ui-card {
			display: flex;
			flex-direction: column;
			border-radius: var(--radius-xl);
			/* background-color: var(--color-surface-hight); */
			width: fit-content;
			overflow: hidden;
			transition: filter 0.2s ease;
			height: fit-content;
		}
	}
</style>
