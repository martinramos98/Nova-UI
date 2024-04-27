<script>
	import Button from '$lib/Components/Button/Button.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import Avatar from '$lib/Components/Avatar/Avatar.svelte';
	import Badge from '$lib/Components/Badge/Badge.svelte';
	import Card from '$lib/Components/Card/Card.svelte';
	import Image from '$lib/Components/Image/Image.svelte';
	import Chip from '$lib/Components/Chip/Chip.svelte';
</script>

<svelte:head>
	<title>Nova UI</title>
	<meta name="description" content="Nova UI is a Component UI library for Svelte JS." />
</svelte:head>
<section>
	<Title level={2} className="pl-8">Cards</Title>
	<Divider size={1} color={'var(--color-container)'} />
	<div>
		<Card
			className="m-4 rounded-2xl ui-variant-flat ui-color-tertiary border-none overflow-hidden"
			headerProps={{ className: '' }}
		>
			<!-- <svelte:fragment slot="header">
		<div class="flex items-center p-2 gap-2">
			<Avatar
				avatarBordered
				colors={'info'}
				avatarSrc={'https://play.nintendo.com/images/profile-mk-mario.7bf2a8f2.png'}
			></Avatar>
			<p class=" font-bold text-2xl">It's me Mario!</p>
		</div>
	</svelte:fragment> -->
			<svelte:fragment slot="body">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-Yf_1xN7mKgHHii5H0sqCVoHWoIsQ3eKng&usqp=CAU"
					class="object-cover w-96"
				/>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<Divider size={1}></Divider>
				<p class="pl-4 pb-2 mt-1">By Nintendo</p>
			</svelte:fragment>
		</Card>
		<Card
			className="m-4 rounded-2xl ui-variant-flat ui-color-tertiary border-none"
			headerProps={{ className: '' }}
		>
			<svelte:fragment slot="body">
				<img
					src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a"
					class="object-cover w-96"
				/>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<Divider size={1}></Divider>
				<p class="pl-4 pb-2 mt-1">By Nintendo</p>
			</svelte:fragment>
		</Card>
		<Card
			className={'ui-variant-flat ui-color-tertiary rounded-2xl'}
			headerProps={{ className: 'text-gray-200 p-4 pl-4' }}
		>
			<svelte:fragment slot="header">
				<p class=" text-xl font-bold">Hotel Llao Llao</p>
				<p class="text-gray-300/80">Bariloche, Argentina</p>
			</svelte:fragment>
			<svelte:fragment slot="body">
				<img
					src="https://caminoalandar.net/wp-content/uploads/2020/09/img_9917.jpg"
					class="w-96 rounded-3xl p-4"
				/>
			</svelte:fragment>
			<svelte:fragment slot="footer"></svelte:fragment>
		</Card>
		<Card
			className="relative"
			footerProps={{
				className:
					'absolute bottom-4 right-2 p-2 rounded-xl ui-variant-blurred flex row items-center gap-2 border-none'
			}}
		>
			<svelte:fragment slot="body">
				<img
					src="https://img.nh-hotels.net/vJEy/1ZZdy/original/F_NH_gran-hotel-provincial_018.jpg?output-quality=80&resize=1600:*&background-color=white"
					class="w-96"
				/>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<p class="h-auto text-lg">NH Hotels</p>
				<Button className="font-semibold" variant={'blurred'}>Ver Mas</Button>
			</svelte:fragment>
		</Card>
	</div>
</section>

<section>
	<Title level={2} className="pl-8">Chip</Title>
	<Divider size={1} color={'var(--color-container)'} />
	<div>
		<Chip colors="primary" variant="solid">Solid</Chip>
		<Chip colors="primary" variant="bordered">Bordered</Chip>
		<Chip colors="primary" variant="faded">Faded</Chip>
		<Chip colors="primary" variant="flat">Flat</Chip>
		<Chip colors="primary" variant="neon">Neon</Chip>
		<Chip colors="primary" variant="shadows">Shadows</Chip>
		<Chip colors="primary" variant="ghost">Ghost</Chip>
		<Chip colors="primary" variant="light">Light</Chip>
	</div>
	<Title className="pl-8" level={4}>Chip Sizes</Title>
	<Divider className="my-4" size={1} color={'rgb(var(--primary-10))'}></Divider>
	<div>
		<Chip variant="faded" colors="primary">Faded Primary</Chip>
		<Chip variant="faded" size="md" colors="secondary">Mid Sizes</Chip>
		<Chip variant="faded" size="lg" colors="secondary">Big Sizes</Chip>
	</div>
	<Title className="pl-8" level={4}>Chip Colors</Title>
	<Divider className="my-4" size={1} color={'rgb(var(--primary-10))'}></Divider>
	<div>
		<Chip colors="primary" variant="solid">Primary</Chip>
		<Chip colors="secondary" variant="solid">Secondary</Chip>
		<Chip colors="tertiary" variant="solid">Tertiary</Chip>
		<Chip colors="error" variant="solid">Error</Chip>
		<Chip colors="success" variant="solid">Success</Chip>
		<Chip colors="warning" variant="solid">Warning</Chip>
		<Chip colors="info" variant="solid">Info</Chip>
	</div>
</section>

<section>
	<Title level={2} className="pl-8">Images</Title>
	<Divider size={1} color={'var(--color-container)'} />
	<div class="flex-row flex-wrap">
		<Image
			height={'16rem'}
			width={'32rem'}
			alt={'Salta'}
			radius={'lg'}
			src={'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Salta.jpg'}
		/>
		<Image
			height={'16rem'}
			width={'32rem'}
			alt={'Salta'}
			radius={'lg'}
			src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cataratas.jpg/1200px-Cataratas.jpg'}
		/>
		<Image
			height={'16rem'}
			width={'32rem'}
			alt={'Salta'}
			radius={'lg'}
			src={'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/80000/80287-Salta.jpg'}
		/>
		<Image
			height={'16rem'}
			width={'32rem'}
			alt={'Salta'}
			radius={'lg'}
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
			radius={'lg'}
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
