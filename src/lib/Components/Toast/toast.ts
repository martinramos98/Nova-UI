import Toast from './Toast.svelte';
export interface ToastProps {}
import { getContext, mount, unmount, hydrate } from 'svelte';
export function toast(where: string, props: ToastProps, delay?: number) {
	let container = document.body.querySelector(`.ui-toast-container.${where}`);
	if (!container) {
		// TODO: for an animation from prepend a node on a parent must create the component in a document fragment without render this. Then, prepend the element on render and last, animate the element.
		container = document.createElement('div');
		container.classList.add('ui-toast-container', where);
		document.body.append(container);
	}
	const comp = mount(Toast, {
		target: container as Element,
		props: {
			...props,
			delay,
			onClose: () => {
				unmount(comp);
				if (container.childElementCount === 0) {
					container.remove();
				}
			}
		}
	});
}
