<svelte:options runes={true} />

<script>
	import { Button } from '@nv-org/button';
	import { Modal } from '@nv-org/modal';
	import { Selection, Option } from '@nv-org/selection';
	import { Title } from '@nv-org/title';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import codeTextBackdrop from './codeText.js';
	let open = $state(false);
	let backdrop = $state(new Set(['normal']));
</script>

<section class="relative">
	<Selection bind:selectedValue={backdrop} class="absolute top-0 right-1" variant="faded">
		{#each ['normal', 'blur', 'transparent'] as bd}
			<Option value={bd}>
				{bd}
			</Option>
		{/each}
	</Selection>
	<ComponentCodeTabs code={codeTextBackdrop(backdrop.values().next().value)}>
		{#snippet component()}
			<Button
				variant="solid"
				colors="info"
				onClick={() => {
					open = true;
				}}>Open {backdrop.values().next().value}</Button
			>
			<Modal
				{open}
				radius={'2xl'}
				size={'md'}
				onClose={() => {
					open = false;
				}}
				backdropType={backdrop.values().next().value}
			>
				{#snippet header()}
					<Title level={3} class="text-center w-full">Modal {backdrop.values().next().value}</Title>
				{/snippet}
				<p>Modal Body</p>
				{#snippet footer()}
					<div class="modal-footer">
						<Button variant="solid" colors="success">Accept</Button>
						<Button
							variant="flat"
							colors="error"
							onClick={() => {
								open = !open;
							}}>Cancel</Button
						>
					</div>
				{/snippet}
			</Modal>
		{/snippet}
	</ComponentCodeTabs>
</section>
