<script lang="ts">
	import buttonAction, { type ButtonElementProps } from './ButtonAction.js';
	export let css: string = '';
	export let className: string = '';
	// TODO: Definir los tipos existentes y que se haga extensible
	export let variant: string = 'solid';
	export let colors: string = '';
	export let disabled: boolean = false;
	export let withClickEffect: boolean = true;
	export let buttonProps: ButtonElementProps | undefined = {};
</script>

<button
	use:buttonAction={{ buttonElementProps: buttonProps, withClickEffect }}
	class="{className} ui-button {colors} {variant} "
	style={css}
	{disabled}
>
	<slot />
</button>

<style>
	:global(.ui-button) {
		appearance: none;
		border: none;
		transition: all 0.25s ease;
		overflow: hidden;
		padding: 0.25rem 1.25rem;
		position: relative;
		cursor: pointer;
		&:active {
			scale: 98%;
		}
		&:disabled {
			filter: opacity(0.7);
			cursor: not-allowed;
			&:hover {
				filter: opacity(0.7);
			}
			&:active {
				scale: 1;
			}
		}
	}
</style>
