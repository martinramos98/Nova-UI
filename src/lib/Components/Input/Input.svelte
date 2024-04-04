<script lang="ts">
	export let type: 'text' | 'password' | 'number' | 'email' = 'text';
	export let value = '';
	export let onChange: undefined | ((ev: Event) => void) = undefined;
	export let labelText = '';
	export let classNameLabel = '';
	export let classNameInput = '';
	export let name = '';
	export let colors = '';
	export let placeholder = '';
	export let variant = 'default';
	export let id: string | null = null;
	export let error: boolean | ((value: any) => boolean) = false;
	export let textError = '';
	export let inputAttributes = {};
	function useTranslateLabelwithAnimtations() {}
</script>

<div class="ui-input-container ui-color-{colors} ui-input-variant-{variant} ">
	<label for={name} class={classNameLabel}>
		<slot name="label">
			{labelText}
		</slot>
	</label>
	<input
		{name}
		{id}
		{...inputAttributes}
		{placeholder}
		class="ui-input {classNameInput}"
		{type}
		on:change={onChange}
		{value}
	/>
	{#if error === true || (typeof error === 'function' && error(value))}
		<slot name="error">
			<span class="ui-error-message">
				{textError}
			</span>
		</slot>
	{/if}
</div>

<style>
	@layer nova {
		input[type='number'] {
			-moz-appearance: textfield;
		}
		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
		input {
			appearance: none;

			padding: 10px;
			border: none;
			&:focus {
				border: none;
				outline: none;
			}
		}
		.ui-input-container{
			background-color: var(--color-surface-hight);
			border-radius: var(--radius-lg);

			width: fit-content;
		}
	}
	@layer components {
		.ui-input-variant-default{

		}
		.ui-input-variant-blurred {
			backdrop-filter: blur(5px);
			& input {
				background-color: transparent;
			} 
		}
		.ui-input-variant-faded{
			border: solid 2px var(--color-surface-hight);
			background-color: var(--color-surface);
			& input {
				background-color: transparent;
			} 

		}
		.ui-input-variant-flat{
			background-color: color-mix(in srgb, var(--color-container) , transparent 90%);
			border: none;
		}
		.ui-input-variant-underlined{
			border-radius: 0;
			border-bottom: solid 2px var(--color-border);
		}
	}
</style>
