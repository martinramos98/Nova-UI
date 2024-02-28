<script lang="ts">
	function renderonbody(node: HTMLElement) {
		document.body.appendChild(node);
		node.style.display = 'block';
	}
	export let open = false;
</script>

{#if open}
	<div use:renderonbody style="display: none!important;">
		<slot />
	</div>
{/if}
