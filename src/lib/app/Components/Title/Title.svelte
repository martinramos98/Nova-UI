<script lang="ts">
	import './title.css';
	export let level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
	export let className = '';
</script>

<svelte:element this={'h' + level} class="ui-title {className}">
	<slot />
</svelte:element>
