<script>
	import Callout from '$lib/Components/Callout/Callout.svelte';
import Radio from '$lib/Components/RadioGroup/RadioButton/Radio.svelte';
	import RadioGroup from '$lib/Components/RadioGroup/RadioGroup.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<Title level={1}>Radio Groups</Title>
<main>
	<article>
		<RadioGroup className="gap-2 flex flex-col" name="test" type="checkbox">
			<Radio lineThroughtOnCheck={true} id={'item-1'} value={1} labelText="test1"></Radio>
			<Radio id={'item-2'} variant="faded" value={2} labelText="test2" />
			<Radio id={'item-3'} variant="flat" value={3} labelText="test3"></Radio>
			<Radio id={'item-4'} variant="neon" value={4} labelText="test4"></Radio>
		</RadioGroup>
		<RadioGroup className="gap-2 flex flex-col mt-4" name="test" type="radio">
			<Radio lineThroughtOnCheck={true} id={'item-1'} value={1} labelText="test1"></Radio>
			<Radio id={'item-2'} variant="faded" value={2} labelText="test2"></Radio>
			<Radio id={'item-3'} variant="flat" value={3} labelText="test3"></Radio>
			<Radio id={'item-4'} variant="neon" value={4} labelText="test4"></Radio>
		</RadioGroup>
		<RadioGroup control={{size:'size-6'}} withControl className="gap-2 flex mt-3 flex-col" name="test" type="checkbox">
			<Radio size={'size-6'} lineThroughtOnCheck={true} id={'item-1'} value={1} labelText="test1"></Radio>
			<Radio size={'size-6'} id={'item-2'} variant="faded" value={2} labelText="test2"></Radio>
			<Radio size={'size-6'} id={'item-3'} variant="flat" value={3} labelText="test3"></Radio>
			<Radio size={'size-6'} id={'item-4'} variant="neon" value={4} labelText="test4"></Radio>
		</RadioGroup>
	</article>
	<Title level={2}> Callouts </Title>
	<Callout>
		Test for Callout
	</Callout>
</main>

<style>
	main {
		margin: 10px;
	}
	article{
		display: grid;
		grid-auto-flow: column;
		align-items: center;
	}
</style>
