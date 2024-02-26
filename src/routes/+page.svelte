<script>
	import Avatar from '$lib/app/Components/Avatar/Avatar.svelte';
	import AvatarGroup from '$lib/app/Components/AvatarGroup/AvatarGroup.svelte';
	import Button from '$lib/app/Components/Button/Button.svelte';
	import ButtonGroup from '$lib/app/Components/ButtonGroup/ButtonGroup.svelte';
	import Card from '$lib/app/Components/Card/Card.svelte';
	import Title from '$lib/app/Components/Title/Title.svelte';
	import Divider from '$lib/app/Divider/Divider.svelte';
	import Badge from '$lib/app/Components/Badge/Badge.svelte';
	import '../lib/app/styles/main.css';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<section>
	<div>
		<Button colors={'primary'} variant={'shadows'} className=""><p>Button</p></Button>
		<Button colors={'secondary'} variant={'shadows'} className=""><p>Button</p></Button>
		<Button colors={'tertiary'} variant={'shadows'} className=""><p>Button</p></Button>
		<Button colors={'error'} variant={'shadows'} className=""><p>Button</p></Button>
		<Button colors={'success'} variant={'shadows'} className=""><p>Button</p></Button>
		<Button colors={'warning'} variant={'shadows'} className=""><p>Button</p></Button>
		<Button colors={'info'} variant={'shadows'} className="rounded-lg"><p>Button</p></Button>
	</div>
	<div>
		<Button colors={'primary'} variant={'neon'} className=""><p>Button</p></Button>
		<Button colors={'secondary'} variant={'neon'} className=""><p>Button</p></Button>
		<Button colors={'tertiary'} variant={'neon'} className=""><p>Button</p></Button>
		<Button colors={'error'} variant={'neon'} className=""><p>Button</p></Button>
		<Button colors={'success'} variant={'neon'} className=""><p>Button</p></Button>
		<Button colors={'warning'} variant={'neon'} className=""><p>Button</p></Button>
		<Button colors={'info'} variant={'neon'} className="rounded-lg"><p>Button</p></Button>
	</div>
	<div>
		<Button colors={'primary'} variant={'solid'} className=""><p>Button</p></Button>
		<Button colors={'secondary'} variant={'solid'} className=""><p>Button</p></Button>
		<Button colors={'tertiary'} variant={'solid'} className=""><p>Button</p></Button>
		<Button colors={'error'} variant={'solid'} className=""><p>Button</p></Button>
		<Button colors={'success'} variant={'solid'} className=""><p>Button</p></Button>
		<Button colors={'warning'} variant={'solid'} className=""><p>Button</p></Button>
		<Button colors={'info'} variant={'solid'} className="rounded-lg"><p>Button</p></Button>
	</div>
	<div>
		<Button colors={'primary'} variant={'light'} className=""><p>Button</p></Button>
		<Button colors={'secondary'} variant={'light'} className=""><p>Button</p></Button>
		<Button colors={'tertiary'} variant={'light'} className=""><p>Button</p></Button>
		<Button colors={'error'} variant={'light'} className=""><p>Button</p></Button>
		<Button colors={'success'} variant={'light'} className=""><p>Button</p></Button>
		<Button colors={'warning'} variant={'light'} className=""><p>Button</p></Button>
		<Button colors={'info'} variant={'light'} className="rounded-lg"><p>Button</p></Button>
	</div>
	<div>
		<Button colors={'primary'} variant={'bordered'} className=""><p>Button</p></Button>
		<Button colors={'secondary'} variant={'bordered'} className=""><p>Button</p></Button>
		<Button colors={'tertiary'} variant={'bordered'} className=""><p>Button</p></Button>
		<Button colors={'error'} variant={'bordered'} className=""><p>Button</p></Button>
		<Button colors={'success'} variant={'bordered'} className=""><p>Button</p></Button>
		<Button colors={'warning'} variant={'bordered'} className=""><p>Button</p></Button>
		<Button colors={'info'} variant={'bordered'} className="rounded-lg"><p>Button</p></Button>
	</div>
	<div>
		<Button colors={'primary'} variant={'ghost'} className=""><p>Button</p></Button>
		<Button colors={'secondary'} variant={'ghost'} className=""><p>Button</p></Button>
		<Button colors={'tertiary'} variant={'ghost'} className=""><p>Button</p></Button>
		<Button colors={'error'} variant={'ghost'} className=""><p>Button</p></Button>
		<Button colors={'success'} variant={'ghost'} className=""><p>Button</p></Button>
		<Button colors={'warning'} variant={'ghost'} className=""><p>Button</p></Button>
		<Button colors={'info'} variant={'ghost'} className="rounded-lg"><p>Button</p></Button>
	</div>
	<div>
		<Button disabled colors={'primary'} variant={'flat'} className=""><p>Button</p></Button>
		<Button colors={'secondary'} variant={'flat'} className=""><p>Button</p></Button>
		<Button colors={'tertiary'} variant={'flat'} className=""><p>Button</p></Button>
		<Button colors={'error'} variant={'flat'} className=""><p>Button</p></Button>
		<Button colors={'success'} variant={'flat'} className=""><p>Button</p></Button>
		<Button colors={'warning'} variant={'flat'} className=""><p>Button</p></Button>
		<Button colors={'info'} variant={'flat'} className="rounded-lg"><p>Button</p></Button>
	</div>
	<div>
		<Button colors={'primary'} variant={'faded'} className=""><p>Button</p></Button>
		<Button colors={'secondary'} variant={'faded'} className=""><p>Button</p></Button>
		<Button colors={'tertiary'} variant={'faded'} className=""><p>Button</p></Button>
		<Button colors={'error'} variant={'faded'} className=""><p>Button</p></Button>
		<Button colors={'success'} variant={'faded'} className=""><p>Button</p></Button>
		<Button colors={'warning'} variant={'faded'} className=""><p>Button</p></Button>
		<Button colors={'info'} variant={'faded'} className="rounded-lg"><p>Button</p></Button>
	</div>
	<div>
		<ButtonGroup>
			<Button disabled={true}>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</ButtonGroup>
	</div>
	<div>
		<ButtonGroup disabled={true}>
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</ButtonGroup>
	</div>
	<div>
		<Avatar
			avatarBordered
			colors={'error'}
			avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-isabelle.7bf2a8f2.aead314d58b63e27.png'}
		></Avatar>
		<Avatar
			avatarBordered
			colors={'tertiary'}
			avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-porter.7e18061d.png'}
		></Avatar>
		<Avatar
			avatarBordered
			colors={'tertiary'}
			className={'rounded-xl '}
			avatarSrc={'https://play.nintendo.com/images/profile-kirby-kirby.7bf2a8f2.png'}
		></Avatar>
		<Avatar
			avatarBordered
			colors={'info'}
			disabled
			className={'rounded-md '}
			avatarSrc={'https://play.nintendo.com/images/profile-kirby-metaknight.7bf2a8f2.png'}
		></Avatar>
	</div>
	<div class="avatar-group">
		<AvatarGroup maxAvatarsToShow={3}>
			<Avatar
				avatarBordered
				colors={'success'}
				avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-isabelle.7bf2a8f2.aead314d58b63e27.png'}
			></Avatar>
			<Avatar
				avatarBordered
				colors={'warning'}
				avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-porter.7e18061d.png'}
			></Avatar>
			<Avatar
				avatarBordered
				colors={'warning'}
				avatarSrc={'https://play.nintendo.com/images/profile-kirby-kirby.7bf2a8f2.png'}
			></Avatar>
			<Avatar
				avatarBordered
				colors={'info'}
				avatarSrc={'https://play.nintendo.com/images/profile-kirby-metaknight.7bf2a8f2.png'}
			></Avatar>
		</AvatarGroup>
	</div>
</section>
<Title level={1} className="ml-4">Cards</Title>
<Divider className="my-4" size={1} color={'rgb(var(--primary-10))'}></Divider>
<div>
	<Card
		className="m-4 tertiary rounded-2xl tertiary border-none overflow-hidden flat"
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
		className="m-4 tertiary rounded-2xl tertiary flat border-none"
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
		className={'flat tertiary rounded-2xl'}
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
		className=" relative"
		footerProps={{
			className:
				'absolute bottom-4 right-2 p-2 rounded-xl blured flex row items-center gap-2 border-none'
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
			<Button className="blured font-semibold">Ver Mas</Button>
		</svelte:fragment>
	</Card>
</div>
<Title className={'ml-4'} level={2}>Card Variants</Title>
<Divider className="my-4" size={1} color={'rgb(var(--primary-10))'}></Divider>
<div>
	<Button className="p-0 rounded-xl">
		<Card className={'p-4 primary flat'}>This is a Card inside of a button</Card>
	</Button>
</div>
<div></div>
<Title className="ml-4" level={3}>Card Backface</Title>
<Divider className="my-4" size={1} color={'rgb(var(--primary-10))'}></Divider>

<Title className="ml-4" level={3}>Badge</Title>
<Divider className="my-4" size={1} color={'rgb(var(--primary-10))'}></Divider>
<div>
	<Badge positionBadge={'bottomleft'} className="info faded rounded-full size-5 text-xs">
		<Button className="my-2 rounded-md">Holi</Button>
		<svelte:fragment slot="contentBadge">
			<span>2</span>
		</svelte:fragment>
	</Badge>
</div>

<style>
	div {
		margin: 0 10px;
		display: flex;
		gap: 1rem;
	}
	.avatar-group {
		margin-bottom: 3rem;
		margin-left: 2rem;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
