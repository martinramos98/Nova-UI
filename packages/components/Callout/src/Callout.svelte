<svelte:options runes={true} />

<script>
	import CalloutIcons from '../CalloutIcons.svelte.js';
	/** @type {{colors?:string,variant?:string,className?:string,radius?:string,type?:string,icon?:import('svelte').Snippet ,children:import('svelte').Snippet}}*/
	const {
		colors = 'container',
		variant = 'solid',
		className = '',
		radius = 'rounded-xl',
		type = 'default',
		icon,
		children
	} = $props();
</script>

<div class="ui-callout {radius} ui-color-{colors} ui-variant-{variant} {className}">
	{#if icon}
		{@render icon()}
	{:else}
		<span>
			<CalloutIcons {type} />
		</span>
	{/if}
	<div>
		{@render children()}
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
