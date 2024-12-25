<script>
	import { Button, ButtonGroup } from '@nv-org/button';
	import { Title } from '@nv-org/title';
	import ButtonComponentShowcase from '../../../app/components/ComponentShowcase/ButtonComponentShowcase/ButtonComponentShowcase.svelte';
	import ButtonProps from '../../../app/components/pagesSections/button/ButtonProps.svelte';
	import PropItem from '../../../app/components/propItem/PropItem.svelte';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import { Divider } from '@nv-org/divider';
	import CodeSnippet from '../../../app/components/CodeSnippet/CodeSnippet.svelte';
	export let data;
</script>

<svelte:head>
	<title>Nova UI - Button</title>
	<meta
		name="description"
		content="Nova UI provides fully accesible and customizable buttons components. Buttons components are an interactives elements in user interfaces, designed to execute
			actions or commands. They are accessible and responds to user input events such as clicks or
			touchs."
	/>
</svelte:head>
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
		<article id={'button'}>
			<header>
				<Title level={1} class=" text-start w-full ">Buttons</Title>
			</header>
			<p class="py-2 px-2">
				Buttons components are an interactives elements in user interfaces, designed to execute
				actions or commands. They are accessible and responds to user input events such as clicks or
				touchs.
			</p>
			<section>
				<div>
					<Button colors="primary" variant="solid">Press me</Button>
				</div>
			</section>
			<section>
				<Title level={2} class={'text-2xl'}>Imports</Title>
				<div>
					<CodeSnippet textCode={'import { Button } from "@nv-org/components"'}></CodeSnippet>
				</div>
			</section>
		</article>
		<article id={'variants'}>
			<header>
				<Title level={2} class="w-fit p-2">Variants & Colors</Title>
			</header>
			<section>
				<div style="width: 100%;">
					<ButtonComponentShowcase></ButtonComponentShowcase>
				</div>
			</section>
		</article>
		<article id={'disabled'}>
			<header>
				<Title level={3}>Disabled</Title>
			</header>
			<section>
				<div style="width:100%;"></div>
			</section>
		</article>
		<article id={'effect'}>
			<header>
				<Title level={3}>Click Effect</Title>
			</header>
			<section>
				<div style="width:100%;"></div>
				<div></div>
			</section>
		</article>
		<article id={'custom'}>
			<header>
				<Title level={3}>Custom Content</Title>
			</header>
			<section>
				<div style="width: 100%;"></div>
			</section>
		</article>
		<!-- <Divider size={1} className="my-8" color={'var(--color-container)'} /> -->
		<article id={'group'}>
			<header>
				<Title level={2}>Button Groups</Title>
			</header>
			<section>
				<div style="width:100%;"></div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Properties</Title>
			</header>

			<section>
				{#each Object.entries(data.data) as [title, componentData]}
					<Title level={3} class="first-letter:uppercase">{title}</Title>
					{#each componentData as propItem}
						<PropItem data={propItem}></PropItem>
					{/each}
				{/each}
			</section>
		</article>
	</main>
</div>
