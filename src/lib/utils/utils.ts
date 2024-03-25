
	export function setPosition(node: HTMLElement,{offset,position}:{offset:number,position:string}) {
    let cssPosition = '' 
    console.log(position,offset)
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
    return cssPosition
	}