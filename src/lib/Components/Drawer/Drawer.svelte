<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	export let open: boolean;
	export let onClose: () => void;
	export let size: any = 'md';
	export let position: any = 'right';
	export let backdrop: {
		className: string;
		type: 'normal' | 'blur' | 'transparent';
	} = {
		className: '',
		type: 'normal'
	};
	export let modalContent = {
		className: ''
	};
	function translateToBody(node: HTMLElement) {
		document.body.append(node);
		node.addEventListener('click', (ev) => {
			const target = ev.target as Element;
			if (target.classList.contains('ui-drawer-backdrop')) {
				onClose();
			}
		});
	}
	// TODO: Values en funcion del width/height y size del drawer (si es fly)
	const positionTransition = {
		top: { x: 0, y: '-30%' },
		left: { x: '-30%', y: 0 },
		bottom: { x: 0, y: '30%' },
		right: { x: '30%', y: 0 }
	};
</script>

{#if open}
	<div use:translateToBody class="ui-drawer">
		<div
			in:fly={{
				delay: 320,
				duration: 400,
				x: positionTransition[position].x,
				y: positionTransition[position].y
			}}
			out:fly={{
				duration: 350,
				x: positionTransition[position].x,
				y: positionTransition[position].y
			}}
			class="ui-drawer-content size-{size} drawer-{position} {modalContent.className}"
		>
			{#if $$slots.header}
				<div class="ui-drawer-header">
					<slot name="header" />
				</div>
			{/if}
			<slot />
			{#if $$slots.footer}
				<div class="ui-drawer-footer">
					<slot name="footer" />
				</div>
			{/if}
		</div>
		<div
			in:fade={{ duration: 300 }}
			out:fade={{ delay: 400, duration: 300 }}
			aria-roledescription="Backdrop of Drawer"
			aria-hidden="true"
			class="ui-drawer-backdrop {backdrop.className} {backdrop.type === 'transparent'
				? 'opacity-0'
				: ''} {backdrop.type === 'blur' ? 'backdrop-blur-sm' : ''}"
		></div>
	</div>
{/if}

<style>
	@layer nova {
		.ui-drawer {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
		}

		.ui-drawer-backdrop {
			position: absolute;
			width: inherit;
			height: inherit;
			top: 0;
			left: 0;
			background-color: rgb(0 0 0 / 0.5);
			z-index: -1;
		}
		.ui-drawer-content {
			position: absolute;
			background-color: var(--color-surface);
			padding: 10px;
			&.size-xs {
				width: 20%;
				height: 20%;
			}
			&.size-sm {
				width: 30%;
				height: 30%;
			}
			&.size-md {
				width: 40%;
				height: 40%;
			}
			&.size-lg {
				width: 50%;
				height: 50%;
			}
			&.size-xl {
				width: 60%;
				height: 60%;
			}
			&.size-full {
				width: 100%;
				height: 100%;
				max-width: 100%;
				max-height: 100%;
				border-radius: var(--border-radius-none);
			}
			&.drawer-top {
				top: 0;
				left: 0;
				width: 100%;
			}
			&.drawer-bottom {
				bottom: 0;
				left: 0;
				width: 100%;
			}
			&.drawer-left {
				top: 0;
				left: 0;
				height: 100%;
			}
			&.drawer-right {
				top: 0;
				right: 0;
				height: 100%;
			}
		}

		@media screen and (width <= 768px) {
			.ui-drawer-content.drawer-left,
			.ui-drawer-content.drawer-right {
				width: 80%;
			}
		}
		@media screen and (width <= 540px) {
			.ui-drawer-content.drawer-left,
			.ui-drawer-content.drawer-right {
				width: 100%;
			}
		}
	}
</style>
