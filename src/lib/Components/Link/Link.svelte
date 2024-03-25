<script lang="ts">
	import type { Colors, Variants } from '$lib/app/Entities/styles.js';
	import { fade } from 'svelte/transition';

	// import {getLinkPreview} from 'link-preview-js'
	import Icon from '../Icons/Icon.svelte';
	import ExternalIcon from '../Icons/IconsPath/ExternalIcon.svelte';
	import Image from '../Image/Image.svelte';
	import type { LinkType } from './LinkUtils.js';
	export let type: LinkType = 'simple';
	export let href: string;
	export let target: 'self' | 'parent' | 'blank' | 'top' = 'blank';
	export let orientation: 'vertical' | 'horizontal' = 'horizontal';
	export let previewSize: 'md' | 'lg' | 'sm' | 'xs' = 'md';
	export let className = '';
	export let colors: Colors | '' = '';
	export let variant: Variants | '' = '';
	export let previewData:
		| {
				title: string;
				description: string;
				image?: string;
				favicon: string;
		  }
		| undefined = undefined;
	// pass the link directly
</script>

<a {href} target="_{target}" class="ui-link {colors} {variant} {className}">
	{#if type === 'simple'}
		<slot />
	{/if}
	{#if type === 'external'}
		<slot />
		<Icon props={{ width: '24px', height: '24px', class: 'inline' }}>
			<ExternalIcon />
		</Icon>
	{/if}
	{#if type === 'preview' && previewData}
		<div
			in:fade
			class="ui-link-preview color-container-hight orientation-{orientation} size-{previewSize}"
		>
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
