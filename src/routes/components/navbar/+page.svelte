<script>
	import Navbar from '$lib/Components/Navbar/Navbar.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Avatar from '$lib/Components/Avatar/Avatar.svelte';
	import MenuButton from '$lib/Components/MenuButton/MenuButton.svelte';
	import Chip from '$lib/Components/Chip/Chip.svelte';
	import Tooltip from '$lib/Components/Tooltip/Tooltip.svelte';
	import Popover from '$lib/Components/Popover/Popover.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Alert from '$lib/Components/Alert/Alert.svelte';
	let openAlert = false;
	const toggleAlert = () => {
		openAlert = !openAlert;
	};
</script>

<div class="container-1">
	<Navbar
		variant={'none'}
		className={'flex flex-row bg-neutral-800 items-center'}
		direction={'horizontal'}
		withMenu={false}
	>
		<img class="size-8 mr-2" src="/bank.svg" alt="" />
		<p class="font-semibold">Bank UI</p>
		<ul class="flex gap-2 ml-2">
			<li>
				<Button withClickEffect={false} className="font-semibold" colors={'info'} variant={'light'}
					>Eccommerce</Button
				>
			</li>
			<li class="hidden md:block"><Button colors="primary" variant={'light'}>News</Button></li>
			<li class="hidden md:block">
				<Button colors="primary" variant={'light'}>About</Button>
			</li>
		</ul>
		<Avatar
			avatarBordered
			colors={'secondary'}
			className="size-10 bg-zinc-700 m-1 p-0.5 ml-auto shadow-xl"
		></Avatar>
	</Navbar>
	<div>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequatur incidunt tenetur,
		distinctio dignissimos eaque asperiores placeat quo quam vitae!
	</div>
</div>
<div class="container-1">
	<Navbar className="rounded-3xl" direction={'horizontal'} withMenu={true}>
		<div slot="start-content">
			<img class="size-8 inline-block" src="/bank.svg" alt="" />
			<p class="font-semibold inline align-middle">Bank UI</p>
		</div>
		<div slot="center-content">
			<ul class="flex gap-8">
				<li>
					<Button
						withClickEffect={false}
						className="font-semibold"
						colors={'info'}
						variant={'light'}>Eccommerce</Button
					>
				</li>
				<li><Button colors="primary" variant={'light'}>News</Button></li>
				<li><Button colors="primary" variant={'light'}>About</Button></li>
			</ul>
		</div>
		<div slot="end-content">
			<Avatar
				avatarBordered
				colors={'secondary'}
				className="size-10 bg-zinc-700 m-1 p-0.5 shadow-xl"
			></Avatar>
		</div>
	</Navbar>
	<div>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, dicta ipsam at voluptas
		consectetur harum, eum culpa dolor veritatis fugit recusandae, velit quis accusantium
		consequatur eius voluptate voluptatibus doloremque sequi non amet. Quidem eius debitis, vero
		labore eum qui eos nostrum? Quos consequuntur illo tempore facere delectus architecto eum,
		adipisci odit praesentium sunt perspiciatis autem omnis accusamus, modi repudiandae suscipit
		impedit dicta, excepturi exercitationem quaerat vero. Odit totam enim repellendus illo
		doloribus! Perspiciatis consequatur temporibus odit ipsa dignissimos aspernatur ipsam velit
		laudantium molestias eius adipisci voluptates impedit voluptatum cumque, aperiam nisi debitis
		mollitia obcaecati iusto eos fuga beatae voluptate!
	</div>
</div>
<div class="container-2">
	<Navbar
		--color-container={'var(--night-850)'}
		direction={'vertical'}
		radius={'2xl'}
		className="shrink-0"
		variant={'menu'}
		let:toggleMenu
	>
		<div>
			<MenuButton onClickMenu={toggleMenu} />
		</div>
		<div></div>
		<div class="flex flex-row items-end justify-center">
			<Avatar avatarName="Martin Ramos" className="size-10 bg-zinc-800 m-1 "></Avatar>
		</div>
	</Navbar>
	<div class="relative">
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequatur incidunt tenetur,
			distinctio dignissimos eaque asperiores placeat quo quam vitae!
		</p>
		<Tooltip
			position={'bottom'}
			colors={'primary'}
			className="rounded-2xl"
			content="holi from tooltip!"
		>
			<Chip className="w-fit rounded-2xl" colors={'info'} variant="shadows">Holi</Chip>
		</Tooltip>
		<Popover className="rounded-xl p-2" position="top" colors={'tertiary'} variant="faded">
			<Button variant="solid" colors="info">Click Me</Button>
			<svelte:fragment slot="content">
				<Title level={4}>Popover</Title>
				<p>Hello From Popover! 💕</p>
			</svelte:fragment>
		</Popover>
		<Button onClick={toggleAlert} colors="error" variant="solid">Alert!</Button>
		<Alert
			open={openAlert}
			onClose={() => {
				openAlert = false;
			}}
		>
			<Title level={4}>Alert!!!!</Title>
			<p>This is an alert description. Please pay attention.</p>
		</Alert>
	</div>
</div>

<div class="container-2">
	<Navbar
		menuProps={{
			position: 'start',
			contentOnMenu: { startContent: false, centerContent: true, endContent: false }
		}}
		className="rounded-3xl shrink-0 px-1"
		direction={'vertical'}
		colors={'container-hight'}
		withMenu={true}
	>
		<svelte:fragment slot="start-content">
			<img class="size-8 inline-block justify-self-center" src="/bank.svg" alt="" />
		</svelte:fragment>
		<ul class="flex flex-col gap-8 justify-center" slot="center-content">
			<li>
				<Button withClickEffect={false} className="font-semibold" colors={'info'} variant={'light'}
					>Eccommerce</Button
				>
			</li>
			<li><Button colors="primary" variant={'light'}>News</Button></li>
			<li><Button colors="primary" variant={'light'}>About</Button></li>
		</ul>
		<div class="flex flex-row items-end justify-center" slot="end-content">
			<Avatar
				avatarBordered
				colors={'secondary'}
				className="size-10 bg-zinc-700 m-1 p-0.5 shadow-xl"
			></Avatar>
		</div>
	</Navbar>
	<div>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, dicta ipsam at voluptas
		consectetur harum, eum culpa dolor veritatis fugit recusandae, velit quis accusantium
		consequatur eius voluptate voluptatibus doloremque sequi non amet. Quidem eius debitis, vero
		labore eum qui eos nostrum? Quos consequuntur illo tempore facere delectus architecto eum,
		adipisci odit praesentium sunt perspiciatis autem omnis accusamus, modi repudiandae suscipit
		impedit dicta, excepturi exercitationem quaerat vero. Odit totam enim repellendus illo
		doloribus! Perspiciatis consequatur temporibus odit ipsa dignissimos aspernatur ipsam velit
		laudantium molestias eius adipisci voluptates impedit voluptatum cumque, aperiam nisi debitis
		mollitia obcaecati iusto eos fuga beatae voluptate!
	</div>
</div>

<style>
	.container-1 {
		width: 80%;
		margin: 40px;
		& > div {
			margin-top: 20px;
		}
	}
	.container-2 {
		width: 90%;
		height: 600px;
		margin: 40px;
		display: flex;
		gap: 2rem;
		flex-direction: row;
	}
	:global(.ui-container-navbar) {
		@container (width <= 565px) {
			.ui-navbar-end-container {
				position: absolute;
				top: 0;
				right: 0;
			}
		}
	}
</style>
