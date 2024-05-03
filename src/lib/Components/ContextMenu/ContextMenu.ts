import { getContext, setContext } from 'svelte';

export interface ContextMenuContext {
	openContextMenu: (ev: MouseEvent) => void;
	closeContextMenu: () => void;
	ref: null | HTMLElement;
}

export function provideContextMenu() {
	return setContext<ContextMenuContext>('contexMenu-context', {
		openContextMenu: () => {},
		closeContextMenu: () => {},
		ref: null
	});
}

export function asContextMenuContainer(node: HTMLElement) {
	console.log('setting container',node)
	node.classList.add('relative');
	const context = getContext<ContextMenuContext>('contexMenu-context');
	node.addEventListener('contextmenu', (ev) => {

		ev.preventDefault();
		ev.stopImmediatePropagation();
		if((ev.target as HTMLElement).closest('.ui-context-menu')){
			return
		}
		if (ev.button === 2) {
			console.log(context)
			context.openContextMenu(ev);
			window.addEventListener('click', handleWindowEventOnOpenMenu);
		}
	});
	function handleWindowEventOnOpenMenu(ev: MouseEvent) {
		if (ev.button === 0 && !context.ref?.contains(ev.target as HTMLElement)) {
			context.closeContextMenu();
			window.removeEventListener('click', handleWindowEventOnOpenMenu);
		}
	}
}
