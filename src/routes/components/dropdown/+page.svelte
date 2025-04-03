<script lang="ts">
	import { Divider } from '@nv-org/divider';
	import { Dropdown, DropdownGroup, DropdownItem } from '@nv-org/dropdown';
	import { Title } from '@nv-org/title';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import DropdownPositionCases from '../../../app/components/pagesSections/dropdown/dropdownPositionCases/DropdownPositionCases.svelte';
	import DropdownSubsectionCases from '../../../app/components/pagesSections/dropdown/dropdownSubsectionCases/DropdownSubsectionCases.svelte';
	import DropdownOffsetCases from '../../../app/components/pagesSections/dropdown/dropdownOffsetCases/DropdownOffsetCases.svelte';
</script>

<div class="page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#dropdown', text: 'Dropdown' },
			{ ref: '#positions', text: 'Positions' },
			{ ref: '#subsections', text: 'Subsections' },
			{ ref: '#offset', text: 'Offset' },
			{ ref: '#controlled', text: 'Controlled' },
			{ ref: '#properties', text: 'Properties' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
	<main>
		<article>
			<header>
				<Title level={1}>Dropdown</Title>
			</header>
			<section>
				<div>
					<Dropdown triggerText="Open Dropdown">
						<p class="font-bold pl-2 my-2">Section 1</p>
						<DropdownItem>Item 1</DropdownItem>
						<Divider size={1} color="var(--color-stone-500)" class="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<DropdownItem closeOnClick={false}>Item 2</DropdownItem>
						<DropdownItem>Item 3</DropdownItem>
					</Dropdown>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Positions</Title>
			</header>
			<DropdownPositionCases />
		</article>
		<article>
			<header>
				<Title level={2}>Subsections</Title>
			</header>
			<DropdownSubsectionCases />
		</article>
		<article>
			<header>
				<Title level={2}>Offset</Title>
			</header>
			<DropdownOffsetCases />
		</article>
	</main>
</div>
