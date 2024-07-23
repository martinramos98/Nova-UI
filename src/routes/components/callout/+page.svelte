<script>
	import { Title } from '@nv-org/title';
	import { Callout } from '@nv-org/callout';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
</script>

<div class=" page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#tabs">Callout</a></li>
			<li><a href="#types">Types</a></li>
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
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Callout variant="flat" colors="primary">This is a Default Callout</Callout>
<Callout variant="flat" colors="warning" type="warning">This is a Warning Callout</Callout>
<Callout variant="flat" colors="error" type="alert">This is a Error Callout</Callout>
<Callout variant="flat" colors="info" type="info">This is a Info Callout</Callout>
<Callout variant="flat" colors="success" type="success">This is a Success Callout</Callout>
				`}
					>
						{#snippet component()}
							<div class="flex flex-col gap-2">
								<Callout variant="flat" colors="primary">This is a Default Callout</Callout>
								<Callout variant="flat" colors="warning" type="warning"
									>This is a Warning Callout</Callout
								>
								<Callout variant="flat" colors="error" type="alert">This is a Error Callout</Callout
								>
								<Callout variant="flat" colors="info" type="info">This is a Info Callout</Callout>
								<Callout variant="flat" colors="success" type="success"
									>This is a Success Callout</Callout
								>
							</div>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Callout variant="solid" colors="info" type="info">This is a Info Callout</Callout>
<Callout variant="faded" colors="info" type="info">This is a Info Callout</Callout>
<Callout variant="flat" colors="info" type="info">This is a Info Callout</Callout>
<Callout variant="bordered" colors="info" type="info">This is a Info Callout</Callout>
<Callout variant="neon" colors="info" type="info">This is a Info Callout</Callout>
<Callout variant="light" colors="info" type="info">This is a Info Callout</Callout>
					`}
					>
						{#snippet component()}
							<div class="w-full flex flex-col gap-2">
								<Callout variant="solid" colors="info" type="info">This is a Info Callout</Callout>
								<Callout variant="faded" colors="info" type="info">This is a Info Callout</Callout>
								<Callout variant="flat" colors="info" type="info">This is a Info Callout</Callout>
								<Callout variant="bordered" colors="info" type="info"
									>This is a Info Callout</Callout
								>
								<Callout variant="neon" colors="info" type="info">This is a Info Callout</Callout>
								<Callout variant="light" colors="info" type="info">This is a Info Callout</Callout>
							</div>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Customs</Title>
			</header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Callout className="bg-gradient-to-r from-pink-500 to-indigo-500 border-white border-2">
	{#snippet icon()}
		<span class="bg-white/20 rounded-xl p-1">
			<img class="h-[40px] w-[40px]" src="/candy.svg" />
		</span>
	{/snippet}
	<p class="text-white font-bold">This is a Custom Callout</p>
</Callout>
					`}
					>
						{#snippet component()}
							<Callout
								className="bg-gradient-to-r from-pink-500 to-indigo-500 border-white border-2"
							>
								{#snippet icon()}
									<span class="bg-white/20 rounded-xl p-1">
										<img class="h-[40px] w-[40px]" src="/candy.svg" />
									</span>
								{/snippet}
								<p class="text-white font-bold">This is a Custom Callout</p>
							</Callout>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
	</main>
</div>
