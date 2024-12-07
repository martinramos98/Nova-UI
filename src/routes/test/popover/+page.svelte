<script lang="ts">
	import { Popover, createPopoverControls } from '@nv-org/popover';
	import { Tooltip, createTooltipControls } from '@nv-org/tooltip';
	import { Button } from '@nv-org/button';
	const { asPopoverAnchor, asPopoverTrigger } = createPopoverControls();
	const { asTooltipAnchor, asTooltipTrigger } = createTooltipControls();
	function asPopoverRoot(node: HTMLElement) {
		asPopoverAnchor(node);
		asPopoverTrigger(node);
	}
	function asTooltipRoot(node: HTMLElement) {
		asTooltipAnchor(node);
		asTooltipTrigger(node);
	}
</script>

<main>
	<section>
		<h1>Popover</h1>
	</section>
	<Button action={asPopoverRoot} variant="solid" colors="info">Press Me</Button>
	<Popover withArrow --color-border="transparent" class="rounded-lg font-bold p-2">
		<p>Hola Mundo</p>
	</Popover>
	<Button action={asTooltipRoot} variant="solid" colors="info">Press me Tooltip</Button>
	<Tooltip class="bg-cyan-950 rounded-lg font-bold p-2">
		<p>Hola Mundo</p>
	</Tooltip>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		height: 90vh;
	}
</style>
