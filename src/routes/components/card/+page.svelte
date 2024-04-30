<script>
	import Card from '$lib/Components/Card/Card.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import Image from '$lib/Components/Image/Image.svelte';
	import Avatar from '$lib/Components/Avatar/Avatar.svelte';
</script>

<div class="flex flex-row">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#card">Card</a></li>
			<li><a href="#disabled">Layout</a></li>
			<li><a href="#variants">Variants</a></li>
			<li><a href="#group">Use Case</a></li>
		</ul>
	</aside>
	<main>
		<article id="card">
			<header>
				<Title>Card</Title>
			</header>
			<section>
				<div>
					<Card variant="solid" color="container" className="p-2">This is a Simple Card</Card>
				</div>
			</section>
		</article>
		<article id="contents">
			<header>
				<Title level={2}>Contents</Title>
				<p>
					Cards are constrained with header, body, footer and default content. The default content
					is rendered within the body content
				</p>
			</header>
			<section>
				<div class="place-content-center">
					<div class="example-card-box">
						<Title level={3} className="text-lg">With Header, Body and Footer</Title>
						<Card
							footerClassname="p-2 text-end"
							variant={'solid'}
							color="container-hight"
							className="p-2 rounded-xl gap-2 w-[400px]"
							bodyClassname="flex flex-col items-center"
						>
							{#snippet header()}
								<Title level={4} className="text-lg text-center px-2">Animal Crossing</Title>
							{/snippet}
							{#snippet body()}
								<img
									class="w-[350px] h-[200px] object-cover rounded-xl"
									src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a"
								/>
								<p class="p-4">
									Animal Crossing is a beloved and critically acclaimed life simulation video game
									franchise developed by Nintendo. Known for its charming and tranquil gameplay, the
									series allows players to inhabit and customize their own idyllic village populated
									by anthropomorphic animals.
								</p>
							{/snippet}
							{#snippet footer()}
								<Button colors="info" variant="solid">
									<a href="https://animalcrossing.nintendo.com/es/">See more</a>
								</Button>
							{/snippet}
						</Card>
					</div>
					<div class="example-card-box">
						<Title level={3} className="text-lg">Header and Body</Title>
						<Card
							variant={'solid'}
							color="container-hight"
							className="rounded-xl w-[400px] h-fit "
							bodyClassname="p-4"
						>
							{#snippet header()}
								<img
									class="w-full"
									src="https://easycdn.es/1/imagenes/metroid-dread_347771.jpg"
									alt=""
								/>
							{/snippet}
							{#snippet body()}
								<p>
									The Metroid saga is a celebrated series of action-adventure video games developed
									by Nintendo, renowned for its immersive gameplay, atmospheric storytelling, and
									iconic protagonist, Samus Aran. Spanning several decades, the saga follows Samus
									as she battles against the Space Pirates and the parasitic Metroids across various
									planets in the galaxy.
								</p>
							{/snippet}
						</Card>
					</div>
					<div class="example-card-box">
						<Title level={3} className="text-lg">Body and Footer</Title>
						<Card className="w-[400px]" footerClassname="py-2 text-end bg-zinc-800 pr-4">
							{#snippet body()}
								<img
									src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/software/switch/70010000068688/1c5583f6bbce5bccdc923c25c35ba8f42128b55df84f4a2fbeea74b6d1d1516e"
									alt=""
								/>
								<Divider size={2} color="red"></Divider>
							{/snippet}
							{#snippet footer()}
								<span>By Nintendo</span>
							{/snippet}
						</Card>
					</div>
					<div class="example-card-box">
						<Title level={3} className="text-lg">Children Content</Title>
						<Card className="w-[400px] relative">
							<img
								src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/wii_24/SI_Wii_SuperMarioGalaxy2_image1600w.png"
								alt=""
							/>
							<span class="absolute right-2 bottom-2">
								<Button
									className="backdrop-blur-sm bg-zinc-500/50 rounded-lg border-zinc-400 border-1"
									>Let's Go!</Button
								>
							</span>
						</Card>
					</div>
				</div>
			</section>
		</article>
		<article id="layouts">
			<header>
				<Title level={2}>Layouts</Title>
			</header>
			<section>
				<div>
					<div class="example-card-box">
						<Title level={3} className="text-lg">Vertical</Title>
						<Card
							color="container"
							variant="solid"
							className="flex-col w-[300px] rounded-xl "
							bodyClassname="p-2"
							footerClassname="p-2 w-full flex flex-row gap-4"
						>
							{#snippet header()}
								<Image
									className="object-cover pb-2"
									src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/Nvidia-GeForce-RTX-4090-7-scaled.jpg"
									alt="Nvidia 4090 Image"
								/>
							{/snippet}
							{#snippet body()}
								<span class="block text-lg"><b>Nvidia RTX 4090 Videocard</b></span>
								<span class="block my-2">2000 U$D</span>
							{/snippet}
							{#snippet footer()}
								<Button colors="success" variant="solid" className="w-full rounded-lg">Buy</Button>
								<Button colors="success" variant="bordered" className="w-full rounded-lg"
									>Details</Button
								>
							{/snippet}
						</Card>
					</div>
					<div class="example-card-box">
						<Title level={3} className="text-lg">Horizontal</Title>
						<Card
							color="container"
							variant="solid"
							className="flex-row w-[600px] rounded-xl "
							headerClassname="w-fit"
							bodyClassname="p-2 w-full"
							footerClassname="p-2  flex flex-col gap-4 justify-center"
						>
							{#snippet header()}
								<Image
									className="object-cover"
									src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/Nvidia-GeForce-RTX-4090-7-scaled.jpg"
									alt="Nvidia 4090 Image"
								/>
							{/snippet}
							{#snippet body()}
								<span class="block text-lg"><b>Nvidia RTX 4090 Videocard</b></span>
								<span class="block my-2">2000 U$D</span>
							{/snippet}
							{#snippet footer()}
								<Button colors="success" variant="solid" className="  rounded-lg">Buy</Button>
								<Button colors="success" variant="bordered" className=" rounded-lg">Details</Button>
							{/snippet}
						</Card>
					</div>
					<div class="example-card-box">
						<Title level={3} className="text-lg">Custom Grid</Title>
						<Card
							color="container"
							variant="solid"
							className="grid grid-cols-2 grid-rows-2 w-[500px] rounded-xl gap-4"
							headerClassname="row-start-1 row-end-3 col-start-1 col-end-2"
							bodyClassname="row-start-1 row-end-2 col-start-2 col-end-3 pt-2 "
							footerClassname="row-start-2 row-end-3 col-start-2 col-end-3 flex flex-col gap-2 pr-2 pb-2"
						>
							{#snippet header()}
								<Image
									className="object-cover w-full h-full"
									src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/Nvidia-GeForce-RTX-4090-7-scaled.jpg"
									alt="Nvidia 4090 Image"
								/>
							{/snippet}
							{#snippet body()}
								<span class="block text-lg"><b>Nvidia RTX 4090 Videocard</b></span>
								<span class="block my-2">2000 U$D</span>
							{/snippet}
							{#snippet footer()}
								<Button colors="success" variant="solid" className="w-full rounded-lg">Buy</Button>
								<Button colors="success" variant="bordered" className="w-full rounded-lg"
									>Details</Button
								>
							{/snippet}
						</Card>
					</div>
					<div class="example-card-box">
						<Title level={3} className="text-lg">Custom Grid Template Area</Title>

						<Card
							color="container"
							variant="solid"
							className="card-custom-grid w-[500px] rounded-xl gap-4"
							bodyClassname="pt-2 pr-2"
							footerClassname="flex flex-col gap-2 pr-2 pb-2"
						>
							{#snippet header()}
								<Image
									className="object-cover w-full h-full"
									src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/Nvidia-GeForce-RTX-4090-7-scaled.jpg"
									alt="Nvidia 4090 Image"
								/>
							{/snippet}
							{#snippet body()}
								<span class="block text-lg"><b>Nvidia RTX 4090 Videocard</b></span>
								<span class="block my-2">2000 U$D</span>
							{/snippet}
							{#snippet footer()}
								<Button colors="success" variant="solid" className="w-full rounded-lg">Buy</Button>
								<Button colors="success" variant="bordered" className="w-full rounded-lg"
									>Details</Button
								>
							{/snippet}
						</Card>
					</div>
				</div>
			</section>
		</article>

		<article id="variants">
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<div>
					<Card
						className="flex-col max-w-[400px] px-3 py-2"
						headerClassname="flex flex-row items-center gap-2 text-start"
						bodyClassname="my-2 px-2"
						variant="solid"
						color="container-hight"
					>
						{#snippet header()}
							<Avatar avatarSrc="https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png" />
							<div class="user-post-info">
								<b>Bowser</b>
								<span>@king_bowser</span>
							</div>
						{/snippet}
						{#snippet body()}
							<p>
								Can't decide between kidnapping Peach or invading Mushroom Kingdom today... Maybe
								both? <span class=" text-sky-500">#KoopaAgenda #MasterPlan</span>
							</p>
						{/snippet}
						{#snippet footer()}
							<ul></ul>
						{/snippet}
					</Card>
					<Card
						className="flex-col max-w-[400px] px-3 py-2"
						headerClassname="flex flex-row items-center gap-2 text-start"
						bodyClassname="my-2 px-2"
						variant="bordered"
						color="primary"
					>
						{#snippet header()}
							<Avatar avatarSrc="https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png" />
							<div class="user-post-info">
								<b>Bowser</b>
								<span>@king_bowser</span>
							</div>
						{/snippet}
						{#snippet body()}
							<p>
								How many times do I have to tell Mario that kidnapping Peach isn't a crime when she
								willingly joins me for tea? <span class=" text-sky-500"
									>#BowserRules #TeaTimeWithPeach</span
								>
							</p>
						{/snippet}
						{#snippet footer()}
							<ul></ul>
						{/snippet}
					</Card>
					<Card
						className="flex-col max-w-[400px] px-3 py-2"
						headerClassname="flex flex-row items-center gap-2 text-start"
						bodyClassname="my-2 px-2"
						variant="faded"
						color="primary"
					>
						{#snippet header()}
							<Avatar avatarSrc="https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png" />
							<div class="user-post-info">
								<b>Bowser</b>
								<span>@king_bowser</span>
							</div>
						{/snippet}
						{#snippet body()}
							<p>
								How many times do I have to tell Mario that kidnapping Peach isn't a crime when she
								willingly joins me for tea? <span class=" text-sky-500"
									>#BowserRules #TeaTimeWithPeach</span
								>
							</p>
						{/snippet}
						{#snippet footer()}
							<ul></ul>
						{/snippet}
					</Card>
				</div>
			</section>
		</article>
	</main>
</div>

<style>
	.user-post-info {
		display: flex;
		flex-direction: column;
		gap: 0rem;
		align-self: flex-start;
		padding: 0;
		text-align: start;
		& b {
			display: block;
			width: 100%;
		}
		& > span {
			font-size: small;
		}
	}
	:global(.card-custom-grid) {
		display: grid;
		grid-template-areas: 'header body' 'header footer';
	}
	.example-card-box {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-self: baseline;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	aside {
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
	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 70%;
		background-color: var(--color-surface-low);
		padding: var(--spacing-2) var(--spacing-6) var(--spacing-6) var(--spacing-6);
		border-radius: var(--radius-xl);
		gap: var(--spacing-4);
		margin: var(--spacing-6) 0;
		& header {
			/* margin: var(--spacing-4) 0; */
			/* padding: var(--spacing-2); */
			/* border-radius: var(--radius-xl); */
		}
		& section {
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
			& div {
				justify-self: center;
				align-items: center;
				align-self: center;
				display: flex;
				flex-wrap: wrap;
				width: 100%;
				padding: var(--spacing-4);
				gap: var(--spacing-8);
				flex-direction: row;
			}
		}
	}
	/* @keyframes show {
		from {
			opacity: 0;
			scale: 0.8;
		}
		to {
			opacity: 1;
			scale: 1;
		}
	} */
</style>
