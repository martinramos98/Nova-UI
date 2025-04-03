<script>
	import { Chip } from '@nv-org/chip';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import chipSizeCases from './textcode.js';
</script>

<section>
	<div>
		<ComponentCodeTabs code={chipSizeCases()}>
			{#snippet component()}
				<div class="flex flex-row gap-4">
					<Chip colors="primary" size="xs" variant="solid">Size xs</Chip>
					<Chip colors="primary" size="sm" variant="solid">Size sm</Chip>
					<Chip colors="primary" size="md" variant="solid">Size md</Chip>
					<Chip colors="primary" size="lg" variant="solid">Size lg</Chip>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
