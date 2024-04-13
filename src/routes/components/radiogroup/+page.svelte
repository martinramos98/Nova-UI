<script>
	import { onMount } from 'svelte';
	import Callout from '$lib/Components/Callout/Callout.svelte';
	import Radio from '$lib/Components/RadioGroup/RadioButton/Radio.svelte';
	import RadioGroup from '$lib/Components/RadioGroup/RadioGroup.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import { toast } from '$lib/Components/Toast/toast';
	import Loader from '$lib/Components/Loader/Loader.svelte';
	import Progress from '$lib/Components/Progress/Progress.svelte';
</script>

<Title level={1}>Radio Groups</Title>
<main>
	<article>
		<RadioGroup className="gap-2 flex flex-col" name="test" type="checkbox">
			<Radio colors="error" lineThroughtOnCheck={true} id={'item-1'} value={1} labelText="test1"
			></Radio>
			<Radio colors="warning" id={'item-2'} variant="faded" value={2} labelText="test2" />
			<Radio colors="success" id={'item-3'} variant="flat" value={3} labelText="test3"></Radio>
			<Radio colors="info" id={'item-4'} variant="neon" value={4} labelText="test4"></Radio>
		</RadioGroup>
		<RadioGroup className="gap-2 flex flex-col mt-4" name="test" type="radio">
			<Radio lineThroughtOnCheck={true} id={'item-1'} value={1} labelText="test1"></Radio>
			<Radio id={'item-2'} variant="faded" value={2} labelText="test2"></Radio>
			<Radio id={'item-3'} variant="flat" value={3} labelText="test3"></Radio>
			<Radio id={'item-4'} variant="neon" value={4} labelText="test4"></Radio>
		</RadioGroup>
		<RadioGroup
			control={{ size: 'size-6' }}
			withControl
			className="gap-2 flex mt-3 flex-col"
			name="test"
			type="checkbox"
		>
			<Radio size={'size-6'} lineThroughtOnCheck={true} id={'item-1'} value={1} labelText="test1"
			></Radio>
			<Radio size={'size-6'} id={'item-2'} variant="faded" value={2} labelText="test2"></Radio>
			<Radio size={'size-6'} id={'item-3'} variant="flat" value={3} labelText="test3"></Radio>
			<Radio size={'size-6'} id={'item-4'} variant="neon" value={4} labelText="test4"></Radio>
		</RadioGroup>
	</article>
	<Title className="my-2" level={2}>Callouts</Title>
	<article class="callout">
		<Callout>Test for Callout Default</Callout>
		<Callout variant="flat" colors="warning" type="warning">Test for Callout Warning</Callout>
		<Callout variant="flat" colors="error" type="alert">Test for Callout Alert</Callout>
		<Callout variant="flat" colors="info" type="info">Test for Callout Info</Callout>
		<Callout variant="flat" colors="success" type="success">Test for Callout Success</Callout>
	</article>
	<Button
		colors="info"
		variant={'solid'}
		onClick={() => {
			toast(
				'top-right',
				{
					type: 'default',
					variant: 'blurred',
					content: 'This is a Test Toast',
					withCloseButton: true,
					className: 'rounded-xl'
				},
				20000
			);
		}}>Toast Test</Button
	>
	<Button
		colors="info"
		variant={'solid'}
		onClick={() => {
			toast(
				'top-right',
				{
					type: 'warning',
					variant: 'solid',
					content: 'This is a Test Toast 2',
					withCloseButton: true,
					className: 'rounded-xl'
				},
				20000
			);
		}}>Toast Test 2</Button
	>
	<Title level={2}>Loaders</Title>
	<Title level={3}>Ring</Title>
	<article class="callout row">
		<Loader
			label={'Loading...'}
			svgLoaderProps={{ class: 'size-12', 'stroke-width': 3 }}
			colors="info"
			loaderVariant={'ringResize'}
		/>
		<Loader
			label={'Loading...'}
			svgLoaderProps={{ class: 'size-12', 'stroke-width': 1 }}
			colors="error"
			loaderVariant={'ring90'}
		/>
		<Loader
			label={'Loading...'}
			svgLoaderProps={{ class: 'size-12' }}
			colors="warning"
			loaderVariant={'ring180'}
		/>
		<Loader
			label={'Loading...'}
			svgLoaderProps={{ class: 'size-12' }}
			colors="success"
			loaderVariant={'ring270'}
		/>
	</article>
	<Title className="my-2" level={3}>Dotted</Title>
	<article class="callout row">
		<Loader
			label={'Loading...'}
			svgLoaderProps={{ class: 'size-12', 'stroke-width': 3 }}
			colors="primary"
			type="dots"
			loaderVariant={'threeDotsBounce'}
		/>
		<Loader
			label={'Loading...'}
			svgLoaderProps={{ class: 'size-12', 'stroke-width': 1 }}
			colors="primary"
			type="dots"
			loaderVariant={'threeDotsMove'}
		/>
		<Loader
			label={'Loading...'}
			svgLoaderProps={{ class: 'size-12' }}
			colors="primary"
			type="dots"
			loaderVariant={'revolve'}
		/>
	</article>
	<Title level={2} className="my-2">Progress</Title>
	<article class="callout">
		<Progress />
		<Progress colors="info" indeterminate={true} progressWidth={8} />
		<Progress colors="error" progressWidth={8} value={0.3} />
		<Progress barRounded={false} colors="warning" progressWidth={8} value={0.7} />
		<Progress type="circle" indeterminate={true} colors="warning" progressWidth={2} value={0.7} />
		<Progress type="circle" colors="info" progressWidth={3} value={0.9} />
		<Progress type="circle" colors="primary" progressWidth={2} value={0.5} />
	</article>
</main>

<style>
	main {
		margin: 10px;
	}
	article {
		display: grid;
		grid-auto-flow: column;
		align-items: center;
	}
	.callout {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.row {
		flex-direction: row;
	}
</style>
