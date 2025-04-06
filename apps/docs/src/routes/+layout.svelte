<script lang="ts">
	import '../app.css';

	let { children } = $props();
	import NovaUILayout from '../../../../src/lib/providers/NovaUILayout.svelte';
</script>

<NovaUILayout>
	{@render children()}
</NovaUILayout>
