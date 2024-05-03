<script>
	import Title from '$lib/Components/Title/Title.svelte';
	import BasicContextMenu from '$lib/app/components/ExampleContextMenues/BasicContextMenu.svelte';
	import ControledContextMenu from '$lib/app/components/ExampleContextMenues/ControledContextMenu.svelte';
	import SubsectionContextMenu from '$lib/app/components/ExampleContextMenues/SubsectionContextMenu.svelte';
</script>

<div class="flex flex-row page-content">
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
			<section class="w-full h-[300px]">
				<BasicContextMenu></BasicContextMenu>
			</section>
		</article>
		<article class="w-full">
			<header>
				<Title>Controled</Title>
			</header>
			<section class="w-full h-[300px]">
				<ControledContextMenu />
			</section>
		</article>
		<article>
			<header>
				<Title>With Subsection</Title>
			</header>
			<section class="w-full h-[300px]">
				<SubsectionContextMenu></SubsectionContextMenu>
			</section>
		</article>
	</main>
</div>
