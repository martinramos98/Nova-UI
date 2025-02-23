export default function badgePositionsCaseCodeText() {
	return `<script>
  import {Badge, Avatar} from '@nv-org/components' 
</script>
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
`;
}
