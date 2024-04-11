import Toast from './Toast.svelte';
export interface ToastProps {}
import { mount } from 'svelte';
export function toast(where: string, props: ToastProps, delay?: number) {
	const comp = mount(Toast, {
		target: document.body,
		props: {
			...props,
			delay,
			onClose: () => {
				comp.$destroy();
			}
		}
	});
}
