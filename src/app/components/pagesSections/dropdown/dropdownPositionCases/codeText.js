export default function dropdownPositionCases(position) {
	return `<script>
import { Dropdown, DropdownItem, Divider} from '@nv-org/components';
</script>
<Dropdown position={'${position}'} triggerText="open dropdown">
	<p class="font-bold pl-2 my-2">dropdown {'${position}'}</p>
	<DropdownItem>item 1</DropdownItem>
	<Divider size={1} color="var(--color-stone-500)" class="my-2"></Divider>
	<p class="font-bold pl-2 my-2">section 2</p>
	<DropdownItem closeOnClick={false}>item 2</DropdownItem>
	<DropdownItem>item 3</DropdownItem>
</Dropdown>
  `;
}
