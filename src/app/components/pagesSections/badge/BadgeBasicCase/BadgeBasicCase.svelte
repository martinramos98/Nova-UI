<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Avatar } from '@nv-org/avatar';
	import { Badge } from '@nv-org/badge';
	import { Button } from '@nv-org/button';
	import { Icon } from '@nv-org/icon';
	import { codeTextBadgeBasicCase } from './codeText.js';
	let counter = $state(0);
	let badgeEl: HTMLElement | undefined = $state();
	let avatarEL: HTMLElement | undefined = $state();
	let notifyEl: HTMLElement | undefined = $state();
</script>

<section class="relative">
	<div>
		<ComponentCodeTabs code={codeTextBadgeBasicCase()}>
			{#snippet component()}
				<div class="w-full flex flex-row gap-8 items-center">
					<Avatar
						bind:ref={avatarEL}
						class="bg-[var(--color-subcontainer)] p-1 border-2 dark:border-b-gray-700 border-slate-400"
					></Avatar>
					<Badge anchor={avatarEL as HTMLElement} colors="success" variant="solid">New!!</Badge>
					<Button
						variant="solid"
						bind:ref={badgeEl}
						colors="secondary"
						onClick={() => {
							counter++;
						}}>Press me</Button
					>
					<Badge anchor={badgeEl as HTMLElement} colors="info" variant="flat">
						{counter.toString()}
					</Badge>

					<div bind:this={notifyEl} class="relative">
						<Icon
							class="stroke-[var(--color-text)]"
							width={24}
							height={24}
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								d="M14.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20"
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</Icon>

						<Badge
							anchor={notifyEl as HTMLElement}
							positionBadge={'bottom-right'}
							colors="error"
							variant="neon"
							class={'size-3 text-xs'}
						>
							{' '}
						</Badge>
					</div>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
