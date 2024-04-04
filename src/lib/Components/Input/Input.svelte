<script lang="ts">
	export let type: 'text' | 'password' | 'number' | 'email' = 'text';
	export let value = '';
	export let onChange: undefined | ((ev: Event) => void) = undefined;
	export let labelText = '';
	export let classNameLabel = '';
	export let classNameInput = '';
	export let name = '';
	export let colors = '';
	export let placeholder = ''
	export let variant = 'default';
	export let id: string | null = null;
	export let validator = undefined;
	export let error: boolean | ((value: any) => boolean) = false;
	export let textError = '';
	export let inputAttributes = {};
	function useTranslateLabelwithAnimtations(){
			
	}
</script>


<div class="ui-input-container ui-color-{colors} ">
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
		input {
			padding: 10px;
			appearance: none;
			border: none;
			background-color: var(--color-surface-hight);
			border-radius: var(--radius-lg);
			&:focus{
				border:none;
				outline: none;
			}
		}
	}
</style>
