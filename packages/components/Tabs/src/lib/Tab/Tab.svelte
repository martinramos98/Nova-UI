<script lang="ts">
	import { ElementAnimation, elementAnimationsConstructs } from '@nv-org/element-animation-js';
	import { getContext } from 'svelte';
	import type { Readable } from 'svelte/store';
	export let key: string;
	export let className = '';
	let render = false;
	let animation: ElementAnimation;
	const tabContext = getContext<{
		selectTab: (key: string) => void;
		selectedTab: Readable<string>;
	}>('tabContext');
	let shouldUnmount = false;
	if (!tabContext) throw Error('Tab is not inside of Tabs Context');

	tabContext.selectedTab.subscribe((value) => {
		if (key === value) {
			setTimeout(() => {
				render = true;
			}, 280);
		} else if (render === true) {
			// Animate and unmount
			shouldUnmount = true;
			animation.delay = undefined;
			animation.reverse();
		}
	});
	function renderAnimation(node: HTMLElement) {
		shouldUnmount = false;
		const params = elementAnimationsConstructs.fade;
		params['onFinishedAnimation'] = () => {
			if (shouldUnmount) {
				render = false;
			} else {
				const styles = node.computedStyleMap();
				(node.parentElement as HTMLElement).style.minHeight =
					//
					node.offsetHeight +
					styles.get('padding-top').value +
					styles.get('padding-bottom').value +
					'px';
			}
		};
		animation = new ElementAnimation(node, params);
		animation.playForward();
	}
</script>

{#if render}
	<div use:renderAnimation class="ui-selected-tab {className}">
		<slot />
	</div>
{/if}

<style>
	@layer nova {
		.ui-selected-tab {
			opacity: 0;
			width: 100%;
			height: fit-content;
		}
	}
</style>
