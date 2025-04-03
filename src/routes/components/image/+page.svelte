<script>
	import { Image } from '@nv-org/image';
	import { Title } from '@nv-org/title';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import { Divider } from '@nv-org/divider';
	import ImageAspectCases from '../../../app/components/pagesSections/images/imageAspectCases/ImageAspectCases.svelte';
	import ImageCaptionCases from '../../../app/components/pagesSections/images/imageCaptionCases/ImageCaptionCases.svelte';
</script>

<div class=" page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#image', text: 'Image' },
			{ ref: '#aspects', text: 'Aspects' },
			{ ref: '#sizes', text: 'Sizes' },
			{ ref: '#loader-error', text: 'Loader and Error' },
			{ ref: '#captions', text: 'Captions' },
			{ ref: '#properties', text: 'Properties' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
	<main>
		<article>
			<header>
				<Title>Image</Title>
			</header>
			<section>
				<div>
					<Image
						alt="Buenos Aires"
						width="400px"
						src="https://r4.wallpaperflare.com/wallpaper/239/42/323/obelisk-street-cityscape-traffic-wallpaper-f980083d217a7dfb4617c80fb07166fd.jpg"
					></Image>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Aspects</Title>
			</header>
			<ImageAspectCases />
		</article>
		<article>
			<header>
				<Title level={2}>Sizes</Title>
			</header>
			<section>
				<div>
					<Image
						alt="Buenos Aires"
						classContainer={'size-48'}
						class="object-cover"
						src="https://wallpapers.com/images/hd/buenos-aires-aerial-puerto-madero-iawmwi6htqrot4u7.jpg"
					></Image>
					<Image
						alt="Buenos Aires"
						classContainer={'max-w-[400px] h-[200px]'}
						src="https://wallpapers.com/images/hd/buenos-aires-aerial-puerto-madero-iawmwi6htqrot4u7.jpg"
					></Image>
					<Image
						alt="Buenos Aires"
						height="300px"
						width="400px"
						src="https://wallpapers.com/images/hd/buenos-aires-aerial-puerto-madero-iawmwi6htqrot4u7.jpg"
					></Image>
					<Image
						alt="Buenos Aires"
						classContainer={'h-[300px] w-[70%]'}
						aspect="auto"
						src="https://r4.wallpaperflare.com/wallpaper/380/816/944/architecture-landmark-argentine-national-congress-argentina-wallpaper-8910088d410aed2bd667a86f107196bd.jpg"
					></Image>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Loader and Error</Title>
			</header>
			<section>
				<header>
					<Title level={3}>Loader</Title>
					<Image
						alt="Buenos Aires"
						classContainer={'h-[300px] w-[70%] bg-[var(--surface-low)]'}
						aspect="auto"
						src="https://r4.wallpaperflare.com/wallpaper/380/816/944/architecture-landmark-argentine-.jpg"
					/>
				</header>
				<div></div>
			</section>
			<section>
				<header>
					<Title level={3}>Error</Title>
				</header>
				<div></div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Captions</Title>
			</header>
			<ImageCaptionCases />
		</article>
	</main>
</div>
