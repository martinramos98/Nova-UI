<script>
	import Image from '$lib/Components/Image/Image.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<div class="flex flex-row page-content">
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
						classNameContainer={'max-w-[400px]'}
						aspect="16:9"
						src="https://r4.wallpaperflare.com/wallpaper/856/590/514/night-lights-road-tower-wallpaper-734fc7670e0277e4667a6a3424ed9f1a.jpg"
					></Image>
					<Image
						alt="Buenos Aires"
						height="fit-content"
						classNameContainer={'max-w-[400px]'}
						aspect="3:4"
						src="https://r4.wallpaperflare.com/wallpaper/856/590/514/night-lights-road-tower-wallpaper-734fc7670e0277e4667a6a3424ed9f1a.jpg"
					></Image>
					<Image
						alt="Buenos Aires"
						height="fit-content"
						classNameContainer={'max-w-[400px]'}
						aspect="1:1"
						src="https://r4.wallpaperflare.com/wallpaper/856/590/514/night-lights-road-tower-wallpaper-734fc7670e0277e4667a6a3424ed9f1a.jpg"
					></Image>
					<Image
						alt="Buenos Aires"
						classNameContainer={'max-w-[400px]'}
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
						classNameContainer={'size-48'}
						className="object-cover"
						src="https://wallpapers.com/images/hd/buenos-aires-aerial-puerto-madero-iawmwi6htqrot4u7.jpg"
					></Image>
					<Image
						alt="Buenos Aires"
						classNameContainer={'max-w-[400px] h-[200px]'}
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
						classNameContainer={'h-[300px] w-[70%]'}
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
					classNameContainer={'h-[300px] w-[70%] bg-[var(--surface-low)]'}
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
						className="object-cover"
						classNameContainer="max-w-[500px]"
						src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Salta.jpg"
						classNameCaption="bg-black/70 text-white py-0.5"
						captionInside
					>
						<svelte:fragment slot="caption-content"
							>Figure 1: Montañas de Colores de Salta</svelte:fragment
						>
					</Image>
					<Image
						className="object-cover"
						classNameContainer="max-w-[500px]"
						alt="Cataratas del Iguazu, Misiones"
						classNameCaption="bg-black/70 text-white py-0.5"
						captionInside
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cataratas.jpg/1200px-Cataratas.jpg"
					>
						<svelte:fragment slot="caption-content"
							>Figure 2: Cataratas del Iguazu Misiones</svelte:fragment
						>
					</Image>
					<Image
						classNameContainer="max-w-[500px]"
						classNameCaption="ui-color-primary ui-variant-solid rounded-none py-0.5 italic"
						alt="Salta"
						src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/80000/80287-Salta.jpg"
					>
						<svelte:fragment slot="caption-content">Figure 3: Salinas de Salta</svelte:fragment>
					</Image>
					<Image
						classNameContainer="max-w-[500px]"
						classNameCaption="ui-color-primary ui-variant-solid rounded-none py-0.5 italic"
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

<style>
	.page-content {
		& > main {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			& > article {
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 70%;
				background-color: var(--color-surface-low);
				padding: var(--spacing-2) var(--spacing-6) var(--spacing-6) var(--spacing-6);
				border-radius: var(--radius-xl);
				gap: var(--spacing-4);
				margin: var(--spacing-6) 0;
				& > section {
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
					& > div {
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
		}
		& > aside {
			& > span {
				width: max-content;
				display: block;
			}
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
	}
</style>
