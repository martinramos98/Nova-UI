<script lang="ts">
	let el: HTMLElement;

	function move(ev: PointerEvent) {
		el.style.left = ev.clientX + 'px';
		// el.style.top = ev.clientY + 'px';
	}
	function down(ev: MouseEvent) {
		window.addEventListener('pointermove', move);
		window.addEventListener('mouseup', up);
	}
	function up(ev: MouseEvent) {
		window.removeEventListener('pointermove', move);
		window.removeEventListener('mouseup', up);
	}
</script>

<!-- <svelte:window on:pointermove={move} /> -->
<div bind:this={el} class="" on:mousedown={down}></div>

<style>
	div {
		width: 30px;
		height: 30px;
		position: absolute;
		left: 0;
		top: 50%;
		background-color: darkgoldenrod;
		border-radius: 100%;
	}
</style>
