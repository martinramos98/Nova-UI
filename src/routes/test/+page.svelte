<script lang="ts">
	import { Button } from '@nv-org/button';
	import { Accordion, AccordionSection } from '@nv-org/accordion';
</script>

<!-- <svelte:window on:pointermove={move} /> -->
<main class="p-8">
	<Button>Hello World!</Button>
	<Accordion>
		<AccordionSection>
			{#snippet header()}
				<span>Section 1</span>
			{/snippet}
			{#snippet children()}
				<p>Hello world!</p>
			{/snippet}
		</AccordionSection>
	</Accordion>
</main>

<style>
	main {
		padding: 100px;
	}
</style>
