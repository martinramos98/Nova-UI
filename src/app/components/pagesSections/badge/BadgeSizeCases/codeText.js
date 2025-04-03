export default function badgeSizeCases() {
	return `<script>
	import { Avatar, Badge } from '@nv-org/components';
	let badgeSm: HTMLElement | undefined = $state();
	let badgeMd: HTMLElement | undefined = $state();
	let badgeLg: HTMLElement | undefined = $state();
	let badgeXl: HTMLElement | undefined = $state();
	let badge2Xl: HTMLElement | undefined = $state();
</script>  
<div class="w-full flex flex-row gap-4">
	<Avatar bind:ref={badgeSm} class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	<Badge
		anchor={badgeSm as HTMLElement}
		colors="info"
		variant="solid"
		positionBadge="bottom-right"
		class={'size-xs'}
	></Badge>
	<Avatar
		bind:ref={badgeMd as HTMLElement}
		class="size-10  dark:bg-slate-800 p-1 rounded-lg"
	></Avatar>
	<Badge
		anchor={badgeMd as HTMLElement}
		colors="info"
		variant="solid"
		positionBadge="bottom-right"
		class={'size-md'}
	></Badge>
	<Avatar bind:ref={badgeLg} class="size-10  dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	<Badge
		anchor={badgeLg as HTMLElement}
		colors="info"
		variant="solid"
		positionBadge="bottom-right"
		class={'size-lg'}
	></Badge>
	<Avatar
		bind:ref={badgeXl as HTMLElement}
		class="size-10  dark:bg-slate-800 p-1 rounded-lg"
	></Avatar>
	<Badge
		anchor={badgeXl as HTMLElement}
		colors="info"
		variant="solid"
		positionBadge="bottom-right"
		class={'size-xl'}
	></Badge>
	<Avatar
		bind:ref={badge2Xl as HTMLElement}
		class="size-10  dark:bg-slate-800 p-1 rounded-lg"
	></Avatar>
	<Badge
		anchor={badge2Xl as HTMLElement}
		colors="info"
		variant="solid"
		positionBadge="bottom-right"
		class={'size-2xl'}
	></Badge>
</div>
</div>
  `;
}
