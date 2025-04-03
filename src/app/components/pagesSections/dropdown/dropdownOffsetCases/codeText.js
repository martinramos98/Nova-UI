export default function dropdownOffsetCases() {
	return `<script>
import { Dropdown, DropdownItem } from '@nv-org/components';  
</script>
<Dropdown offset={-20} triggerText="Open Dropdown">
	<p class="font-bold pl-2 my-2">Offset Negative</p>
	<Divider size={1} color="var(--color-stone-500)" class="my-2"></Divider>
	<DropdownItem>Item 1</DropdownItem>
</Dropdown>
<Dropdown offset={20} triggerText="Open Dropdown">
	<p class="font-bold pl-2 my-2">Offset Positive</p>
	<Divider size={1} color="var(--color-stone-500)" class="my-2"></Divider>
	<DropdownItem>Item 1</DropdownItem>
</Dropdown>
`;
}
