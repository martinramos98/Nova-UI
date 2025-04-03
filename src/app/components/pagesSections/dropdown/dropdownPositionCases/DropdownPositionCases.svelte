<script>
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Dropdown, DropdownItem } from '@nv-org/dropdown';
	import { Divider } from '@nv-org/divider';
	import { Selection, Option } from '@nv-org/selection';
	import dropdownPositionCases from './codeText.js';
	let position = $state(new Set(['left-start']));
	const first = $derived(position.values().next().value);
</script>

<section class="relative">
	<aside class="absolute top-2 right-0 w-[150px]">
		<Selection variant="faded" class={'w-full'} bind:selectedValue={position}>
			<Option value={'left-start'}>Left Start</Option>
			<Option value={'right-start'}>Right Start</Option>
			<Option value={'left-end'}>Left End</Option>
			<Option value={'right-end'}>Right End</Option>
			<Option value={'top'}>Top</Option>
			<Option value={'bottom'}>Bottom</Option>
		</Selection>
	</aside>
	<div class="w-full">
		<ComponentCodeTabs code={dropdownPositionCases(first)}>
			{#snippet component()}
				<Dropdown position={first} triggerText="open dropdown">
					<p class="font-bold pl-2 my-2">dropdown {first}</p>
					<DropdownItem>item 1</DropdownItem>
					<Divider size={1} color="var(--color-stone-500)" class="my-2"></Divider>
					<p class="font-bold pl-2 my-2">section 2</p>
					<DropdownItem closeOnClick={false}>item 2</DropdownItem>
					<DropdownItem>item 3</DropdownItem>
				</Dropdown>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
