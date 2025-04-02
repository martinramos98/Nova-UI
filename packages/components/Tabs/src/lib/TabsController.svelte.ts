import { fade, slide } from "svelte/transition";
import type { SvelteTransitionFn } from "@nv-org/utils";
import { sineInOut } from "svelte/easing";
export enum TabsState {
  PLAYING_INTRO,
  PLAYING_OUTRO,
  FINISHED_INTRO,
  FINISHED_OUTRO,
}

function slideFadeTransition(
  node: HTMLElement,
  params: any,
  // options: { direction: 'in' | 'out' | 'both' }
): any {
  return {
    delay: params.delay || 0,
    duration: params.duration || 400,
    easing: params.easing || sineInOut,
    css: (t: number): string => {
      return `opacity:${t}; height:${t * node.offsetHeight}px`;
    },
  };
}

export class TabsController {
  private _activeTab: string | undefined = $state();
  private _renderTab: string | undefined = $state();
  readonly animation: SvelteTransitionFn | undefined;
  constructor(animation: "slide" | "fade" | "fade-slide" | undefined = "fade") {
    if (animation === "fade") {
      this.animation = fade;
    }
    if (animation === "slide") {
      this.animation = slide;
    }
    if (animation === "fade-slide") {
      this.animation = slideFadeTransition as SvelteTransitionFn;
    }
  }
  renderingState: TabsState | undefined = $state();
  selectTab(key: string): void {
    if (!this.renderingState) {
      this.renderingState = TabsState.FINISHED_OUTRO;
    }
    if (!this._activeTab) {
      this._renderTab = key;
    } else {
      this._renderTab = undefined;
    }
    this._activeTab = key;
  }
  get activeTab(): string | undefined {
    return this._activeTab;
  }
  get renderTab(): string | undefined {
    return this._renderTab;
  }
  renderSelectedTab(): void {
    this._renderTab = this._activeTab;
  }
}
