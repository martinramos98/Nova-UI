<svelte:options runes={true} />

<script>
	import { ContextMenu } from '$lib/index';
	import Button from '$lib/Components/Button/Button.svelte';
	import {
		provideContextMenu,
		asContextMenuContainer
	} from '$lib/Components/ContextMenu/ContextMenu';
	import ComponentCodeTabs from '../ComponentShowcase/ComponentCodeTabs.svelte';
	provideContextMenu();
</script>

<div class="w-full">
	<ComponentCodeTabs
		code={`<div class="w-full h-[300px] p-2 context-container" use:asContextMenuContainer>
	<ContextMenu className="p-2 rounded-lg">
		<Button
			variant="light"
			className="w-full px-2 text-start"
			withClickEffect={false}
			colors="primary">Copy</Button
		>
		<Button
			variant="light"
			className="w-full px-2 text-start"
			withClickEffect={false}
			colors="primary">Cut</Button
		>
		<Button
			variant="light"
			className="w-full px-2 text-start"
			withClickEffect={false}
			colors="primary">Paste</Button
		>
		<Button
			variant="light"
			className="w-full px-2 text-start"
			withClickEffect={false}
			colors="primary">Test</Button
		>
	</ContextMenu>
</div>
`}
	>
		{#snippet component()}
			<div class="w-full p-2 h-[300px] context-container" use:asContextMenuContainer>
				<ContextMenu className="p-2 rounded-lg">
					<Button
						variant="light"
						className="w-full px-2 text-start"
						withClickEffect={false}
						colors="primary">Copy</Button
					>
					<Button
						variant="light"
						className="w-full px-2 text-start"
						withClickEffect={false}
						colors="primary">Cut</Button
					>
					<Button
						variant="light"
						className="w-full px-2 text-start"
						withClickEffect={false}
						colors="primary">Paste</Button
					>
					<Button
						variant="light"
						className="w-full px-2 text-start"
						withClickEffect={false}
						colors="primary">Test</Button
					>
				</ContextMenu>
			</div>
		{/snippet}
	</ComponentCodeTabs>
</div>

<style>
	.context-container {
		border: solid 2px var(--color-surface-highest);
		border-radius: var(--radius-3xl);
		background: var(--color-surface-hight);
		background-repeat: repeat;
	}
</style>
