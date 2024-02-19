import type { Action } from 'svelte/action';
export interface ActionButtonArgs {
	buttonElementProps: ButtonElementProps | undefined;
	withClickEffect: boolean;
}
export interface ButtonElementProps {
	events?: Record<keyof HTMLElementEventMap, EventListenerOrEventListenerObject>;
	attr?: Record<string, string>;
	props?: Record<string, any>;
}
const buttonAction: Action<HTMLElement, ActionButtonArgs | undefined> = (node, actionArgs) => {
	const { withClickEffect, buttonElementProps } = actionArgs as ActionButtonArgs;
	function clickEffect(ev: MouseEvent) {
		const el = document.createElement('span');
		const bounds = node.getBoundingClientRect();
		const circunsference = (bounds.width + bounds.height) * 2;
		el.className = 'click-effect-element';
		const pos = {
			x: (ev.clientX - bounds.left - circunsference / 2).toString(),
			y: (ev.clientY - bounds.top - circunsference / 2).toString()
		};
		el.style.cssText = `width:${circunsference}px;height:${circunsference}px;top:${pos.y}px;left:${pos.x}px;`;
		node.appendChild(el);
		const keyframe = [
			{ scale: '0', opacity: '1' },
			{ scale: '1', opacity: '0' }
		];
		const timing: KeyframeAnimationOptions = {
			duration: 1000,
			iterations: 1,
			easing: 'ease'
		};
		const animation = el.animate(keyframe, timing);
		animation.addEventListener('finish', () => {
			el.remove();
		});
	}
	if (!buttonElementProps) {
		return;
	}
	for (const eventName in buttonElementProps.events) {
		node.addEventListener(eventName, buttonElementProps.events[eventName]);
	}
	for (const attrName in buttonElementProps.attr) {
		node.setAttribute(attrName, buttonElementProps.attr[attrName]);
	}
	for (const propName in buttonElementProps.props) {
		// @ts-expect-error This is just for test porpouses
		node[propName] = buttonElementProps.props[propName];
	}
	if (withClickEffect) {
		node.addEventListener('mouseup', clickEffect);
	}
	return {
		destroy() {
			for (const eventName in buttonElementProps.events) {
				node.removeEventListener(eventName, buttonElementProps.events[eventName]);
			}
			node.removeEventListener('mouseup', clickEffect);
		}
	};
};
export default buttonAction;
