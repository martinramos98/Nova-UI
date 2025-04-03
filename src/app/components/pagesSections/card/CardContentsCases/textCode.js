export default function cardContentCases() {
	return `<script>
import { Card, Button, Dividier, Title} from '@nv-org/components'
</script>
<div class="place-content-center flex flex-wrap gap-4">
	<div class="example-card-box">
		<Title level={3} class="text-lg">With Header, Body and Footer</Title>
		<Card
			footerClass="p-2 text-end"
			variant={'solid'}
			color="container"
			class="p-2 rounded-xl gap-2 w-full max-w-[400px]"
			bodyClass="flex flex-col items-center"
		>
			{#snippet header()}
				<Title level={4} class="text-lg text-center px-2">Animal Crossing</Title>
			{/snippet}
			{#snippet body()}
				<img
					alt="Example Case"
					class=" w-full max-w-[350px] max-h-[200px] object-cover rounded-xl"
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
		<Title level={3} class="text-lg">Header and Body</Title>
		<Card
			variant={'solid'}
			color="container"
			class="rounded-xl w-full max-w-[400px] h-fit "
			bodyClass="p-4"
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
		<Title level={3} class="text-lg">Body and Footer</Title>
		<Card
			class="w-full max-w-[400px]"
			footerClass="py-2 text-end bg-[var(--color-surface)] pr-4"
		>
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
		<Title level={3} class="text-lg">Children Content</Title>
		<Card class="w-full max-w-[400px] relative">
			<img
				src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/wii_24/SI_Wii_SuperMarioGalaxy2_image1600w.png"
				alt=""
			/>
			<span class="absolute right-2 bottom-2">
				<Button class="backdrop-blur-sm bg-zinc-500/50 rounded-lg border-zinc-400 border-1"
					>Let's Go!</Button
				>
			</span>
		</Card>
	</div>
</div>`;
}
