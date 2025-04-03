<script>
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Chip } from '@nv-org/chip';
	import chipVariantCases from './textCode.js';
</script>

<section>
	<div class="w-full">
		<ComponentCodeTabs code={chipVariantCases()}>
			{#snippet component()}
				<div class="flex flex-row gap-4">
					<Chip colors="primary" variant="solid">Solid</Chip>
					<Chip colors="primary" variant="flat">Flat</Chip>
					<Chip colors="primary" variant="light">Light</Chip>
					<Chip colors="primary" variant="faded">Faded</Chip>
					<Chip colors="primary" variant="bordered">Bordered</Chip>
					<Chip colors="primary" variant="ghost">Ghost</Chip>
					<Chip colors="primary" variant="shadows">Shadows</Chip>
					<Chip colors="primary" variant="neon">Neon</Chip>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
