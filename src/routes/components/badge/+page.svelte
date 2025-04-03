<script>
	import { Title } from '@nv-org/title';
	import { Divider } from '@nv-org/divider';
	import PropItem from '../../../app/components/propItem/PropItem.svelte';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import BadgeBasicCase from '../../../app/components/pagesSections/badge/BadgeBasicCase/BadgeBasicCase.svelte';
	import BadgePositionsCase from '../../../app/components/pagesSections/badge/BadgePositionsCase/BadgePositionsCase.svelte';
	import BadgeVariantColorCase from '../../../app/components/pagesSections/badge/BadgeVariantColorCase/BadgeVariantColorCase.svelte';
	import BadgeSizeCases from '../../../app/components/pagesSections/badge/BadgeSizeCases/BadgeSizeCases.svelte';
	import BadgeCustomContent from '../../../app/components/pagesSections/badge/badgeCustomContent/BadgeCustomContent.svelte';
	export let data;
</script>

<div class="page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#positions', text: 'Positions' },
			{ ref: '#variants', text: 'Variants' },
			{ ref: '#sizes', text: 'Sizes' },
			{ ref: '#custom', text: 'Custom' },
			{ ref: '#properties', text: 'Properties' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
	<main>
		<article id={'badge'}>
			<header>
				<Title level={1} class="text-start w-full">Badge</Title>
				<p class="py-2 px-2">
					Badge components are a small visual element used to display additional information or
					status indicators within a user interface.
				</p>
			</header>
			<BadgeBasicCase />
		</article>
		<article id="positions">
			<header><Title level={2}>Badges Positions</Title></header>
			<BadgePositionsCase />
		</article>
		<article id="variants">
			<header><Title level={2}>Variants</Title></header>
			<BadgeVariantColorCase />
		</article>
		<article id="sizes">
			<header><Title level={2}>Sizes</Title></header>
			<BadgeSizeCases />
		</article>
		<article id="custom">
			<header><Title level={2}>Badge Customs</Title></header>
			<BadgeCustomContent />
		</article>
		<article>
			<header>
				<Title level={2}>Badge Props</Title>
			</header>

			<section>
				{#each data.data as propItem}
					<PropItem data={propItem}></PropItem>
				{/each}
			</section>
		</article>
	</main>
</div>
