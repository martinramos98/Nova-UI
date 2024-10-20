export function alertCase1TextCode() {
	return `
<script>
	import { Button, CloseButton } from '@nv-org/button';
	import { Alert } from '@nv-org/alert';
	let  open = $state(false)
</script>
<Button
onClick={() => {
	open = true;
}}>Open Custom Alert
</Button>
<Alert class="relative bg-slate-800" onClose={() => {}} bind:open>
	<div class="mt-1">
		<span class="font-semibold">Custom Alert</span>
		<p>This is an alert that wants to notify you something about you must to councern</p>
	</div>
	{#snippet footer(closeAlert)}
		<CloseButton
			class="rounded-full p-1 w-fit absolute right-2 top-2"
			side="right"
			onClose={closeAlert}
			variant="solid"
			colors="error"
		></CloseButton>
	{/snippet}
</Alert>
`;
}
export function alertCase2TextCode() {
	return `
<script>
	import { Button, CloseButton } from '@nv-org/button';
	import { Alert } from '@nv-org/alert';
	import { Icon, SuccessIcon } from '@nv-org/icon'; 
	let open = $state(false);

</script>
<Button
onClick={() => {
	open = true;
}}>Open Custom Alert Prompt
</Button>

<Alert
	text={'Please, insert your name:'}
	type="prompt"
	onClose={() => {}}
	bind:open
>
	{#snippet footer(closeAlert, confirmAlert)}
		<div class="w-full flex gap-2 mt-2 mr-2 justify-end">
			<Button onClick={confirmAlert} colors="info" variant="solid" class="p-1 rounded-full">
				<Icon
					props={{
						viewBox: '0 0 24 24',
						fill: 'none',
						class: 'stroke-[var(--color-text)] w-[15px] h-[15px]'
					}}
				>
					<SuccessIcon />
				</Icon>
			</Button>
			<CloseButton
				class="rounded-full p-1 w-fit "
				onClose={closeAlert}
				variant="flat"
				side={'right'}
				colors="error"
			></CloseButton>
		</div>
	{/snippet}
</Alert>
`;
}
