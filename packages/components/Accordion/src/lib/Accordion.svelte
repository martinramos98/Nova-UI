<script lang="ts">
	import { onMount, setContext, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';
	interface AccordionProps {
		class?: string;
		colors?: string;
		variant?: string;
		multiopen?: boolean;
		children: Snippet;
		as?: string;
	}
	const {
		class: className = '',
		colors,
		variant = 'default-accordion',
		multiopen = false,
		children,
		as = 'div'
	}: AccordionProps = $props();

	let accordion: HTMLElement;
	const sections = writable<Record<number, boolean>>({});
	setContext('ui-accordion-context', {
		sections: sections,
		toggleSection: (secIdx: number) => {
			if (!multiopen) {
				sections.update((sections) => {
					for (const sectionKey in sections) {
						if (sections[sectionKey] === true && sectionKey !== secIdx.toString()) {
							sections[sectionKey] = false;
						}
					}
					sections[secIdx] = !sections[secIdx];
					return sections;
				});
			} else {
				sections.update((sections) => {
					sections[secIdx] = !sections[secIdx];
					return sections;
				});
			}
		}
	});
	onMount(() => {
		const sectionsMounted: Record<number, boolean> = {};
		let count = 0;
		for (const child of accordion.children) {
			if (child.classList.contains('ui-accordion-section')) {
				count++;
				// @ts-expect-error Type with custom prop on ref element
				child.secIdx = count;
				sectionsMounted[count] = false;
			}
		}
		sections.set(sectionsMounted);
	});
</script>

<svelte:element
	this={as}
	bind:this={accordion}
	data-multiopen={multiopen}
	class={[
		'ui-accordion',
		colors && 'ui-color-' + colors,
		variant && 'ui-variant-' + variant,
		className
	]}
>
	{@render children()}
</svelte:element>
