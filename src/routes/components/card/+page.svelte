<script>
	import { Card } from '@nv-org/card';
	import { Title } from '@nv-org/title';
	import { Divider } from '@nv-org/divider';
	import { Avatar } from '@nv-org/avatar';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	import CardContentsCases from '../../../app/components/pagesSections/card/CardContentsCases/CardContentsCases.svelte';
	import CardLayoutsCases from '../../../app/components/pagesSections/card/CardLayoutsCases/CardLayoutsCases.svelte';
	import CardVariantsCases from '../../../app/components/pagesSections/card/CardVariantsCases/CardVariantsCases.svelte';
</script>

<div class="page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#contents', text: 'Content' },
			{ ref: '#layouts', text: 'Layouts' },
			{ ref: '#variants', text: 'Variants' },
			{ ref: '#properties', text: 'Properties' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
	<main>
		<article id="card">
			<header>
				<Title>Card</Title>
			</header>
			<section>
				<div>
					<Card variant="solid" color="container" class="p-2">This is a Simple Card</Card>
				</div>
			</section>
		</article>
		<article id="contents">
			<header>
				<Title level={2}>Contents</Title>
				<p>
					Cards are constrained with header, body, footer and default content. The default content
					is rendered within the body content
				</p>
			</header>
			<CardContentsCases />
		</article>
		<article id="layouts">
			<header>
				<Title level={2}>Layouts</Title>
			</header>
			<CardLayoutsCases />
		</article>

		<article id="variants">
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<CardVariantsCases />
		</article>
	</main>
</div>
