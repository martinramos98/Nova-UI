<script>
	import { Avatar } from '@nv-org/avatar';
	import { Badge } from '@nv-org/badge';
	import { Button } from '@nv-org/button';
	import { Icon, AlertIcon, WarningIcon } from '@nv-org/icon';
	import { Title } from '@nv-org/title';
	import { Divider } from '@nv-org/divider';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	import PropItem from '../../../app/components/propItem/PropItem.svelte';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import BadgeBasicCase from '../../../app/components/pagesSections/badge/BadgeBasicCase/BadgeBasicCase.svelte';
	import BadgePositionsCase from '../../../app/components/pagesSections/badge/BadgePositionsCase/BadgePositionsCase.svelte';
	import BadgeVariantColorCase from '../../../app/components/pagesSections/badge/BadgeVariantColorCase/BadgeVariantColorCase.svelte';
	let counter = 0;
	export let data;
</script>

<div class="page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#positions', text: 'Positions' },
			{ ref: '#variants', text: 'Variants' },
			{ ref: '#sizes', text: 'Sizes' },
			{ ref: '#custom', text: 'Custom' },
			{ ref: '#properties', text: 'Properties' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
	<main>
		<article id={'badge'}>
			<header>
				<Title level={1} class="text-start w-full">Badge</Title>
				<p class="py-2 px-2">
					Badge components are a small visual element used to display additional information or
					status indicators within a user interface.
				</p>
			</header>
			<BadgeBasicCase />
		</article>
		<article id="positions">
			<header><Title level={2}>Badges Positions</Title></header>
			<BadgePositionsCase />
		</article>
		<article id="variants">
			<header><Title level={2}>Variants</Title></header>
			<BadgeVariantColorCase />
		</article>
		<article id="sizes">
			<header><Title level={2}>Sizes</Title></header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Badge colors="warning" variant="solid"  positionBadge="bottom-right">
	<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="flat"  positionBadge="bottom-right">
	<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="neon"  positionBadge="bottom-right">
	<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="ghost"  positionBadge="bottom-right">
	<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="faded"  positionBadge="bottom-right">
	<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="light"  positionBadge="bottom-right">
	<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
					`}
					>
						{#snippet component()}
							<div class="flex flex-row gap-4">
								<Badge colors="warning" variant="solid" positionBadge="bottom-right">
									<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="flat" positionBadge="bottom-right">
									<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="neon" positionBadge="bottom-right">
									<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="ghost" positionBadge="bottom-right">
									<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="faded" positionBadge="bottom-right">
									<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="light" positionBadge="bottom-right">
									<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
							</div>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article id="custom">
			<header><Title level={2}>Badge Customs</Title></header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Badge colors="warning" variant="solid"  positionBadge="bottom-right">
	<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	<svelte:fragment slot="contentBadge">
		<Icon
			props={{
				viewBox: '0 0 24 24',
				fill: 'none',
				class: 'stroke-[var(--color-text)] 			}}
		>
			<WarningIcon />
		</Icon>
	</svelte:fragment>
</Badge>
<Badge
	colors="error"
	class="animate-pulse px-1"
	radius="md"
	variant="solid"
	
	positionBadge="top-right"
>
	<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	<svelte:fragment slot="contentBadge">
		<div class="content-badge-error">
			<Icon
				props={{
					fill: 'none',
					viewBox: '0 0 24 24',
					class: 'stroke-[var(--color-text)] 				}}
			>
				<AlertIcon></AlertIcon>
			</Icon>
			<span>Error</span>
		</div>
	</svelte:fragment>
</Badge>
<Badge colors="info" variant="solid" class=""  positionBadge="bottom-right">
	<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	<svelte:fragment slot="contentBadge">
		<Icon
			props={{
				viewBox: '0 0 24 24',
				fill: 'none',
				class: 'stroke-[var(--color-text)] 			}}
		>
			<path
				d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Icon>
	</svelte:fragment>
</Badge>
`}
					>
						{#snippet component()}
							<div class="w-full flex flex-row gap-8">
								<Badge colors="warning" variant="solid" positionBadge="bottom-right">
									<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
									{#snippet contentBadge()}
										<Icon viewBox="0 0 24 24" fill="none" class="stroke-[var(--color-text)]">
											<WarningIcon />
										</Icon>
									{/snippet}
								</Badge>
								<Badge
									colors="error"
									class="animate-pulse px-1"
									radius="md"
									variant="solid"
									positionBadge="top-right"
								>
									<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
									{#snippet contentBadge()}
										<div class="content-badge-error">
											<Icon fill="none" viewBox="0 0 24 24" class="stroke-[var(--color-text)">
												<AlertIcon></AlertIcon>
											</Icon>
											<span>Error</span>
										</div>
									{/snippet}
								</Badge>
								<Badge colors="info" variant="solid" class="" positionBadge="bottom-right">
									<Avatar class="dark:bg-slate-800 p-1 rounded-lg"></Avatar>
									{#snippet contentBadge()}
										<Icon viewBox="0 0 24 24" fill="none" class="stroke-[var(--color-text)]">
											<path
												d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</Icon>
									{/snippet}
								</Badge>
							</div>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Badge Props</Title>
			</header>

			<section>
				{#each data.data as propItem}
					<PropItem data={propItem}></PropItem>
				{/each}
			</section>
		</article>
	</main>
</div>

<style>
	.content-badge-error {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: baseline;
		gap: 0.4rem;
	}
</style>
