<script lang="ts">
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import DropDownItem from '$lib/Components/Dropdown/DropDownItem/DropDownItem.svelte';
	import Dropdown from '$lib/Components/Dropdown/Dropdown.svelte';
	import DropDownGroup from '$lib/Components/Dropdown/DropdownGroup/DropdownGroup.svelte';
	import Selection from '$lib/Components/Selection/Selection.svelte';
	import Option from '$lib/Components/Selection/Option.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Tabs from '$lib/Components/Tabs/Tabs.svelte';
	import Tab from '$lib/Components/Tabs/Tab/Tab.svelte';
	import TabButton from '$lib/Components/Tabs/TabButton/TabButton.svelte';
	import Input from '$lib/Components/Input/Input.svelte';
</script>

<main class="p-2">
	<Title level={2}>Dropdown</Title>
	<Dropdown triggerText="Open Dropdown">
		<p class="font-bold pl-2 my-2">Section 1</p>
		<DropDownItem>Item 1</DropDownItem>
		<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
		<p class="font-bold pl-2 my-2">Section 2</p>
		<DropDownItem closeOnClick={false}>Item 2</DropDownItem>
		<DropDownItem>Item 3</DropDownItem>
		<DropDownGroup
			position="right"
			classNameCotentContainer="w-[200px] shadow-md"
			textButton="Subsection"
		>
			{#snippet triggerContent()}
				<span>Open subsection</span>
			{/snippet}
			<p class="font-bold text-center my-2">Subsection 1</p>
			<DropDownGroup textButton="Subsection 2">
				<p class="font-bold my-2 italic">Subsub section</p>
			</DropDownGroup>
		</DropDownGroup>
	</Dropdown>

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
	<section>
		<Input type="text" variant="faded" />
		<Input labelText={'Cantidad'} type="text" colors={'warning'} variant="flat" />
		<Input type="password" variant="blurred" />
		<Input type="email" variant="underlined" colors={'info'} />
	</section>
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
	<Title level={2}>Tabs</Title>
	<Divider size={2} />
	<section>
		<Tabs>
			<svelte:fragment slot="tab-selection">
				<TabButton key={'1'}>Tab 1</TabButton>
				<TabButton key="2">Tab 2</TabButton>
				<TabButton key="3">Tab 3</TabButton>
			</svelte:fragment>
			<Tab key={'1'}>
				<h3>Hi from Tab 1</h3>
			</Tab>
			<Tab key={'2'}>
				<h3>Hi from Tab 2</h3>
			</Tab>
			<Tab key={'3'}>
				<h3>Hi from Tab 3</h3>
			</Tab>
		</Tabs>
	</section>
	<section>
		<Tabs variant={'bordered'}>
			<svelte:fragment slot="tab-selection">
				<TabButton key={'1'}>Tab 1</TabButton>
				<TabButton key="2">Tab 2</TabButton>
				<TabButton key="3">Tab 3</TabButton>
			</svelte:fragment>
			<Tab key={'1'}>
				<h3>Hi from Tab 1</h3>
			</Tab>
			<Tab key={'2'}>
				<h3>Hi from Tab 2</h3>
			</Tab>
			<Tab key={'3'}>
				<h3>Hi from Tab 3</h3>
			</Tab>
		</Tabs>
	</section>
	<section>
		<Tabs variant={'underlined'}>
			<svelte:fragment slot="tab-selection">
				<TabButton key={'1'}>Tab 1</TabButton>
				<TabButton key="2">Tab 2</TabButton>
				<TabButton key="3">Tab 3</TabButton>
			</svelte:fragment>
			<Tab key={'1'}>
				<h3>Hi from Tab 1</h3>
			</Tab>
			<Tab key={'2'}>
				<h3>Hi from Tab 2</h3>
			</Tab>
			<Tab key={'3'}>
				<h3>Hi from Tab 3</h3>
			</Tab>
		</Tabs>
	</section>
</main>

<style>
	section {
		display: grid;
		margin: 20px 0;
		grid-auto-flow: column;
	}
</style>
