<script>
	import { Avatar } from '@nv-org/avatar';
	import { Badge } from '@nv-org/badge';
	import { Button } from '@nv-org/button';
	import { Icon, AlertIcon, WarningIcon } from '@nv-org/icon';
	import { Title } from '@nv-org/title';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	import BadgeProps from '../../../app/components/pagesSections/badge/BadgeProps.svelte';
	let counter = 0;
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#button">Badge</a></li>
			<li><a href="#variants">Variants</a></li>
			<li><a href="#disabled">Positions</a></li>
			<li><a href="#custom">Colors</a></li>
			<li><a href="#group">Button Group</a></li>
		</ul>
	</aside>
	<main>
		<article id={'button'}>
			<header>
				<Title level={1} class="text-start w-full">Badge</Title>
				<p class="py-2 px-2">
					Badge components are a small visual element used to display additional information or
					status indicators within a user interface.
				</p>
			</header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Badge colors="success" variant="solid" contentBadge="New!!">
	<Avatar class="bg-[var(--color-subcontainer)] p-1 border-2 border-black"
	></Avatar>
</Badge>
<Badge colors="info" variant="flat" size={4} contentBadge={counter.toString()}>
	<Button
		variant="solid"
		colors="secondary"
		onClick={() => {
			counter++;
		}}>Press</Button
	>
</Badge>
<Badge
	positionBadge={'bottom-right'}
	size={1}
	contentBadge=""
	colors="error"
	variant="neon"
	class={'size-3 text-xs'}
>
	<Icon
		props={{
			class: 'stroke-[var(--color-text)] size-6',
			fill: 'none',
			viewBox: '0 0 24 24'
		}}
	>
		<path
			d="M14.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</Icon>
</Badge>
					`}
					>
						{#snippet component()}
							<div class="w-full flex flex-row gap-4 items-center">
								<Badge colors="success" variant="solid" contentBadge="New!!">
									<Avatar class="bg-[var(--color-subcontainer)] p-1 border-2 border-black"></Avatar>
								</Badge>
								<Badge colors="info" variant="flat" size={4} contentBadge={counter.toString()}>
									<Button
										variant="solid"
										colors="secondary"
										onClick={() => {
											counter++;
										}}>Press</Button
									>
								</Badge>
								<Badge
									positionBadge={'bottom-right'}
									size={1}
									contentBadge=""
									colors="error"
									variant="neon"
									class={'size-3 text-xs'}
								>
									<Icon
										props={{
											class: 'stroke-[var(--color-text)] size-6',
											fill: 'none',
											viewBox: '0 0 24 24'
										}}
									>
										<path
											d="M14.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20"
											stroke-width="1"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</Icon>
								</Badge>
							</div>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article id="positions">
			<header><Title level={2}>Badges Positions</Title></header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Badge colors="info" variant="solid" size={1} positionBadge="top-left">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="info" variant="solid" size={1} positionBadge="top-right">
	<Avatar class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="info" variant="solid" size={1} positionBadge="bottom-left">
	<Avatar class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="info" variant="solid" size={1} positionBadge="bottom-right">
	<Avatar class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
					`}
					>
						{#snippet component()}
							<div class="w-full flex flex-row gap-4">
								<Badge colors="info" variant="solid" size={1} positionBadge="top-left">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="info" variant="solid" size={1} positionBadge="top-right">
									<Avatar class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="info" variant="solid" size={1} positionBadge="bottom-left">
									<Avatar class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="info" variant="solid" size={1} positionBadge="bottom-right">
									<Avatar class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
							</div>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article id="variants">
			<header><Title level={2}>Variants</Title></header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Badge colors="warning" variant="solid" size={1} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="flat" size={1} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="neon" size={1} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="ghost" size={1} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="faded" size={1} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="light" size={1} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
					`}
					>
						{#snippet component()}
							<div class="w-full flex flex-row gap-4">
								<Badge colors="warning" variant="solid" size={2} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="flat" size={2} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="neon" size={2} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="ghost" size={2} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="faded" size={2} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="light" size={2} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
							</div>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article id="sizes">
			<header><Title level={2}>Sizes</Title></header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Badge colors="warning" variant="solid" size={1} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="flat" size={2} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="neon" size={3} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="ghost" size={4} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="faded" size={5} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
<Badge colors="warning" variant="light" size={6} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
</Badge>
					`}
					>
						{#snippet component()}
							<div class="flex flex-row gap-4">
								<Badge colors="warning" variant="solid" size={1} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="flat" size={2} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="neon" size={3} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="ghost" size={4} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="faded" size={5} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
								</Badge>
								<Badge colors="warning" variant="light" size={6} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
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
						code={`<Badge colors="warning" variant="solid" size={2} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	<svelte:fragment slot="contentBadge">
		<Icon
			props={{
				viewBox: '0 0 24 24',
				fill: 'none',
				class: 'stroke-[var(--color-text)] size-3'
			}}
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
	size={2}
	positionBadge="top-right"
>
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	<svelte:fragment slot="contentBadge">
		<div class="content-badge-error">
			<Icon
				props={{
					fill: 'none',
					viewBox: '0 0 24 24',
					class: 'stroke-[var(--color-text)] size-4'
				}}
			>
				<AlertIcon></AlertIcon>
			</Icon>
			<span>Error</span>
		</div>
	</svelte:fragment>
</Badge>
<Badge colors="info" variant="solid" class="" size={3} positionBadge="bottom-right">
	<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	<svelte:fragment slot="contentBadge">
		<Icon
			props={{
				viewBox: '0 0 24 24',
				fill: 'none',
				class: 'stroke-[var(--color-text)] size-4'
			}}
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
								<Badge colors="warning" variant="solid" size={2} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
									{#snippet contentBadge()}
										<Icon
											props={{
												viewBox: '0 0 24 24',
												fill: 'none',
												class: 'stroke-[var(--color-text)] size-3'
											}}
										>
											<WarningIcon />
										</Icon>
									{/snippet}
								</Badge>
								<Badge
									colors="error"
									class="animate-pulse px-1"
									radius="md"
									variant="solid"
									size={2}
									positionBadge="top-right"
								>
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
									{#snippet contentBadge()}
										<div class="content-badge-error">
											<Icon
												props={{
													fill: 'none',
													viewBox: '0 0 24 24',
													class: 'stroke-[var(--color-text)] size-4'
												}}
											>
												<AlertIcon></AlertIcon>
											</Icon>
											<span>Error</span>
										</div>
									{/snippet}
								</Badge>
								<Badge colors="info" variant="solid" class="" size={3} positionBadge="bottom-right">
									<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
									{#snippet contentBadge()}
										<Icon
											props={{
												viewBox: '0 0 24 24',
												fill: 'none',
												class: 'stroke-[var(--color-text)] size-4'
											}}
										>
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
			<BadgeProps />
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
