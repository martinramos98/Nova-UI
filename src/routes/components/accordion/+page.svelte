<script lang="ts">
	import { Title } from '@nv-org/title';
	import { Accordion, AccordionSection } from '@nv-org/accordion';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	import CodeSnippet from '../../../app/components/CodeSnippet/CodeSnippet.svelte';
	import AccordionVariantCases from '../../../app/components/pagesSections/accordion/AccordionVariantCases/AccordionVariantCases.svelte';
	import AccordionMultiselectionCase from '../../../app/components/pagesSections/accordion/MultiselectionCase/AccordionMultiselectionCase.svelte';
	import AccordionProps from '../../../app/components/pagesSections/accordion/AccordionProps/AccordionProps.svelte';
	function codeStringWith(propsStrig: string) {
		return `<Accordion className="m-2" ${propsStrig}>
	<AccordionSection>
		{#snippet header()}
			<p>Section 1</p>
		{/snippet}
		<Title level={4}>Section 1</Title>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi aperiam
			vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo aliquam. Nihil
			natus maxime ipsam sapiente nam?
		</p>
	</AccordionSection>
	<AccordionSection>
		{#snippet header()}
			<p>Section 2</p>
		{/snippet}
		<Title level={4}>Section 2</Title>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi aperiam
			vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo aliquam. Nihil
			natus maxime ipsam sapiente nam?
		</p>
	</AccordionSection>
	<AccordionSection>
		{#snippet header()}
			<p>Section 3</p>
		{/snippet}
		<Title level={4}>Section 3</Title>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi aperiam
			vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo aliquam. Nihil
			natus maxime ipsam sapiente nam?
		</p>
	</AccordionSection>
</Accordion>
		`;
	}
</script>

{#snippet accordionDefaultContent()}
	<AccordionSection>
		{#snippet header()}
			<p>Section 1</p>
		{/snippet}
		<Title level={4}>Section 1</Title>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi aperiam
			vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo aliquam. Nihil
			natus maxime ipsam sapiente nam?
		</p>
	</AccordionSection>
	<AccordionSection>
		{#snippet header()}
			<p>Section 2</p>
		{/snippet}
		<Title level={4}>Section 2</Title>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi aperiam
			vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo aliquam. Nihil
			natus maxime ipsam sapiente nam?
		</p>
	</AccordionSection>
	<AccordionSection>
		{#snippet header()}
			<p>Section 3</p>
		{/snippet}
		<Title level={4}>Section 3</Title>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi aperiam
			vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo aliquam. Nihil
			natus maxime ipsam sapiente nam?
		</p>
	</AccordionSection>
{/snippet}

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#accordion">Accordion</a></li>
			<li><a href="#multiopen">Multiopen</a></li>
			<li><a href="#variants">Variants</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title>Accordion</Title>
			</header>
			<section>
				<div>
					<Accordion className="m-2">
						{@render accordionDefaultContent()}
					</Accordion>
				</div>
				<div>
					<Title level={3}>Import</Title>
					<CodeSnippet textCode={`import { Accordion, AccordionSection } from 'nova-js-ui'`}
					></CodeSnippet>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Multiopen</Title>
			</header>
			<AccordionMultiselectionCase />
		</article>
		<article>
			<header><Title level={2}>Variants</Title></header>
			<AccordionVariantCases />
		</article>
		<article>
			<header><Title level={2}>Properties</Title></header>
			<AccordionProps />
		</article>
	</main>
</div>

<style>
	.page-content section > div {
		width: 100%;
	}
</style>
