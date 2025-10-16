<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	interface OptionProps {
		labelSelected: string | Snippet;
		value: any;
		disabled?: boolean;
		className?: string;
		children?: Snippet<[any]>;
	}
	const {
		value = '',
		disabled = false,
		children,
		className = '',
		labelSelected
	}: OptionProps = $props();

	const selectionContext = getContext('ui-selection');
	if (!selectionContext) {
		throw Error('Selection Option must be inside a Selection Component');
	}
	function setSelectHandlerToOptions(optionElement: HTMLElement) {
		if (optionElement.parentElement?.classList.contains('ui-selection-options-container')) {
			optionElement.addEventListener('click', () => {
				selectionContext.onselecthandler(value, labelSelected);
			});
		} else {
			throw Error('Selection Option is not inside a Selection Container');
		}
	}
</script>

<div
	role="option"
	aria-disabled={disabled}
	tabindex={-1}
	use:setSelectHandlerToOptions
	class="ui-selection-option {className}"
	aria-selected={selectionContext.selectedValue.has(value)}
>
	{#if children}
		{@render children(selectionContext.selectedValue.has(value))}
	{:else}
		{value}
	{/if}
</div>

<style>
	@layer nova {
		div[role='option'][disabled] {
			opacity: 0.5;
		}
		div[role='option'] {
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
