<script>
	import { Image } from '@nova/image';
	import { Title } from '@nova/title';
</script>

<div class=" page-content">
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
			<section>
				<div class=" place-content-center">
					<Image
						alt="Buenos Aires"
						height="fit-content"
						classContainer={'max-w-[400px]'}
						aspect="16:9"
						src="https://r4.wallpaperflare.com/wallpaper/856/590/514/night-lights-road-tower-wallpaper-734fc7670e0277e4667a6a3424ed9f1a.jpg"
					></Image>
					<Image
						alt="Buenos Aires"
						height="fit-content"
						classContainer={'max-w-[400px]'}
						aspect="3:4"
						src="https://r4.wallpaperflare.com/wallpaper/856/590/514/night-lights-road-tower-wallpaper-734fc7670e0277e4667a6a3424ed9f1a.jpg"
					></Image>
					<Image
						alt="Buenos Aires"
						height="fit-content"
						classContainer={'max-w-[400px]'}
						aspect="1:1"
						src="https://r4.wallpaperflare.com/wallpaper/856/590/514/night-lights-road-tower-wallpaper-734fc7670e0277e4667a6a3424ed9f1a.jpg"
					></Image>
					<Image
						alt="Buenos Aires"
						classContainer={'max-w-[400px]'}
						height="fit-content"
						aspect="auto"
						src="https://r4.wallpaperflare.com/wallpaper/856/590/514/night-lights-road-tower-wallpaper-734fc7670e0277e4667a6a3424ed9f1a.jpg"
					></Image>
				</div>
			</section>
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
				<Image
					alt="Buenos Aires"
					classContainer={'h-[300px] w-[70%] bg-[var(--surface-low)]'}
					aspect="auto"
					src="https://r4.wallpaperflare.com/wallpaper/380/816/944/architecture-landmark-argentine-.jpg"
				></Image>
			</header>
			<section>
				<div></div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Captions</Title>
			</header>
			<section>
				<div>
					<Image
						alt="Salta"
						class="object-cover"
						classContainer="max-w-[500px] min-h-[300px] min-w-[250px]"
						src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Salta.jpg"
						classCaption="bg-black/70 text-white py-0.5"
						captionInside
					>
						<svelte:fragment slot="caption-content"
							>Figure 1: Montañas de Colores de Salta</svelte:fragment
						>
					</Image>
					<Image
						class="object-cover"
						classContainer="max-w-[500px]"
						alt="Cataratas del Iguazu, Misiones"
						classCaption="bg-black/70 text-white py-0.5"
						captionInside
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cataratas.jpg/1200px-Cataratas.jpg"
					>
						<svelte:fragment slot="caption-content"
							>Figure 2: Cataratas del Iguazu Misiones</svelte:fragment
						>
					</Image>
					<Image
						classContainer="max-w-[500px]"
						classCaption="ui-color-primary ui-variant-solid rounded-none py-0.5 italic"
						alt="Salta"
						src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/80000/80287-Salta.jpg"
					>
						<svelte:fragment slot="caption-content">Figure 3: Salinas de Salta</svelte:fragment>
					</Image>
					<Image
						classContainer="max-w-[500px]"
						classCaption="ui-color-primary ui-variant-solid rounded-none py-0.5 italic"
						alt="Ruinas de San Ignacio"
						src="https://www.tangol.com/blog/Fotos/Notas/historia-de-las-ruinas-jesuiticas-de-san-ignacio_443_202107221201440.PNG"
					>
						<svelte:fragment slot="caption-content"
							>Figure 4: Ruinas de San Ignacio, Misiones</svelte:fragment
						>
					</Image>
				</div>
			</section>
		</article>
	</main>
</div>
