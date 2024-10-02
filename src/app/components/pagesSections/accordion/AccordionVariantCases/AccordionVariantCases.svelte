<svelte:options runes={true} />

<script>
	import { Accordion } from '@nv-org/accordion';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import codeTextAccordionVariants from './codeText.js';
	import { Option, Selection } from '@nv-org/selection';
	import AccordionDefaultContent from '../AccordionDefaultContent.svelte';
	let variant = $state(new Set(['default']));
</script>

<section class="relative">
	<Selection
		selectionLabel="Variant"
		bind:selectedValue={variant}
		class="absolute top-0 right-1 w-[200px]"
		variant="faded"
	>
		{#each ['bordered-items', 'splitted', 'splitted-content', 'default-accordion'] as opt}
			<Option value={opt}>{opt}</Option>
		{/each}
	</Selection>
	<ComponentCodeTabs
		code={codeTextAccordionVariants(variant.values().next().value ?? 'default-accordion')}
	>
		{#snippet component()}
			<Accordion variant={variant.values().next().value} multiopen={false} className="m-2">
				<AccordionDefaultContent />
			</Accordion>
		{/snippet}
	</ComponentCodeTabs>
</section>
