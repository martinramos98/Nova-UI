<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Dropdown, DropdownItem } from '@nv-org/dropdown';
	import { Divider } from '@nv-org/divider';
	import dropdownOffsetCases from './codeText.js';
</script>

<section>
	<div class="w-full">
		<ComponentCodeTabs code={dropdownOffsetCases()}>
			{#snippet component()}
				<div class="flex flex-wrap gap-4">
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
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
