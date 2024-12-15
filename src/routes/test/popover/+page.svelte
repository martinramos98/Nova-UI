<script lang="ts">
	import { Popover, createPopoverControls } from '@nv-org/popover';
	import { Tooltip, createTooltipControls } from '@nv-org/tooltip';
	import { Button } from '@nv-org/button';
	const { asPopoverAnchor: asPopoverAnchorTop, asPopoverTrigger: asPopoverTriggerTop } =
		createPopoverControls();
	const { asPopoverAnchor: asPopoverAnchorBottom, asPopoverTrigger: asPopoverTriggerBottom } =
		createPopoverControls('popover-bottom');
	const { asPopoverAnchor: asPopoverAnchorLeft, asPopoverTrigger: asPopoverTriggerLeft } =
		createPopoverControls('popover-left');
	const { asPopoverAnchor: asPopoverAnchorRight, asPopoverTrigger: asPopoverTriggerRight } =
		createPopoverControls('popover-right');
	const { asTooltipAnchor, asTooltipTrigger } = createTooltipControls();
	function asPopoverRootTop(node: HTMLElement) {
		asPopoverAnchorTop(node);
		asPopoverTriggerTop(node);
	}
	function asPopoverRootLeft(node: HTMLElement) {
		asPopoverAnchorLeft(node);
		asPopoverTriggerLeft(node);
	}
	function asPopoverRootRight(node: HTMLElement) {
		asPopoverAnchorRight(node);
		asPopoverTriggerRight(node);
	}
	function asPopoverRootBottom(node: HTMLElement) {
		asPopoverAnchorBottom(node);
		asPopoverTriggerBottom(node);
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
	<section class="popovers-container">
		<div>
			<Button action={asPopoverRootTop} variant="solid" colors="info">Press Me</Button>
		</div>
		<div>
			<Button action={asPopoverRootLeft} variant="solid" colors="info">Press Me</Button>
		</div>
		<div>
			<Button action={asPopoverRootRight} variant="solid" colors="info">Press Me</Button>
		</div>
		<div>
			<Button action={asPopoverRootBottom} variant="solid" colors="info">Press Me</Button>
		</div>
	</section>
	<Popover
		withArrow
		--color-border="transparent"
		position="top-left"
		class="rounded-lg font-bold p-2"
	>
		<p>Hola Mundo From popover that is bigger than others</p>
	</Popover>
	<Popover
		position="bottom"
		contextKey="popover-bottom"
		withArrow
		--color-border="transparent"
		class="rounded-lg font-bold p-2"
	>
		<p>Hola Mundo</p>
	</Popover>
	<Popover
		position="left"
		contextKey="popover-left"
		withArrow
		--color-border="transparent"
		class="rounded-lg font-bold p-2"
	>
		<p>Hola Mundo</p>
	</Popover>
	<Popover
		position="right"
		contextKey="popover-right"
		withArrow
		--color-border="transparent"
		class="rounded-lg font-bold p-2"
	>
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
	.popovers-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing);
	}
</style>
