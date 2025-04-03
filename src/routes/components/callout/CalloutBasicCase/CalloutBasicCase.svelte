<script>
	import ComponentCodeTabs from '../../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	import { Callout } from '@nv-org/callout';
	import basicCaseCallout from './textCode.js';
</script>

<section>
	<div class="w-full">
		<ComponentCodeTabs code={basicCaseCallout()}>
			{#snippet component()}
				<Callout>This is a Basic Callout</Callout>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
