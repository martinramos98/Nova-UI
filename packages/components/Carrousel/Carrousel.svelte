<script lang="ts">
	export let withControls = true;
	export let controlPosition: 'sides' | 'upside' | 'downside' = 'sides';
	export let withPagination = false;
</script>

<div class="ui-carrousel">
	<slot />
</div>
