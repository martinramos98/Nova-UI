<script>
	// @ts-nocheck

	import Button from '$lib/Components/Button/Button.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Icon from '$lib/Components/Icons/Icon.svelte';
	import ButtonGroup from '$lib/Components/ButtonGroup/ButtonGroup.svelte';
	import Loader from '$lib/Components/Loader/Loader.svelte';
	import WarningIcon from '$lib/Components/Icons/IconsPath/WarningIcon.svelte';
	import CodeSnippet from '../../../app/components/CodeSnippet/CodeSnippet.svelte';
	import ButtonComponentShowcase from '../../../app/components/ComponentShowcase/ButtonComponentShowcase/ButtonComponentShowcase.svelte';
	import Tabs from '$lib/Components/Tabs/Tabs.svelte';
	import Tab from '$lib/Components/Tabs/Tab/Tab.svelte';
	import TabButton from '$lib/Components/Tabs/TabButton/TabButton.svelte';
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
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#button">Buttons</a></li>
			<li><a href="#variants">Variants</a></li>
			<li><a href="#disabled">Disabled</a></li>
			<li><a href="#custom">Custom Content</a></li>
			<li><a href="#group">Button Group</a></li>
		</ul>
	</aside>
	<main>
		<article id={'button'}>
			<header>
				<Title level={1} className=" text-start w-full ">Buttons</Title>
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
			<Title level={2} className={'text-2xl'}>Imports</Title>
			<CodeSnippet textCode={`import { Button } from 'nova-js-ui'`} />
		</article>
		<article id={'variants'}>
			<header>
				<Title level={2} className="w-fit p-2">Variants & Colors</Title>
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
				<div style="width:100%;">
					<Tabs className="w-full" classNameContent="w-full h-[150px] bg-transparent">
						{#snippet TabSelection()}
							<TabButton key="Component">Component</TabButton>
							<TabButton key="Code">Code</TabButton>
						{/snippet}
						<Tab
							key="Component"
							className="h-full gap-4 flex items-center justify-center bg-[var(--color-surface)] rounded-xl"
						>
							<Button variant="faded" colors="primary">Enabled</Button>
							<Button variant="faded" colors="primary" disabled>Disabled</Button>
						</Tab>
						<Tab key="Code">
							<CodeSnippet
								textCode={`<Button variant="faded" colors="primary">Enabled</Button>
<Button variant="faded" colors="primary" disabled>Enabled</Button>`}
								isSvelte
							></CodeSnippet>
						</Tab>
					</Tabs>
				</div>
			</section>
		</article>
		<article id={'effect'}>
			<header>
				<Title level={3}>Click Effect</Title>
			</header>
			<section>
				<div style="width:100%;">
					<Tabs className="w-full" classNameContent="w-full h-[150px] bg-transparent">
						{#snippet TabSelection()}
							<TabButton key="Component">Component</TabButton>
							<TabButton key="Code">Code</TabButton>
						{/snippet}
						<Tab
							key="Component"
							className="h-full gap-4 flex items-center justify-center bg-[var(--color-surface)] rounded-xl "
						>
							<Button variant="faded" colors="primary">With Click Effect</Button>
							<Button variant="faded" colors="primary" withClickEffect={false}
								>Without Click Effect</Button
							>
						</Tab>
						<Tab key="Code">
							<CodeSnippet
								textCode={`<Button variant="faded" colors="primary">With Click Effect</Button>
<Button variant="faded" colors="primary" withClickEffect={false}>
	Without Click Effect
</Button>`}
								isSvelte
							></CodeSnippet>
						</Tab>
					</Tabs>
				</div>
				<div></div>
			</section>
		</article>
		<article id={'custom'}>
			<header>
				<Title level={3}>Custom Content</Title>
			</header>
			<section>
				<div style="width: 100%;">
					<Tabs
						className="w-full"
						classNameContent="w-full flex transition-all h-[300px] bg-transparent"
					>
						{#snippet TabSelection()}
							<TabButton key="Component">Component</TabButton>
							<TabButton key="Code">Code</TabButton>
						{/snippet}
						<Tab
							key="Component"
							className={'h-full w-full flex items-center justify-center gap-4 bg-[var(--color-surface)] rounded-xl'}
						>
							<Button
								variant="faded"
								colors="warning"
								className="flex items-center justify-between gap-2"
							>
								<Icon props={{ fill: 'none', class: 'stroke-[var(--color-container)] size-6' }}>
									<WarningIcon />
								</Icon>
								Be Aware!
							</Button>
							<Button
								variant="faded"
								colors="primary"
								className="flex items-center justify-between gap-2"
								disabled
							>
								<span> Loading </span>
								<Loader size={20} stroke={2} />
							</Button>
						</Tab>
						<Tab key="Code" className=" w-full">
							<CodeSnippet
								class={' w-full'}
								textCode={`<script>
import {Loader,Icon,WarningIcon,Button} from 'nova-js-ui';
</script>
<Button
variant="faded"
colors="warning"
className="flex items-center justify-between gap-2"
>
	<Icon props={{ fill: 'none', class: 'stroke-[var(--color-container)] size-6' }}>
		<WarningIcon />
	</Icon>
	Be Aware!
</Button>
<Button
	variant="faded"
	colors="primary"
	className="flex items-center justify-between gap-2"
	disabled
>
	<span> Loading </span>
	<Loader size={20} stroke={2} />
</Button>`}
								isSvelte
							/>
						</Tab>
					</Tabs>
				</div>
			</section>
		</article>
		<!-- <Divider size={1} className="my-8" color={'var(--color-container)'} /> -->
		<article id={'group'}>
			<header>
				<Title level={2}>Button Groups</Title>
			</header>
			<section>
				<div style="width:100%;">
					<Tabs className="w-full" classNameContent="w-full h-[200px] bg-transparent">
						{#snippet TabSelection()}
							<TabButton key="Component">Component</TabButton>
							<TabButton key="Code">Code</TabButton>
						{/snippet}
						<Tab
							key="Component"
							className="flex gap-4 items-center justify-center h-full bg-[var(--color-surface)] rounded-xl"
						>
							<ButtonGroup>
								<Button>Button 1</Button>
								<Button>Button 2</Button>
								<Button>Button 3</Button>
							</ButtonGroup>
							<ButtonGroup disabled={true}>
								<Button>Button 1</Button>
								<Button>Button 2</Button>
								<Button>Button 3</Button>
							</ButtonGroup>
						</Tab>
						<Tab key="Code">
							<CodeSnippet
								class="w-full"
								textCode={`<ButtonGroup>
	<Button>Button 1</Button>
	<Button>Button 2</Button>
	<Button>Button 3</Button>
</ButtonGroup>
<ButtonGroup disabled={true}>
	<Button>Button 1</Button>
	<Button>Button 2</Button>
	<Button>Button 3</Button>
</ButtonGroup>
`}
								isSvelte
							/>
						</Tab>
					</Tabs>
				</div>
			</section>
		</article>
	</main>
</div>
