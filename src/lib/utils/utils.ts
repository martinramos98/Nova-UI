export type ClickPositionResolver = (args: {
	element: HTMLElement;
	offset: number;
	mouseRelativePosition?: { x: number; y: number };
	mouseRealPosition?: { x: number; y: number };
}) => string | undefined;
const availableClickContentPositions: Record<string, ClickPositionResolver> = {
	top: ({
		element,
		offset,
		mouseRelativePosition = { x: 0, y: 0 },
		mouseRealPosition = { x: 0, y: 0 }
	}) => {
		if (mouseRealPosition.y - element.offsetHeight + offset > 0) {
			return `left:${mouseRelativePosition.x}px;top:${mouseRelativePosition.y + element.offsetHeight}px`;
		} else {
			return undefined;
		}
	},
	bottom: ({
		element,
		offset,
		mouseRelativePosition = { x: 0, y: 0 },
		mouseRealPosition = { x: 0, y: 0 }
	}) => {
		if (mouseRealPosition.y + element.offsetHeight + offset < window.innerHeight) {
			return `left:${mouseRelativePosition.x}px;top:${mouseRelativePosition.y - offset}px`;
		} else {
			return undefined;
		}
	},
	left: ({
		element,
		offset,
		mouseRelativePosition = { x: 0, y: 0 },
		mouseRealPosition = { x: 0, y: 0 }
	}) => {
		if (mouseRealPosition.x - element.offsetHeight + offset > 0) {
			return `left:${mouseRelativePosition.x - element.offsetWidth - offset}px;top:${mouseRelativePosition.y}px`;
		} else {
			return undefined;
		}
	},
	right: ({
		element,
		offset,
		mouseRelativePosition = { x: 0, y: 0 },
		mouseRealPosition = { x: 0, y: 0 }
	}) => {
		if (mouseRealPosition.x + element.offsetHeight + offset > window.innerWidth) {
			return `right:-${mouseRelativePosition.x + element.offsetWidth + offset}px;top:${mouseRelativePosition.y}px`;
		} else {
			return undefined;
		}
	}
};
const availableFloatingDependantPositions: Record<string, PositionResolver> = {
	'top-end': ({ element, offset }) => {
		const overflow = isOverflowingWindow(
			(element.parentElement as HTMLElement).getBoundingClientRect(),
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		if (!overflow.top) {
			return `top:-${element.offsetHeight + offset}px;${overflow.right ? 'left' : 'right'}:0px`;
		} else {
			return undefined;
		}
	},
	top: ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		if (!overflow.top) {
			return `top:-${element.offsetHeight + offset}px;left:${parentBounds.width / 2 - element.offsetWidth / 2}px`;
		} else {
			return undefined;
		}
	},
	'top-start': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		if (!overflow.top) {
			return `top:-${element.offsetHeight + offset}px;${overflow.left ? 'right' : 'left'}:0px`;
		} else {
			return undefined;
		}
	},
	'bottom-end': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		if (!overflow.bottom) {
			return `bottom:-${element.offsetHeight + offset}px;${overflow.left ? 'left' : 'right'}:0px`;
		} else {
			return undefined;
		}
	},
	bottom: ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		if (!overflow.bottom) {
			return `bottom:-${element.offsetHeight + offset}px;left:${parentBounds.width / 2 - element.offsetWidth / 2}px`;
		} else {
			return undefined;
		}
	},
	'bottom-start': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		if (!overflow.bottom) {
			return `bottom:-${element.offsetHeight + offset}px;${overflow.right ? 'right' : 'left'}:0px`;
		} else {
			return undefined;
		}
	},
	'right-end': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		if (!overflow.right) {
			return `right:-${element.offsetWidth + offset}px;${overflow.top ? 'bottom' : 'top'}:0px`;
		} else {
			return undefined;
		}
	},
	right: ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		const width = element.offsetWidth;
		if (!overflow.right) {
			return `right:-${width + offset}px;${overflow.bottom ? 'top' : 'bottom'}:${parentBounds.height / 2}px`;
		} else {
			return undefined;
		}
	},
	'right-start': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		const width = element.offsetWidth;
		if (!overflow.right) {
			return `right:-${width + offset}px;${overflow.top ? 'bottom' : 'top'}:0px`;
		} else {
			return undefined;
		}
	},
	'left-end': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		if (!overflow.left) {
			return `${overflow.bottom ? 'top' : 'bottom'}:0px;left:-${element.offsetWidth + offset}px`;
		} else {
			return undefined;
		}
	},
	left: ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();

		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		const width = element.offsetWidth;
		if (!overflow.left) {
			return `${overflow.bottom ? 'top' : 'bottom'}:${parentBounds.height / 2}px;left:-${width + offset}px`;
		} else {
			return undefined;
		}
	},
	'left-start': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(
			parentBounds,
			element.offsetWidth,
			element.offsetHeight,
			offset
		);
		const width = element.offsetWidth;
		if (!overflow.left) {
			return `${overflow.bottom ? 'bottom' : 'top'}:0px;left:-${width + offset}px`;
		} else {
			return undefined;
		}
	}
};

const availablePositionsPopover: Record<string, PositionResolver> = {
	...availableFloatingDependantPositions,
	left: ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const width = element.offsetWidth;
		if (parentBounds.left - (width + offset) > 0) {
			return `top:${parentBounds.height / 2 - element.offsetHeight / 2}px;left:-${width + offset}px`;
		} else {
			return undefined;
		}
	},
	right: ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const width = element.offsetWidth;
		if (parentBounds.right + (width + offset) < window.innerWidth) {
			return `right:-${width + offset}px;top:${parentBounds.height / 2 - element.offsetHeight / 2}px`;
		} else {
			return undefined;
		}
	}
};

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
export function setPositionContextMenu(args: {
	position: string;
	offset: number;
	element: HTMLElement;
	mouseRelativePosition: { x: number; y: number };
	mouseRealPosition: { x: number; y: number };
}) {
	const resolvePosition = createPositionResolver(availableClickContentPositions);
	const result = resolvePosition(args);
	args.element.style.cssText = result as string;
}
export function setPosisitionPopover(args: {
	position: string;
	offset: number;
	element: HTMLElement;
}) {
	const resolvePosition = createPositionResolver(availablePositionsPopover);
	const result = resolvePosition(args);
	args.element.style.cssText = result as string;
}
export function setFloatingPosition(args: {
	element: HTMLElement;
	position: string;
	offset: number;
}) {
	const resolvePosition = createPositionResolver(availableFloatingDependantPositions);
	const result = resolvePosition(args);
	args.element.style.cssText = result as string;
}
// Si es undefined entonces no es una position valida
type PositionResolver = (args: { element: HTMLElement; offset: number }) => string | undefined;

export function createPositionResolver(
	availablePositions: Record<string, PositionResolver | ClickPositionResolver>
) {
	return (args: { position: string; element: HTMLElement; offset: number }) => {
		if (availablePositions[args.position] && !!availablePositions[args.position](args)) {
			return availablePositions[args.position](args);
		} else {
			for (const availablePosition in availablePositions) {
				if (
					availablePositions[availablePosition] &&
					!!availablePositions[availablePosition](args)
				) {
					return availablePositions[availablePosition](args);
				}
			}
		}
	};
}

function isOverflowingWindow(parentBounds: DOMRect, width: number, height: number, offset: number) {
	const overflow = {
		top: false,
		bottom: false,
		left: false,
		right: false
	};
	if (!(parentBounds.top - (height + offset) > 0)) overflow.top = true;
	if (!(parentBounds.bottom + (height + offset) < window.innerHeight)) overflow.bottom = true;
	if (!(parentBounds.left - (width + offset) > 0)) overflow.left = true;
	if (!(parentBounds.right + (width + offset) < window.innerWidth)) overflow.right = true;
	return overflow;
}
