<script lang="ts">
	import buttonAction, { type ButtonElementProps } from './ButtonAction.js';
	export let css: string = '';
	export let className: string = '';
	// TODO: Definir los tipos existentes y que se haga extensible
	export let variant: string = '';
	export let colors: string = '';
	export let disabled: boolean = false;
	export let isLoading: boolean = false;
	export let spinnerPosition: 'left' | 'right' = 'left';
	export let withClickEffect: boolean = true;
	export let buttonProps: ButtonElementProps | undefined = {};
	export let onClick: ((ev: MouseEvent) => void) | undefined = undefined;
	// TODO: Poner default slot para los spinner un default spinner
</script>

<button
	use:buttonAction={{ buttonElementProps: buttonProps, withClickEffect, onClick }}
	class="{className} ui-button {colors} {variant} "
	style={css}
	{disabled}
>
	{#if spinnerPosition === 'left' && isLoading}
		<slot name="spinner" />
	{/if}
	<slot />
	{#if spinnerPosition === 'right' && isLoading}
		<slot name="spinner" />
	{/if}
</button>
