<script lang="ts">
	import { CalloutIcons } from '@nv-org/callout';
	import { SequencedAnimation } from '@nv-org/element-animation-js';
	import { CloseButton } from '@nv-org/button';
	import type { Snippet } from 'svelte';
	export let className = '';
	export let variant = 'solid';
	export let type = 'default';
	export let colors: string | undefined = undefined;
	export let content: string | Snippet<[any]>;
	export let withIcon = true;
	export let delay: number | undefined = undefined;
	export let withCloseButton = false;
	export let onClose: () => void;
	let reversed = false;
	let anim: SequencedAnimation;
	function setToast(node: HTMLElement) {
		const height = node.offsetHeight;
		const paddingTop = node.computedStyleMap().get('padding-top');
		const paddingBottom = node.computedStyleMap().get('padding-bottom');
		const marginTop = node.computedStyleMap().get('margin-top');
		const marginBottom = node.computedStyleMap().get('margin-top');
		node.style.maxHeight = '0';
		node.style.visibility = 'visible';
		anim = new SequencedAnimation(
			[
				{
					element: node,
					animationParams: {
						animations: [
							{
								keyframes: [
									{
										paddingTop: '0',
										paddingBottom: '0',
										marginTop: '0',
										marginBottom: '0',
										maxHeight: '0'
									},
									{
										paddingTop: paddingTop as string,
										paddingBottom: paddingBottom as string,
										marginTop: marginTop as string,
										marginBottom: marginBottom as string,
										maxHeight: height + 'px'
									}
								],
								animationOptions: {
									duration: 200,
									easing: 'ease-in-out',
									direction: 'normal',
									fill: 'both'
								}
							}
						],
						alternate: false,
						iterations: 1
					}
				},
				{
					element: node,
					animationParams: {
						animations: [
							{
								keyframes: [
									{ opacity: 0, scale: 0.7 },
									{ opacity: 1, scale: 1 }
								],
								animationOptions: {
									duration: 200,
									easing: 'ease',
									direction: 'normal',
									fill: 'both'
								}
							}
						],
						alternate: false,
						iterations: 1
					}
				}
			],
			{
				alternate: false,
				iterations: 1,
				onEndSequence: () => {
					if (reversed) onClose();
				}
			}
		);
		anim.playForward();
		if (delay && delay !== Infinity) {
			setTimeout(() => {
				reversed = true;
				anim.reverse();
			}, delay + 800);
		}
	}
</script>

<div
	use:setToast
	class="ui-toast ui-color-{colors ?? type === 'alert'
		? 'error'
		: type} ui-variant-{variant} {className}"
>
	{#if typeof content === 'string'}
		{#if withIcon}
			<CalloutIcons {type} />
		{/if}
		<span>{content}</span>
	{:else}
		{@render content(() => {
			reversed = true;
			anim.reverse();
		})}
	{/if}
	{#if withCloseButton}
		<CloseButton
			className={'p-1 rounded-full'}
			onClose={() => {
				reversed = true;
				anim.reverse();
			}}
		/>
	{/if}
</div>

<style>
	@layer nova {
		.ui-toast {
			opacity: 0;
			border-radius: var(--radius-xl);
			gap: 0.5rem;
			display: flex;
			padding: 10px;
			flex-direction: row;
			width: fit-content;
			visibility: hidden;
			overflow: hidden;
			flex-wrap: nowrap;
			margin: 2.5px 0;
		}
	}
</style>
