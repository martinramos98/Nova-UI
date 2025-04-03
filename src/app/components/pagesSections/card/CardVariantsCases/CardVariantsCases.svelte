<script>
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Card } from '@nv-org/card';
	import { Avatar } from '@nv-org/avatar';
	import cardVariantsCases from './textCode.js';
</script>

<ComponentCodeTabs code={cardVariantsCases()}>
	{#snippet component()}
		<div class="flex flex-row flex-wrap gap-4">
			<Card
				class="flex-col w-full max-w-[400px] px-3 py-2"
				headerClass="flex flex-row items-center gap-2 text-start"
				bodyClass="my-2 px-2"
				variant="solid"
				color="container"
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
						Can't decide between kidnapping Peach or invading Mushroom Kingdom today... Maybe both? <span
							class=" text-sky-500">#KoopaAgenda #MasterPlan</span
						>
					</p>
				{/snippet}
				{#snippet footer()}
					<ul></ul>
				{/snippet}
			</Card>
			<Card
				class="flex-col max-w-[400px] px-3 py-2"
				headerClass="flex flex-row items-center gap-2 text-start"
				bodyClass="my-2 px-2"
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
				class="flex-col w-full max-w-[400px] px-3 py-2"
				headerClass="flex flex-row items-center gap-2 text-start"
				bodyClass="my-2 px-2"
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
			</Card>
		</div>
	{/snippet}
</ComponentCodeTabs>

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
</style>
