<script lang="ts">
	import { Option, Selection } from '@nv-org/selection';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Image } from '@nv-org/image';
	import imageAspectCases from './textCode.js';
	let aspect = $state(new Set(['auto']));
	let first = $derived(aspect.values().next().value);
</script>

<section class="relative">
	<aside class="absolute top-0 right-0 w-[150px]">
		<Selection variant="faded" class="w-full" bind:selectedValue={aspect}>
			<Option value={'auto'}>auto</Option>
			<Option value={'1:1'}>1:1</Option>
			<Option value={'3:4'}>3:4</Option>
			<Option value={'16:9'}>16:9</Option>
		</Selection>
	</aside>
	<div class="w-full">
		<ComponentCodeTabs code={imageAspectCases(first)}>
			{#snippet component()}
				<Image
					alt="Buenos Aires"
					height="fit-content"
					classContainer={'max-w-[400px]'}
					aspect={first}
					src="https://r4.wallpaperflare.com/wallpaper/856/590/514/night-lights-road-tower-wallpaper-734fc7670e0277e4667a6a3424ed9f1a.jpg"
				></Image>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
