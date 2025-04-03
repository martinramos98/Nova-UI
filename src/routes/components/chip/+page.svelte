<script>
	import { Avatar } from '@nv-org/avatar';
	import { Chip } from '@nv-org/chip';
	import { Title } from '@nv-org/title';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	import { Divider } from '@nv-org/divider';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import ChipVariantCases from '../../../app/components/pagesSections/chip/chipVariantCases/ChipVariantCases.svelte';
	import ChipColorCases from '../../../app/components/pagesSections/chip/chipColorCases/ChipColorCases.svelte';
	import ChipSizeCases from '../../../app/components/pagesSections/chip/chipSizeCases/ChipSizeCases.svelte';
	import ChipUsageCase from '../../../app/components/pagesSections/chip/chipUsageCase/ChipUsageCase.svelte';
</script>

<div class="page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#chip', text: 'Chip' },
			{ ref: '#colors', text: 'Colors' },
			{ ref: '#variants', text: 'Variants' },
			{ ref: '#sizes', text: 'Sizes' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
	<main>
		<article id={'chip'}>
			<header>
				<Title level={1} class="text-start w-full">Chip</Title>
				<p class="py-2 px-2">
					Chip component are compacts visual elements commonly used to represent attributes, tags,
					or small interactive elements within a user interface.
				</p>
			</header>
			<section>
				<div>
					<Chip colors="success" variant="solid">Active</Chip>
					<Chip colors="warning" variant="solid">Delayed</Chip>
					<Chip class="bg-slate-800 font-bold rounded-2xl" variant="solid">Chip</Chip>
				</div>
			</section>
		</article>
		<article id="colors">
			<header>
				<Title level={2}>Colors</Title>
			</header>
			<ChipColorCases />
		</article>
		<article id="variants">
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<ChipVariantCases />
		</article>
		<article id="sizes">
			<header>
				<Title level={2}>Sizes</Title>
			</header>
			<ChipSizeCases />
		</article>
		<article id="cases">
			<header>
				<Title level={2}>Use of Case</Title>
			</header>
			<ChipUsageCase />
		</article>
		<article>
			<header>
				<Title level={2}>Properties</Title>
			</header>
		</article>
	</main>
</div>
