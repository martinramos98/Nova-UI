<svelte:options runes={true} />

<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Icon, ExternalIcon } from '@nv-org/icon';
	import type { LinkType } from './LinkUtils.js';
	import type { Snippet } from 'svelte';
	interface LinkProps {
		type?: LinkType;
		href: string;
		target?: 'self' | 'parent' | 'blank' | 'top';
		orientation?: 'vertical' | 'horizontal';
		previewSize?: 'md' | 'lg' | 'sm' | 'xs';
		class?: string;
		colors?: any | '';
		variant?: any | '';
		children: Snippet;
		previewData?:
			| {
					title: string;
					description: string;
					image?: string;
					favicon: string;
			  }
			| undefined;
	}
	const {
		type = 'simple',
		href,
		target = 'blank',
		orientation = 'horizontal',
		previewSize = 'md',
		class: className = '',
		colors = '',
		variant = '',
		children,
		previewData = undefined
	}: LinkProps = $props();
</script>

<a {href} target="_{target}" class="ui-link ui-color-{colors} ui-variant-{variant} {className}">
	{#if type === 'simple'}
		{@render children()}
	{/if}
	{#if type === 'external'}
		{@render children()}
		<Icon width="24px" height="24px" fill="none" class="inline stroke-[var(--color-text)]">
			<ExternalIcon />
		</Icon>
	{/if}
	{#if type === 'preview' && previewData}
		<div in:fade class="ui-link-preview orientation-{orientation} size-{previewSize}">
			<!-- <Image radius={'none'} src={previewData.image} alt={previewData.title}></Image> -->
			<img src={previewData.image} alt="" />
			<div>
				<span>{previewData.title}</span>
				{#if previewSize !== 'xs'}
					<p>{previewData.description}</p>
				{/if}
			</div>
		</div>
	{/if}
</a>

<style>
	@layer nova {
		a {
			width: fit-content;
			height: fit-content;
			display: block;
		}
		a:has(.ui-link-preview) {
			width: 100%;
		}
		.ui-link-preview {
			display: flex;
			align-items: start;
			background-color: var(--color-surface);
			justify-content: start;
			overflow: hidden;
			text-overflow: ellipsis;
			border-radius: var(--radius-xl);
			& div {
				/* margin: auto 0; */
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 100%;
				& span {
					align-self: self-start;
					display: block;
					width: 100%;
					font-weight: bold;
				}
				& p {
					width: 100%;
					align-self: center;
				}
			}
		}
		.orientation-vertical {
			flex-direction: column;
			& div {
				padding: 4%;
			}
			& > img {
				align-self: normal;
				height: 50%;
				width: 100%;
				object-fit: cover;
				flex-shrink: 0;
			}
			&.size-xs {
				width: 100%;
				max-width: 100px;
				height: 120px;
				& div {
					text-align: center;
				}
			}
			&.size-sm {
				width: 100%;
				max-width: 200px;
				height: 300px;
			}
			&.size-md {
				width: 100%;
				max-width: 250px;
				height: 350px;
			}
			&.size-lg {
				width: 100%;
				max-height: 700px;
				max-width: 300px;
				height: 400px;
			}
		}
		.orientation-horizontal {
			flex-direction: row;
			& div {
				padding: 4%;
			}
			& > img {
				max-width: 25%;
				align-self: normal;
				object-fit: cover;
				flex-shrink: 0;
			}
			&.size-xs {
				max-width: 200px;
				border-radius: var(--radius-lg);
				align-items: center;
				font-size: medium;
				& span {
					text-overflow: ellipsis;
					width: calc(100% - 30%);
					overflow: hidden;
					white-space: nowrap;
				}
			}
			&.size-sm {
				max-width: 300px;
			}
			&.size-md {
				max-width: 500px;
			}
			&.size-lg {
				max-width: 700px;
			}
		}
	}
</style>
