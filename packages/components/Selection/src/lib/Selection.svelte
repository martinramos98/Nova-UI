<script lang="ts">
	import { ElementAnimation, type ElementAnimationParams } from '@nv-org/element-animation-js';
	import { setFloatingPosition } from '@nv-org/utils';
	import type { Snippet } from 'svelte';
	interface SelectionProps {
		multiselection?: boolean;
		type?: 'default' | 'outlined' | 'filled' | 'underlined' | 'blurred' | 'flat' | 'faded' | string;
		variant?:
			| 'default'
			| 'primary'
			| 'secondary'
			| 'tertiary'
			| 'success'
			| 'warning'
			| 'danger'
			| string;
		colors?: string;
		selectionLabel?: string;
		disabled?: boolean;
		isInvalid?: boolean;
		errorMessage?: string;
		labelProps?: {
			className?: string;
			labelPosition?: 'inside' | 'outside';
		};
		class?: string;
		classOptionsContainer?: string;
		classSelected?: string;
		classInputBox?: string;
		placeholder?: string;
		selectedValue?: any;
		onSelect?: undefined | ((value: any) => void);
		children: Snippet;
	}
	let {
		multiselection = false,
		type = 'default',
		variant = 'default',
		colors = 'primary',
		selectionLabel = '',
		disabled = false,
		isInvalid = false,
		errorMessage = undefined,
		labelProps = { className: '', labelPosition: 'inside' },
		class: className = '',
		classOptionsContainer = '',
		classSelected = '',
		classInputBox = '',
		placeholder = '',
		selectedValue = $bindable(new Set()),
		onSelect = undefined,
		children
	}: SelectionProps = $props();

	let openSelection = $state(false);
	let render = $state(false);
	let animationSelection: ElementAnimation;
	let selectionEL: HTMLElement;
	function setNewSelection(sel: Set<any>) {
		selectedValue = sel;
	}
	function onselecthandler(value: any) {
		onSelect && onSelect(value);
		let isSelected = false;
		if (multiselection) {
			let sel = new Set(selectedValue);

			isSelected = sel.has(value);
			isSelected ? sel.delete(value) : sel.add(value);
			setNewSelection(sel);
		} else {
			isSelected = selectedValue.has(value);
			selectedValue = isSelected ? new Set() : new Set([value]);
		}
		openSelection = false;
		animationSelection.reverse();
		return isSelected;
	}
	function setOpenHandlersToOptions(node: HTMLElement) {
		// @ts-expect-error custom prop error
		node['onselecthandler'] = onselecthandler;
		// @ts-expect-error custom prop error
		node['type'] = type;
	}
	function setLabelPositioning(labelElement: HTMLLabelElement, open: boolean) {
		if (!placeholder && selectedValue.size === 0) {
			labelElement.classList.toggle('dynamic-position', true);
		}
		let top = 0;
		const spanBoundings = labelElement.previousElementSibling?.getBoundingClientRect();
		if (labelProps.labelPosition === 'inside') {
			top = spanBoundings?.height as number;
		} else if (labelProps.labelPosition === 'outside') {
			top = (spanBoundings?.height as number) + 20;
		}

		if (open || !!placeholder || selectedValue.size !== 0) {
			labelElement.style.translate = `-10px -${top + 3}px`;
			labelElement.style.scale = '0.8';
			(labelElement.parentElement as HTMLElement).style.paddingTop = `${top + 5}px`;
		} else {
			labelElement.style.translate = `0`;
			labelElement.style.scale = '1';
		}
		return {
			update(open: boolean) {
				if (open || !!placeholder || selectedValue.size !== 0) {
					labelElement.style.translate = `-10px -${top + 3}px`;
					labelElement.style.scale = '0.8';
					(labelElement.parentElement as HTMLElement).style.paddingTop = `${top + 5}px`;
				} else {
					labelElement.style.translate = `0px`;
					labelElement.style.scale = '1';
					(labelElement.parentElement as HTMLElement).style.paddingTop = ``;
				}
			}
		};
	}
	function toggleSelection() {
		openSelection = !openSelection;
		if (openSelection) {
			render = true;
			window.addEventListener('click', onClickOutsideSelection);
		}
	}
	function onClickOutsideSelection(ev: MouseEvent) {
		if (
			!(ev.target as Element).closest('.ui-selection') ||
			!selectionEL.contains(ev.target as Node)
		) {
			openSelection = false;
			animationSelection.reverse();
		}
		ev.preventDefault();
	}
	function renderAnimation(node: HTMLElement, open: boolean) {
		const animationOptions: ElementAnimationParams = {
			animations: {
				keyframes: [{ opacity: 0 }, { opacity: 1 }],
				animationOptions: {
					fill: 'both',
					iterations: 1,
					duration: 200,
					easing: 'ease-in-out'
				}
			},
			alternate: false,
			iterations: 1,
			onFinishedAnimation() {
				if (!openSelection) {
					render = false;
					window.removeEventListener('click', onClickOutsideSelection);
				}
			}
		};
		animationSelection = new ElementAnimation(node, animationOptions);
		animationSelection.playForward();
		return {
			update(open: boolean) {
				if (!open) {
					// Redender Close Animation
					animationSelection.reverse();
				}
			}
		};
	}
	function setSelectionPosition(element: HTMLElement) {
		setFloatingPosition({ element, position: 'bottom', offset: 4 });
	}
</script>

<div
	role="listbox"
	class="ui-selection ui-color-{colors} ui-selection-variant-{variant} {className}"
	data-selection-open={render}
	aria-multiselectable={multiselection}
	bind:this={selectionEL}
>
	<button {disabled} onclick={toggleSelection} class="ui-selection-input {classInputBox}">
		<div>
			{#if selectedValue.size === 0}
				{placeholder ?? ''}
			{:else}
				{#each selectedValue as selectedValue}
					<span class={classSelected}>
						{selectedValue}
					</span>
				{/each}
			{/if}
		</div>
		{#if selectionLabel !== ''}
			<label
				use:setLabelPositioning={openSelection}
				class="ui-selection-label {labelProps.labelPosition}-label {labelProps.className}"
			>
				{selectionLabel}
			</label>
		{/if}
	</button>
	{#if isInvalid && errorMessage}
		<span>
			{errorMessage}
		</span>
	{/if}
	{#if render}
		<div
			use:setOpenHandlersToOptions
			use:setSelectionPosition
			use:renderAnimation={openSelection}
			class="ui-selection-options-container {classOptionsContainer}"
		>
			{#if children}
				{@render children()}
			{/if}
		</div>
	{/if}
</div>

<style>
	@layer components {
		.ui-selection {
			position: relative;
			height: fit-content;
			width: fit-content;
			/* color: var(--color-text); */
			&.ui-selection-variant-default {
				& .ui-selection-input {
					border-radius: var(--radius-lg);
					color: var(--color-text);
					background-color: var(--color-container);
					& span {
						background-color: var(--color-subcontainer);
					}
				}
				& .ui-selection-options-container {
					border-radius: var(--radius-lg);
					background-color: var(--color-container);
					color: var(--color-text);
				}
			}
			&.ui-selection-variant-blurred {
				color: var(--color-container);
				& .ui-selection-input {
					color: var(--color-on-surface);
					border-radius: var(--radius-lg);
					background-color: color-mix(in srgb, var(--color-container), transparent 95%);
					backdrop-filter: blur(5px);
				}
				& .ui-selection-options-container {
					border-radius: var(--radius-lg);
					background-color: color-mix(in srgb, var(--color-container), transparent 95%);
					color: var(--color-on-surface);
					backdrop-filter: blur(5px);
				}
			}
			&.ui-selection-variant-flat {
				& .ui-selection-input {
					border-radius: var(--radius-lg);
					background-color: color-mix(in srgb, var(--color-container), black 70%);
					color: var(--color-container);
					& span {
						background-color: color-mix(in srgb, var(--color-subcontainer), black 70%);
						color: var(--color-container);
					}
				}
				& .ui-selection-options-container {
					border-radius: var(--radius-lg);
					background-color: color-mix(in srgb, var(--color-container), black 70%);
					color: var(--color-container);
					& > .ui-selection-option {
						background-color: transparent;
					}
					& option {
						background-color: transparent;
						&:hover {
							background-color: color-mix(in srgb, var(--color-container), transparent 90%);
						}
					}
				}
			}
			&.ui-selection-variant-bordered {
				& .ui-selection-input {
					background-color: var(--color-surface);
					color: var(--color-container);
					border: 2px solid var(--color-border);
					border-radius: var(--radius-lg);
					& span {
						color: var(--color-container);
					}
				}
				& .ui-selection-options-container {
					background-color: var(--color-surface);
					color: var(--color-container);
					border-radius: var(--radius-lg);
					border: 2px solid var(--color-border);
				}
			}
			&.ui-selection-variant-faded {
				& .ui-selection-input {
					background-color: var(--color-surface);
					color: var(--color-container);
					border: 2px solid var(--color-surface-highest);
					border-radius: var(--radius-lg);
					& span {
						color: var(--color-container);
					}
				}
				& .ui-selection-options-container {
					background-color: var(--color-surface);
					color: var(--color-container);
					border-radius: var(--radius-lg);
					border: 2px solid var(--color-surface-highest);
				}
			}
			&.ui-selection-variant-underlined {
				& .ui-selection-input {
					background-color: var(--color-surface);
					color: var(--color-container);
					border-bottom: 2px solid var(--color-border);
					border-radius: var(--radius-none);
					& span {
						color: var(--color-text);
						background-color: var(--color-container);
					}
				}
				& .ui-selection-options-container {
					background-color: var(--color-surface);
					color: var(--color-container);
					border-radius: var(--radius-none);
					border-bottom: 2px solid var(--color-border);
				}
			}
		}
	}
	@layer nova {
		.ui-selection-input {
			padding: 10px 10px 10px 10px;
			min-width: 100px;
			width: 100%;
			/* min-height: 50px; */
			position: relative;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			cursor: pointer;
			transition: all 0.3s ease;
			border-radius: var(--radius-md);
			&[disabled] {
				opacity: 0.5;
			}
			& > div {
				display: block;
				min-height: 20px;
				text-align: start;
				grid-column: 1 / 1;
				grid-row: 1 / 1;
				&:not(:has(span)) {
					opacity: 0.4;
				}
				& span {
					/* color: var(--color-text); */
					padding: 2px 7px;
					opacity: 1;
					margin: 0 2px;
					border-radius: var(--radius-md);
				}
			}
		}
		/* .ui-selection-input:has(label.inside-label) {
			padding-top: 20px;
		} */
		/* .ui-selection-input:has(label.outside-label){

		} */
		label {
			width: max-content;
			display: block;
			grid-column: 1 / 1;
			grid-row: 1 / 1;
		}
		/* [data-selection-open='true'] label {
			scale: 0.8;
		} */
		.dynamic-position {
			transition: all 0.3s ease;
			cursor: pointer;
		}
		.ui-selection-options-container {
			background-color: inherit;
			position: absolute;
			width: 100%;
			z-index: 99;
			padding: 10px;
			border-radius: var(--radius-md);
		}
	}
</style>
