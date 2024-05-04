<script>
	import Button from '$lib/Components/Button/Button.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Icon from '$lib/Components/Icons/Icon.svelte';
	import ButtonGroup from '$lib/Components/ButtonGroup/ButtonGroup.svelte';
	import Loader from '$lib/Components/Loader/Loader.svelte';
	import AlertIcon from '$lib/Components/Icons/IconsPath/AlertIcon.svelte';
	import WarningIcon from '$lib/Components/Icons/IconsPath/WarningIcon.svelte';
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
			<Title level={1} className=" text-start w-full ">Buttons</Title>
			<p class="py-2 px-2">
				Buttons components are an interactives elements in user interfaces, designed to execute
				actions or commands. They are accessible and responds to user input events such as clicks or
				touchs.
			</p>
		</article>
		<article id={'variants'}>
			<header>
				<Title level={2} className="w-fit p-2">Variants</Title>
			</header>
			<section>
				<Title level={4} className={'pl-4'}>Shadows</Title>
				<!-- <Divider size={1} color={'var(--color-container)'} /> -->
				<div>
					<Button colors={'primary'} variant={'shadows'} className=""><p>Button</p></Button>
					<Button colors={'secondary'} variant={'shadows'} className=""><p>Button</p></Button>
					<Button colors={'tertiary'} variant={'shadows'} className=""><p>Button</p></Button>
					<Button colors={'error'} variant={'shadows'} className=""><p>Button</p></Button>
					<Button colors={'success'} variant={'shadows'} className=""><p>Button</p></Button>
					<Button colors={'warning'} variant={'shadows'} className=""><p>Button</p></Button>
					<Button colors={'info'} variant={'shadows'}><p>Button</p></Button>
				</div>
			</section>
			<section>
				<Title level={4} className={'pl-4'}>Neon</Title>
				<div>
					<Button colors={'primary'} variant={'neon'} className=""><p>Button</p></Button>
					<Button colors={'secondary'} variant={'neon'} className=""><p>Button</p></Button>
					<Button colors={'tertiary'} variant={'neon'} className=""><p>Button</p></Button>
					<Button colors={'error'} variant={'neon'} className=""><p>Button</p></Button>
					<Button colors={'success'} variant={'neon'} className=""><p>Button</p></Button>
					<Button colors={'warning'} variant={'neon'} className=""><p>Button</p></Button>
					<Button colors={'info'} variant={'neon'} className="rounded-lg"><p>Button</p></Button>
				</div>
			</section>
			<section>
				<Title level={4} className={'pl-4'}>Solid</Title>
				<div>
					<Button colors={'primary'} variant={'solid'} className=""><p>Button</p></Button>
					<Button colors={'secondary'} variant={'solid'} className=""><p>Button</p></Button>
					<Button colors={'tertiary'} variant={'solid'} className=""><p>Button</p></Button>
					<Button colors={'error'} variant={'solid'} className=""><p>Button</p></Button>
					<Button colors={'success'} variant={'solid'} className=""><p>Button</p></Button>
					<Button colors={'warning'} variant={'solid'} className=""><p>Button</p></Button>
					<Button colors={'info'} variant={'solid'} className="rounded-lg"><p>Button</p></Button>
				</div>
			</section>
			<section>
				<Title level={4} className={'pl-4'}>Light</Title>
				<div>
					<Button colors={'primary'} variant={'light'} className=""><p>Button</p></Button>
					<Button colors={'secondary'} variant={'light'} className=""><p>Button</p></Button>
					<Button colors={'tertiary'} variant={'light'} className=""><p>Button</p></Button>
					<Button colors={'error'} variant={'light'} className=""><p>Button</p></Button>
					<Button colors={'success'} variant={'light'} className=""><p>Button</p></Button>
					<Button colors={'warning'} variant={'light'} className=""><p>Button</p></Button>
					<Button colors={'info'} variant={'light'} className="rounded-lg"><p>Button</p></Button>
				</div>
			</section>
			<section>
				<Title level={4} className={'pl-4'}>Bordered</Title>
				<div>
					<Button colors={'primary'} variant={'bordered'} className=""><p>Button</p></Button>
					<Button colors={'secondary'} variant={'bordered'} className=""><p>Button</p></Button>
					<Button colors={'tertiary'} variant={'bordered'} className=""><p>Button</p></Button>
					<Button colors={'error'} variant={'bordered'} className=""><p>Button</p></Button>
					<Button colors={'success'} variant={'bordered'} className=""><p>Button</p></Button>
					<Button colors={'warning'} variant={'bordered'} className=""><p>Button</p></Button>
					<Button colors={'info'} variant={'bordered'} className="rounded-lg"><p>Button</p></Button>
				</div>
			</section>
			<section>
				<Title level={4} className={'pl-4'}>Ghost</Title>
				<div>
					<Button colors={'primary'} variant={'ghost'} className=""><p>Button</p></Button>
					<Button colors={'secondary'} variant={'ghost'} className=""><p>Button</p></Button>
					<Button colors={'tertiary'} variant={'ghost'} className=""><p>Button</p></Button>
					<Button colors={'error'} variant={'ghost'} className=""><p>Button</p></Button>
					<Button colors={'success'} variant={'ghost'} className=""><p>Button</p></Button>
					<Button colors={'warning'} variant={'ghost'} className=""><p>Button</p></Button>
					<Button colors={'info'} variant={'ghost'} className="rounded-lg"><p>Button</p></Button>
				</div>
			</section>
			<section>
				<Title level={4} className={'pl-4'}>Flat</Title>
				<div>
					<Button colors={'primary'} variant={'flat'} className=""><p>Button</p></Button>
					<Button colors={'secondary'} variant={'flat'} className=""><p>Button</p></Button>
					<Button colors={'tertiary'} variant={'flat'} className=""><p>Button</p></Button>
					<Button colors={'error'} variant={'flat'} className=""><p>Button</p></Button>
					<Button colors={'success'} variant={'flat'} className=""><p>Button</p></Button>
					<Button colors={'warning'} variant={'flat'} className=""><p>Button</p></Button>
					<Button colors={'info'} variant={'flat'} className="rounded-lg"><p>Button</p></Button>
				</div>
			</section>
			<section>
				<Title level={4} className={'pl-4'}>Faded</Title>
				<div>
					<Button colors={'primary'} variant={'faded'} className=""><p>Button</p></Button>
					<Button colors={'secondary'} variant={'faded'} className=""><p>Button</p></Button>
					<Button colors={'tertiary'} variant={'faded'} className=""><p>Button</p></Button>
					<Button colors={'error'} variant={'faded'} className=""><p>Button</p></Button>
					<Button colors={'success'} variant={'faded'} className=""><p>Button</p></Button>
					<Button colors={'warning'} variant={'faded'} className=""><p>Button</p></Button>
					<Button colors={'info'} variant={'faded'} className="rounded-lg"><p>Button</p></Button>
				</div>
			</section>
		</article>
		<article id={'disabled'}>
			<header>
				<Title level={3}>Disabled</Title>
			</header>
			<section>
				<div>
					<Button variant="faded" colors="primary">Enabled</Button>
					<Button variant="faded" colors="primary" disabled>Disabled</Button>
				</div>
			</section>
		</article>
		<article id={'effect'}>
			<header>
				<Title level={3}>Click Effect</Title>
			</header>
			<section>
				<div>
					<Button variant="faded" colors="primary">With Click Effect</Button>
					<Button variant="faded" colors="primary" withClickEffect={false}
						>Without Click Effect</Button
					>
				</div>
			</section>
		</article>
		<article id={'custom'}>
			<header>
				<Title level={3}>Custom Content</Title>
			</header>
			<section>
				<div>
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
						<Loader svgLoaderProps={{ class: 'size-6', 'stroke-width': 3 }} />
					</Button>
				</div>
			</section>
		</article>
		<!-- <Divider size={1} className="my-8" color={'var(--color-container)'} /> -->
		<article id={'group'}>
			<header>
				<Title level={2}>Button Groups</Title>
			</header>
			<section>
				<div>
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
				</div>
			</section>
		</article>
	</main>
</div>
