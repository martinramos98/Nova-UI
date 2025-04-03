<svelte:options runes={true} />

<script>
	import { ContextMenu, asContextMenuContainer, provideContextMenu } from '@nv-org/context-menu';
	import { Button } from '@nv-org/button';
	import ComponentCodeTabs from '../ComponentShowcase/ComponentCodeTabs.svelte';
	provideContextMenu();
	import { basicContextMenuCase } from './codeTexts.js';
</script>

<div class="w-full">
	<ComponentCodeTabs code={basicContextMenuCase()}>
		{#snippet component()}
			<div class="w-full p-2 h-[300px] context-container" use:asContextMenuContainer>
				<ContextMenu class="p-2 rounded-lg">
					<Button
						variant="light"
						class="w-full px-2 text-start"
						withClickEffect={false}
						colors="primary">Copy</Button
					>
					<Button
						variant="light"
						class="w-full px-2 text-start"
						withClickEffect={false}
						colors="primary">Cut</Button
					>
					<Button
						variant="light"
						class="w-full px-2 text-start"
						withClickEffect={false}
						colors="primary">Paste</Button
					>
					<Button
						variant="light"
						class="w-full px-2 text-start"
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
