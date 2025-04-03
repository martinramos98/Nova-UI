<script>
	import ComponentCodeTabs from '../../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	import { Callout } from '@nv-org/callout';
	import calloutTypeCases from './textCode.js';
</script>

<section>
	<div class="w-full">
		<ComponentCodeTabs code={calloutTypeCases()}>
			{#snippet component()}
				<div class="flex flex-col gap-2 w-full">
					<Callout variant="flat" colors="primary">This is a Default Callout</Callout>
					<Callout variant="flat" colors="warning" type="warning">This is a Warning Callout</Callout
					>
					<Callout variant="flat" colors="error" type="alert">This is a Error Callout</Callout>
					<Callout variant="flat" colors="info" type="info">This is a Info Callout</Callout>
					<Callout variant="flat" colors="success" type="success">This is a Success Callout</Callout
					>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
