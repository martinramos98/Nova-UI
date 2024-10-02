<script lang="ts">
	import { Title } from '@nv-org/title';
	import ModalBasicCase from '../../../app/components/pagesSections/modal/ModalBasicCase/ModalBasicCase.svelte';
	import ModalSizeCases from '../../../app/components/pagesSections/modal/ModalSizesCases/ModalSizeCases.svelte';
	import ModalBackdropCases from '../../../app/components/pagesSections/modal/ModalBackdropCases/ModalBackdropCases.svelte';
	import ModalConstrainCase from '../../../app/components/pagesSections/modal/ModalConstrainsCase/ModalConstrainCase.svelte';
	let testOpen = false;
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#card">Modal</a></li>
			<li><a href="#disabled">Sizes</a></li>
			<li><a href="#variants">Backdrop</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title level={1}>Modal</Title>
			</header>
			<ModalBasicCase />
		</article>
		<article>
			<header>
				<Title level={2}>Constrains</Title>
			</header>
			<ModalConstrainCase />
		</article>

		<article>
			<header>
				<Title level={2}>Sizes</Title>
			</header>
			<ModalSizeCases />
		</article>
		<article>
			<header>
				<Title level={2}>Backdrop</Title>
			</header>
			<ModalBackdropCases />
		</article>
	</main>
</div>

<style>
	.modal-footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>
