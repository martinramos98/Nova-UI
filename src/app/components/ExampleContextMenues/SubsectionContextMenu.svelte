<svelte:options runes={true} />

<script>
	import {
		ContextMenu,
		asContextMenuContainer,
		provideContextMenu,
		ContextMenuSection
	} from '@nv-org/context-menu';
	import { Button } from '@nv-org/button';
	import { Divider } from '@nv-org/divider';
	import ComponentCodeTabs from '../ComponentShowcase/ComponentCodeTabs.svelte';
	provideContextMenu();
	let openContext = $state(false);
	function closeContextMenu() {
		openContext = false;
	}
</script>

<div class="w-full">
	<ComponentCodeTabs
		code={`<div class="w-full h-[300px] p-2 context-container" use:asContextMenuContainer>
	<ContextMenu bind:open={openContext} onClose={closeContextMenu} class="p-2 rounded-lg">
		<Button
			variant="light"
			class="w-full px-2 text-start"
			onClick={() => {
				closeContextMenu();
			}}
			withClickEffect={false}
			colors="primary">Copy</Button
		>
		<Button
			variant="light"
			class="w-full px-2 text-start"
			onClick={() => {
				closeContextMenu();
			}}
			withClickEffect={false}
			colors="primary">Cut</Button
		>
		<Button
			variant="light"
			class="w-full px-2 text-start"
			onClick={() => {
				closeContextMenu();
			}}
			withClickEffect={false}
			colors="primary">Paste</Button
		>
		<Button
			variant="light"
			class="w-full px-2 text-start"
			onClick={() => {
				closeContextMenu();
			}}
			withClickEffect={false}
			colors="primary">Test</Button
		>
		<Divider size={1} class="my-2"></Divider>
		<ContextMenuSection offset={10} classContainer="">
			<Button
				variant="light"
				class="w-full px-2 text-start"
				withClickEffect={false}
				colors="primary">Instagram</Button
			>
			<Button
				variant="light"
				class="w-full px-2 text-start"
				withClickEffect={false}
				colors="primary">X</Button
			>
			<Button
				variant="light"
				class="w-full px-2 text-start"
				withClickEffect={false}
				colors="primary">Facebook</Button
			>
			{#snippet triggerContent()}
				<Button
					variant="light"
					onClick={() => {
						closeContextMenu();
					}}
					class="w-full px-2 text-start"
					withClickEffect={false}
					colors="primary">Share</Button
				>
			{/snippet}
		</ContextMenuSection>
	</ContextMenu>
</div>
`}
	>
		{#snippet component()}
			<div class="w-full h-[300px] p-2 context-container" use:asContextMenuContainer>
				<ContextMenu bind:open={openContext} onClose={closeContextMenu} class="p-2 rounded-lg">
					<Button
						variant="light"
						class="w-full px-2 text-start"
						onClick={() => {
							closeContextMenu();
						}}
						withClickEffect={false}
						colors="primary">Copy</Button
					>
					<Button
						variant="light"
						class="w-full px-2 text-start"
						onClick={() => {
							closeContextMenu();
						}}
						withClickEffect={false}
						colors="primary">Cut</Button
					>
					<Button
						variant="light"
						class="w-full px-2 text-start"
						onClick={() => {
							closeContextMenu();
						}}
						withClickEffect={false}
						colors="primary">Paste</Button
					>
					<Button
						variant="light"
						class="w-full px-2 text-start"
						onClick={() => {
							closeContextMenu();
						}}
						withClickEffect={false}
						colors="primary">Test</Button
					>
					<Divider size={1} className="my-2"></Divider>
					<ContextMenuSection offset={10}>
						<Button
							variant="light"
							class="w-full px-2 text-start"
							withClickEffect={false}
							colors="primary">Instagram</Button
						>
						<Button
							variant="light"
							class="w-full px-2 text-start"
							withClickEffect={false}
							colors="primary">X</Button
						>
						<Button
							variant="light"
							class="w-full px-2 text-start"
							withClickEffect={false}
							colors="primary">Facebook</Button
						>
						{#snippet triggerContent()}
							<Button
								variant="light"
								onClick={() => {
									closeContextMenu();
								}}
								class="w-full px-2 text-start"
								withClickEffect={false}
								colors="primary">Share</Button
							>
						{/snippet}
					</ContextMenuSection>
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
