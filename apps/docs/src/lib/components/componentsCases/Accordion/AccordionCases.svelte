<script>
	import { Accordion, AccordionSection } from '@nv-org/components';
	// @props
	const { variant, color, multiopen } = $props();
</script>

<Accordion {variant} colors={color} {multiopen}>
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
