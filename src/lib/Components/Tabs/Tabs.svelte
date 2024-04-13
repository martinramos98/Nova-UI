<script lang="ts">
	import { setContext } from 'svelte';
	import { readonly, writable } from 'svelte/store';
	import { spring } from 'svelte/motion';

	export let selectedTabKey: string | undefined = undefined;
	export let variant = 'default';
	export let className = '';
	export let classNameContent = '';
	export let classNameSelectionContainer = '';
	export let classNameSelector = '';
	const selectedTabStore = writable(selectedTabKey ?? '');
	const keys = new Map<string, HTMLElement>();
	let selectionElement: HTMLElement;
	function subscribeKey(key: string, el: HTMLElement) {
		keys.set(key, el);
	}
	const tabContext = setContext('tabContext', {
		selectTab,
		selectedTab: readonly(selectedTabStore),
		subscribeKey
	});
	function selectTab(key: string) {
		getPositionOfElement(key);
		selectedTabStore.set(key);
	}
	const coordSelector = spring(
		{ top: 0, left: 0 },
		{
			stiffness: 0.1,
			damping: 0.4
		}
	);
	const sizeSelector = spring(
		{
			width: 0,
			height: 0
		},
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	function getPositionOfElement(key: string) {
		const el = keys.get(key) as HTMLElement;
		coordSelector.set({ top: el.offsetTop, left: el.offsetLeft });
		sizeSelector.set({ width: el.offsetWidth, height: el.offsetHeight });
	}
	function setSelectOnMount(node: HTMLElement) {
		for (const key of keys.keys()) {
			selectTab(key);
			break;
		}
	}
</script>

<div use:setSelectOnMount class="ui-tabs ui-tabs-variant-{variant} {className}">
	<div bind:this={selectionElement} class="ui-tab-selection {classNameSelectionContainer}">
		<slot name="tab-selection" />
		<span
			class={classNameSelector}
			style="top:{variant === 'underlined'
				? $sizeSelector.height
				: $coordSelector.top}px;left:{$coordSelector.left}px;width:{$sizeSelector.width}px;height:{variant !==
			'underlined'
				? $sizeSelector.height
				: 2}px;"
			aria-hidden="true"
		></span>
	</div>
	<div class="ui-tab-content {classNameContent}">
		<slot />
	</div>
</div>

<style>
	@layer components {
		.ui-tabs-variant-default {
			& .ui-tab-selection {
				background-color: var(--color-surface-hight);
				width: fit-content;
				padding: 5px;
				margin: 5px;
				border-radius: var(--radius-lg);
				& span {
					background-color: var(--color-container);
				}
			}
			& .ui-tab-content {
				margin: 20px 5px 5px 0px;
				padding: 5px;
				border-radius: var(--radius-lg);
				background-color: var(--color-surface-hight);
				width: 100%;
				height: 200px;
			}
		}
		.ui-tabs-variant-bordered {
			& .ui-tab-selection {
				/* background-color: var(--color-surface-hight); */
				width: fit-content;
				padding: 5px;
				margin: 5px;
				border-radius: var(--radius-lg);
				border: solid 2px var(--color-border);
				& span {
					background-color: var(--color-container);
				}
			}
			& .ui-tab-content {
				margin: 20px 5px 5px 0px;
				padding: 5px;
				border-radius: var(--radius-lg);
				border: solid 2px var(--color-border);
				/* background-color: var(--color-surface-hight); */
				width: 100%;
				height: 200px;
			}
		}

		.ui-tabs-variant-underlined {
			& .ui-tab-selection {
				/* background-color: var(--color-surface-hight); */
				width: fit-content;
				padding: 5px;
				margin: 5px;
				border-radius: var(--radius-lg);
				& span {
					background-color: var(--color-container);
				}
			}

			& .ui-tab-content {
				margin: 20px 5px 5px 0px;
				padding: 5px;
				border-radius: var(--radius-lg);
				background-color: var(--color-surface-hight);
				width: 100%;
				height: 200px;
			}
		}
	}
	@layer nova {
		.ui-tab-selection {
			position: relative;
			& > span {
				display: block;
				position: absolute;
				z-index: 0;
				border-radius: var(--radius-lg);
			}
		}
	}
</style>
