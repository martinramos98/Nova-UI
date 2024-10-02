<script>
	import { Navbar } from '@nv-org/navbar';
	import { Button, MenuButton, CloseButton } from '@nv-org/button';
	import { Avatar } from '@nv-org/avatar';
	import { Title } from '@nv-org/title';
	import { Divider } from '@nv-org/divider';
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#navbar">Navbar</a></li>
			<li><a href="#orientation">Orientation</a></li>
			<li><a href="#variants">Variants</a></li>
			<li><a href="#container_query">Usage with Container Media Query</a></li>
			<li><a href="#customs"></a>Customs</li>
		</ul>
	</aside>
	<main>
		<article>
			<header><Title>Navbar</Title></header>
			<section>
				<div class="container-1">
					<Navbar
						variant={'none'}
						class={'flex flex-row  items-center'}
						direction={'horizontal'}
						withMenu={false}
					>
						<img class="size-8 mr-2" src="/bank.svg" alt="" />
						<p class="font-semibold">Bank UI</p>
						<ul class="flex gap-2 ml-2">
							<li>
								<Button
									withClickEffect={false}
									class="font-semibold"
									colors={'info'}
									variant={'light'}>Premium</Button
								>
							</li>
							<li class="hidden md:block">
								<Button colors="primary" variant={'light'}>Account</Button>
							</li>
							<li class="hidden md:block">
								<Button colors="primary" variant={'light'}>Loans</Button>
							</li>
						</ul>
						<Avatar
							avatarBordered
							colors={'secondary'}
							class="size-10 bg-zinc-700 m-1 p-0.5 ml-auto shadow-xl"
						></Avatar>
					</Navbar>
					<div>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequatur incidunt
						tenetur, distinctio dignissimos eaque asperiores placeat quo quam vitae!
					</div>
				</div>
			</section>
		</article>
		<article id="orientation">
			<header>
				<Title level={2}>Orientation</Title>
			</header>
			<section>
				<Title level={3}>Horizontal</Title>
				<div class="container-1">
					<Navbar class="rounded-3xl" direction={'horizontal'} withMenu={true}>
						{#snippet startContent()}
							<div>
								<img class="size-8 inline-block" src="/bank.svg" alt="" />
								<p class="font-semibold inline align-middle">Bank UI</p>
							</div>
						{/snippet}
						{#snippet centerContent()}
							<div>
								<ul class="flex gap-8">
									<li>
										<Button
											withClickEffect={false}
											class="font-semibold"
											colors={'info'}
											variant={'light'}>Premium</Button
										>
									</li>
									<li><Button colors="primary" variant={'light'}>Account</Button></li>
									<li><Button colors="primary" variant={'light'}>Loans</Button></li>
								</ul>
							</div>
						{/snippet}
						{#snippet endContent()}
							<div>
								<Avatar
									avatarBordered
									colors={'secondary'}
									class="size-10 bg-zinc-700 m-1 p-0.5 shadow-xl"
								></Avatar>
							</div>
						{/snippet}
					</Navbar>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, dicta ipsam at
						voluptas consectetur harum, eum culpa dolor veritatis fugit recusandae, velit quis
						accusantium consequatur eius voluptate voluptatibus doloremque sequi non amet. Quidem
						eius debitis, vero labore eum qui eos nostrum? Quos consequuntur illo tempore facere
						delectus architecto eum, adipisci odit praesentium sunt perspiciatis autem omnis
						accusamus, modi repudiandae suscipit impedit dicta, excepturi exercitationem quaerat
						vero. Odit totam enim repellendus illo doloribus! Perspiciatis consequatur temporibus
						odit ipsa dignissimos aspernatur ipsam velit laudantium molestias eius adipisci
						voluptates impedit voluptatum cumque, aperiam nisi debitis mollitia obcaecati iusto eos
						fuga beatae voluptate!
					</div>
				</div>
			</section>
			<Divider size={1}></Divider>
			<section>
				<Title level={3}>Vertical</Title>
				<div class="container-2">
					<Navbar class="rounded-3xl shrink-0 px-1" direction={'vertical'} withMenu={true}>
						{#snippet startContent()}
							<img class="size-8 inline-block justify-self-center" src="/bank.svg" alt="" />
						{/snippet}
						{#snippet centerContent()}
							<ul class="flex flex-col gap-8 justify-center">
								<li>
									<Button
										withClickEffect={false}
										class="font-semibold"
										colors={'info'}
										variant={'light'}>Premium</Button
									>
								</li>
								<li><Button colors="primary" variant={'light'}>Loans</Button></li>
								<li><Button colors="primary" variant={'light'}>Accounts</Button></li>
							</ul>
						{/snippet}
						{#snippet endContent()}
							<div class="flex flex-row items-end justify-center">
								<Avatar
									avatarBordered
									colors={'secondary'}
									class="size-10 bg-zinc-700 m-1 p-0.5 shadow-xl"
								></Avatar>
							</div>
						{/snippet}
					</Navbar>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, dicta ipsam at
						voluptas consectetur harum, eum culpa dolor veritatis fugit recusandae, velit quis
						accusantium consequatur eius voluptate voluptatibus doloremque sequi non amet. Quidem
						eius debitis, vero labore eum qui eos nostrum? Quos consequuntur illo tempore facere
						delectus architecto eum, adipisci odit praesentium sunt perspiciatis autem omnis
						accusamus, modi repudiandae suscipit impedit dicta, excepturi exercitationem quaerat
						vero. Odit totam enim repellendus illo doloribus! Perspiciatis consequatur temporibus
						odit ipsa dignissimos aspernatur ipsam velit laudantium molestias eius adipisci
						voluptates impedit voluptatum cumque, aperiam nisi debitis mollitia obcaecati iusto eos
						fuga beatae voluptate!
					</div>
				</div>
			</section>
		</article>
		<article id="variants">
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<Title level={3}>Default with 3 Sections</Title>
				<Navbar class="rounded-3xl shrink-0 px-6" direction={'horizontal'}>
					{#snippet startContent()}
						<img class="size-8 inline-block justify-self-center" src="/bank.svg" alt="" />
					{/snippet}
					{#snippet centerContent()}
						<ul class="flex flex-row gap-8 justify-center">
							<li>
								<Button
									withClickEffect={false}
									class="font-semibold"
									colors={'info'}
									variant={'light'}>Premium</Button
								>
							</li>
							<li><Button colors="primary" variant={'light'}>Account</Button></li>
							<li><Button colors="primary" variant={'light'}>Loans</Button></li>
						</ul>
					{/snippet}
					{#snippet endContent()}
						<div class="flex flex-row items-end justify-center">
							<Avatar
								avatarBordered
								colors={'secondary'}
								class="size-10 bg-zinc-700 m-1 p-0.5 shadow-xl"
							></Avatar>
						</div>
					{/snippet}
				</Navbar>
			</section>
			<section>
				<Title level={3}>Menu</Title>

				<Navbar direction={'horizontal'} class="shrink-0 rounded-xl px-2" variant={'menu'}>
					{#snippet children(toggleMenu)}
						<div>
							<MenuButton onClickMenu={toggleMenu} />
						</div>
						<div class="flex flex-row items-end justify-center">
							<Avatar
								avatarName="Martin Ramos"
								colors={'secondary'}
								class="size-10 bg-zinc-800 m-1 "
							></Avatar>
						</div>
					{/snippet}
					{#snippet menuContent(toggleMenu)}
						<CloseButton onClose={toggleMenu} colors="container-low"></CloseButton>
					{/snippet}
				</Navbar>
			</section>
			<section>
				<Title level={3}>Custom Children</Title>
				<Navbar
					variant={'none'}
					class={'flex flex-row  items-center'}
					direction={'horizontal'}
					withMenu={false}
				>
					<img class="size-8 mr-2" src="/bank.svg" alt="" />
					<ul class="flex gap-2 justify-end w-full mr-2">
						<li class="hidden md:block">
							<Button colors="primary" variant={'light'}>Account</Button>
						</li>
						<li class="hidden md:block">
							<Button colors="primary" variant={'light'}>Loans</Button>
						</li>
					</ul>
					<Avatar
						avatarBordered
						colors={'secondary'}
						class="size-10 bg-zinc-700 m-1 p-0.5 ml-auto shadow-xl"
					></Avatar>
				</Navbar>
			</section>
		</article>
		<article id="container_query">
			<header>
				<Title level={2}>Container Query</Title>
			</header>
			<section class="responsive-nav-container">
				<Navbar useContainerQuery={true} class="rounded-3xl shrink-0 " direction={'horizontal'}>
					{#snippet startContent()}
						<img class="size-8 inline-block justify-self-center" src="/bank.svg" alt="" />
					{/snippet}
					{#snippet centerContent()}
						<ul class="flex flex-row mid-content gap-8 justify-center">
							<li>
								<Button
									withClickEffect={false}
									class="font-semibold"
									colors={'info'}
									variant={'light'}>Premium</Button
								>
							</li>
							<li><Button colors="primary" variant={'light'}>Loans</Button></li>
							<li><Button colors="primary" variant={'light'}>Accounts</Button></li>
						</ul>
					{/snippet}
					{#snippet endContent()}
						<div class="flex flex-row items-end justify-center">
							<Avatar
								avatarBordered
								colors={'secondary'}
								class="size-10 bg-zinc-700 m-1 p-0.5 shadow-xl"
							></Avatar>
						</div>
					{/snippet}
				</Navbar>
			</section>
		</article>
		<!-- <article id="customs">
			<header>
				<Title>Customs</Title>
			</header>
			<section></section>
		</article> -->
	</main>
</div>

<style>
	@container (width <= 540px) {
		.mid-content {
			display: none;
		}
	}
	.responsive-nav-container {
		resize: horizontal;
		min-width: 200px;
		overflow: hidden;
		max-width: 100%;
	}
	.container-1 {
		width: 95%;
		& > div {
			margin-top: 20px;
		}
	}
	.container-2 {
		width: 95%;
		height: 600px;
		display: flex;
		gap: 2rem;
		align-items: flex-start;
		flex-wrap: nowrap;
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
