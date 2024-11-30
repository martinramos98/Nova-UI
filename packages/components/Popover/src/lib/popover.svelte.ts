import PopoverContent from './PopoverContent.svelte';

export class Popover {
	private openPopover: boolean = $state(false);
	private anchor: HTMLElement | null;
	private trigger: HTMLElement | null;
	private container: HTMLElement | null;
	readonly PopoverContent = PopoverContent;

	constructor() {
		this.trigger = null;
		this.anchor = null;
	}

	toggle() {
		this.openPopover = !this.openPopover;
	}
	close() {
		this.openPopover = false;
	}
	open() {
		this.openPopover = true;
	}

	get isOpen(): boolean {
		return this.openPopover;
	}

	asPopoverRoot(node: HTMLElement) {
		this.anchor = node;
	}
	asPopoverTrigger(node: HTMLElement) {
		if (node === this.trigger) return;
		if (this.trigger) {
			this.trigger.removeEventListener('click', this.handleToggleAction);
		}
		this.trigger = node;
		node.addEventListener('click', this.handleToggleAction);
	}

	private handleToggleAction(ev:MouseEvent) {
    if(this.isOpen){
    
    } else {
      this.open();
      window.addEventListener('click',this.outsideClickAction)
    }
  }
  private outsideClickAction(ev:MouseEvent){
    const el = ev.target as HTMLElement
    if(this.isOpen && !el.querySelector(".ui-popover")){
			this.close()
			window.removeEventListener("click",this.outsideClickAction)
    }
  }
}
