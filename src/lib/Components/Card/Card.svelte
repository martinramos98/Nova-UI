<script>
	export let footerProps = { className: '' };
	export let bodyProps = { className: '' };
	export let headerProps = { className: '' };
	export let className = '';
</script>

<div class="ui-card {className}">
	{#if $$slots.header}
		<div class="ui-card-header {headerProps.className}">
			<slot name="header" />
		</div>
	{/if}
	{#if $$slots.body}
		<div class="ui-card-body{bodyProps.className}">
			<slot name="body" />
		</div>
	{/if}
	<slot />
	{#if $$slots.footer}
		<div class="ui-card-footer {footerProps.className}">
			<slot name="footer" />
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
