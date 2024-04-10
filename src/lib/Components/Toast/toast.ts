import Toast from './Toast.svelte';
export interface ToastProps {}
export function toast(where: string, props: ToastProps, delay?: number) {
	const comp = new Toast({
		target: document.body,
		props: {
			...props,
			delay,
			onClose: () => {
				comp.$destroy();
			}
		}
	});
	if (delay) {
		setTimeout(() => {
			comp.$destroy();
		}, delay + 200);
	}
}
