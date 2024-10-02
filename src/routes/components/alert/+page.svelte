<svelte:options runes={true} />

<script>
	import { Title } from '@nv-org/title';
	import AlertProps from '../../../app/components/pagesSections/alert/AlertProps.svelte';
	import AlertBasicCase from '../../../app/components/pagesSections/alert/AlertBasicCase/AlertBasicCase.svelte';
	import AlertTypesCases from '../../../app/components/pagesSections/alert/AlertTypesCases/AlertTypesCases.svelte';
	import AlertCustomCases from '../../../app/components/pagesSections/alert/AlertCustomsCases/AlertCustomCases.svelte';
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#alert">Alert</a></li>
			<li><a href="#contents">Contents</a></li>
			<!-- <li><a href="#disabled">type</a></li> -->
			<li><a href="#sizes">Sizes</a></li>
			<li><a href="">Backdrop</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title level={1}>Alert</Title>
			</header>
			<section>
				<div class="w-full">
					<AlertBasicCase />
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Types</Title>
			</header>
			<AlertTypesCases />
		</article>
		<article>
			<header>
				<Title level={2}>Custom Content and Footer</Title>
			</header>
			<AlertCustomCases />
		</article>

		<article>
			<header>
				<Title level={2}>Props</Title>
			</header>
			<AlertProps />
		</article>
	</main>
</div>
