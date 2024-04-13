<path
	d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
	opacity=".25"
/><circle class="spinner_7WDj" cx="12" cy="2.5" r="1.5" />

<style>
	path {
		fill: var(--color-container);
	}
	.spinner_7WDj {
		fill: var(--color-container);
		transform-origin: center;
		animation: spinner_PBVY 0.75s linear infinite;
	}
	@keyframes spinner_PBVY {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
