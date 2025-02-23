<script lang="ts">
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import alertBasicCaseText from './textCode.js';
	import { Alert } from '@nv-org/alert';
	import { Button } from '@nv-org/button';
	import { Title } from '@nv-org/title';
	let openAlert = $state(false);
	function toggleAlert() {
		openAlert = !openAlert;
	}
</script>

<section>
	<div class="w-full">
		<ComponentCodeTabs code={alertBasicCaseText()}>
			{#snippet component()}
				<Button variant={'solid'} colors="info" onClick={toggleAlert}>Click Me</Button>
				<Alert onClose={toggleAlert} open={openAlert}>
					<Title level={4}>Alert!</Title>
					<p>Something Happens!</p>
				</Alert>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
