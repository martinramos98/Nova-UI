<script lang="ts">
	import CalloutIcons from '../Callout/CalloutIcons.svelte';
	import CloseButton from '../CloseButton/CloseButton.svelte';
	export let className = '';
	export let variant = 'solid';
	export let type = 'default';
	export let colors: string | undefined = undefined;
	export let content: string | { component: ConstructorOfATypedSvelteComponent; props: any } = '';
	export let withIcon = true;
	export let delay = undefined;
	export let withCloseButton = false;
	export let onClose;
</script>

<div class="ui-toast ui-{variant} ui-color{colors ?? type} {className}">
	{#if withIcon}
		<CalloutIcons {type} />
	{/if}
	{#if typeof content === 'string'}
		<span>{content}</span>
	{:else}
		<svelte:component this={content.component} {...content.props} />
	{/if}
	{#if withCloseButton}
		<CloseButton onClose={() => {}} />
	{/if}
</div>
