<script lang="ts">
	export let shouldCloseOnClick: boolean = true;
	export let onClick = () => {};
	export let className = '';
	export let closeOnClick = true;

	function closeOnClickAction(node: HTMLElement) {
		if (closeOnClick) {
			node.addEventListener('click', () => {
				// @ts-expect-error Error of type
				const toggleDropdown = node.closest('.ui-dropdown')['toggleDropdown'];
				toggleDropdown();
			});
		}
	}

	function handleClickEvent() {
		onClick();
	}
</script>

<button use:closeOnClickAction class="ui-dropdown-item {className}" on:click={handleClickEvent}>
	<slot />
</button>

<style>
	@layer nova {
		.ui-dropdown-item {
			appearance: none;
			border: none;
			display: block;
			color: var(--color-text);
			background-color: inherit;
			cursor: pointer;
			width: 100%;
			text-align: left;
			padding: 10px 0;
			border-radius: 10px;
			padding-left: 10px;
			transition: all 0.3s ease;
			&:hover {
				filter: brightness(130%);
			}
		}
	}
</style>
