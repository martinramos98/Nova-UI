<script>
	import Button from '$lib/Components/Button/Button.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import ButtonGroup from '$lib/Components/ButtonGroup/ButtonGroup.svelte';
</script>

<header>
	<Title level={1} className="my-2 text-center">Buttons</Title>
</header>
<Divider size={1} color={'var(--color-container)'} />
<article>
	<Title level={2} className="pl-8">Variants</Title>
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
			<Button disabled colors={'primary'} variant={'flat'} className=""><p>Button</p></Button>
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
<Divider size={1} className="my-8" color={'var(--color-container)'} />
<article>
	<Title level={2} className="pl-8">Button Groups</Title>
	<section>
		<ButtonGroup>
			<Button disabled={true}>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</ButtonGroup>
	</section>

	<section>
		<ButtonGroup disabled={true}>
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</ButtonGroup>
	</section>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--spacing-4);
		& section {
			display: flex;
			/* view-timeline: --block;
			view-timeline-axis: inline;
			animation-timeline: view();
			animation-name: show;
			animation-range: entry 80% cover 70%;
			animation-fill-mode: both; */
			align-self: center;
			flex-direction: column;
			padding: var(--spacing-6);
			border-radius: var(--radius-xl);
			background-color: var(--color-surface-low);
			justify-content: center;
			gap: var(--spacing-2);
			& div {
				justify-self: center;
				align-self: center;
				display: flex;
				width: fit-content;
				padding: var(--spacing-4);
				gap: var(--spacing-8);
				flex-direction: row;
			}
		}
	}
	/* @keyframes show {
		from {
			opacity: 0;
			scale: 0.8;
		}
		to {
			opacity: 1;
			scale: 1;
		}
	} */
</style>
