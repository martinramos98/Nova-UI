<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Badge } from '@nv-org/badge';
	import { Avatar } from '@nv-org/avatar';
	import BadgePositionsCaseCodeText from './codeText.js';
	let avatarbl: HTMLElement | undefined = $state();
	let avatarbr: HTMLElement | undefined = $state();
	let avatartl: HTMLElement | undefined = $state();
	let avatartr: HTMLElement | undefined = $state();
</script>

<section class="relative">
	<div class="w-full">
		<ComponentCodeTabs code={BadgePositionsCaseCodeText()}>
			{#snippet component()}
				<div class="w-full flex flex-row gap-4">
					<Avatar bind:ref={avatarbl} class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					<Badge
						anchor={avatarbl as HTMLElement}
						colors="info"
						variant="solid"
						positionBadge="top-left"
					></Badge>
					<Avatar
						bind:ref={avatarbr as HTMLElement}
						class="size-10  dark:bg-slate-800 p-1 rounded-lg"
					></Avatar>
					<Badge
						anchor={avatarbr as HTMLElement}
						colors="info"
						variant="solid"
						positionBadge="top-right"
					></Badge>
					<Avatar bind:ref={avatartl} class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					<Badge
						anchor={avatartl as HTMLElement}
						colors="info"
						variant="solid"
						positionBadge="bottom-left"
					></Badge>
					<Avatar
						bind:ref={avatartr as HTMLElement}
						class="size-10  dark:bg-slate-800 p-1 rounded-lg"
					></Avatar>
					<Badge
						anchor={avatartr as HTMLElement}
						colors="info"
						variant="solid"
						positionBadge="bottom-right"
					></Badge>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
