<svelte:options runes={true} ></svelte:options>

<script lang="ts">
	import type { Snippet } from "svelte";

  interface ContextMenuSubsection{
    open?:boolean;
    children?:Snippet
  }
  const { open,children }: ContextMenuSubsection = $props()
</script>

<div class="ui-context-menu-subsection">
  <div class="ui-context-menu-subsection-content">
    {#if children}
    {@render children()}    
  {/if}

  </div>
</div>