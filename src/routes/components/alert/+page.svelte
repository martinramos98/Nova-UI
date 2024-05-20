<script>
	import Alert from '$lib/Components/Alert/Alert.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	let openAlert = false;
	function toggleAlert() {
		openAlert = !openAlert;
	}
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#alert">Alert</a></li>
			<li><a href="#contents">Contents</a></li>
			<!-- <li><a href="#disabled">type</a></li> -->
			<li><a href="#sizes">Sizes</a></li>
			<li><a href="#backdrop">Backdrop</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title level={1}>Alert</Title>
			</header>
			<section>
				<div>
					<Button variant={'solid'} colors="info" onClick={toggleAlert}>Click Me</Button>
					<Alert onClose={() => {}} bind:open={openAlert}>
						<Title level={4}>Alert!</Title>
						<p>Something Happens!</p>
					</Alert>
				</div>
			</section>
		</article>
	</main>
</div>
