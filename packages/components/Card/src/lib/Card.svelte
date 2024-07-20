<svelte:options runes={true} />

<script>
	/** @type {{className?:string,footerClassname?:string,headerClassname?:string,bodyClassname?:string,variant?:string,color?:string,children?:import('svelte').Snippet,header?:import('svelte').Snippet, body?:import('svelte').Snippet,footer?:import('svelte').Snippet}} */
	const {
		footerClassname = '',
		headerClassname = '',
		bodyClassname = '',
		variant = '',
		color = '',
		className = '',
		children,
		header,
		body,
		footer
	} = $props();
</script>

<div
	class="ui-card {variant ? 'ui-variant-' + variant : ''} {color
		? 'ui-color-' + color
		: ''} {className}"
>
	{#if header}
		<div class="ui-card-header {headerClassname}">
			{@render header()}
		</div>
	{/if}
	{#if body}
		<div class="ui-card-body {bodyClassname}">
			{@render body()}
		</div>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	{#if footer}
		<div class="ui-card-footer {footerClassname}">
			{@render footer()}
		</div>
	{/if}

	<!-- {#if $$slots['card-backface']}
		<slot name="card-backface">
			<slot />
		</slot>
	{/if} -->
</div>

<style>
	@layer theme, base, nova, components, utilities;
	@layer nova {
		.ui-card {
			display: flex;
			flex-direction: column;
			border-radius: var(--radius-xl);
			background-color: var(--color-container);
			width: fit-content;
			overflow: hidden;
			transition: filter 0.2s ease;
			height: fit-content;
		}
		:global {
			.ui-card {
				& .ui-card-header {
					grid-area: header;
				}
				& .ui-card-body {
					grid-area: body;
				}
				& .ui-card-footer {
					grid-area: footer;
				}
			}
		}
	}
</style>
