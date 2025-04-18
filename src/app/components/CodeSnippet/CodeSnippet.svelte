<script lang="ts">
	import { Button } from '@nv-org/button';
	import { Icon } from '@nv-org/icon';
	import { Popover, PopoverRoot } from '@nv-org/popover';
	import typescript from 'svelte-highlight/languages/typescript';
	import { Highlight, HighlightSvelte } from 'svelte-highlight';
	const {
		textCode,
		class: className = '',
		isSvelte = false
	}: { textCode: string; isSvelte?: boolean; class?: string; language?: string } = $props();
	let open = $state(false);
	let timer: undefined | number = undefined;
	function copyCode() {
		navigator.clipboard.writeText(textCode);
		open = true;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			open = false;
		}, 1500);
	}
</script>

<div class="code-snippet">
	{#if !isSvelte}
		<!-- <HighlightAuto class={className + ' text-wrap'} code={textCode}></HighlightAuto> -->
		<Highlight class={[className, 'text-wrap']} language={typescript} code={textCode} />
	{:else}
		<HighlightSvelte class={[className, 'text-wrap']} code={textCode} />
	{/if}
	<PopoverRoot {open}>
		{#snippet children(asPopoverAnchor, asPopoverTrigger)}
			<Button
				onClick={copyCode}
				withClickEffect={false}
				class="w-8 h-8 p-0 flex items-center justify-center m-2 bg-inherit hover:brightness-130 rounded-md shrink-0"
				action={(node) => {
					asPopoverAnchor(node);
					asPopoverTrigger(node);
				}}
			>
				<Icon class="block" viewBox="0 0 24 24" width={24} height={24} fill="none">
					<path
						class="stroke-current"
						d="M10.0696 7C10.3869 3.9787 11.8424 3 15.5 3C19.7059 3 21 4.29412 21 8.5C21 12.1576 20.0213 13.6131 17 13.9304M3 15.5C3 11.2941 4.29412 10 8.5 10C12.7059 10 14 11.2941 14 15.5C14 19.7059 12.7059 21 8.5 21C4.29412 21 3 19.7059 3 15.5Z"
						stroke="currentcolor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</Icon>
			</Button>
			<Popover position={'left'} colors="container-hight" class="w-fit">
				<span>Copied!</span>
			</Popover>
		{/snippet}
	</PopoverRoot>
</div>

<style>
	.code-snippet {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		align-items: flex-start;
		height: fit-content;
		background-color: #1d2021;
		border-radius: 10px;
		max-height: 400px;
		overflow: auto;
		justify-content: space-between;
		width: 100%;
		gap: 0;
		padding: 0 0 0 var(--spacing-2);
	}
</style>
