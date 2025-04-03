<script>
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Image } from '@nv-org/image';
	import imageCaptionCases from './textCode.js';
</script>

<section>
	<div class="w-full">
		<ComponentCodeTabs code={imageCaptionCases()}>
			{#snippet component()}
				<div class="w-full flex flex-wrap justify-center gap-4">
					<Image
						alt="Salta"
						class="object-cover"
						classContainer="max-w-[500px] min-h-[300px] min-w-[250px]"
						src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Salta.jpg"
						classCaption="bg-black/70 text-white py-0.5"
						captionInside
					>
						{#snippet captionContent()}
							Figure 1: Montañas de Colores de Salta
						{/snippet}
					</Image>
					<Image
						class="object-cover"
						classContainer="max-w-[500px]"
						alt="Cataratas del Iguazu, Misiones"
						classCaption="bg-black/70 text-white py-0.5"
						captionInside
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cataratas.jpg/1200px-Cataratas.jpg"
					>
						{#snippet captionContent()}
							Figure 2: Cataratas del Iguazu Misiones
						{/snippet}
					</Image>
					<Image
						classContainer="max-w-[500px]"
						classCaption="ui-color-primary ui-variant-solid rounded-none py-0.5 italic"
						alt="Salta"
						src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/80000/80287-Salta.jpg"
					>
						{#snippet captionContent()}
							Figure 3: Salinas de Salta
						{/snippet}
					</Image>
					<Image
						classContainer="max-w-[500px]"
						classCaption="ui-color-primary ui-variant-solid rounded-none py-0.5 italic"
						alt="Ruinas de San Ignacio"
						src="https://www.tangol.com/blog/Fotos/Notas/historia-de-las-ruinas-jesuiticas-de-san-ignacio_443_202107221201440.PNG"
					>
						{#snippet captionContent()}
							Figure 4: Ruinas de San Ignacio, Misiones
						{/snippet}
					</Image>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
