export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ModalSize = Size | '2xl' | '3xl' | 'full';
export type Radius = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type Colors =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'error'
	| 'info'
	| 'success'
	| 'warning';
export type Variants =
	| 'solid'
	| 'flat'
	| 'faded'
	| 'light'
	| 'bordered'
	| 'shadows'
	| 'neon'
	| 'ghost';

export const rounded = {
	xs: 'rounded-xs',
	sm: 'rounded-sm',
	md: 'rounded-md',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	'2xl': 'rounded-2xl',
	'3xl': 'rounded-3xl',
	full: 'rounded-full'
};
