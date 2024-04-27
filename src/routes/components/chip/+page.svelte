<script>
	import Avatar from '$lib/Components/Avatar/Avatar.svelte';
	import Chip from '$lib/Components/Chip/Chip.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<div class="flex flex-row">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#button">Chip</a></li>
			<li><a href="#disabled">Colors</a></li>
			<li><a href="#variants">Variants</a></li>
			<li><a href="#custom">Sizes</a></li>
			<li><a href="#group">Use Case</a></li>
		</ul>
	</aside>
	<main>
		<article id={'chip'}>
			<header>
				<Title level={1} className="text-start w-full">Chip</Title>
				<p class="py-2 px-2">
					Chip component are compacts visual elements commonly used to represent attributes, tags,
					or small interactive elements within a user interface.
				</p>
			</header>
			<section>
				<div>
					<Chip colors="success" variant="solid">Active</Chip>
					<Chip colors="warning" variant="solid">Delayed</Chip>
					<Chip className="bg-slate-800 font-bold rounded-2xl" variant="solid">UBA</Chip>
				</div>
			</section>
		</article>
		<article id="colors">
			<header>
				<Title level={2}>Colors</Title>
			</header>
			<section>
				<div>
					<Chip colors="primary" variant="solid">Primary</Chip>
					<Chip colors="secondary" variant="solid">Secondary</Chip>
					<Chip colors="tertiary" variant="solid">Tertiary</Chip>
					<Chip colors="success" variant="solid">Success</Chip>
					<Chip colors="warning" variant="solid">Warning</Chip>
					<Chip colors="error" variant="solid">Error</Chip>
					<Chip colors="info" variant="solid">Info</Chip>
				</div>
			</section>
		</article>
		<article id="variants">
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<div>
					<Chip colors="primary" variant="solid">Solid</Chip>
					<Chip colors="primary" variant="flat">Flat</Chip>
					<Chip colors="primary" variant="light">Light</Chip>
					<Chip colors="primary" variant="faded">Faded</Chip>
					<Chip colors="primary" variant="bordered">Bordered</Chip>
					<Chip colors="primary" variant="ghost">Ghost</Chip>
					<Chip colors="primary" variant="shadows">Shadows</Chip>
					<Chip colors="primary" variant="neon">Neon</Chip>
				</div>
			</section>
		</article>
		<article id="sizes">
			<header>
				<Title level={2}>Sizes</Title>
			</header>
			<section>
				<div>
					<Chip colors="primary" size="xs" variant="solid">Size xs</Chip>
					<Chip colors="primary" size="sm" variant="solid">Size sm</Chip>
					<Chip colors="primary" size="md" variant="solid">Size md</Chip>
					<Chip colors="primary" size="lg" variant="solid">Size lg</Chip>
				</div>
			</section>
		</article>
		<article id="cases">
			<header>
				<Title level={2}>Use of Case</Title>
				<div class="box-case">
					<Avatar
						avatarBordered
						colors="error"
						avatarSrc="https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png"
					></Avatar>
					<div class="description">
						<span class="text-lg font-semibold">Bowser</span>
						<div class="chip-list gap-2">
							<Chip size="xs" variant="solid" className="bg-orange-700 rounded-full">Fire</Chip>
							<Chip size="xs" variant="solid" className="bg-lime-900 rounded-full">Turtle</Chip>
							<Chip size="xs" variant="solid" className="bg-amber-500 text-black rounded-full"
								>King</Chip
							>
						</div>
					</div>
				</div>
			</header>
		</article>
	</main>
</div>

<style>
	.box-case {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		& > .description {
			display: flex;
			flex-direction: column;
			gap: 0.3rem;
			& > .chip-list {
				display: flex;
				flex-direction: row;
			}
		}
	}
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
