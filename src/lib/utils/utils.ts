import { spring } from 'svelte/motion';

export function setPosition(
	node: HTMLElement,
	{ offset, position }: { offset: number; position: string }
) {
	let cssPosition = '';
	console.log(position, offset);
	const boundingContainer = node.getBoundingClientRect();
	const boundingTooltip = node.lastElementChild?.getBoundingClientRect();
	const heightTooltip = (node.lastElementChild as HTMLElement).offsetHeight
	const widthTooltip = (node.lastElementChild as HTMLElement).offsetWidth
	const heightContainer =node.offsetHeight 
	const widthContainer = node.offsetWidth
	switch (position) {
		case 'top-start':
			cssPosition = `
				top:${-((heightTooltip) + offset)}px;left:0;	
				`;
			break;
		case 'top-end':
			cssPosition = `
				top:${-((heightTooltip) + offset)}px;right:0;	
				`;
			break;
		case 'top':
			cssPosition = `
				top:${-((heightTooltip) + offset)}px;left:${(widthContainer / 2) - (widthTooltip) / 2}px;	
				`;
			break;
		case 'bottom-start':
			cssPosition = `
				bottom:${-((heightTooltip) + offset)}px;left:0;	
				`;
			break;
		case 'bottom-end':
			cssPosition = `
				bottom:${-((heightTooltip) + offset)}px;right:0;	
				`;
			break;
		case 'bottom':
			cssPosition = `
				bottom:${-((heightTooltip) + offset)}px;left:${(widthContainer - widthTooltip) / 2}px;	
				`;
			break;
		case 'left-start':
			cssPosition = `
				top:0;left:-${(widthTooltip) + offset}px;	
				`;
			break;
		case 'left-end':
			cssPosition = `
				bottom:0px;left:-${(widthTooltip) + offset}px;	
				`;
			break;
		case 'left':
			cssPosition = `top:${((heightContainer) - heightTooltip) / 2}px;left:-${(widthTooltip) + offset}px;	
				`;
			break;
		case 'right-start':
			cssPosition = `
				top:0;right:-${widthTooltip + offset}px;	
				`;
			break;
		case 'right-end':
			cssPosition = `
				bottom:0;right:-${widthTooltip + offset}px;	
				`;
			break;
		case 'right':
			cssPosition = `
				top:${((heightContainer) - heightTooltip) / 2}px;right:-${widthTooltip + offset}px;	
				`;
			break;
		default:
			break;
	}
	return cssPosition;
}

// const availablePositionsTooltip: Record<string,PositionResolver> = {
// 	top:(el,offset)=>{

// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	const widthTooltip = (el.lastElementChild as HTMLElement).offsetWidth
// 	const widthContainer = el.offsetWidth
// 		return `top:${-((heightTooltip) + offset)}px;left:${(widthContainer / 2) - (widthTooltip) / 2}px;`
// 	},
// 	'top-start':(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	return `top:${-((heightTooltip) + offset)}px;left:0;`

// 	},
// 	'top-end':(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 		return `top:${-((heightTooltip) + offset)}px;right:0;`
// 	},
// 	bottom:(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	const widthTooltip = (el.lastElementChild as HTMLElement).offsetWidth
// 	const widthContainer = el.offsetWidth
// 	return `bottom:${-((heightTooltip) + offset)}px;left:${(widthContainer - widthTooltip) / 2}px;`

// 	},
// 	'bottom-start':(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	const widthTooltip = (el.lastElementChild as HTMLElement).offsetWidth
// 	const heightContainer =el.offsetHeight 
// 	const widthContainer = el.offsetWidth

// 	},
// 	'bottom-end':(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	const widthTooltip = (el.lastElementChild as HTMLElement).offsetWidth
// 	const heightContainer =el.offsetHeight 
// 	const widthContainer = el.offsetWidth

// 	},
// 	right:(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	const widthTooltip = (el.lastElementChild as HTMLElement).offsetWidth
// 	const heightContainer =el.offsetHeight 
// 	const widthContainer = el.offsetWidth

// 	},
// 	'right-start':(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	const widthTooltip = (el.lastElementChild as HTMLElement).offsetWidth
// 	const heightContainer =el.offsetHeight 
// 	const widthContainer = el.offsetWidth

// 	},
// 	'right-end':(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	const widthTooltip = (el.lastElementChild as HTMLElement).offsetWidth
// 	const heightContainer =el.offsetHeight 
// 	const widthContainer = el.offsetWidth

// 	},
// 	left:(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	const widthTooltip = (el.lastElementChild as HTMLElement).offsetWidth
// 	const heightContainer =el.offsetHeight 
// 	const widthContainer = el.offsetWidth

// 	},
// 	'left-start':(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	const widthTooltip = (el.lastElementChild as HTMLElement).offsetWidth
// 	const heightContainer =el.offsetHeight 
// 	const widthContainer = el.offsetWidth

// 	},
// 	'left-end':(el,offset)=>{
// 	const heightTooltip = (el.lastElementChild as HTMLElement).offsetHeight
// 	const widthTooltip = (el.lastElementChild as HTMLElement).offsetWidth
// 	const heightContainer =el.offsetHeight 
// 	const widthContainer = el.offsetWidth

// 	},
	

// }
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

// export function labelTranslateInput(
// 	where: 'inside' | 'outside' | 'leftside',
// 	input: HTMLElement,
// 	label: HTMLElement,
// 	open: boolean,
// 	hasPlaceholder: boolean,
// 	hasValue: boolean,
// 	dynamic: boolean
// ) {
// 	const labelEffect = spring();
// 	if (!dynamic) {
// 	}
// 	if (where === 'inside') {
// 		const labelHeight = label.offsetHeight;
// 	} else if (where === 'outside') {
// 	} else if (where === 'leftside') {
// 		if (hasPlaceholder) {
// 		}
// 	}
// }
// function calculatePositionOfLabel(where: 'inside' | 'outside' | 'leftside', label, input) {}
