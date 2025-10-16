<script>
	import { Accordion, AccordionSection } from '@nv-org/components';
</script>

<Accordion>
	<AccordionSection>
		{#snippet header()}
			Section 1
		{/snippet}
		Content for section 1.
	</AccordionSection>
	<AccordionSection>
		{#snippet header()}
			Section 2
		{/snippet}
		Content for section 2.
	</AccordionSection>
</Accordion>
