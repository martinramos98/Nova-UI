<script>
	import Title from '$lib/Components/Title/Title.svelte';
	import Loader from '$lib/Components/Loader/Loader.svelte';
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#image">Image</a></li>
			<li><a href="#disabled">Layout</a></li>
			<li><a href="#variants">Variants</a></li>
			<li><a href="#group">Use Case</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title>Loader</Title>
			</header>
			<section class="w-full">
				<div class="w-full">
					<Loader
						svgLoaderProps={{ class: 'size-12', 'stroke-width': 1 }}
						loaderVariant={'ring90'}
					/>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Types</Title>
			</header>
			<section>
				<Title level={3}>Circular</Title>
				<div class="w-full">
					<Loader
						svgLoaderProps={{ class: 'size-12', 'stroke-width': 3 }}
						colors="info"
						loaderVariant={'ringResize'}
					/>
					<Loader
						svgLoaderProps={{ class: 'size-12', 'stroke-width': 1 }}
						loaderVariant={'ring90'}
					/>
					<Loader
						svgLoaderProps={{ class: 'size-12' }}
						colors="warning"
						loaderVariant={'ring180'}
					/>
					<Loader
						svgLoaderProps={{ class: 'size-12' }}
						colors="success"
						loaderVariant={'ring270'}
					/>
				</div>
			</section>
			<section>
				<Title level={3}>Dotted</Title>
				<div class="w-full">
					<Loader
						svgLoaderProps={{ class: 'size-12', 'stroke-width': 3 }}
						colors="primary"
						type="dots"
						loaderVariant={'threeDotsBounce'}
					/>
					<Loader
						svgLoaderProps={{ class: 'size-12', 'stroke-width': 1 }}
						colors="primary"
						type="dots"
						loaderVariant={'threeDotsMove'}
					/>
					<Loader
						svgLoaderProps={{ class: 'size-12' }}
						colors="primary"
						type="dots"
						loaderVariant={'revolve'}
					/>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Label</Title>
			</header>
			<section>
				<div class="w-full">
					<Loader
						label="Loading"
						svgLoaderProps={{ class: 'size-12 rotate-180', 'stroke-width': 1 }}
						colors="primary"
						type="dots"
						loaderVariant={'threeDotsMove'}
					/>
					<Loader
						label="Commiting a loan"
						svgLoaderProps={{ class: 'size-12', 'stroke-width': 1 }}
						colors="primary"
						type="dots"
						loaderVariant={'threeDotsMove'}
					/>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Sizes</Title>
			</header>
			<section>
				<div class="w-full items-center">
					<Loader
						svgLoaderProps={{ class: 'size-8' }}
						colors="primary"
						type="dots"
						loaderVariant={'revolve'}
					/>
					<Loader
						svgLoaderProps={{ class: 'size-10' }}
						colors="primary"
						type="dots"
						loaderVariant={'revolve'}
					/>
					<Loader
						svgLoaderProps={{ class: 'size-12' }}
						colors="primary"
						type="dots"
						loaderVariant={'revolve'}
					/>
					<Loader
						svgLoaderProps={{ class: 'size-14' }}
						colors="primary"
						type="dots"
						loaderVariant={'revolve'}
					/>
					<Loader
						svgLoaderProps={{ class: 'size-16' }}
						colors="primary"
						type="dots"
						loaderVariant={'revolve'}
					/>
				</div>
			</section>
		</article>
	</main>
</div>
