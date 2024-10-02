<svelte:options runes={true} />

<script>
	import { Accordion } from '@nv-org/accordion';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import AccordionDefaultContent from '../AccordionDefaultContent.svelte';
	import codeTextMultiselection from './codeTextMultiselection.js';
</script>

<section>
	<div>
		<ComponentCodeTabs code={codeTextMultiselection()}>
			{#snippet component()}
				<Accordion multiopen={true} className="m-2">
					<AccordionDefaultContent />
				</Accordion>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
