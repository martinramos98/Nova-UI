<script>
	import { Title } from '@nv-org/title';
	import { Callout } from '@nv-org/callout';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	import { Divider } from '@nv-org/divider';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import CalloutBasicCase from './CalloutBasicCase/CalloutBasicCase.svelte';
	import CalloutTypeCases from './CalloutTypeCases/CalloutTypeCases.svelte';
</script>

<div class="page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#types', text: 'Types' },
			{ ref: '#colors', text: 'Colors' },
			{ ref: '#variants', text: 'Variants' },
			{ ref: '#custom', text: 'Custom Content' },
			{ ref: '#properties', text: 'Properties' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
	<main>
		<article>
			<header>
				<Title>Callout</Title>
			</header>
			<CalloutBasicCase />
		</article>
		<article>
			<header>
				<Title level={2}>Types</Title>
			</header>
			<CalloutTypeCases />
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
							<Callout class="bg-gradient-to-r from-pink-500 to-indigo-500 border-white border-2">
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
