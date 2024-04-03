<script lang="ts">
	import Icon from '../../Icons/Icon.svelte';
	import ChevronIcon from '../../Icons/IconsPath/ChevronIcon.svelte';
	import type { Writable } from 'svelte/store';
	import { afterUpdate, getContext } from 'svelte';
	export let showSection = false;
	export let classNameContent = '';
	export let classNameHeader = '';
	export let disabled = false;
	interface HTMLElementIndexed extends HTMLElement {
		secIdx: number;
	}
	let accordionContent: HTMLElementIndexed;
	let accordionSectionRef: HTMLElementIndexed;
	const accordionContext = getContext<{
		sections: Writable<Record<number, boolean>>;
		toggleSection: (idx: number) => void;
	}>('ui-accordion-context');
	if (!accordionContext) {
		throw Error(
			'Accordion Has no Context - Accordion Section must be a child of Accordion Component'
		);
	}
	accordionContext.sections.subscribe((sections) => {
		if (accordionContent) {
			showSection = sections[accordionSectionRef.secIdx];
		}
	});

	function toggleSection() {
		if (accordionContent) accordionContext.toggleSection(accordionSectionRef.secIdx);
	}
	function outerSpaceVertical(el: Element) {
		const styles = document.defaultView?.getComputedStyle(el);
		if (!styles) {
			throw Error('Element not exists in Default View');
		}
		return (
			CSSNumericValue.parse(styles.marginTop).value +
			CSSNumericValue.parse(styles.marginBottom).value +
			CSSNumericValue.parse(styles.paddingTop).value +
			CSSNumericValue.parse(styles.paddingBottom).value
		);
	}
	function childrenHeight(element: HTMLElement) {
		let accumH = 0;
		for (const child of element.children) {
			accumH += child.getBoundingClientRect().height + outerSpaceVertical(child);
		}
		return accumH;
	}
	afterUpdate(() => {
		if (showSection) {
			accordionContent.animate(
				[{ maxHeight: '0px' }, { maxHeight: `${childrenHeight(accordionContent)}px` }],
				{ direction: 'normal', fill: 'forwards', duration: 200, easing: 'ease' }
			);
			accordionContent.animate([{ opacity: 0 }, { opacity: 1 }], {
				direction: 'normal',
				fill: 'forwards',
				duration: 200,
				delay: 100,
				easing: 'ease'
			});
		} else {
			accordionContent.animate(
				[
					{ maxHeight: `${accordionContent.getBoundingClientRect().height}px` },
					{ maxHeight: '0px' }
				],
				{ direction: 'normal', fill: 'forwards', duration: 200, easing: 'ease', delay: 100 }
			);
			accordionContent.animate([{ opacity: 1 }, { opacity: 0 }], {
				direction: 'normal',
				fill: 'forwards',
				duration: 200,
				easing: 'ease'
			});
		}
	});
</script>

<div data-open={showSection} bind:this={accordionSectionRef} class="ui-accordion-section">
	<button {disabled} class="ui-accordion-header {classNameHeader}" on:click={toggleSection}>
		<slot name="header" />
		<div class="ui-accordion-trigger">
			<slot name="trigger">
				<span class="default-icon">
					<Icon
						props={{
							width: '24px',
							height: '24px',
							stroke: 'currentcolor',
							fill: 'none'
						}}
					>
						<ChevronIcon />
					</Icon>
				</span>
			</slot>
		</div>
	</button>
	<div bind:this={accordionContent}>
		<div class="ui-accordion-content {classNameContent}">
			<slot name="content" />
			<slot />
		</div>
	</div>
</div>

<style>
	@layer nova {
		.ui-accordion-header {
			display: flex;
			flex-direction: row;
			padding: 0.25rem 0;
			cursor: pointer;
			width: 100%;
			&[disabled='true'] {
				opacity: 0.5;
			}
			& ~ div {
				overflow: hidden;
				max-height: 0;
			}
		}
		.ui-accordion-trigger {
			margin-left: auto;
			margin-right: 10px;
			& > .default-icon > svg {
				transition: rotate 0.2s ease;
			}
		}
	}
</style>
