<svelte:options runes={true} />

<script>
	import { Button } from '@nova/button';
	import { Option, Selection } from '@nova/selection';
	import { Tab, TabButton, Tabs } from '@nova/tabs';
	import CodeSnippet from '../../CodeSnippet/CodeSnippet.svelte';
	let variant = $state('solid');
	let color = $state('primary');
	function onChangeVariant(value) {
		variant = value;
	}
	function onChangeColor(value) {
		color = value;
	}
	const variantsOptions = [
		'solid',
		'faded',
		'bordered',
		'shadows',
		'neon',
		'light',
		'ghost',
		'flat'
	];
	const colorOptions = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'info'];
</script>

<div class="w-full relative">
	<div class="absolute right-0 top-0 w-fit flex gap-2">
		<Selection
			colors="container"
			className=" w-[150px]"
			selectionLabel="Variant"
			value={variant}
			onSelect={onChangeVariant}
		>
			{#each variantsOptions as variantValue}
				<Option value={variantValue}>
					{variantValue}
				</Option>
			{/each}
		</Selection>
		<Selection
			colors="container"
			className=" w-[150px] "
			selectionLabel="Color"
			onSelect={onChangeColor}
			value={color}
		>
			{#each colorOptions as colorValue}
				<Option value={colorValue}>
					{colorValue}
				</Option>
			{/each}
		</Selection>
	</div>
	<Tabs className="w-full" classNameContent="bg-transparent h-[150px]">
		{#snippet TabSelection()}
			<TabButton key="Component">Component</TabButton>
			<TabButton key="Code">Code</TabButton>
		{/snippet}
		<Tab
			key="Component"
			className="h-[150px] flex items-center justify-center bg-[var(--color-surface)] rounded-xl"
		>
			<Button colors={color} {variant}>Press Me</Button>
		</Tab>
		<Tab key="Code" className="flex items-center justify-center h-[150px]">
			<CodeSnippet
				isSvelte
				textCode={`<Button colors={${color}} variant={${variant}}>Press Me</Button>`}
			></CodeSnippet>
		</Tab>
	</Tabs>
</div>
