import {
	ElementAnimation,
	type BasicAnimation,
	animationsConfigs
} from '@nv-org/element-animation-js';

export type AnimationTabsType =
	| 'fade'
	| 'slide-horizontal'
	| 'slide-vertical'
	| 'swap-x'
	| 'swap-y';

// NOTES:
//  Handlea la animacion de las tabs asi como su configuracion, dado que para el correcto funcionamiento de las animaciones se requiere que la animacion se encuentre acotado a ciertos estilos.Por lo que debe estar definidos.
export class TabsAnimator {
	private controler: TabsControler;
	private animation: BasicAnimation | undefined;
	// private resolveContinueForAnimation: undefined | (() => void);
	constructor(controler: TabsControler) {
		this.controler = controler;
	}
	async reverse() {}
	async play(
		typeAnimation: AnimationTabsType,
		selectedKey: KeyTab,
		lastKey: KeyTab | undefined,
		isFirstPlayAnimation?: boolean
	) {
		if (isFirstPlayAnimation || lastKey === undefined) {
			const elementToShow = this.controler.elementRefs[selectedKey] as HTMLElement;
			elementToShow.style.cssText = `visibility:visible;position:static;`;
			return;
		}
		return new Promise((resolve) => {
			if (typeAnimation === 'fade') {
				const elementToHide = this.controler.elementRefs[lastKey as KeyTab] as HTMLElement;
				const elementToShow = this.controler.elementRefs[selectedKey] as HTMLElement;
				const container = this.controler.elementRefs['tabContainer'] as HTMLElement;
				const cssMap = container.computedStyleMap();
				const heightStyleContainer = container.style.height;
				// @ts-expect-error type
				const pt = cssMap.get('padding-top')?.value as number;
				// @ts-expect-error type
				const pb = cssMap.get('padding-bottom')?.value as number;

				// @ts-expect-error type
				const bt = cssMap.get('border-top-width')?.value as number;
				// @ts-expect-error type
				const bb = cssMap.get('border-bottom-width')?.value as number;
				const wc = container.offsetWidth;
				const initialHeight = elementToHide.offsetHeight + pb + pt + bt + bb;
				elementToHide.classList.add('ui-tab-element-to-hide');
				const containerClone = container.cloneNode(true) as HTMLElement;
				containerClone.querySelector('.ui-tab-element-to-hide')?.remove();
				containerClone.firstElementChild?.classList.toggle('absolute');
				containerClone.style.cssText = `position:absolute;visibility:hidden;z-index:-1;width:${wc}px`;
				containerClone.ariaHidden = 'true';
				document.body.append(containerClone);
				const finalHeight =
					(containerClone.firstElementChild as HTMLElement).offsetHeight + pt + pb;
				containerClone.remove();
				const firstFadeAnimation = new ElementAnimation(
					elementToHide,
					animationsConfigs['fade-out']
				);
				const resizeAnimation = new ElementAnimation(container, {
					animations: {
						keyframes: [{ height: `${initialHeight}px` }, { height: `${finalHeight}px` }],
						animationOptions: {
							easing: 'ease-in-out',
							duration: 250,
							fill: 'both',
							direction: 'normal'
						}
					},
					onFinishedAnimation() {
						elementToShow.style.cssText = `opacity:0;visibility:visible;`;
						elementToShow.classList.toggle('absolute');
						elementToHide.style.cssText = `display:none;visibility:hidden;`;
					}
				});
				const secondFadeAnimation = new ElementAnimation(
					elementToShow,
					animationsConfigs['fade-in']
				);
				secondFadeAnimation.subscribeEndCallback(() => {
					container.style.height = heightStyleContainer;
					resolve(null);
				});
				firstFadeAnimation.play();
				firstFadeAnimation.thenPlay(resizeAnimation);
				resizeAnimation.thenPlay(secondFadeAnimation);
			} else {
				throw new Error('Error - Type Animation is not valid');
			}
		});
	}
}
// NOTE:
// TabsControler lo que hace es handlear la logica de controlar cuando se recibe un evento de cambio de tab y ejecutar el cambio del tab
type KeyTab = string;
export class TabsControler {
	private selectedTab: KeyTab | undefined = $state(undefined);
	tabRenderExecutor: Map<KeyTab, () => void> = new Map();
	public elementRefs: Record<string, HTMLElement | undefined> = {};
	public readonly typeAnimation: AnimationTabsType = 'fade';
	private tabsAnimator: TabsAnimator;
	private resolveRefPromise: undefined | ((value: null) => void);
	constructor(selectedTab: KeyTab | undefined) {
		this.selectedTab = selectedTab;
		this.tabsAnimator = new TabsAnimator(this);
	}

	set tabContainer(containerElement: HTMLElement) {
		this.elementRefs['tabContainer'] = containerElement;
		containerElement.addEventListener('loadedChildrenTab', (e) => {
			const ev = e as CustomEvent;
			const { key, node } = ev.detail as { key: string; node: HTMLElement };
			this.elementRefs[key] = node;
			this.resolveRefPromise && this.resolveRefPromise(null);
		});
	}

	selectTab(key: string) {
		if (this.selectedTab === key) return;
		const lastSelectedTabKey = this.selectedTab;
		this.selectedTab = key;

		if (lastSelectedTabKey === undefined) this.renderFirstTab(key);
		else this.swapTabs(key, lastSelectedTabKey);
	}

	// NOTE:
	// Comportamiente ejecutara la animacion, una vez que la animacion termine, se desmonta el componente
	private async swapTabs(key: KeyTab, lastSelectedTabKey: KeyTab) {
		// await this.tabsAnimator.play(this.typeAnimation);
		const mountedNewTab = new Promise((resolve) => {
			this.resolveRefPromise = resolve;
			this.tabRenderExecutor.get(key)();
		});
		await mountedNewTab;
		await this.tabsAnimator.play(this.typeAnimation, key, lastSelectedTabKey);
		this.tabRenderExecutor.get(lastSelectedTabKey)();
	}
	private async renderFirstTab(key: KeyTab) {
		// this.tabsAnimator.play(this.typeAnimation, true);
		const mountedNewTab = new Promise((resolve) => {
			this.resolveRefPromise = resolve;
			this.tabRenderExecutor.get(key)();
		});
		await mountedNewTab;
		this.tabsAnimator.play(this.typeAnimation, key, undefined, true);
	}
}
