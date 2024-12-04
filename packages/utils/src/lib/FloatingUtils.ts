export interface OverflowsOfEdgesResult {
	top: boolean;
	bottom: boolean;
	left: boolean;
	right: boolean;
}
export type BasicPosition = 'top' | 'bottom' | 'left' | 'right';
export type FullPosition =
	| BasicPosition
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'left-top'
	| 'left-bottom'
	| 'right-top'
	| 'right-bottom';
export interface CalculatedPosition {
	x: number;
	y: number;
}

export function calculatePosition(
	anchor: HTMLElement,
	container: HTMLElement,
	position: FullPosition,
	offset: number
) {
	let result: CalculatedPosition | undefined = undefined;
	let overflowStep = 0;
	const overflowOrder = [
		'left',
		'right',
		'top-left',
		'top-right',
		'bottom-left',
		'bottom-right',
		'left-top',
		'left-bottom',
		'right-top',
		'right-bottom',
		'top',
		'bottom'
	];

	const overflows = overfowsOfEdges(container, anchor);
	while (!result && overflowStep < overflowOrder.length) {
		if (!isOverflowingWindow(overflows, position)) {
			result = calculatePositionsCallbacks[position](container, anchor, offset);
		}
		position = overflowOrder[overflowStep] as FullPosition;
		overflowStep++;
	}
	return result as CalculatedPosition;
}

export function isOverflowingWindow(
	overflows: OverflowsOfEdgesResult,
	position: FullPosition
): boolean {
	switch (position) {
		case 'top':
			return overflows.top;
		case 'bottom':
			return overflows.bottom;
		case 'left':
			return overflows.left;
		case 'right':
			return overflows.right;
		case 'top-left':
			return overflows.top || overflows.right;
		case 'top-right':
			return overflows.top;
		case 'bottom-left':
			return overflows.bottom || overflows.right;
		case 'bottom-right':
			return overflows.bottom || overflows.left;
		case 'left-top':
			return overflows.left || overflows.bottom;
		case 'left-bottom':
			return overflows.left || overflows.top;
		case 'right-top':
			return overflows.right || overflows.top;
		case 'right-bottom':
			return overflows.right || overflows.bottom;
		default:
			return false;
	}
}
function overfowsOfEdges(container: HTMLElement, anchor: HTMLElement): OverflowsOfEdgesResult {
	const { top, bottom, left, right } = anchor.getBoundingClientRect();
	const { innerHeight, innerWidth } = window;
	const result: OverflowsOfEdgesResult = {
		top: top - container.offsetHeight < 0,
		bottom: bottom + container.offsetHeight > innerHeight,
		left: left - container.offsetWidth < 0,
		right: right + container.offsetWidth > innerWidth
	};
	return result;
}
const calculatePositionsCallbacks = {
	top: (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft + (anchor.offsetWidth / 2 - container.offsetWidth / 2),
			y: anchor.offsetTop - offset - container.offsetHeight
		};
	},
	bottom: (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft + anchor.offsetWidth / 2 - container.offsetWidth / 2,
			y: anchor.offsetTop + offset + anchor.offsetHeight
		};
	},
	left: (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft - container.offsetWidth - offset,
			y: anchor.offsetTop + anchor.offsetHeight / 2 - container.offsetHeight / 2
		};
	},
	right: (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft + anchor.offsetWidth + offset,
			y: anchor.offsetTop + anchor.offsetHeight / 2 - container.offsetHeight / 2
		};
	},
	'top-left': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft,
			y: anchor.offsetTop - container.offsetHeight - offset
		};
	},
	'top-right': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft + anchor.offsetWidth - container.offsetWidth,
			y: anchor.offsetTop - container.offsetHeight - offset
		};
	},
	'bottom-left': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft,
			y: anchor.offsetTop + anchor.offsetHeight + offset
		};
	},
	'bottom-right': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft + anchor.offsetWidth - container.offsetWidth,
			y: anchor.offsetTop + anchor.offsetHeight + offset
		};
	},
	'left-top': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft - container.offsetWidth - offset,
			y: anchor.offsetTop
		};
	},
	'left-bottom': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft - container.offsetWidth - offset,
			y: anchor.offsetTop + anchor.offsetHeight - container.offsetHeight
		};
	},
	'right-top': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft + anchor.offsetWidth + offset,
			y: anchor.offsetTop
		};
	},
	'right-bottom': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			x: anchor.offsetLeft + anchor.offsetWidth + offset,
			y: anchor.offsetTop + anchor.offsetHeight - container.offsetHeight
		};
	}
};
