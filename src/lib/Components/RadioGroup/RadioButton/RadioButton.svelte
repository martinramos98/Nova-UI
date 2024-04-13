<script lang="ts">
	import Icon from '$lib/Components/Icons/Icon.svelte';
	export let variant = 'solid';
	export let colors = 'info';
	export let value: any;
	export let inderminate = false;
	export let className = '';
	export let classNameContainer = '';
	export let id: undefined | string = undefined;
	export let type: 'radio' | 'checkbox' = 'radio';
	export let disabled = false;
	export let checked = false;
	export let size = 'size-8';
	export let lineThroughtOnCheck = false;
	export let onChange: undefined | (() => void);
	let name = '';
	function getName(node: HTMLElement) {
		name = node.parentElement?.getAttribute('name') ?? '';
	}
</script>

<div
	use:getName
	class="ui-radio ui-color-{colors}  ui-radio-variant-{variant} {classNameContainer} "
>
	<button
		{value}
		tabindex="0"
		role={type}
		{disabled}
		aria-checked={checked}
		data-indeterminated={inderminate}
		data-checked={checked}
		on:click={onChange}
		class="ui-radio-button {size} {className}"
	>
		<div aria-hidden="true">
			<slot name="icon">
				{#if type === 'checkbox'}
					<Icon props={{ viewBox: '0 0 20 20', class: 'ui-icon-indeterminate' }}>
						<line
							x1="4"
							x2="16"
							y1="10"
							y2="10"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						></line>
					</Icon>

					<Icon props={{ viewBox: '0 0 17.837 17.837' }}>
						<polyline
							fill="none"
							points="1 9 7 14 15 4"
							stroke-dasharray="22"
							stroke-dashoffset="44"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						></polyline>
					</Icon>
				{:else}
					<Icon props={{ viewBox: '0 0 5 5' }}>
						<circle cx="2.5" cy="2.5" r="1.5" fill="#030104" />
					</Icon>
				{/if}
			</slot>
		</div>
	</button>

	<label for={id} data-linethrought={lineThroughtOnCheck}>
		<slot />
	</label>
</div>

<style>
	@layer components {
		.ui-radio-variant-faded {
			& button[role='checkbox'] {
				background-color: var(--color-surface-hight);
				border: solid 2px var(--color-surface-highest);
				&::after {
					background-color: transparent;
				}
				& polyline,
				path,
				svg {
					stroke: var(--color-container);
				}

				/* &[data-checked='true'] {
				}
				&[data-checked='false'] {
				} */
			}
			& button[role='radio'] {
				background-color: var(--color-surface-hight);
				border: solid 2px var(--color-surface-highest);
				& circle {
					fill: var(--color-container);
				}
				&::after {
					background-color: transparent;
				}
			}
		}
		.ui-radio-variant-flat {
			& button[role='checkbox'] {
				background-color: color-mix(in srgb, var(--color-container), transparent 70%);
				border: solid 2px var(--color-container);

				&::after {
					background-color: transparent;
				}
				& polyline,
				path,
				svg {
					stroke: var(--color-container);
				}
				/* &[data-checked='true'] {
					border-color: var(--color-container);
				}
				&[data-checked='false'] {
				} */
			}
			& button[role='radio'] {
				background-color: color-mix(in srgb, var(--color-container), transparent 70%);
				border: solid 2px var(--color-container);
				& circle {
					fill: var(--color-container);
				}
				&::after {
					background-color: transparent;
				}
			}
		}
		.ui-radio-variant-solid {
			& button[role='checkbox'] {
				background-color: var(--color-surface-hight);
				border: solid 2px var(--color-surface-highest);
				& polyline {
					stroke: var(--color-text);
				}
				/*
				&[data-checked='false'] {
				} */
			}
			& button[role='radio'] {
				background-color: var(--color-surface-hight);
				border: solid 2px var(--color-surface-highest);
				& circle {
					fill: var(--color-text);
				}
			}
		}
		.ui-radio-variant-neon {
			& button[role='checkbox'] {
				background-color: var(--color-surface-hight);
				border: solid 2px var(--color-surface-highest);
				& polyline {
					stroke: var(--color-text);
				}
				&[data-checked='true'] {
					box-shadow: 0 0 10px var(--color-container);
				}
			}
			& button[role='radio'] {
				background-color: var(--color-surface-hight);
				border: solid 2px var(--color-surface-highest);
				& circle {
					fill: var(--color-text);
				}
				&[data-checked='true'] {
					box-shadow: 0 0 10px var(--color-container);
				}
			}
		}
	}
	@layer nova {
		.ui-radio {
			display: flex;
			gap: 0.5rem;
			align-items: center;
			& button[disabled] {
				filter: brightness(0.7);
			}

			& label {
				position: relative;
				&::after {
					transition: all 0.2s ease;
					display: block;
					content: '';
					position: absolute;
					top: 50%;
					width: 0;
					height: 2px;
					background-color: currentColor;
				}
			}
		}
		.ui-radio > button[role='radio'] {
			cursor: pointer;
			padding: 2px;
			border-radius: var(--radius-full);
			position: relative;
			& div {
				z-index: 2;
				position: relative;
				left: 0px;
				/* top: 1px; */
			}
			& circle {
				r: 0;
				transition: all 0.2s ease;
			}
			&[data-checked='true'] circle {
				r: 1.5;
			}

			&::after {
				display: block;
				position: absolute;
				width: calc(100% + 4px);
				height: calc(100% + 4px);
				top: -2px;
				left: -2px;
				background-color: var(--color-container);
				z-index: 1;
				scale: 0;
				content: '';
				border-radius: var(--radius-full);
			}
			&[data-checked='true']::after {
				scale: 1;
				transition: all 0.2s ease;
			}
			&[data-checked='false']::after {
				transition: all 0.2s ease 0.2s;
			}
		}
		.ui-radio > button[role='checkbox'] {
			padding: 2px;
			cursor: pointer;
			border-radius: var(--radius-lg);
			position: relative;

			& div {
				z-index: 2;
				position: relative;
				left: 1px;
				/* top: 1px; */
			}
			&::after {
				display: block;
				position: absolute;
				width: calc(100% + 4px);
				height: calc(100% + 4px);
				top: -2px;
				left: -2px;
				background-color: var(--color-container);
				z-index: 1;
				scale: 0;
				content: '';
				border-radius: var(--radius-lg);
			}

			&[data-checked='true'] + label[data-linethrought='true'] {
				filter: brightness(50%);
				&::after {
					width: 100%;
				}
			}

			&[data-checked='true']::after {
				scale: 1;
				transition: all 0.2s ease;
			}
			&[data-indeterminated='true']::after {
				scale: 1;
				transition: all 0.2s ease;
			}

			&[data-checked='false']::after {
				transition: all 0.2s ease 0.4s;
			}
			& polyline {
				transition: stroke-dashoffset 250ms ease-in-out 0.2s;
			}
			&[data-checked='true'] polyline {
				stroke-dashoffset: 0;
			}
			&[data-checked='false'] polyline {
				stroke-dashoffset: 22;
			}
		}
	}
</style>
