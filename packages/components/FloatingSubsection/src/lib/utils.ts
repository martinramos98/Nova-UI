import { isOverflowingWindow, type PositionResolver, createPositionResolver } from '@nv-org/utils'

const availablePositionSubsections: Record<string, PositionResolver> = {
	left: ({ element, offset }) => {
		const overflow = isOverflowingWindow(
			element.parentElement?.getBoundingClientRect() as DOMRect,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		return !overflow.left
			? `padding-right:${offset}px;left:-${element.offsetWidth + offset}px;${overflow.bottom ? 'bottom' : 'top'}0px`
			: undefined;
	},
	right: ({ element, offset }) => {
		const overflow = isOverflowingWindow(
			element.parentElement?.getBoundingClientRect() as DOMRect,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		return !overflow.right
			? `padding-left:${offset}px;right:-${element.offsetWidth + offset}px;${overflow.bottom ? 'bottom' : 'top'}:0px;`
			: undefined;
	},
	top: ({ element, offset }) => {
		const overflow = isOverflowingWindow(
			element.parentElement?.getBoundingClientRect() as DOMRect,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		return !overflow.top
			? `padding-bottom:${offset}px;top:-${element.offsetHeight};${overflow.left ? 'right' : 'left'}:0px;`
			: undefined;
	},
	bottom: ({ element, offset }) => {
		const overflow = isOverflowingWindow(
			element.parentElement?.getBoundingClientRect() as DOMRect,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		return !overflow.bottom
			? `padding-top:${offset}px;bottom:-${element.offsetHeight + offset}px;${overflow.left ? 'right' : 'left'}:0px;`
			: undefined;
	}
};
export function setSubsectionPosition(args: {
	element: HTMLElement;
	offset: number;
	position: string;
}) {
	const resolvePosition = createPositionResolver(availablePositionSubsections);
	args.element.style.cssText = resolvePosition(args) ?? '';
}