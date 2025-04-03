export default function badgeCustomContent() {
	return `<script lang={'ts'}>
  import { Badge, Avatar, Icon, WarningIcon, AlertIcon } from '@nv-org/components';
  let badgeCustomContent1: HTMLElement | undefined = $state(); 
  let badgeCustomContent2: HTMLElement | undefined = $state();
  let badgeCustomContent3: HTMLElement | undefined = $state();
</script>
  
<div class="w-full flex flex-row gap-8">
	<Avatar bind:ref={badgeCustomContent1} class="dark:bg-slate-800 p-1 rounded-lg" />
	<Badge
		anchor={badgeCustomContent1 as HTMLElement}
		colors="warning"
		variant="solid"
		positionBadge="bottom-right"
	>
		<Icon
			width={18}
			height={18}
			viewBox="0 0 24 24"
			fill="none"
			class="stroke-[var(--color-text)]"
		>
			<WarningIcon />
		</Icon>
	</Badge>
	<Avatar bind:ref={badgeCustomContent2} class="dark:bg-slate-800 p-1 rounded-lg" />
	<Badge
		anchor={badgeCustomContent2 as HTMLElement}
		colors="error"
		class="animate-pulse px-1"
		variant="solid"
		positionBadge="top-right"
	>
		<div class="content-badge-error">
			<Icon
				height={24}
				width={24}
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-[var(--color-text)]"
			>
				<AlertIcon></AlertIcon>
			</Icon>
			<span>Error</span>
		</div>
	</Badge>
	<Avatar bind:ref={badgeCustomContent3} class="dark:bg-slate-800 p-1 rounded-lg" />
	<Badge
		anchor={badgeCustomContent3 as HTMLElement}
		colors="info"
		variant="solid"
		positionBadge="bottom-right"
	>
		<Icon width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={'white'}>
			<path
				d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Icon>
	</Badge>
</div>
  `;
}
