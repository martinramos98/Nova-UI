import {createPositionResolver, type ClickPositionResolver} from '@nv-org/utils'

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