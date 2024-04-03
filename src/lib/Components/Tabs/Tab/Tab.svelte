<script lang="ts">
	import { ElementAnimation, elementAnimationsConstructs } from '$lib/Animations/Animation.js';
	import { getContext } from 'svelte';
	import type { Readable } from 'svelte/store';
	export let key: string;
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
			render = true;
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
			}
		};
		params['delay'] = 400;
		animation = new ElementAnimation(node, params);
		animation.playForward();
	}
</script>

{#if render}
	<div use:renderAnimation class="ui-selection-tab">
		<slot />
	</div>
{/if}
