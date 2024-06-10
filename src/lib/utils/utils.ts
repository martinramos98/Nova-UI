export type ClickPositionResolver = (args: { element: HTMLElement, offset: number, mouseRelativePosition?: { x: number, y: number; }, mouseRealPosition?: { x: number, y: number; }; }) => string | undefined;
const availableClickContentPositions: Record<string, ClickPositionResolver> = {
	top: ({ element, offset, mouseRelativePosition = { x: 0, y: 0 }, mouseRealPosition = { x: 0, y: 0 } }) => {
		if (mouseRealPosition.y - element.offsetHeight + offset > 0) {
			return `left:${mouseRelativePosition.x}px;top:${mouseRelativePosition.y + element.offsetHeight}px`;
		} else {
			return undefined;
		}
	},
	bottom: ({ element, offset, mouseRelativePosition = { x: 0, y: 0 }, mouseRealPosition = { x: 0, y: 0 } }) => {
		if (mouseRealPosition.y + element.offsetHeight + offset < window.innerHeight) {
			return `left:${mouseRelativePosition.x}px;top:${mouseRelativePosition.y - offset}px`;
		} else {
			return undefined;
		}
	},
	left: ({ element, offset, mouseRelativePosition = { x: 0, y: 0 }, mouseRealPosition = { x: 0, y: 0 } }) => {
		if (mouseRealPosition.x - element.offsetHeight + offset > 0) {
			return `left:${mouseRelativePosition.x - element.offsetWidth - offset}px;top:${mouseRelativePosition.y}px`;
		} else {
			return undefined;
		}
	},
	right: ({ element, offset, mouseRelativePosition = { x: 0, y: 0 }, mouseRealPosition = { x: 0, y: 0 } }) => {
		if (mouseRealPosition.x + element.offsetHeight + offset > window.innerWidth) {
			return `right:-${mouseRelativePosition.x + element.offsetWidth + offset}px;top:${mouseRelativePosition.y}px`;
		} else {
			return undefined;
		}
	}
};
const availableFloatingDependantPositions: Record<string, PositionResolver> = {
	'top-end': ({ element, offset }) => {
		const overflow = isOverflowingWindow((element.parentElement as HTMLElement).getBoundingClientRect(),element.offsetWidth,element.offsetHeight,offset)
		if (!overflow[0]) {
			return `top:-${element.offsetHeight + offset}px;${overflow[4] ? 'left':'right'}:0px`;
		} else {
			return undefined;
		}
	},
	top: ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		console.log(overflow)
		if (!overflow[0]) {
			return `top:-${element.offsetHeight + offset}px;left:${parentBounds.width / 2 - element.offsetWidth / 2}px`;
		} else {
			return undefined;
		}
	},
	'top-start': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		if (!overflow[0]) {
			return `top:-${element.offsetHeight + offset}px;${overflow[3] ? 'right':'left'}:0px`;
		} else {
			return undefined;
		}
	},
	'bottom-end': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		if (!overflow[1]) {
			return `bottom:-${element.offsetHeight + offset}px;${overflow[3] ? 'left':'right'}:0px`;
		} else {
			return undefined;
		}
	},
	bottom: ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		if (!overflow[1]) {
			return `bottom:-${element.offsetHeight+ offset}px;left:${parentBounds.width / 2 - element.offsetWidth / 2}px`;
		} else {
			return undefined;
		}
	},
	'bottom-start': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		if (!overflow[1]) {
			return `bottom:-${element.offsetHeight+ offset}px;${overflow[4] ? 'right':'left'}:0px`;
		} else {
			return undefined;
		}
	},
	'right-end': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		if (parentBounds.right + (element.offsetWidth + offset) < window.innerWidth) {
			return `right:-${element.offsetWidth + offset}px;${overflow[0] ? 'bottom':'top'}:0px`;
		} else {
			return undefined;
		}
	},
	right: ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		const width = element.offsetWidth;
		if (!overflow[4]) {
			return `right:-${width + offset}px;${overflow[1]?'top':'bottom'}:${parentBounds.height / 2}px`;
		} else {
			return undefined;
		}
	},
	'right-start': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		const width = element.offsetWidth;
		if (!overflow[4]) {
			return `right:-${width + offset}px;${overflow[0]?'bottom':'top'}:0px`;
		} else {
			return undefined;
		}
	},
	'left-end': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		if (!overflow[3]) {
			return `${overflow[1]?'top':'bottom'}:0px;left:-${element.offsetWidth + offset}px`;
		} else {
			return undefined;
		}
	},
	left: ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();

		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		const width = element.offsetWidth;
		if (!overflow[3]) {
			return `${overflow[1]?'top':'bottom'}:${parentBounds.height / 2}px;left:-${width + offset}px`;
		} else {
			return undefined;
		}
	},
	'left-start': ({ element, offset }) => {
		const parentBounds = (element.parentElement as HTMLElement).getBoundingClientRect();
		const overflow = isOverflowingWindow(parentBounds,element.offsetWidth,element.offsetHeight,offset)
		const width = element.offsetWidth;
		if (!overflow[3]) {
			return `${overflow[0]?"bottom":'top'}:0px;left:-${width + offset}px`;
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
export function setPositionContextMenu(
	args: {
		position: string;
		offset: number;
		element: HTMLElement;
		mouseRelativePosition: { x: number, y: number; };
		mouseRealPosition: { x: number, y: number; };
	}
) {
	const resolvePosition = createPositionResolver(availableClickContentPositions);
	const result = resolvePosition(args);
	args.element.style.cssText = result as string;
}
export function setPosisitionPopover(
	args: {
		position: string;
		offset: number;
		element: HTMLElement;
	}
) {
	const resolvePosition = createPositionResolver(availablePositionsPopover);
	const result = resolvePosition(args);
	args.element.style.cssText = result as string;
}
export function setFloatingPosition(
	args: { element: HTMLElement, position: string; offset: number; }
) {
	const resolvePosition = createPositionResolver(availableFloatingDependantPositions);
	const result = resolvePosition(args);
	args.element.style.cssText = result as string;
}
// Si es undefined entonces no es una position valida
type PositionResolver = (args: { element: HTMLElement, offset: number; }) => string | undefined;

export function createPositionResolver(availablePositions: Record<string, PositionResolver | ClickPositionResolver>) {
	return (args: { position: string, element: HTMLElement, offset: number; }) => {
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

function isOverflowingWindow(parentBounds:DOMRect,width:number, height:number, offset:number){
	const overflow = [false,false,false,false]
	if(!(parentBounds.top - (height + offset) > 0))
		overflow[0] = true
	if(!(parentBounds.bottom + (height + offset) < window.innerHeight))
		overflow[1] = true
	if(!(parentBounds.left - (width + offset) > 0))
		overflow[2] = true
	if(!(parentBounds.right + (width + offset) < window.innerWidth))
		overflow[3] = true
	return overflow
}