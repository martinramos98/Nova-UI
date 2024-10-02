<svelte:options runes={true} />

<script>
	import { Modal } from '@nv-org/modal';
	import { Button } from '@nv-org/button';
	import { Title } from '@nv-org/title';
	import { Option, Selection } from '@nv-org/selection';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import modalSizeTextCode from './CodeText.js';

	let open = $state(false);
	let size = $state(new Set(['md']));
	$effect(() => {
		console.log(size);
	});
</script>

<section class="relative">
	<Selection
		class="absolute top-0 right-1"
		placeholder="Select size"
		bind:selectedValue={size}
		variant="faded"
	>
		{#each ['sm', 'md', 'lg', 'xl', '2xl', 'full'] as item}
			<Option value={item}>{item}</Option>
		{/each}
	</Selection>
	<ComponentCodeTabs code={modalSizeTextCode(size.values().next().value ?? '')}>
		{#snippet component()}
			<div>
				<Button
					variant="solid"
					colors="info"
					onClick={() => {
						open = true;
					}}
					>Open Modal {size.values().next().value ?? ''}
				</Button>
				<Modal
					{open}
					radius={'2xl'}
					size={size.values().next().value ?? ''}
					onClose={() => {
						open = false;
					}}
				>
					{#snippet header()}
						<Title level={3} class="text-center w-full">Modal</Title>
					{/snippet}
					<p></p>
					{#snippet footer()}
						<Button variant="solid" colors="success">Accept</Button>
						<Button
							variant="flat"
							colors="error"
							onClick={() => {
								open = !open;
							}}>Cancel</Button
						>
					{/snippet}
				</Modal>
			</div>
		{/snippet}
	</ComponentCodeTabs>
</section>
