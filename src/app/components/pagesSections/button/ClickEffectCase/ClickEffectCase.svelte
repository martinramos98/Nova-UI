<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Button } from '@nv-org/button';
	import clickEffectCaseText from './textCode.js';
</script>

<div class="w-full">
	<ComponentCodeTabs code={clickEffectCaseText()}>
		{#snippet component()}
			<Button variant="solid" colors="info" withClickEffect={false}>Press Me</Button>
		{/snippet}
	</ComponentCodeTabs>
</div>
