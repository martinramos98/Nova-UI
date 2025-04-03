<script>
	import { Icon, AlertIcon, InfoIcon, SuccessIcon, WarningIcon } from '@nv-org/icon';
	import { Title } from '@nv-org/title';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import { Divider } from '@nv-org/divider';
</script>

<div class=" page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#icons', text: 'Icons' },
			{ ref: '#properties', text: 'Properties' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
	<main>
		<article>
			<header>
				<Title>Icon</Title>
			</header>
			<section>
				<div class="w-full">
					<Icon
						viewBox="0 0 24 24"
						fill="none"
						class="stroke-[var(--color-text)] w-[30px] h-[30px]"
					>
						<InfoIcon />
					</Icon>
					<Icon
						viewBox="0 0 24 24"
						fill="none"
						class="stroke-[var(--color-text)] w-[30px] h-[30px]"
					>
						<WarningIcon />
					</Icon>
					<Icon
						viewBox="0 0 24 24"
						fill="none"
						class="stroke-[var(--color-text)] w-[30px] h-[30px]"
					>
						<AlertIcon />
					</Icon>
					<Icon
						viewBox="0 0 24 24"
						fill="none"
						class="stroke-[var(--color-text)] w-[30px] h-[30px]"
					>
						<SuccessIcon />
					</Icon>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title>Props</Title>
			</header>
			<section>
				<div class="w-full">
					<Icon
						viewBox="0 0 24 24"
						fill="none"
						class="stroke-[var(--color-text)] w-[30px] h-[30px]"
					>
						<InfoIcon />
					</Icon>
					<Icon
						viewBox="0 0 24 24"
						fill="none"
						class="stroke-[var(--color-text)] w-[30px] h-[30px]"
					>
						<WarningIcon />
					</Icon>
				</div>
			</section>
		</article>
	</main>
</div>
