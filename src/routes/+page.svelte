<script>
	import { test } from '@nova-ui/element-animation-js/src/index.js';
	import Title from '$lib/Components/Title/Title.svelte';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import Image from '$lib/Components/Image/Image.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Link from '$lib/Components/Link/Link.svelte';
	test();
</script>

<svelte:head>
	<title>Nova UI</title>
	<meta name="description" content="Nova UI is a Component UI library for Svelte JS." />
</svelte:head>
<main>
	<article class="hero">
		<section>
			<div class="hero-title">
				<span>Innovate your web with</span>
				<Title className="text-7xl">Nova UI</Title>
			</div>
			<div class="hero-buttons">
				<Link
					variant="solid"
					className="p-2 px-3 font-semibold rounded-full"
					target="self"
					colors="primary"
					href="/components">Components</Link
				>
				<Link
					className="p-2 px-3 font-semibold rounded-full"
					target="self"
					variant="bordered"
					colors="primary"
					href="/components">Get Started</Link
				>
			</div>
		</section>
	</article>
</main>

<style>
	main {
		width: 100%;
		height: 90vh;
		margin: 30px 0;
	}
	.hero {
		display: flex;
		height: 100%;
		place-content: center;
		place-items: center;
		& .hero-title {
			& span {
				translate: 5px 13px;
				display: block;
				color: var(--color-subtext);
				font-weight: 500;
			}
		}
		& .hero-buttons {
			place-content: center;
			margin: 40px 0;
			gap: var(--spacing-4);
			display: flex;
			flex-direction: row;
		}
	}
</style>
