<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { Icon } from '@nv-org/icon';
	import { quadInOut } from 'svelte/easing';
	export let className = '';
	export let colors = '';
	// export let variants = '';
	export let type: 'bar' | 'circle' = 'bar';
	export let value = 0;
	export let colorsTriggers: undefined | Record<number, string> = undefined;
	export let progressWidth = 4;
	export let barRounded = true;
	export let indeterminate = false;
	let forcedColor: undefined | string = undefined;
	const valueWidth = tweened(value, {
		duration: 300,
		easing: quadInOut
	});
	const strokeDash = tweened(strokeDashValueMap(value), {
		duration: 300,
		easing: quadInOut
	});
	function strokeDashValueMap(value: number) {
		// debugger;
		const maxValue = 200;
		const minValue = 75;
		const res = (maxValue - minValue) * (1 - value) + minValue;
		return res;
	}

	function validatetriggersColors() {
		if (colorsTriggers) {
			let res = undefined;
			for (const number in colorsTriggers) {
				if (value >= parseInt(number)) {
					res = colorsTriggers[number];
				}
			}
			forcedColor = res;
		}
	}

	function calculateMappings() {
		if (type === 'circle') {
			strokeDash.set(strokeDashValueMap(value));
		} else if (type === 'bar') {
			valueWidth.set(value);
		}
	}
	$: value, calculateMappings(), validatetriggersColors();
</script>

<div class="ui-loader ui-color-{colors} {className}">
	{#if type === 'bar'}
		<div
			style="height:{progressWidth}px"
			role="progressbar"
			class="ui-bar-loader {indeterminate ? 'animate-indeterminate-bar' : ''} {barRounded
				? 'rounded-full'
				: ''}"
		>
			<span
				style="{indeterminate ? '' : `width:${$valueWidth * 100}%`} {forcedColor
					? `--color-container:${forcedColor};`
					: ''};"
				class="ui-bar-complete {barRounded ? 'rounded-full' : ''}"
			></span>
			<span class="ui-bar-total {barRounded ? 'rounded-full' : ''}"></span>
		</div>
	{:else if type === 'circle'}
		<div class="ui-circle-loader">
			<Icon
				props={{
					height: '100',
					width: '100',
					viewBox: '0 0 50 50',
					class: `${indeterminate ? 'indeterminate-rotate' : ''}`,
					style: `transform:rotateZ(90deg);`
				}}
			>
				<circle
					class="ui-circle-total"
					cx="25"
					cy="25"
					r="20"
					stroke-width={progressWidth}
					fill="none"
				>
				</circle>
				<circle
					class="ui-circle-complete {indeterminate ? 'animate-indeterminate-circle' : ''}"
					cx="25"
					cy="25"
					r="20"
					stroke-width={progressWidth}
					style="stroke-dashoffset: {$strokeDash};"
					fill="none"
				>
				</circle>
			</Icon>
		</div>
	{/if}
</div>

<style>
	@layer nova {
		.ui-bar-loader,
		.ui-loader {
			width: 100%;
		}
	}
	.ui-bar-loader {
		position: relative;
		overflow: hidden;
		& .ui-bar-total {
			display: block;
			width: 100%;
			position: absolute;
			height: inherit;
			background: var(--color-surface);
			z-index: 1;
		}
		& .ui-bar-complete {
			display: block;
			width: 100%;
			position: absolute;
			z-index: 2;
			height: inherit;
			background: var(--color-container);
		}
		&.animate-indeterminate-bar {
			& .ui-bar-complete {
				animation: indeterminate-bar 2.5s ease infinite normal forwards;
			}
		}
	}
	.ui-circle-loader {
		& .animate-indeterminate-circle {
			animation: indeterminate-circle 1.5s ease-in-out infinite normal forwards;
		}
		& .ui-circle-complete,
		.ui-circle-total {
			stroke-dasharray: 200;
			stroke-linecap: round;
		}
		& .ui-circle-complete {
			stroke: var(--color-container);
			stroke-dashoffset: 200;
		}
		& .ui-circle-total {
			stroke: var(--color-surface);
		}
	}
	@keyframes indeterminate-bar {
		0% {
			left: -20%;
			width: 20%;
		}
		50% {
			/* left: 45%; */
			width: 50%;
		}
		100% {
			left: 110%;
			width: 70%;
		}
	}
	@keyframes indeterminate-circle {
		0% {
			stroke-dasharray: 0 200;
			stroke-dashoffset: 200;
		}
		50% {
			stroke-dasharray: 40 200;
		}
		95%,
		100% {
			stroke-dasharray: 50 200;
			stroke-dashoffset: 125;
		}
	}
</style>
