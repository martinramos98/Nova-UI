export default function dropdownSubsectionCases() {
	return `<script>
import { Dropdown, DropdownItem, Divider} from '@nv-org/components';
</script>
<Dropdown triggerText="Open Dropdown">
	<p class="font-bold pl-2 my-2">Menues</p>
	<Divider size={1}></Divider>
	<DropdownGroup>
		{#snippet triggerContent()}
			<span>Menu 1</span>
		{/snippet}
		<p class="font-bold my-2 italic">Menu 1</p>
		<DropdownItem class="px-2">Item 1</DropdownItem>
		<DropdownItem class="px-2">Item 2</DropdownItem>
		<DropdownItem class="px-2">Item 3</DropdownItem>
	</DropdownGroup>
	<DropdownGroup>
		{#snippet triggerContent()}
			<span>Menu 2</span>
		{/snippet}
		<p class="font-bold my-2 italic">Menu 2</p>
		<DropdownItem class="px-2">Item 1</DropdownItem>
		<DropdownItem class="px-2">Item 2</DropdownItem>
		<DropdownItem class="px-2">Item 3</DropdownItem>
		<DropdownItem class="px-2">Item 4</DropdownItem>
		<DropdownItem class="px-2">Item 5</DropdownItem>
	</DropdownGroup>
	<DropdownGroup>
		{#snippet triggerContent()}
			<span>Menu 3</span>
		{/snippet}
		<p class="font-bold my-2 italic">Menu 3</p>
		<DropdownItem class="px-2">Item 1</DropdownItem>
		<DropdownItem class="px-2">Item 2</DropdownItem>
	</DropdownGroup>
	<DropdownGroup position="right" classNameContainer="w-[200px] shadow-md">
		{#snippet triggerContent()}
			<span>Open subsection</span>
		{/snippet}
		<p class="font-bold text-center my-2">Subsection 1</p>
		<DropdownGroup>
			{#snippet triggerContent()}
				<span>Open subsection</span>
			{/snippet}
			<p class="font-bold my-2 italic">Subsub section</p>
			<DropdownItem>Item Subsub section</DropdownItem>
		</DropdownGroup>
	</DropdownGroup>
</Dropdown>
`;
}
