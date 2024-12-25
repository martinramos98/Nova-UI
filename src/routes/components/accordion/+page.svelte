<script lang="ts">
	import { Title } from '@nv-org/title';
	import { Accordion, AccordionSection } from '@nv-org/accordion';
	import PropItem from '../../../app/components/propItem/PropItem.svelte';
	import CodeSnippet from '../../../app/components/CodeSnippet/CodeSnippet.svelte';
	import AccordionVariantCases from '../../../app/components/pagesSections/accordion/AccordionVariantCases/AccordionVariantCases.svelte';
	import AccordionMultiselectionCase from '../../../app/components/pagesSections/accordion/MultiselectionCase/AccordionMultiselectionCase.svelte';
	import { Divider } from '@nv-org/divider';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	export let data;
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
	<AsideComponentPage
		asideItems={[
			{ ref: '#accordion', text: 'Accordion' },
			{ ref: '#multiopen', text: 'Multiopen' },
			{ ref: '#variants', text: 'Variants' },
			{ ref: '#properties', text: 'Properties' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical" size={1}></Divider>
	<main>
		<article id="accordion">
			<header>
				<Title>Accordion</Title>
			</header>
			<section>
				<div>
					<Accordion class="m-2">
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
		<article id="multiopen">
			<header>
				<Title level={2}>Multiopen</Title>
			</header>
			<AccordionMultiselectionCase />
		</article>
		<article id="variants">
			<header><Title level={2}>Variants</Title></header>
			<AccordionVariantCases />
		</article>
		<article id="properties">
			<header><Title level={2}>Properties</Title></header>
			<section>
				{#each data.data as propItem}
					<PropItem data={propItem}></PropItem>
				{/each}
			</section>
			<!-- <AccordionProps /> -->
		</article>
	</main>
</div>

<style>
	.page-content section > div {
		width: 100%;
	}
</style>
