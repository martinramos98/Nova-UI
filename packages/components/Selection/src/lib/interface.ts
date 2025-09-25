import type { Snippet } from 'svelte';
import type { HTMLLabelAttributes } from 'svelte/elements';

export interface ISelectionProps {
	multiselection?: boolean;
	type?: SelectionTypes;
	variant?: SelectionVariants;
	colors?: string;
	id?: string;
	ariaDescribedBy?: string;
	selectionLabel?: string;
	disabled?: boolean;
	isInvalid?: boolean;
	errorMessage?: string;
	label?: {
		labelPosition?: 'inside' | 'outside';
	} & HTMLLabelAttributes;
	class?: string;
	classOptionsContainer?: string;
	classSelected?: string;
	classInputBox?: string;
	placeholder?: string;
	selectedValue?: Set<any>;
	open?: boolean;
	onSelect?: undefined | ((value: any) => void);
	children: Snippet;
	transitionSelectionBoxProps?: {
		easing: any;
		duration: number;
	};
}

export type SelectionVariants =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'success'
	| 'warning'
	| 'danger'
	| string;

export type SelectionTypes =
	| 'default'
	| 'outlined'
	| 'filled'
	| 'underlined'
	| 'blurred'
	| 'flat'
	| 'faded'
	| string;
