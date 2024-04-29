<script>
	import Title from '$lib/Components/Title/Title.svelte';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import Image from '$lib/Components/Image/Image.svelte';
</script>

<svelte:head>
	<title>Nova UI</title>
	<meta name="description" content="Nova UI is a Component UI library for Svelte JS." />
</svelte:head>

<section>
	<Title level={2} className="pl-8">Images</Title>
	<Divider size={1} color={'var(--color-container)'} />
	<div class="flex-row flex-wrap">
		<Image
			height={'16rem'}
			width={'32rem'}
			alt={'Salta'}
			src={'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Salta.jpg'}
		/>
		<Image
			height={'16rem'}
			width={'32rem'}
			alt={'Salta'}
			src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cataratas.jpg/1200px-Cataratas.jpg'}
		/>
		<Image
			height={'16rem'}
			width={'32rem'}
			alt={'Salta'}
			src={'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/80000/80287-Salta.jpg'}
		/>
		<Image
			height={'16rem'}
			width={'32rem'}
			alt={'Salta'}
			classNameCaption="ui-color-primary ui-variant-solid rounded-none py-0.5 italic"
			src={'https://www.tangol.com/blog/Fotos/Notas/historia-de-las-ruinas-jesuiticas-de-san-ignacio_443_202107221201440.PNG'}
		>
			<svelte:fragment slot="caption-content"
				>Figure 2: Ruinas de San Ignacio, Misiones</svelte:fragment
			>
		</Image>
		<Image
			height={'16rem'}
			width={'32rem'}
			alt={'Salta'}
			classNameCaption="bg-black/70 text-white py-0.5"
			captionInside
			src={'https://blogskystorage.s3.amazonaws.com/2021/12/que-hacer-en-mendoza.jpeg'}
		>
			<svelte:fragment slot="caption-content">Figure 1: Mendoza</svelte:fragment>
		</Image>
		<Image
			height={'16rem'}
			width={'32rem'}
			alt={'Salta'}
			radius={'lg'}
			src={'https://www.argentina.gob.ar/sites/default/files/2020/06/provincia-mendoza-jumbotron.jpg'}
		/>
	</div>
</section>

<style>
	section {
		margin: 15px 0;
	}
	div {
		margin: 20px 30px;
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
	.nav-item {
		margin: 7px;
	}
</style>
