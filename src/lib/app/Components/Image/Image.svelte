<script lang="ts">
	export let aspect: '1:1' | '16:9' | '3:4' | 'auto' = 'auto';
	export let src: string = '';
	export let alt: string;
	let loading = true;
	let errorOnLoad = false;
	function onError(ev) {
		errorOnLoad = true;
	}
	function onLoad(ev) {
		loading = false;
	}
</script>

<img on:load={onLoad} on:error={onError} {alt} {src} />
