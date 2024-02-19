<script>
	import Button from '$lib/app/Components/Button/Button.svelte';
	import '../lib/app/styles/main.css';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
	<Button colors={'primary'} variant={'shadows'} className=""><p>Holi</p></Button>
	<Button colors={'secondary'} variant={'shadows'} className=""><p>Holi</p></Button>
	<Button colors={'tertiary'} variant={'shadows'} className=""><p>Holi</p></Button>
	<Button colors={'error'} variant={'shadows'} className=""><p>Holi</p></Button>
	<Button colors={'success'} variant={'shadows'} className=""><p>Holi</p></Button>
	<Button colors={'warning'} variant={'shadows'} className=""><p>Holi</p></Button>
	<Button colors={'info'} variant={'shadows'} className="rounded-lg"><p>Holi</p></Button>
</div>

<style>
	p {
		font-size: 1.25rem;
	}
	div {
		margin: 0 10px;
		display: flex;
		gap: 1rem;
	}
</style>
