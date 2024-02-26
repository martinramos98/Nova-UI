<script lang="ts">
	import type { Colors, Radius, Size, Variants } from '$lib/app/Entities/styles.js';
	// FIXME: fix position of badges depending badge's width
	export let hideBadge: boolean = false;
	export let contentBadge: string = '';
	export let positionBadge: 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'bottomright';
	export let className = '';
	export let size: Size = 'md';
	export let radius: Radius = 'full';
	export let variant: Variants | '' = '';
	export let colors: Colors | '' = '';
	// const sizes = {
	// 	xs: '4',
	// 	sm: '5',
	// 	md: '6',
	// 	lg: '7',
	// 	xl: '8'
	// };
	function actionPaddingHandler(node: HTMLElement) {
		let value;
		if (node.innerText) {
			if (node.innerText?.length <= 2) {
				value = 1;
			} else if (node.innerText?.length >= 3) {
				value = 2;
			}
		}
		if (value) {
			node.classList.add('px-' + value);
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
			class="ui-badge {colors} {variant} rounded-{radius} {className} sizes-{size}"
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

<style lang="postcss">
	.ui-badge-container {
		position: relative;
		height: fit-content;
		& > div {
			background-color: rgb(var(--color-surface));
			position: absolute;
		}
	}
	:global(.ui-badge) {
		text-align: center;
		line-height: theme(lineHeight.5);
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

	.sizes-xs {
		min-width: theme(minWidth.5);
		min-height: theme(minHeight.5);
		font-size: theme(fontSize.xs);
	}
	.sizes-sm {
		min-width: theme(minWidth.6);
		min-height: theme(minHeight.6);
		font-size: theme(fontSize.sm);
	}
	.sizes-md {
		min-width: theme(minWidth.7);
		min-height: theme(minHeight.7);
		font-size: theme(fontSize.base);
	}
	.sizes-lg {
		min-width: theme(minWidth.8);
		min-height: theme(minHeight.8);
		font-size: theme(fontSize.lg);
	}
	.sizes-xl {
		min-width: theme(minWidth.9);
		min-height: theme(minHeight.9);
		font-size: theme(fontSize.xl);
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
