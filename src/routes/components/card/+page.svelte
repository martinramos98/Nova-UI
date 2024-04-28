<script>
	import Card from '$lib/Components/Card/Card.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<div class="flex flex-row">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#card">Card</a></li>
			<li><a href="#disabled">Layout</a></li>
			<li><a href="#variants">Variants</a></li>
			<li><a href="#group">Use Case</a></li>
		</ul>
	</aside>
	<main>
		<article id="card">
			<header>
				<Title>Card</Title>
			</header>
			<section>
				<div>
					<Card variant="solid" color="container" className="p-2">This is a Simple Card</Card>
				</div>
			</section>
		</article>
		<article id="contents">
			<header>
				<Title level={2}>Contents</Title>
				<p>
					Card are constrained with header, body, footer and default content. The default content is
					rendered with the body content
				</p>
			</header>
			<section>
				<div>
					<Card>
						{#snippet header()}{/snippet}
					</Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</div>
			</section>
		</article>
		<article id="layouts">
			<header>
				<Title level={2}>Layout</Title>
			</header>
			<section>
				<div></div>
			</section>
		</article>

		<article id="variants">
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<div></div>
			</section>
		</article>
		<article class="cases">
			<header>
				<Title level={2}>Use of Cases</Title>
			</header>
			<section>
				<div></div>
			</section>
		</article>
	</main>
</div>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	aside {
		position: sticky;
		height: fit-content;
		top: 65px;
		width: max-content;
		left: 2.5%;
		padding: var(--spacing-4);
		border-radius: var(--radius-xl);
		background-color: var(--color-surface-low);
		& ul {
			width: max-content;
		}
	}
	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 70%;
		background-color: var(--color-surface-low);
		padding: var(--spacing-2) var(--spacing-6) var(--spacing-6) var(--spacing-6);
		border-radius: var(--radius-xl);
		gap: var(--spacing-4);
		margin: var(--spacing-6) 0;
		& header {
			/* margin: var(--spacing-4) 0; */
			/* padding: var(--spacing-2); */
			/* border-radius: var(--radius-xl); */
		}
		& section {
			display: flex;
			/* view-timeline: --block;
			view-timeline-axis: inline;
			animation-timeline: view();
			animation-name: show;
			animation-range: entry 80% cover 70%;
			animation-fill-mode: both; */
			/* align-self: center; */
			width: fit-content;
			max-width: 100%;
			flex-direction: column;
			background-color: var(--color-surface-low);
			justify-content: center;
			gap: var(--spacing-2);
			& div {
				justify-self: center;
				align-items: center;
				align-self: center;
				display: flex;
				flex-wrap: wrap;
				width: fit-content;
				padding: var(--spacing-4);
				gap: var(--spacing-8);
				flex-direction: row;
			}
		}
	}
	/* @keyframes show {
		from {
			opacity: 0;
			scale: 0.8;
		}
		to {
			opacity: 1;
			scale: 1;
		}
	} */
</style>
