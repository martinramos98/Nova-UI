<svelte:options runes={true} />

<script>
	import { Title } from '@nv-org/title';
	import AlertProps from '../../../app/components/pagesSections/alert/AlertProps.svelte';
	import AlertBasicCase from '../../../app/components/pagesSections/alert/AlertBasicCase/AlertBasicCase.svelte';
	import AlertTypesCases from '../../../app/components/pagesSections/alert/AlertTypesCases/AlertTypesCases.svelte';
	import AlertCustomCases from '../../../app/components/pagesSections/alert/AlertCustomsCases/AlertCustomCases.svelte';
	import PropItem from '../../../app/components/propItem/PropItem.svelte';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import { Divider } from '@nv-org/divider';
	const { data } = $props();
</script>

<div class="page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#alert', text: 'Alert' },
			{ ref: '#types', text: 'Types' },
			{ ref: '#custom-content', text: 'Custom Content and Footer' },
			{ ref: '#props', text: 'Props' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical" size={1}></Divider>
	<main>
		<article id="alert">
			<header>
				<Title level={1}>Alert</Title>
			</header>
			<section>
				<div class="w-full">
					<AlertBasicCase />
				</div>
			</section>
		</article>
		<article id="types">
			<header>
				<Title level={2}>Types</Title>
			</header>
			<AlertTypesCases />
		</article>
		<article id="custom-content">
			<header>
				<Title level={2}>Custom Content and Footer</Title>
			</header>
			<AlertCustomCases />
		</article>

		<article id="properties">
			<header>
				<Title level={2}>Properties</Title>
			</header>
			<section>
				{#each data.data as propItem}
					<PropItem data={propItem}></PropItem>
				{/each}
			</section>
		</article>
	</main>
</div>
