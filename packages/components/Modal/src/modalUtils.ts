import type { TransitionFunction } from '$lib/app/Entities/Motioning.js';

export interface ModalContentProps {
	className: string;
	transitionOnRender: TransitionAnimationRender;
}
export interface ModalBackdropProps {
	className: string;
	type: BackdropType;
	transitionOnRender: TransitionAnimationRender;
}
export type BackdropType = 'opaque' | 'blur' | 'transparent';
