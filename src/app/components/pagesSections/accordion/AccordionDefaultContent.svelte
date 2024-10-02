<svelte:options runes={true} />

<script>
	import { Title } from '@nv-org/title';
	import { AccordionSection } from '@nv-org/accordion';
</script>

<AccordionSection>
	{#snippet header()}
		<p>Section 1</p>
	{/snippet}
	<Title level={4}>Section 1</Title>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi aperiam
		vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo aliquam. Nihil natus
		maxime ipsam sapiente nam?
	</p>
</AccordionSection>
<AccordionSection>
	{#snippet header()}
		<p>Section 2</p>
	{/snippet}
	<Title level={4}>Section 2</Title>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi aperiam
		vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo aliquam. Nihil natus
		maxime ipsam sapiente nam?
	</p>
</AccordionSection>
<AccordionSection>
	{#snippet header()}
		<p>Section 3</p>
	{/snippet}
	<Title level={4}>Section 3</Title>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi aperiam
		vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo aliquam. Nihil natus
		maxime ipsam sapiente nam?
	</p>
</AccordionSection>
