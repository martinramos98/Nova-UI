<script lang="ts">
  interface FloatingWidgetProps {
    asElement:string,
    role:string,
    action?: (node: HTMLElement) => any;
		colors?: string;
		class?: string;
		variant?: string;
		offset?: number;
		animationParams?: any;
		animationFunction?: SvelteTransitionFn;
		containerElementAttr?: any;
		withArrow?:boolean;

  }
  const { } = $props()
</script>
<svelte:element></svelte:element>