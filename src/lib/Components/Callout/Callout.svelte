<script>
	import CalloutIcons from './CalloutIcons.svelte';
	export let colors = 'container';
	export let variant = 'solid';
	export let className = '';
	export let radius = 'rounded-xl';
	export let type = 'default';
</script>

<div class="ui-callout {radius} ui-color-{colors} ui-variant-{variant} {className}">
	<slot name="icon">
		<span>
			<CalloutIcons {type} />
		</span>
	</slot>
	<div>
		<slot />
	</div>
</div>

<style>
	@layer nova {
		.ui-callout {
			padding: 20px;
			width: 100%;
			display: flex;
			gap: 2rem;
			flex-direction: row;
			align-items: center;
			& span {
				padding: 10px;
			}
		}
	}
</style>
