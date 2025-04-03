<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Badge } from '@nv-org/badge';
	import { Avatar } from '@nv-org/avatar';
	import BadgeVariantCasesTextCode from './codeText.js';
	let avatarSolid: HTMLElement | undefined = $state();
	let avatarFlat: HTMLElement | undefined = $state();
	let avatarNeon: HTMLElement | undefined = $state();
	let avatarGhost: HTMLElement | undefined = $state();
	let avatarLight: HTMLElement | undefined = $state();
	let avatarFaded: HTMLElement | undefined = $state();
</script>

<section>
	<div class="w-full">
		<ComponentCodeTabs code={BadgeVariantCasesTextCode()}>
			{#snippet component()}
				<div class="w-full flex flex-row gap-4">
					<Avatar bind:ref={avatarSolid} class="size-10 dark:bg-slate-800 p-1 rounded-lg" />
					<Badge
						anchor={avatarSolid as HTMLElement}
						colors="warning"
						variant="solid"
						positionBadge="bottom-right"
					/>
					<Avatar bind:ref={avatarFlat} class="size-10 dark:bg-slate-800 p-1 rounded-lg" />
					<Badge
						anchor={avatarFlat as HTMLElement}
						colors="warning"
						variant="flat"
						positionBadge="bottom-right"
					/>

					<Avatar bind:ref={avatarNeon} class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					<Badge
						anchor={avatarNeon as HTMLElement}
						colors="warning"
						variant="neon"
						positionBadge="bottom-right"
					></Badge>
					<Avatar bind:ref={avatarGhost} class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					<Badge
						anchor={avatarGhost as HTMLElement}
						colors="warning"
						variant="ghost"
						positionBadge="bottom-right"
					></Badge>
					<Badge
						anchor={avatarFaded as HTMLElement}
						colors="warning"
						variant="faded"
						positionBadge="bottom-right"
					></Badge>
					<Avatar bind:ref={avatarFaded} class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					<Badge
						anchor={avatarLight as HTMLElement}
						colors="warning"
						variant="light"
						positionBadge="bottom-right"
					></Badge>
					<Avatar bind:ref={avatarLight} class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
