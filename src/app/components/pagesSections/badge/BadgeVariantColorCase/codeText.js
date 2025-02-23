export default function BadgeVariantCasesTextCode() {
	return `<script>
  import { Avatar, Badge } from '@nv-org/components';
</script>

<div class="w-full flex flex-row gap-4">
	<Badge colors="warning" variant="solid" size={2} positionBadge="bottom-right">
		<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	</Badge>
	<Badge colors="warning" variant="flat" size={2} positionBadge="bottom-right">
		<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	</Badge>
	<Badge colors="warning" variant="neon" size={2} positionBadge="bottom-right">
		<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	</Badge>
	<Badge colors="warning" variant="ghost" size={2} positionBadge="bottom-right">
		<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	</Badge>
	<Badge colors="warning" variant="faded" size={2} positionBadge="bottom-right">
		<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	</Badge>
	<Badge colors="warning" variant="light" size={2} positionBadge="bottom-right">
		<Avatar class="size-10 dark:bg-slate-800 p-1 rounded-lg"></Avatar>
	</Badge>
</div>`;
}
