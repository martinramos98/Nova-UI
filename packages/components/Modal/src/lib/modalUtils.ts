
export interface ModalContentProps {
	className: string;
	transitionOnRender: any;
}
export interface ModalBackdropProps {
	className: string;
	type: BackdropType;
	transitionOnRender: any;
}
export type BackdropType = 'opaque' | 'blur' | 'transparent';
