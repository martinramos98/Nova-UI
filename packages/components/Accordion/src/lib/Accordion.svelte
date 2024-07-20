<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	export let className = '';
	export let colors = '';
	export let variant = 'default-accordion';
	export let multiopen = false;

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

<div
	bind:this={accordion}
	data-multiopen={multiopen}
	class="ui-accordion {colors !== '' ? 'ui-color-' + colors : ''} ui-variant-{variant} {className}"
>
	<slot />
</div>
