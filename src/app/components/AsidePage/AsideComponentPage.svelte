<svelte:options runes={true} />

<script lang="ts">
	import { Divider } from '@nv-org/divider';
	import { Accordion, AccordionSection } from '@nv-org/accordion';
	import ComponentList from '../ComponentsList/ComponentList.svelte';
	const { asideItems }: { asideItems: { text: string; ref: string }[] } = $props();
</script>

<aside>
	<span class="font-semibold">On this page</span>
	<ul>
		{#each asideItems as item}
			<li class="ui-variant-light ui-color-primary"><a href={item.ref}>{item.text}</a></li>
		{/each}
	</ul>
	<Divider size={1} class="opacity-40" />
	<Accordion variant="" multiopen class={'py-4'}>
		<AccordionSection
			classHeader={'ui-variant-light ui-color-primary font-semibold pl-4 gap-6 transition-all'}
		>
			{#snippet header()}
				<span> <a href="/components"> Components </a></span>
			{/snippet}
			<ComponentList className="text-end" />
		</AccordionSection>
		<AccordionSection
			classHeader={'ui-variant-light ui-color-primary font-semibold pl-4 gap-6 transition-all'}
		>
			{#snippet header()}
				<span>Styling</span>
			{/snippet}
			<ul>
				<li class="ui-variant-light ui-color-primary">
					<a href="/styling#design_system">Design System</a>
				</li>
				<li class="ui-variant-light ui-color-primary"><a href="/styling#themes">Themes</a></li>
				<li class="ui-variant-light ui-color-primary">
					<a href="/styling#variants">Variants</a>
				</li>
				<li class="ui-variant-light ui-color-primary">
					<a href="/styling#color_scheme">Color Scheme</a>
				</li>
				<li class="ui-variant-light ui-color-primary">
					<a href="/styling#customization">Customization</a>
				</li>
			</ul>
		</AccordionSection>
	</Accordion>
</aside>

<style>
	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
		margin-right: var(--spacing-2);
		padding: var(--spacing-4) 0;
		& li {
			width: 100%;
			transition: all 0.2s ease;
			& a {
				text-align: start;
				width: 100%;
				display: block;
				padding: var(--spacing-1) var(--spacing-4);
			}
		}
	}
</style>
