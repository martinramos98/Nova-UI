<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';

	// import type { Colors, Radius, Size, Variants } from '$lib/app/Entities/styles.js';
	// FIXME: fix position of badges depending badge's width and heighy
	interface BadgeProps {
		hideBadge?: boolean;
		contentBadge?: string | Snippet;
		positionBadge?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
		className?: string;
		size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
		radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
		variant?: string;
		colors?: string;
		children: Snippet;
	}
	const {
		hideBadge = false,
		contentBadge,
		positionBadge = 'bottom-right',
		className = '',
		size = 3,
		radius = 'full',
		variant = '',
		colors = ''
	}: BadgeProps = $props();
	let badgeEl: HTMLElement;
	let badgeSubEl: HTMLElement;

	function actionPaddingHandler() {
		const node = badgeSubEl;
		let value;
		if (node && node.innerText) {
			if (node.innerText?.length <= 2) {
				value = 'px-1';
			} else if (node.innerText?.length >= 3) {
				value = 'px-2';
			}
		}
		if (value) {
			node.classList.add(value);
		}
	}
	function setBadgePosition() {
		const node = badgeEl;
		if (node) {
			const [vert, hor] = positionBadge.split('-');
			node.style[vert as 'top' | 'bottom'] = `-${node.offsetHeight / 2}px`;
			node.style[hor as 'left' | 'right'] = `-${node.offsetWidth / 2}px`;
			node.style.visibility = 'visible';
		}
	}
	$effect(() => {
		setBadgePosition();
		actionPaddingHandler();
	});
	// $: contentBadge, badgeEl, setBadgePosition(), actionPaddingHandler();
</script>

<div class="ui-badge-container">
	{@render children()}
	<div style="visibility:hidden" class="rounded-{radius}" bind:this={badgeEl}>
		<div
			bind:this={badgeSubEl}
			class="ui-badge badge-size-{size} {colors !== '' ? 'ui-color-' + colors : ''} {variant !== ''
				? 'ui-variant-' + variant
				: ''} rounded-{radius} {className} sizes-{size}"
		>
			{#if !hideBadge}
				<slot name="contentBadge" />
				{#if typeof contentBadge === 'string'}
					{contentBadge}
				{:else if contentBadge}
					{@render contentBadge()}
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
	@layer theme, base, nova, components, utilities;
	@layer nova {
		.ui-badge-container {
			position: relative;
			height: fit-content;
			width: fit-content;
			& > div {
				background-color: var(--color-surface);
				position: absolute;
			}
		}
		.ui-badge {
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
			bottom: -20%;
			left: -10px;
		}
		.bottomright {
			bottom: -15%;
			right: -5px;
		}
		.badge-size-1 {
			font-size: xx-small;
			min-width: var(--spacing-3);
			min-height: var(--spacing-3);
		}
		.badge-size-2 {
			font-size: x-small;
			min-width: var(--spacing-4);
			min-height: var(--spacing-4);
		}
		.badge-size-3 {
			min-width: var(--spacing-5);
			min-height: var(--spacing-5);
			font-size: smaller;
		}
		.badge-size-4 {
			font-size: small;
			min-width: var(--spacing-6);
			min-height: var(--spacing-6);
		}
		.badge-size-5 {
			font-size: medium;
			min-width: var(--spacing-7);
			min-height: var(--spacing-7);
		}
		.badge-size-6 {
			font-size: large;
			min-width: var(--spacing-8);
			min-height: var(--spacing-8);
		}
		.badge-size-7 {
			font-size: larger;
			min-width: var(--spacing-9);
			min-height: var(--spacing-9);
		}
		.badge-size-8 {
			font-size: x-large;
			min-width: var(--spacing-10);
			min-height: var(--spacing-10);
		}
		.badge-size-9 {
			min-width: var(--spacing-11);
			min-height: var(--spacing-11);
			font-size: xx-large;
		}
	}
</style>
