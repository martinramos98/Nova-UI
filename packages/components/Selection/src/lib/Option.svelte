<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface OptionProps {
		value?: any;
		disabled?: boolean;
		className?: string;
		children?: Snippet<[any]>;
	}
	const { value = '', disabled = false, children, className = '' }: OptionProps = $props();
	let selected = $state(false);
	function setSelectHandlerToOptions(optionElement: HTMLElement) {
		if (optionElement.parentElement?.classList.contains('ui-selection-options-container')) {
			optionElement.addEventListener('click', () => {
				// @ts-expect-error Custom prop of element
				selected = optionElement.parentElement.onselecthandler(value);
			});
		} else {
			throw Error('Selection Option is not inside a Selection Container');
		}
	}
</script>

<option
	{disabled}
	use:setSelectHandlerToOptions
	class="ui-selection-option {className}"
	data-selected={selected}
>
	{#if children}
		{@render children(selected)}
	{:else}
		{value}
	{/if}
</option>

<style>
	@layer nova {
		option[disabled] {
			opacity: 0.5;
		}
		option {
			text-indent: 10px;
			cursor: pointer;
			display: block;
			padding: 5px 2px;
			border-radius: var(--radius-md);
			transition: all 0.3s ease-in-out;
			background-color: inherit;
			&:hover {
				filter: brightness(120%);
			}
		}
	}
</style>
