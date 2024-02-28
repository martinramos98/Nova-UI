<script lang="ts">
	import type { ModalSize, Radius } from '$lib/app/Entities/styles.js';
	import { fade } from 'svelte/transition';
	import { rounded } from '$lib/app/Entities/styles.js';
	export let open = false;
	export let size: ModalSize = 'md';
	export let radius: Radius = 'md';
	export let onClose: () => void;
	// let backdrop;
	function renderModal(node: HTMLElement) {
		document.body.append(node);
		node.addEventListener('click', (ev) => {
			const target = ev.target as Element;
			if (target.classList.contains('ui-modal-backdrop')) {
				onClose();
			}
		});
	}
</script>

{#if open}
	<div use:renderModal class="ui-modal {open ? 'show-modal' : 'hide-modal'}" aria-modal="true">
		<div class="ui-modal-content {rounded[radius]} size-{size}">
			<slot />
		</div>
		<div
			transition:fade
			aria-roledescription="Backdrop of modal"
			aria-hidden="true"
			class="ui-modal-backdrop"
		></div>
	</div>
{/if}

<style>
	.show-modal {
		display: grid;
		place-content: center;
		place-items: center;
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}

	.hide-modal {
		display: none !important;
	}
</style>
