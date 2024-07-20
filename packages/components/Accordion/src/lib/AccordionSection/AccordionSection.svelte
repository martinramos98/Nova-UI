<svelte:options runes={true} />

<script lang="ts">
	import { Icon, ChevronIcon } from '@nv-org/icon';
	import type { Writable } from 'svelte/store';
	import { getContext, type Snippet } from 'svelte';
	interface AccordionSectionProps {
		showSection?: boolean;
		classNameContent?: string;
		classNameHeader?: string;
		disabled?: boolean;
		children: Snippet;
		header?: Snippet;
		trigger?: Snippet;
	}
	let {
		showSection = false,
		classNameContent = '',
		classNameHeader = '',
		disabled = false,
		children,
		trigger,
		header
	}: AccordionSectionProps = $props();
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
	$effect(() => {
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
	<button {disabled} class="ui-accordion-header {classNameHeader}" onclick={toggleSection}>
		{#if header}
			{@render header()}
		{/if}
		<div class="ui-accordion-trigger">
			{#if trigger}
				{@render trigger()}
			{:else}
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
			{/if}
		</div>
	</button>
	<div bind:this={accordionContent}>
		<div class="ui-accordion-content {classNameContent}">
			{@render children()}
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
		}
	}
</style>
