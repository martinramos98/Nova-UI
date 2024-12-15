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
	top: number;
	left: number;
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
		top: top - container.clientHeight < 0,
		bottom: bottom + container.clientHeight > innerHeight,
		left: left - container.clientWidth < 0,
		right: right + container.clientWidth > innerWidth
	};
	return result;
}
const calculatePositionsCallbacks = {
	top: (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft + (anchor.offsetWidth / 2 - container.clientWidth / 2),
			top: anchor.offsetTop - offset - container.clientHeight
		};
	},
	bottom: (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft + anchor.offsetWidth / 2 - container.clientWidth / 2,
			top: anchor.offsetTop + offset + anchor.offsetHeight
		};
	},
	left: (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft - container.clientWidth - offset,
			top: anchor.offsetTop + anchor.offsetHeight / 2 - container.clientHeight / 2
		};
	},
	right: (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft + anchor.offsetWidth + offset,
			top: anchor.offsetTop + anchor.offsetHeight / 2 - container.clientHeight / 2
		};
	},
	'top-left': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft,
			top: anchor.offsetTop - container.clientHeight - offset
		};
	},
	'top-right': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft + anchor.offsetWidth - container.clientWidth,
			top: anchor.offsetTop - container.clientHeight - offset
		};
	},
	'bottom-left': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft,
			top: anchor.offsetTop + anchor.offsetHeight + offset
		};
	},
	'bottom-right': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft + anchor.offsetWidth - container.clientWidth,
			top: anchor.offsetTop + anchor.offsetHeight + offset
		};
	},
	'left-top': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft - container.clientWidth - offset,
			top: anchor.offsetTop
		};
	},
	'left-bottom': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft - container.clientWidth - offset,
			top: anchor.offsetTop + anchor.offsetHeight - container.clientHeight
		};
	},
	'right-top': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft + anchor.offsetWidth + offset,
			top: anchor.offsetTop
		};
	},
	'right-bottom': (container: HTMLElement, anchor: HTMLElement, offset: number) => {
		return {
			left: anchor.offsetLeft + anchor.offsetWidth + offset,
			top: anchor.offsetTop + anchor.offsetHeight - container.clientHeight
		};
	}
};
