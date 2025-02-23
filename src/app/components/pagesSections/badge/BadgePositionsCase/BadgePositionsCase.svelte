<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Badge } from '@nv-org/badge';
	import { Avatar } from '@nv-org/avatar';
	import BadgePositionsCaseCodeText from './codeText.js';
</script>

<section class="relative">
	<div class="w-full">
		<ComponentCodeTabs code={BadgePositionsCaseCodeText()}>
			{#snippet component()}
				<div class="w-full flex flex-row gap-4">
					<Badge colors="info" variant="solid" positionBadge="top-left">
						<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					</Badge>
					<Badge colors="info" variant="solid" positionBadge="top-right">
						<Avatar class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					</Badge>
					<Badge colors="info" variant="solid" positionBadge="bottom-left">
						<Avatar class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					</Badge>
					<Badge colors="info" variant="solid" positionBadge="bottom-right">
						<Avatar class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
					</Badge>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
