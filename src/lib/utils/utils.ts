export function setPosition(
	node: HTMLElement,
	{ offset, position }: { offset: number; position: string }
) {
	let cssPosition = '';
	console.log(position, offset);
	const boundingContainer = node.getBoundingClientRect();
	const boundingTooltip = node.lastElementChild?.getBoundingClientRect();
	switch (position) {
		case 'top-start':
			cssPosition = `
				top:${-((boundingTooltip?.height ?? 0) + offset)}px;left:0;	
				`;
			break;
		case 'top-end':
			cssPosition = `
				top:${-((boundingTooltip?.height ?? 0) + offset)}px;right:0;	
				`;
			break;
		case 'top':
			cssPosition = `
				top:${-((boundingTooltip?.height ?? 0) + offset)}px;left:${(boundingContainer?.width ?? 0) / 2 - (boundingTooltip?.width ?? 0) / 2}px;	
				`;
			break;
		case 'bottom-start':
			cssPosition = `
				bottom:${-((boundingTooltip?.height ?? 0) + offset)}px;left:0;	
				`;
			break;
		case 'bottom-end':
			cssPosition = `
				bottom:${-((boundingTooltip?.height ?? 0) + offset)}px;right:0;	
				`;
			break;
		case 'bottom':
			cssPosition = `
				bottom:${-((boundingTooltip?.height ?? 0) + offset)}px;left:${((boundingContainer?.width ?? 0) - boundingTooltip?.width) / 2}px;	
				`;
			break;
		case 'left-start':
			cssPosition = `
				top:0;left:-${(boundingTooltip?.width ?? 0) + offset}px;	
				`;
			break;
		case 'left-end':
			cssPosition = `
				bottom:0px;left:-${(boundingTooltip?.width ?? 0) + offset}px;	
				`;
			break;
		case 'left':
			cssPosition = `top:${((boundingContainer?.height ?? 0) - boundingTooltip?.height) / 2}px;left:-${(boundingTooltip?.width ?? 0) + offset}px;	
				`;
			break;
		case 'right-start':
			cssPosition = `
				top:0;right:-${boundingTooltip?.width ?? 0}px;	
				`;
			break;
		case 'right-end':
			cssPosition = `
				bottom:0;right:-${boundingTooltip?.width ?? 0}px;	
				`;
			break;
		case 'right':
			cssPosition = `
				top:${((boundingContainer?.height ?? 0) - boundingTooltip?.height) / 2}px;right:-${boundingTooltip?.width ?? 0}px;	
				`;
			break;
		default:
			break;
	}
	return cssPosition;
}
const availableDropdownPositions: Record<string, PositionResolver> = {
	top: (el, offset) => {
		const bounds = el.getBoundingClientRect();
		const parentBounds = (el.parentElement as HTMLElement).getBoundingClientRect();
		if (parentBounds.top - (bounds.height + offset) > 0) {
			return `top:-${bounds.height + offset}px;left:0px`;
		} else {
			return undefined;
		}
	},
	bottom: (el, offset) => {
		const bounds = el.getBoundingClientRect();
		const parentBounds = (el.parentElement as HTMLElement).getBoundingClientRect();

		if (parentBounds.bottom + (bounds.height + offset) < window.innerHeight) {
			return `bottom:-${bounds.height + offset}px;left:0px`;
		} else {
			return undefined;
		}
	},
	left: (el, offset) => {
		const bounds = el.getBoundingClientRect();
		const parentBounds = (el.parentElement as HTMLElement).getBoundingClientRect();

		if (parentBounds.left - (bounds.width + offset) > 0) {
			return `top:0px;left:-${bounds.width + offset}px`;
		} else {
			return undefined;
		}
	},
	right: (el, offset) => {
		const bounds = el.getBoundingClientRect();
		const parentBounds = (el.parentElement as HTMLElement).getBoundingClientRect();

		if (parentBounds.right + (bounds.width + offset) < window.innerWidth) {
			return `right:-${bounds.width + offset}px;top:0px`;
		} else {
			return undefined;
		}
	}
};

export function setPositionDropdown(
	element: HTMLElement,
	{
		desiredPosition,
		offset
	}: {
		desiredPosition: 'top' | 'left' | 'right' | 'bottom';
		offset: number;
	}
) {
	// element.hidden = true;
	const resolvePosition = createPositionResolver(availableDropdownPositions);
	const result = resolvePosition(desiredPosition, element, offset);
	element.style.cssText = result as string;
}
// Si es undefined entonces no es una position valida
type PositionResolver = (el: HTMLElement, offset: number) => string | undefined;

export function createPositionResolver(availablePositions: Record<string, PositionResolver>) {
	return (position: string, element: HTMLElement, offset: number = 0) => {
		if (availablePositions[position] && !!availablePositions[position](element, offset)) {
			return availablePositions[position](element, offset);
		} else {
			for (const availablePosition in availablePositions) {
				console.log('checking for avialables positions');
				if (
					availablePositions[availablePosition] &&
					!!availablePositions[availablePosition](element, offset)
				) {
					return availablePositions[availablePosition](element, offset);
				}
			}
		}
	};
}
