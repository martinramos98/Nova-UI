<script lang="ts">
	import Button from '../../../../../../packages/components/Button/src/lib/Button.svelte';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import customContentCaseText from './textCode.js';
	import { Icon, WarningIcon } from '@nv-org/icon';
</script>

<div class="w-full">
	<ComponentCodeTabs code={customContentCaseText()}>
		{#snippet component()}
			<Button class="flex flex-row" variant="solid" colors="warning">
				<Icon stroke="currentcolor" viewBox={'0 0 24 24'} fill="none" width="24" height="24">
					<WarningIcon />
				</Icon>
				<span> Custom Content</span>
			</Button>
		{/snippet}
	</ComponentCodeTabs>
</div>
