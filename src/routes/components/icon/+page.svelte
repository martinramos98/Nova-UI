<script>
	import Icon from '$lib/Components/Icons/Icon.svelte';
	import AlertIcon from '$lib/Components/Icons/IconsPath/AlertIcon.svelte';
	import InfoIcon from '$lib/Components/Icons/IconsPath/InfoIcon.svelte';
	import SuccessIcon from '$lib/Components/Icons/IconsPath/SuccessIcon.svelte';
	import WarningIcon from '$lib/Components/Icons/IconsPath/WarningIcon.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<div class=" page-content">
	<main>
		<article>
			<header>
				<Title>Icon</Title>
			</header>
			<section>
				<div class="w-full">
					<Icon
						props={{
							viewBox: '0 0 24 24',
							fill: 'none',
							class: 'stroke-[var(--color-text)] w-[30px] h-[30px]'
						}}
					>
						<InfoIcon />
					</Icon>
					<Icon
						props={{
							viewBox: '0 0 24 24',
							fill: 'none',
							class: 'stroke-[var(--color-text)] w-[30px] h-[30px]'
						}}
					>
						<WarningIcon />
					</Icon>
					<Icon
						props={{
							viewBox: '0 0 24 24',
							fill: 'none',
							class: 'stroke-[var(--color-text)] w-[30px] h-[30px]'
						}}
					>
						<AlertIcon />
					</Icon>
					<Icon
						props={{
							viewBox: '0 0 24 24',
							fill: 'none',
							class: 'stroke-[var(--color-text)] w-[30px] h-[30px]'
						}}
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
						props={{
							viewBox: '0 0 24 24',
							fill: 'none',
							class: 'stroke-[var(--color-text)] w-[30px] h-[30px]'
						}}
					>
						<InfoIcon />
					</Icon>
					<Icon
						props={{
							viewBox: '0 0 24 24',
							fill: 'none',
							class: 'stroke-[var(--color-text)] w-[30px] h-[30px]'
						}}
					>
						<WarningIcon />
					</Icon>
				</div>
			</section>
		</article>
	</main>
</div>
