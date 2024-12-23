<script lang="ts">
	import { type Snippet } from 'svelte';
	import ArrowSvg from './ArrowSvg.svelte';

	interface FloatingWidgetProps {
		asElement: string;
		role: string;
		action?: (node: HTMLElement) => any;
		colors?: string;
		class?: string;
		variant?: string;
		offset?: number;
		animationParams: any;
		animationFunction: any;
		containerElementAttr?: any;
		withArrow?: boolean;
		setPosition: (node: HTMLElement) => any;
		children: Snippet;
		position: string;
		contextKey:string;
	}
	const {
		asElement = 'div',
		role = 'dialog',
		action = () => {},
		colors,
		class: className,
		position,
		variant,
		animationParams,
		animationFunction,
		withArrow,
		containerElementAttr = {},
		setPosition,
		children,
		contextKey
	}: FloatingWidgetProps = $props();
</script>

<svelte:element
	this={asElement}
	use:setPosition
	use:action
	data-position={position}
	{role}
	transition:animationFunction={animationParams}
	class="{className ? ' ' + className : ''}{variant ? ` ui-variant-${variant}` : ''}{colors
		? ` ui-colors-${colors}`
		: ''}"
	{...containerElementAttr}
>
	{#if withArrow}
		<ArrowSvg {position} {contextKey} />
	{/if}
	{@render children?.()}
</svelte:element>
