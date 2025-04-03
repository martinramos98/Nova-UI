<svelte:options runes={true} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { type Snippet } from 'svelte';
	import { Button } from '@nv-org/button';
	import { popIn, setFloatingPosition, type SvelteTransitionFn } from '@nv-org/utils';
	interface DropdownProps {
		onClickTrigger?: () => void;
		children?: Snippet<[any]>;
		offset?: number;
		triggerText?: string;
		position?: string;
		triggerContent?: Snippet;
		open?: boolean;
		animationFunction?: SvelteTransitionFn;
		animationParams?: any;
	}
	let {
		children,
		offset = 5,
		onClickTrigger = undefined,
		position = 'right-start',
		triggerContent = undefined,
		triggerText = '',
		open = $bindable(false),
		animationFunction = popIn,
		animationParams = { duration: 250 }
	}: DropdownProps = $props();
	let container: HTMLElement;
	let dropdownEL: HTMLElement;
	const toggleDropdown = (ev: MouseEvent) => {
		open = !open;
		if (open === false) {
			window.removeEventListener('click', clickOnOpenedDropdown);
		} else {
			window.addEventListener('click', clickOnOpenedDropdown);
			ev.stopImmediatePropagation();
		}
	};
	onMount(() => {
		// @ts-expect-error Type definition for element
		container['toggleDropdown'] = toggleDropdown;
	});
	const clickOnOpenedDropdown = (ev: MouseEvent) => {
		if (!dropdownEL || !dropdownEL.contains(ev.target as Element)) {
			window.removeEventListener('click', clickOnOpenedDropdown);
			open = false;
		}
		ev.preventDefault();
	};
	function setDropdownContentPosition(node: HTMLElement) {
		dropdownEL = node.closest('.ui-dropdown-content') as HTMLElement;
		setFloatingPosition({ element: node, position, offset });
	}
</script>

<div class="ui-dropdown" bind:this={container}>
	{#if triggerContent}
		<button
			onclick={(ev) => {
				toggleDropdown(ev);
				onClickTrigger && onClickTrigger();
			}}
		>
			{@render triggerContent()}
		</button>
	{:else}
		<Button
			variant="solid"
			colors="container"
			class="rounded-lg py-2"
			onClick={(ev) => {
				toggleDropdown(ev);
				onClickTrigger && onClickTrigger();
			}}
		>
			{triggerText.toString()}
		</Button>
	{/if}
	{#if open}
		<div
			transition:animationFunction={animationParams}
			use:setDropdownContentPosition
			class="ui-dropdown-content rounded-xl"
		>
			{#if children}
				{@render children(toggleDropdown)}
			{/if}
		</div>
	{/if}
</div>

<style>
	@layer nova {
		.ui-dropdown {
			position: relative;
			display: inline-block;
		}
		.ui-dropdown-content {
			width: 100%;
			border: 1px solid var(--color-border);
			background-color: var(--color-surface);
			height: auto;
			padding: 10px;
			z-index: 99;
			position: absolute;
		}
	}
	:global {
		.ui-dropdown-group > .ui-dropdown-group-content:hover ~ .ui-dropdown-item {
			filter: brightness(130%);
		}
	}
</style>
