<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import disabledCaseText from './textCode.js';
	import { Button } from '@nv-org/button';
	let isDisabled = $state(true);
	function toggleDisabled() {
		isDisabled = !isDisabled;
	}
</script>

<div class="w-full">
	<ComponentCodeTabs code={disabledCaseText()}>
		{#snippet component()}
			<Button variant={'solid'} colors="info" onClick={toggleDisabled} disabled={isDisabled}
				>Click Me</Button
			>
		{/snippet}
	</ComponentCodeTabs>
</div>
