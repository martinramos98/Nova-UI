<script lang="ts">
	export let value: any = '';
	export let disabled = false;
	export let className = '';
	let selected = false;
	function setSelectHandlerToOptions(optionElement: HTMLElement) {
		if (optionElement.parentElement?.classList.contains('ui-selection-options-container')) {
			optionElement.addEventListener('click', () => {
				// @ts-expect-error Custom prop of element
				optionElement.parentElement.onselecthandler(value);
			});
		} else {
			throw Error('Selection Option is not inside a Selection Container');
		}
	}
</script>

<option {disabled} use:setSelectHandlerToOptions class="ui-selection-option {className}">
	<slot {selected}>
		{value}
	</slot>
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
