<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Badge } from '@nv-org/badge';
	import { Avatar } from '@nv-org/avatar';
	import BadgeVariantCasesTextCode from './codeText.js';
</script>

<section>
	<div class="w-full">
		<ComponentCodeTabs code={BadgeVariantCasesTextCode()}>
			{#snippet component()}
				<div class="w-full flex flex-row gap-4">
					<Badge colors="warning" variant="solid" positionBadge="bottom-right">
						<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					</Badge>
					<Badge colors="warning" variant="flat" positionBadge="bottom-right">
						<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					</Badge>
					<Badge colors="warning" variant="neon" positionBadge="bottom-right">
						<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					</Badge>
					<Badge colors="warning" variant="ghost" positionBadge="bottom-right">
						<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					</Badge>
					<Badge colors="warning" variant="faded" positionBadge="bottom-right">
						<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					</Badge>
					<Badge colors="warning" variant="light" positionBadge="bottom-right">
						<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					</Badge>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
