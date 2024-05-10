<script>
	import Chip from '$lib/Components/Chip/Chip.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Tooltip from '$lib/Components/Tooltip/Tooltip.svelte';
</script>

<div class="page-content">
	<aside></aside>
	<main>
		<article>
			<header>
				<Title>Tooltip</Title>
			</header>
			<section>
				<div class="w-full">
					<Tooltip>
						{#snippet content()}
							<p>This is a Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">Hover me</Chip>
					</Tooltip>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Positions</Title>
			</header>
			<section>
				<div class="position-grid">
					<Tooltip position="top-start">
						{#snippet content()}
							<p>This is a top-start Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">top-start</Chip>
					</Tooltip>
					<Tooltip position="top">
						{#snippet content()}
							<p>This is a top Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">top</Chip>
					</Tooltip>
					<Tooltip position="top-end">
						{#snippet content()}
							<p>This is a top-end Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">top-end</Chip>
					</Tooltip>
					<Tooltip position="right-start">
						{#snippet content()}
							<p>This is a right-start Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">right-start</Chip>
					</Tooltip>
					<Tooltip position="right">
						{#snippet content()}
							<p>This is a right Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">right</Chip>
					</Tooltip>
					<Tooltip position="right-end">
						{#snippet content()}
							<p>This is a right-end Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">right-end</Chip>
					</Tooltip>
					<Tooltip position="left-start">
						{#snippet content()}
							<p>This is a left-start Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">left-start</Chip>
					</Tooltip>
					<Tooltip position="left">
						{#snippet content()}
							<p>This is a left Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">left</Chip>
					</Tooltip>
					<Tooltip position="left-end">
						{#snippet content()}
							<p>This is a left-end Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">left-end</Chip>
					</Tooltip>
					<Tooltip position="bottom-start">
						{#snippet content()}
							<p>This is a bottom-start Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">bottom-start</Chip>
					</Tooltip>
					<Tooltip position="bottom">
						{#snippet content()}
							<p>This is a bottom Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">bottom</Chip>
					</Tooltip>
					<Tooltip position="bottom-end">
						{#snippet content()}
							<p>This is a bottom-end Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">bottom-end</Chip>
					</Tooltip>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>With Arrow</Title>
			</header>
			<section>
				<div class="w-full">
					<Tooltip position="top" withArrow>
						{#snippet content()}
							<p>This is a Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">Hover me</Chip>
					</Tooltip>
					<Tooltip position="bottom" withArrow>
						{#snippet content()}
							<p>This is a Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">Hover me</Chip>
					</Tooltip>
					<Tooltip withArrow position="left">
						{#snippet content()}
							<p>This is a Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">Hover me</Chip>
					</Tooltip>
					<Tooltip position="right" withArrow>
						{#snippet content()}
							<p>This is a Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">Hover me</Chip>
					</Tooltip>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Offset</Title>
			</header>
			<section>
				<div class="w-full">
					<Tooltip offset={10}>
						{#snippet content()}
							<p>This is a Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">Hover me</Chip>
					</Tooltip>
					<Tooltip position={'bottom'} offset={-4}>
						{#snippet content()}
							<p>This is a Tooltip</p>
						{/snippet}
						<Chip colors="primary" variant="solid" className="rounded-xl">Hover me</Chip>
					</Tooltip>
				</div>
			</section>
		</article>
	</main>
</div>

<style>
	.position-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
	}
	:global(.position-grid .ui-tooltip-container > .ui-chip) {
		width: 100%;
	}
	:global(.position-grid .ui-tooltip-container) {
		width: 100%;
	}
</style>
