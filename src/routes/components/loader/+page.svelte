<script>
	import { Title } from '@nova/title';
	import { Loader } from '@nova/loader';
	import { Link } from '@nova/link';
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
				<p>
					Loader components uses the library
					<Link className="inline" href="https://uiball.com/ldrs/">ldrs</Link> wrapped for loaders.
				</p>
				<div class="w-full">
					<Loader />
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Types</Title>
			</header>
			<section>
				<p>
					These are a few loaders that the library provides, you can see a full list of them on the
					link provided above.
				</p>
				<Title level={3}>Spinner</Title>
				<div class="w-full">
					<Loader icon="ring" speed={1.8} />
					<Loader icon="tailspin" />
					<Loader icon="line-spinner" />
					<Loader icon="dot-spinner" />
				</div>
			</section>
			<section>
				<Title level={3}>Dotted</Title>
				<div class="w-full">
					<Loader icon="dot-wave" speed={1.2} />
					<Loader icon="dot-pulse" speed={1.2} />
					<Loader icon="dot-stream" speed={1.2} />
				</div>
			</section>
			<section>
				<Title level={3}>Others</Title>
				<div class="w-full">
					<Loader icon="hourglass" speed={1.5} />
					<Loader icon="grid" speed={1.5} />
					<Loader icon="pulsar" speed={1.5} />
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Props</Title>
			</header>
			<section>
				<Title level={3}>Speed</Title>
				<div class="w-full">
					<Loader speed={0.5} />
					<Loader speed={0.8} />
					<Loader speed={1} />
					<Loader speed={1.5} />
					<Loader speed={2} />
				</div>
			</section>
			<section>
				<Title level={3}>Size</Title>
				<div class="w-full">
					<Loader size={30} />
					<Loader size={40} />
					<Loader size={45} />
					<Loader size={50} />
					<Loader size={55} />
				</div>
			</section>
			<section>
				<Title level={3}>Color</Title>
				<div class="w-full">
					<Loader color="var(--info-40)" />
					<Loader --color-container={'var(--error-30)'} color={'var(--color-container)'} />
					<Loader color={'var(--color-pink-300)'} />
					<Loader color={'white'} />
				</div>
			</section>
			<section>
				<Title level={3}>Stroke</Title>
				<div class="w-full">
					<Loader stroke={2} />
					<Loader stroke={5} />
					<Loader stroke={7} />
				</div>
			</section>
			<section>
				<Title level={3}>Stroke Length</Title>
				<div class="w-full">
					<Loader strokeLength={0.1} />
					<Loader strokeLength={0.25} />
					<Loader strokeLength={0.5} />
					<Loader strokeLength={0.8} />
				</div>
			</section>
			<section>
				<Title level={3}>Background Opacity</Title>
				<div class="w-full">
					<Loader bgOpacity={0} />
					<Loader bgOpacity={0.1} />
					<Loader bgOpacity={0.2} />
					<Loader bgOpacity={0.3} />
				</div>
			</section>
		</article>
	</main>
</div>
