<script lang="ts">
	import { Card } from '@nv-org/card';
	import { Title } from '@nv-org/title';
	import { Image } from '@nv-org/image';
	import { Button } from '@nv-org/button';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import cardLayoutsCases from './textCode.js';
</script>

<section>
	<div class="w-full">
		<ComponentCodeTabs code={cardLayoutsCases()}>
			{#snippet component()}
				<div class="flex flex-row flex-wrap gap-4 place-content-center">
					<div class="example-card-box">
						<Title level={3} class="text-lg">Vertical</Title>
						<Card
							color="container"
							variant="solid"
							class="flex-col w-[300px] rounded-xl "
							bodyClass="p-2"
							footerClass="p-2 w-full flex flex-row gap-4"
						>
							{#snippet header()}
								<Image
									class="object-cover pb-2"
									src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/Nvidia-GeForce-RTX-4090-7-scaled.jpg"
									alt="Nvidia 4090 Image"
								/>
							{/snippet}
							{#snippet body()}
								<span class="block text-lg"><b>Nvidia RTX 4090 Videocard</b></span>
								<span class="block my-2">2000 U$D</span>
							{/snippet}
							{#snippet footer()}
								<Button colors="success" variant="solid" class="w-full rounded-lg">Buy</Button>
								<Button colors="success" variant="bordered" class="w-full rounded-lg"
									>Details</Button
								>
							{/snippet}
						</Card>
					</div>
					<div class="example-card-box">
						<Title level={3} class="text-lg">Horizontal</Title>
						<Card
							color="container"
							variant="solid"
							class="lg:flex-row md:flex-col max-w-[600px] w-full rounded-xl "
							headerClass="w-fit"
							bodyClass="p-2 w-full"
							footerClass="p-2  flex flex-col gap-4 justify-center"
						>
							{#snippet header()}
								<Image
									class="object-cover"
									src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/Nvidia-GeForce-RTX-4090-7-scaled.jpg"
									alt="Nvidia 4090 Image"
								/>
							{/snippet}
							{#snippet body()}
								<span class="block text-lg"><b>Nvidia RTX 4090 Videocard</b></span>
								<span class="block my-2">2000 U$D</span>
							{/snippet}
							{#snippet footer()}
								<Button colors="success" variant="solid" class="  rounded-lg">Buy</Button>
								<Button colors="success" variant="bordered" class=" rounded-lg">Details</Button>
							{/snippet}
						</Card>
					</div>
					<div class="example-card-box">
						<Title level={3} class="text-lg">Custom Grid</Title>
						<Card
							color="container"
							variant="solid"
							class="grid grid-cols-2 grid-rows-2 w-full max-w-[500px] rounded-xl gap-4"
							headerClass="row-start-1 row-end-3 col-start-1 col-end-2"
							bodyClass="row-start-1 row-end-2 col-start-2 col-end-3 pt-2 "
							footerClass="row-start-2 row-end-3 col-start-2 col-end-3 flex flex-col gap-2 pr-2 pb-2"
						>
							{#snippet header()}
								<Image
									class="object-cover w-full h-full"
									src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/Nvidia-GeForce-RTX-4090-7-scaled.jpg"
									alt="Nvidia 4090 Image"
								/>
							{/snippet}
							{#snippet body()}
								<span class="block text-lg"><b>Nvidia RTX 4090 Videocard</b></span>
								<span class="block my-2">2000 U$D</span>
							{/snippet}
							{#snippet footer()}
								<Button colors="success" variant="solid" class="w-full rounded-lg">Buy</Button>
								<Button colors="success" variant="bordered" class="w-full rounded-lg"
									>Details</Button
								>
							{/snippet}
						</Card>
					</div>
					<div class="example-card-box">
						<Title level={3} class="text-lg">Custom Grid Template Area</Title>

						<Card
							color="container"
							variant="solid"
							class="card-custom-grid  w-full max-w-[500px] rounded-xl gap-4"
							bodyClass="pt-2 pr-2"
							footerClass="flex flex-col gap-2 pr-2 pb-2"
						>
							{#snippet header()}
								<Image
									class="object-cover w-full h-full"
									src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/Nvidia-GeForce-RTX-4090-7-scaled.jpg"
									alt="Nvidia 4090 Image"
								/>
							{/snippet}
							{#snippet body()}
								<span class="block text-lg"><b>Nvidia RTX 4090 Videocard</b></span>
								<span class="block my-2">2000 U$D</span>
							{/snippet}
							{#snippet footer()}
								<Button colors="success" variant="solid" class="w-full rounded-lg">Buy</Button>
								<Button colors="success" variant="bordered" class="w-full rounded-lg"
									>Details</Button
								>
							{/snippet}
						</Card>
					</div>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>

<style>
	.example-card-box {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-self: baseline;
		width: fit-content;
	}

	:global {
		.card-custom-grid {
			display: grid;
			grid-template-areas: 'header body' 'header footer';
		}

		@media (width <= 912px) {
			:global(.ui-card) {
				flex-direction: column;
			}
		}
	}
</style>
