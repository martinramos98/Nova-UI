<script>
	import { onMount } from 'svelte';
	import Callout from '$lib/Components/Callout/Callout.svelte';
	import Radio from '$lib/Components/RadioGroup/RadioButton/Radio.svelte';
	import RadioGroup from '$lib/Components/RadioGroup/RadioGroup.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import { toast } from '$lib/Components/Toast/toast';

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
	<Button colors='info' variant={'solid'} onClick={()=>{
		toast('',{
			type:'info',
			content:'This is a Test Toast'
		},)
	}}>Toast Test</Button>
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
</style>
