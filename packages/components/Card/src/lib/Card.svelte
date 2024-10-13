<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface CardProps {
		footerClass?: string;
		headerClass?: string;
		bodyClass?: string;
		variant?: string;
		color?: string;
		class?: string;
		children?: any;
		header?: Snippet;
		body?: Snippet;
		footer?: Snippet;
	}
	const {
		footerClass = '',
		headerClass = '',
		bodyClass = '',
		variant = '',
		color = '',
		class: className = '',
		children,
		header,
		body,
		footer
	}: CardProps = $props();
</script>

<div
	class="ui-card {variant ? 'ui-variant-' + variant : ''} {color
		? 'ui-color-' + color
		: ''} {className}"
>
	{#if header}
		<div class="ui-card-header {headerClass}">
			{@render header()}
		</div>
	{/if}
	{#if body}
		<div class="ui-card-body {bodyClass}">
			{@render body()}
		</div>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	{#if footer}
		<div class="ui-card-footer {footerClass}">
			{@render footer()}
		</div>
	{/if}
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
