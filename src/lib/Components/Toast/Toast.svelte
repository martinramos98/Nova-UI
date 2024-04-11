<script lang="ts">
	import CalloutIcons from '../Callout/CalloutIcons.svelte';
	import { SequencedAnimation } from '$lib/Animations/SequencedAnimation.js';
	import CloseButton from '../CloseButton/CloseButton.svelte';
	export let className = '';
	export let variant = 'solid';
	export let type = 'default';
	export let colors: string | undefined = undefined;
	export let content: string | { component: ConstructorOfATypedSvelteComponent; props: any } = '';
	export let withIcon = true;
	export let delay: number | undefined = undefined;
	export let withCloseButton = false;
	export let onClose: ()=>void;
	let reversed = false
	let anim:SequencedAnimation 
	function setToast(node:HTMLElement){
		const height = node.offsetHeight
		node.style.maxHeight = '0';
		node.style.visibility = 'visible'
		console.log(height)		
		anim = new SequencedAnimation([
			{
				element:node,animationParams:{animations:[{
				keyframes:[{
					maxHeight:'0px'
				},{maxHeight:height+ 'px'}],
				animationOptions:{
					duration:100,
					easing:'ease',
					direction:'normal',
					fill:'both'
					},
			},]
			,alternate:false,iterations:1}},
			{
				element:node,animationParams:{animations:[{
				keyframes:[{ opacity:0 },{ opacity:1 }],
				animationOptions:{
					duration:100,
					easing:'ease',
					direction:'normal',
					fill:'both'
					},
			},]
			,alternate:false,iterations:1}}

		],{
			alternate:false,iterations:1,
			onEndSequence:()=>{
				if(reversed)
					onClose()				
			}
		})
		anim.playForward()
		if(delay){
			setTimeout(() => { 
				anim.reverse()
			 },delay)
		}
	}
</script>

<div use:setToast class="ui-toast ui-color-{colors ?? type} ui-variant-{variant} {className}">
	{#if withIcon}
		<CalloutIcons {type} />
	{/if}
	{#if typeof content === 'string'}
		<span>{content}</span>
	{:else}
		<svelte:component this={content.component} {...content.props} />
	{/if}
	{#if withCloseButton}
		<CloseButton onClose={()=>{
			reversed = true
			anim.reverse()
		}} />
	{/if}
</div>
<style>
	@layer nova{
		.ui-toast {
		opacity: 0;
		position:fixed;
		top:0;
		border-radius: var(--radius-lg);
		display: flex;
		padding: 10px;
		flex-direction: row;
		left:0;
		visibility: hidden;
	}

	}
</style>