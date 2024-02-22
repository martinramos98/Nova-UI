<script>
	import Avatar from '$lib/app/Components/Avatar/Avatar.svelte';
	import AvatarGroup from '$lib/app/Components/AvatarGroup/AvatarGroup.svelte';
	import Button from '$lib/app/Components/Button/Button.svelte';
	import ButtonGroup from '$lib/app/Components/ButtonGroup/ButtonGroup.svelte';
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
		<AvatarGroup>
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

<style>
	p {
		font-size: 1.25rem;
	}
	div {
		margin: 0 10px;
		display: flex;
		gap: 1rem;
	}
	.avatar-group {
		margin-bottom: 3rem;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
