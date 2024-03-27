<script lang="ts">
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import DropDownItem from '$lib/Components/Dropdown/DropDownItem/DropDownItem.svelte';
	import Dropdown from '$lib/Components/Dropdown/Dropdown.svelte';
	import DropDownGroup from '$lib/Components/Dropdown/DropdownGroup/DropdownGroup.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<main class="p-2">
	<Title>Dropdown</Title>
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
			<p class="font-bold text-center my-2">Subsection 1</p>
			<DropDownGroup textButton="Subsection 2">
				<p class="font-bold my-2 italic">Subsub section</p>
			</DropDownGroup>
		</DropDownGroup>
	</Dropdown>
</main>
