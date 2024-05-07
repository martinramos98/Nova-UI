<script>
	import Popover from '$lib/Components/Popover/Popover.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
</script>

<div class="page-content">
	<main>
		<article>
			<header>
				<Title>Popover</Title>
			</header>
			<section>
				<div class="w-full">
					<Popover variant="solid" colors="container">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">Press Me</Button>
					</Popover>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Positions</Title>
			</header>
			<section>
				<div class="position-grid">
					<Popover variant="solid" colors="container" position="top-start">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">top-start</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="top">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">top</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="top-end">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">top-end</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="left-start">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">left-start</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="left">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">left</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="left-end">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">left-end</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="right-start">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">right-start</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="right">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">right</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="right-end">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">right-end</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="bottom-start">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">bottom-start</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="bottom">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">bottom</Button>
					</Popover>
					<Popover variant="solid" colors="container" position="bottom-end">
						{#snippet popoverContent()}
							<p>Popover Test</p>
						{/snippet}
						<Button variant="faded" colors="primary">bottom-end</Button>
					</Popover>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section></section>
		</article>
		<article>
			<header>
				<Title level={2}>Offset</Title>
			</header>
			<section></section>
		</article>
	</main>
</div>

<style>
	.position-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
	}
	:global(.position-grid .ui-popover-container > .ui-button) {
		width: 100%;
	}
	:global(.position-grid .ui-popover-container) {
		width: 100%;
	}
</style>
