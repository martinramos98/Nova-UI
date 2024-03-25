<script lang="ts">
	// import type { Colors, Radius, Size, Variants } from '$lib/app/Entities/styles.js';
	// FIXME: fix position of badges depending badge's width and heighy
	export let hideBadge: boolean = false;
	export let contentBadge: string = '';
	export let positionBadge: 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'bottomright';
	export let className = '';
	export let size = 'md';
	export let radius = 'full';
	export let variant = '';
	export let colors = '';
	function actionPaddingHandler(node: HTMLElement) {
		let value;
		if (node.innerText) {
			if (node.innerText?.length <= 2) {
				value = 'px-1';
			} else if (node.innerText?.length >= 3) {
				value = 'px-2';
			}
		}
		if (value) {
			node.classList.add(value);
			// node.classList.add('min-w-' + sizes[size]);
			// node.classList.add('min-h-' + sizes[size]);
		}
	}
</script>

<div class="ui-badge-container">
	<slot />
	<div class="{positionBadge} rounded-{radius}">
		<div
			use:actionPaddingHandler
			class="ui-badge {colors !== '' ? 'ui-color-' + colors : ''} {variant !== ''
				? 'ui-variant-' + variant
				: ''} rounded-{radius} {className} sizes-{size}"
		>
			{#if !hideBadge}
				<slot name="contentBadge" />
				{#if !$$slots.contentBadge}
					{contentBadge}
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
	@layer nova {
		.ui-badge-container {
			position: relative;
			height: fit-content;
			& > div {
				background-color: var(--color-surface);
				position: absolute;
			}
		}
		.ui-badge {
			line-height: var(--line-height-5);
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 99;
			/* min-width: fit-content; */
			place-content: center;
			user-select: none;
			:hover {
				filter: none;
			}
		}
		.topleft {
			top: 0;
			left: -10px;
		}
		.topright {
			top: 0;
			right: -10px;
		}
		.bottomleft {
			bottom: 0.5rem;
			left: -10px;
		}
		.bottomright {
			bottom: 0;
			right: -10px;
		}
		.sizes-xs {
			min-width: 1rem;
			min-height: 1rem;
			font-size: var(--font-size-xs);
		}
		.sizes-sm {
			min-width: 1.2rem;
			min-height: 1.2rem;
			font-size: var(--font-size-sm);
		}
		.sizes-md {
			min-width: 1.5rem;
			min-height: 1.5rem;
			font-size: var(--font-size-base);
		}
		.sizes-lg {
			min-width: 1.8rem;
			min-height: 1.8rem;
			font-size: var(--font-size-lg);
		}
		.sizes-xl {
			min-width: 2rem;
			min-height: 2rem;
			font-size: var(--font-size-xl);
		}
	}
</style>
