<script>
	import Input from '$lib/Components/Input/Input.svelte';
	import Option from '$lib/Components/Selection/Option.svelte';
	import Selection from '$lib/Components/Selection/Selection.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<Title className="my-2" level={2}>Input</Title>
<section>
	<Input labelText="Nombre" name="nombre" type="text" placeholder="Test" />
	<Input
		labelText="Edad"
		name="edad"
		labelProps={{ position: 'leftside', dynamic: true }}
		type="number"
	/>
	<Input
		labelText="Password"
		name="password"
		labelProps={{ position: 'outside', dynamic: true, className: '' }}
		type="password"
	/>
	<Input name="email" labelText="Email" type="email" />
</section>
<Title className="my-2" level={4}>Input Variants</Title>
<section></section>
<Title className="my-2" level={2}>Selection</Title>
<section>
	<Selection
		selectionLabel={'Test Selection'}
		colors={'info'}
		variant={'flat'}
		classNameSelected="rounded-sm"
	>
		<Option value={1}>1</Option>
		<Option value={2}>2</Option>
		<Option value={3}>3</Option>
		<Option value={4}>4</Option>
	</Selection>
	<Selection multiselection placeholder={'With Multiselection'} selectionLabel={'Test Selection'}>
		<Option value={1}>1</Option>
		<Option value={2}>2</Option>
		<Option value={3}>3</Option>
		<Option value={4}>4</Option>
	</Selection>
</section>
<section>
	<Selection
		selectionLabel={'Test Selection'}
		colors={'info'}
		classNameInputBox="w-[300px]"
		variant={'blurred'}
		classNameSelected="rounded-sm"
	>
		<Option value={1}>1</Option>
		<Option value={2}>2</Option>
		<Option value={3}>3</Option>
		<Option value={4}>4</Option>
	</Selection>
	<Selection
		multiselection
		variant={'faded'}
		colors={'primary'}
		placeholder={'With Multiselection'}
		selectionLabel={'Test Selection'}
	>
		<Option value={1}>1</Option>
		<Option value={2}>2</Option>
		<Option value={3}>3</Option>
		<Option value={4}>4</Option>
	</Selection>
</section>
<section>
	<Selection
		selectionLabel={'Test Selection'}
		colors={'info'}
		variant={'underlined'}
		classNameSelected="rounded-sm"
	>
		<Option value={1}>1</Option>
		<Option value={2}>2</Option>
		<Option value={3}>3</Option>
		<Option value={4}>4</Option>
	</Selection>
	<Selection
		multiselection
		variant={'bordered'}
		colors={'primary'}
		placeholder={'With Multiselection'}
		classNameInputBox="w-[300px]"
		selectionLabel={'Test Selection'}
	>
		<Option value={1}>1</Option>
		<Option value={2}>2</Option>
		<Option value={3}>3</Option>
		<Option value={4}>4</Option>
	</Selection>
</section>
