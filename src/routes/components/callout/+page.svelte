<script>
	import Title from '$lib/Components/Title/Title.svelte';
	import Callout from '$lib/Components/Callout/Callout.svelte';
	import Icon from '$lib/Components/Icons/Icon.svelte';
</script>

<div class="flex flex-row page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#tabs">Callout</a></li>
			<li><a href="#types"></a>Types</li>
			<li><a href="#variants">Variants</a></li>
			<li><a href="#customs">Customs</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title>Callout</Title>
			</header>
			<section class="w-full">
				<div class="w-full">
					<Callout>This is a Basic Callout</Callout>
				</div>
			</section>
		</article>
		<article>
			<section>
				<div class="w-full">
					<header>
						<Title level={2}>Types</Title>
					</header>
				</div>

				<Callout>This is a Default Callout</Callout>
				<Callout variant="flat" colors="warning" type="warning">This is a Warning Callout</Callout>
				<Callout variant="flat" colors="error" type="alert">This is a Error Callout</Callout>
				<Callout variant="flat" colors="info" type="info">This is a Info Callout</Callout>
				<Callout variant="flat" colors="success" type="success">This is a Success Callout</Callout>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<Callout variant="solid" colors="info" type="info">This is a Info Callout</Callout>
				<Callout variant="faded" colors="info" type="info">This is a Info Callout</Callout>
				<Callout variant="flat" colors="info" type="info">This is a Info Callout</Callout>
				<Callout variant="bordered" colors="info" type="info">This is a Info Callout</Callout>
				<Callout variant="neon" colors="info" type="info">This is a Info Callout</Callout>
				<Callout variant="light" colors="info" type="info">This is a Info Callout</Callout>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Customs</Title>
			</header>
			<section>
				<Callout className="bg-gradient-to-r from-pink-500 to-indigo-500 border-white border-2">
					<svelte:fragment slot="icon">
						<span class="bg-white/20 rounded-xl p-1">
							<img class="h-[40px] w-[40px]" src="/candy.svg" />
						</span>
					</svelte:fragment>
					<p class="font-bold">This is a Custom Callout</p>
				</Callout>
			</section>
		</article>
	</main>
</div>
