<script>
	import { ButtonGroup, Button } from '@nv-org/button';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import buttonGroupCaseText from './textCode.js';
</script>

<ComponentCodeTabs code={buttonGroupCaseText()}>
	{#snippet component()}
		<ButtonGroup>
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</ButtonGroup>
	{/snippet}
</ComponentCodeTabs>
