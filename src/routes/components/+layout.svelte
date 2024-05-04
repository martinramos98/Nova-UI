<script>
	import Callout from '$lib/Components/Callout/Callout.svelte';
	import '../../lib/styles/page.css';
</script>

<div class="flex place-content-center my-6">
	<Callout type="warning" colors="warning" className="w-[80%] " variant="flat"
		>This is a Showcase. The library Still in Develop.</Callout
	>
</div>
<slot />
