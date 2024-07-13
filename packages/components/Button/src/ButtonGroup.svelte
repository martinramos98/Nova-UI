<script lang="ts">
	import { afterUpdate } from 'svelte';
	export let classname = '';
	export let disabled = false;
	let ref: HTMLElement;
	afterUpdate(() => {
		if (disabled)
			for (const child of ref.children) {
				if (child.classList.contains('ui-button')) {
					child.setAttribute('disabled', 'true');
				} else {
					throw Error('Child is not a Button Component');
				}
			}
	});
</script>

<div class="ui-button-group {classname}" bind:this={ref}>
	<slot />
</div>

<style>
	@layer nova {
		:global {
			.ui-button-group {
				display: flex;
				flex-direction: row;
				gap: 0;
				& > .ui-button {
					border-radius: 0;
					background-color: var(--color-container);
				}
				& > .ui-button:first-child {
					border-radius: 10px 0 0 10px;
				}
				& > .ui-button:last-child {
					border-radius: 0px 10px 10px 0px;
				}
			}
		}
	}
</style>
