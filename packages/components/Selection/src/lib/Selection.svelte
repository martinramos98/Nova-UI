<script lang="ts">
	import { setFloatingPosition } from '@nv-org/utils';
	import { Icon } from '@nv-org/icon';
	import type { ISelectionProps } from './interface.js';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	let {
		multiselection = false,
		type = 'default',
		variant = 'default',
		colors = 'primary',
		selectionLabel = '',
		disabled = false,
		isInvalid = false,
		errorMessage = undefined,
		label = {
			labelPosition: 'inside'
		},
		classOptionsContainer = '',
		classSelected = '',
		classInputBox = '',
		placeholder = '',
		selectedValue = $bindable(new Set()),
		onSelect = undefined,
		open = $bindable(false),
		transitionSelectionBoxProps = {
			duration: 250,
			easing: cubicInOut
		},
		children
	}: ISelectionProps = $props();

	let selectionEL: HTMLElement;
	let transitionProps = {
		duration: transitionSelectionBoxProps.duration,
		easing: transitionSelectionBoxProps.easing,
		y: -10,
		x: 0
	};
	label = {
		labelPosition: 'inside',
		...label
	};

	function setNewSelection(sel: Set<any>) {
		selectedValue = sel;
	}

	function onselecthandler(value: any, label: any) {
		onSelect && onSelect(value);
		let isSelected = false;
		if (multiselection) {
			let sel = new Set(selectedValue);

			isSelected = Array.from(sel).some((item) => item.value === value);
			isSelected ? sel.delete({ value, label }) : sel.add({ value, label });
			setNewSelection(sel);
		} else {
			isSelected = Array.from(selectedValue).some((item) => item.value === value);
			selectedValue = isSelected ? new Set() : new Set([{ value, label }]);
		}
		open = false;
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
		if (label.labelPosition === 'inside') {
			top = spanBoundings?.height as number;
		} else if (label.labelPosition === 'outside') {
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
		open = !open;
		if (open) {
			window.addEventListener('click', onClickOutsideSelection);
		}
	}
	function onClickOutsideSelection(ev: MouseEvent) {
		if (
			!(ev.target as Element).closest('.ui-selection') ||
			!selectionEL.contains(ev.target as Node)
		) {
			open = false;
			// animationSelection.reverse();
		}
		ev.preventDefault();
	}

	function setSelectionPosition(element: HTMLElement) {
		setFloatingPosition({ element, position: 'bottom', offset: 5 });
	}
</script>

<div
	role="listbox"
	class={[
		'ui-selection',
		colors && `ui-color-${colors}`,
		variant && `ui-selection-variant-${variant}`
	]}
	data-selection-open={open}
	aria-multiselectable={multiselection}
	bind:this={selectionEL}
>
	<button {disabled} onclick={toggleSelection} class={['ui-selection-input', classInputBox]}>
		<div>
			{#if selectedValue.size === 0}
				{placeholder}
			{:else}
				{#each selectedValue as selectedValue}
					<span class={classSelected}>
						{#if typeof selectedValue.label === 'string'}
							{selectedValue.label}
						{:else}
							{@render selectedValue.label()}
						{/if}
					</span>
				{/each}
			{/if}
			<Icon
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="color-mix(in srgb, var(--color-icon, currentColor) 80%, transparent 30%)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="m6 9 6 6 6-6" />
			</Icon>
		</div>
		{#if selectionLabel !== ''}
			<label
				{...label}
				class={[
					label.class,
					'ui-selection-label',
					label.labelPosition && `${label.labelPosition}-label`
				]}
				use:setLabelPositioning={open}
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
	{#if open}
		<div
			use:setSelectionPosition
			use:setOpenHandlersToOptions
			transition:fly={transitionProps}
			class={['ui-selection-options-container', classOptionsContainer]}
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

			& .ui-selection-input {
				> div {
					display: flex;
					flex-wrap: wrap;
					flex-direction: row;
					align-items: center;
				}
			}
			&.ui-selection-variant-default {
				--color-icon: var(--color-text);
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
				--color-icon: var(--color-container);
				color: var(--color-container);
				& .ui-selection-input {
					color: var(--color-on-surface);
					border-radius: var(--radius-lg);
					background-color: color-mix(in srgb, var(--color-container), transparent 95%);
					backdrop-filter: blur(5px);
					& > div {
						color: color-mix(in srgb, var(--color-on-surface) 80%, transparent 50%);
					}
					& span {
						background-color: color-mix(in srgb, var(--color-subcontainer), transparent 90%);
					}
				}
				& .ui-selection-options-container {
					border-radius: var(--radius-lg);
					background-color: color-mix(in srgb, var(--color-container), transparent 95%);
					color: var(--color-on-surface);
					backdrop-filter: blur(5px);
				}
			}
			&.ui-selection-variant-flat {
				--color-icon: var(--color-container);
				& .ui-selection-input {
					border-radius: var(--radius-xl);
					background-color: color-mix(
						in srgb,
						var(--color-container) 25%,
						var(--color-surface) 75%
					);
					color: var(--color-container);
					& span {
						background-color: color-mix(
							in srgb,
							var(--color-subcontainer),
							var(--color-surface) 70%
						);
						color: var(--color-container);
					}
					& > div {
						color: var(--color-container);
					}
				}
				& .ui-selection-options-container {
					border-radius: var(--radius-lg);
					background-color: color-mix(
						in srgb,
						var(--color-container) 25%,
						var(--color-surface) 75%
					);
					color: var(--color-container);
					& > .ui-selection-option {
						background-color: transparent;
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
				--color-icon: var(--color-container);
				& .ui-selection-input {
					background-color: var(--color-surface);
					color: var(--color-container);
					border-radius: var(--radius-xl);
					& span {
						color: var(--color-subtext);
						background-color: var(--color-subcontainer);
					}
				}
				& .ui-selection-options-container {
					background-color: var(--color-surface);
					color: var(--color-container);
					border-radius: var(--radius-xl);
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
		@media (prefers-color-scheme: dark) {
			.ui-selection.ui-selection-variant-faded {
				& .ui-selection-input {
					border: 2px solid var(--color-surface-hight);
				}
				& .ui-selection-options-container {
					border: 2px solid var(--color-surface-hight);
				}
			}
		}
		@media (prefers-color-scheme: light) {
			.ui-selection.ui-selection-variant-faded {
				& .ui-selection-input {
					border: 2px solid var(--color-surface-low);
				}
				& .ui-selection-options-container {
					border: 2px solid var(--color-surface-low);
				}
			}
		}
	}
	@layer nova {
		.ui-selection-input {
			padding: 10px 10px 10px 10px;
			min-width: 100px;
			width: 100%;
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
					color: color-mix(in srgb, var(--color-text) 80%, transparent 30%);
				}
				& span {
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
