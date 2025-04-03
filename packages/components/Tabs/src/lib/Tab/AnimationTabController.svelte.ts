import type { BasicAnimation } from '@nv-org/element-animation-js';

export enum AnimationState {
	INTRO,
	OUTRO
}
export class AnimationTabController {
	private selectedTabKey: string | undefined;
	private renderCallback: Map<string, (() => void) | undefined> = new Map();
	private currentAnimation: BasicAnimation | undefined;
	private currentAnimationKey: string | undefined;
	private currentAnimationState: AnimationState | undefined;

	selectTab(targetTabKey: string) {
		// console.log(this.currentAnimation?.state);
		if (
			(this.currentAnimationKey && this.currentAnimationKey === targetTabKey) ||
			(this.currentAnimation?.state === 'playing' &&
				this.currentAnimationState === AnimationState.OUTRO)
		) {
			// console.log('restoring tab');
			this.selectedTabKey = targetTabKey;
			this.currentAnimation?.reverse();
			return;
		}
		// if (
		// 	!this.selectedTabKey ||
		// 	(this.currentAnimation?.state === 'finished' &&
		// 		this.currentAnimationState === AnimationState.OUTRO)
		// ) {
		const lastSelectedKey = this.selectedTabKey;
		console.log(lastSelectedKey, targetTabKey);
		this.selectedTabKey = targetTabKey;
		this.renderCallback.get(lastSelectedKey ?? targetTabKey)?.();
		// }
	}
	subscribeTabRender(renderCallback: () => void, key: string) {
		this.renderCallback.set(key, renderCallback);
	}
	notifyEndAnimation() {
		this.renderCallback.get(this.selectedTabKey ?? '')?.();
	}
	get selectedTab() {
		return this.selectedTabKey;
	}
	updateAnimation(animation: BasicAnimation, key: string, state: AnimationState) {
		this.currentAnimation = animation;
		this.currentAnimationKey = key;
		this.currentAnimationState = state;
	}
}
