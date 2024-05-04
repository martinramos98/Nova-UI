<script>
	import Link from '$lib/Components/Link/Link.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#link">Link</a></li>
			<li><a href="#types">Link Types</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title>Link</Title>
			</header>
			<section>
				<div class="w-full">
					<Link href="/" target="self">Nova UI</Link>
				</div>
			</section>
		</article>
		<article>
			<header><Title>Link Types</Title></header>
			<section>
				<Title level={3}>Simple Link</Title>
				<div>
					<Link href="/" target="self">Nova UI</Link>
					<Link href="/" target="self">Nova UI</Link>
					<Link href="/" target="self">Nova UI</Link>
				</div>
			</section>
			<section>
				<Title level={3}>External Link</Title>
				<div>
					<Link type="external" href="/" target="self">Nova UI</Link>
					<Link type="external" href="/" target="self">Nova UI</Link>
					<Link type="external" href="/" target="self">Nova UI</Link>
				</div>
			</section>
			<section>
				<Title level={3}>Link Preview</Title>
				<div>
					<Link
						type="preview"
						href="https://svelte.dev/"
						previewData={{
							image: 'https://svelte.dev/images/twitter-thumbnail.jpg',
							title: 'Svelte',
							description: 'Cybernetically enhanced web apps',
							favicon: 'https://svelte.dev/favicon.png'
						}}
						target="blank"
					></Link>
					<Link
						type="preview"
						href="/"
						previewData={{ image: '', title: '', description: '', favicon: '' }}
						target="blank"
					></Link>
					<Link
						type="preview"
						href="/"
						previewData={{ image: '', title: '', description: '', favicon: '' }}
						target="blank"
					></Link>
				</div>
				<section class="gap-3 flex flex-col">
					<Title level={4}>Link Preview Sizes</Title>
					<Link
						type="preview"
						href="https://svelte.dev/"
						previewSize="xs"
						previewData={{
							image: 'https://svelte.dev/images/twitter-thumbnail.jpg',
							title: 'Svelte dhaksjdhjkasdhkjas',
							description: 'Cybernetically enhanced web apps',
							favicon: 'https://svelte.dev/favicon.png'
						}}
						target="blank"
					></Link>
					<Link
						type="preview"
						href="https://svelte.dev/"
						previewSize="sm"
						previewData={{
							image: 'https://svelte.dev/images/twitter-thumbnail.jpg',
							title: 'Svelte',
							description: 'Cybernetically enhanced web apps',
							favicon: 'https://svelte.dev/favicon.png'
						}}
						target="blank"
					></Link>
					<Link
						type="preview"
						href="https://svelte.dev/"
						previewSize="md"
						previewData={{
							image: 'https://svelte.dev/images/twitter-thumbnail.jpg',
							title: 'Svelte',
							description: 'Cybernetically enhanced web apps',
							favicon: 'https://svelte.dev/favicon.png'
						}}
						target="blank"
					></Link>
					<Link
						type="preview"
						href="https://svelte.dev/"
						previewSize="lg"
						previewData={{
							image: 'https://svelte.dev/images/twitter-thumbnail.jpg',
							title: 'Svelte',
							description: 'Cybernetically enhanced web apps',
							favicon: 'https://svelte.dev/favicon.png'
						}}
						target="blank"
					></Link>
				</section>
				<section>
					<Title level={4}>Link Preview Orientation</Title>
					<div class="flex flex-row flex-wrap gap-4">
						<Link
							type="preview"
							href="https://svelte.dev/"
							previewSize="xs"
							orientation="vertical"
							previewData={{
								image: 'https://svelte.dev/images/twitter-thumbnail.jpg',
								title: 'Svelte',
								description: 'Cybernetically enhanced web apps',
								favicon: 'https://svelte.dev/favicon.png'
							}}
							target="blank"
						></Link>
						<Link
							type="preview"
							href="https://svelte.dev/"
							previewSize="sm"
							orientation="vertical"
							previewData={{
								image: 'https://svelte.dev/images/twitter-thumbnail.jpg',
								title: 'Svelte',
								description: 'Cybernetically enhanced web apps',
								favicon: 'https://svelte.dev/favicon.png'
							}}
							target="blank"
						></Link>
						<Link
							type="preview"
							href="https://svelte.dev/"
							previewSize="md"
							orientation="vertical"
							previewData={{
								image: 'https://svelte.dev/images/twitter-thumbnail.jpg',
								title: 'Svelte',
								description: 'Cybernetically enhanced web apps',
								favicon: 'https://svelte.dev/favicon.png'
							}}
							target="blank"
						></Link>
						<Link
							type="preview"
							href="https://svelte.dev/"
							previewSize="lg"
							orientation="vertical"
							previewData={{
								image: 'https://svelte.dev/images/twitter-thumbnail.jpg',
								title: 'Svelte',
								description: 'Cybernetically enhanced web apps',
								favicon: 'https://svelte.dev/favicon.png'
							}}
							target="blank"
						></Link>
					</div>
				</section>
			</section>
			<section>
				<div></div>
			</section>
		</article>
	</main>
</div>
