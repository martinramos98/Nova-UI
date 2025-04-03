<script>
	import { Title } from '@nv-org/title';
	import BasicContextMenu from '../../../app/components/ExampleContextMenues/BasicContextMenu.svelte';
	import ControledContextMenu from '../../../app/components/ExampleContextMenues/ControledContextMenu.svelte';
	import SubsectionContextMenu from '../../../app/components/ExampleContextMenues/SubsectionContextMenu.svelte';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import { Divider } from '@nv-org/divider';
</script>

<div class=" page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#context-menu', text: 'Context Menu' },
			{ ref: '#controlled', text: 'Controlled' },
			{ ref: '#subsection', text: 'With Subsection' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
	<main>
		<article class="w-full">
			<header>
				<Title>Context Menu</Title>
			</header>
			<section id="contenxt-menu" class="w-full">
				<BasicContextMenu></BasicContextMenu>
			</section>
		</article>
		<article id="controlled" class="w-full">
			<header>
				<Title>Controled</Title>
			</header>
			<section class="w-full">
				<ControledContextMenu />
			</section>
		</article>
		<article id="subsection">
			<header>
				<Title>With Subsection</Title>
			</header>
			<section class="w-full">
				<SubsectionContextMenu></SubsectionContextMenu>
			</section>
		</article>
	</main>
</div>
