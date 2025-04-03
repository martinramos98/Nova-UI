<script>
	import { Button } from '@nv-org/button';
</script>

<main>
	<div class="w-full flex flex-row gap-4">
		<Button colors="container-low" variant="solid">Press me</Button>
		<Button colors="info" variant="solid">Press me</Button>
		<Button colors="warning" variant="solid">Press me</Button>
		<Button colors="error" variant="solid">Press me</Button>
		<Button colors="success" variant="solid">Press me</Button>
	</div>
	<div class="w-full my-8 flex flex-row gap-4">
		<Button colors="primary" variant="solid">Press me</Button>
		<Button colors="primary" variant="bordered">Press me</Button>
		<Button colors="primary" variant="flat">Press me</Button>
		<Button colors="primary" variant="faded">Press me</Button>
		<Button colors="primary" variant="ghost">Press me</Button>
		<Button colors="primary" variant="neon">Press me</Button>
		<Button colors="primary" variant="light">Press me</Button>
	</div>
</main>

<style>
	main {
		margin: 80px;
	}
</style>
