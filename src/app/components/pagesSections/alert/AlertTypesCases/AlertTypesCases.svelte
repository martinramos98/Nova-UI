<svelte:options runes={true} />

<script lang="ts">
	import { Button } from '@nv-org/button';
	import { Title } from '@nv-org/title';
	import { Alert } from '@nv-org/alert';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Selection, Option } from '@nv-org/selection';
	import alertTypeTextCode from './textCode.js';
	let openAlertType = $state(false);
	let type: 'default' | 'prompt' | 'confirm' = $state('default');
	let resultAlert: string | undefined | boolean = $state(undefined);
	function onSelect(val: 'default' | 'prompt' | 'confirm') {
		type = val;
	}
	function onCloseAlert(alertResult: string | undefined | boolean) {
		resultAlert = alertResult;
	}
</script>

<section class="relative">
	<Selection
		variant="faded"
		selectionLabel="Alert type"
		class="absolute top-1 right-1 w-[200px]"
		{onSelect}
	>
		<Option value="default">default</Option>
		<Option value="prompt">prompt</Option>
		<Option value="confirm">confirm</Option>
	</Selection>
	<ComponentCodeTabs code={alertTypeTextCode(type)}>
		{#snippet component()}
			<Button
				variant={'solid'}
				colors="info"
				onClick={() => {
					openAlertType = true;
				}}>Toggle Alert {type}</Button
			>
			<p class="my-2 mr-2">Result:<b>{resultAlert}</b></p>
			<Alert onClose={onCloseAlert} bind:open={openAlertType} {type}>
				{#if type === 'default'}
					<Title level={4}>Alert!</Title>
					<p>Something Happens!</p>
				{:else if type === 'prompt'}
					<Title level={4}>Prompt!</Title>
					<p>Do not put your credit card!</p>
				{:else if type === 'confirm'}
					<Title level={4}>Alert!</Title>
					<p>We need your approval!</p>
				{/if}
			</Alert>
		{/snippet}
	</ComponentCodeTabs>
</section>
