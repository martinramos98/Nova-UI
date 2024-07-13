<script>
	import Title from '$lib/Components/Title/Title.svelte';
	import BasicContextMenu from '../../../app/components/ExampleContextMenues/BasicContextMenu.svelte';
	import ControledContextMenu from '../../../app/components/ExampleContextMenues/ControledContextMenu.svelte';
	import SubsectionContextMenu from '../../../app/components/ExampleContextMenues/SubsectionContextMenu.svelte';
</script>

<div class=" page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#tabs">Context Menu</a></li>
			<li><a href="#types"></a></li>
			<li><a href="#variants">Subsections</a></li>
			<li><a href="#customs">Customs</a></li>
		</ul>
	</aside>
	<main>
		<article class="w-full">
			<header>
				<Title>Context Menu</Title>
			</header>
			<section class="w-full">
				<BasicContextMenu></BasicContextMenu>
			</section>
		</article>
		<article class="w-full">
			<header>
				<Title>Controled</Title>
			</header>
			<section class="w-full">
				<ControledContextMenu />
			</section>
		</article>
		<article>
			<header>
				<Title>With Subsection</Title>
			</header>
			<section class="w-full">
				<SubsectionContextMenu></SubsectionContextMenu>
			</section>
		</article>
	</main>
</div>
