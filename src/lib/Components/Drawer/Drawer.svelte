<script lang="ts">
	import { ElementAnimation } from '$lib/Animations/Animation.js';
	import { fade, fly } from 'svelte/transition';
	export let open: boolean;
	export let onClose: () => void;
	export let size: any = 'md';
	export let position: any = 'right';
	export let className = '';
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
	const positionTransition = {
		top: [
			{ translate: '0 -100%', opacity: '0' },
			{ translate: '0 0', opacity: '1' }
		],
		left: [
			{ translate: '-100% 0%', opacity: '0' },
			{ translate: '0 0', opacity: '1' }
		],
		bottom: [
			{ translate: '0 100%', opacity: '0' },
			{ translate: '0 0', opacity: '1' }
		],
		right: [
			{ translate: '100% 0%', opacity: '0' },
			{ translate: '0 0', opacity: '1' }
		]
	};

	let render = false;
	let animationBackdrop: ElementAnimation, animationContent: ElementAnimation;
	const backdropAnimationConfig = {
		animations: {
			keyframes: [{ opacity: 0 }, { opacity: backdrop.type === 'transparent' ? 0 : 1 }],
			animationOptions: {
				iterations: 1,
				duration: 400,
				easing: 'ease-in-out',
				fill: 'both'
			}
		},
		iterations: 1,
		alternate: false
	};
	const contentAnimationConfig = {
		animations: {
			keyframes: positionTransition[position],
			animationOptions: {
				iterations: 1,
				duration: 400,
				easing: 'ease-in-out',
				fill: 'both'
			}
		},
		iterations: 1,
		alternate: false,
		onFinishedAnimation() {
			if (!open) {
				render = false;
			}
		}
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

	function openEffect() {
		render = true;
	}
	$: open && openEffect();
	function closeAnimation(node: HTMLElement, open: boolean) {
		return {
			update(open: boolean) {
				if (!open) {
					animationBackdrop.reverse();
					animationContent.reverse();
				}
			}
		};
	}
	function openAnimation(node: HTMLElement) {
		const backdropElement = node.lastElementChild as HTMLElement;
		const contentElement = node.firstElementChild as HTMLElement;
		animationBackdrop = new ElementAnimation(backdropElement, backdropAnimationConfig);
		animationContent = new ElementAnimation(contentElement, contentAnimationConfig);
		animationBackdrop.playForward();
		animationContent.playForward();
	}
</script>

{#if render}
	<div
		use:translateToBody
		use:openAnimation
		use:closeAnimation={open}
		class="ui-drawer {className}"
	>
		<div class="ui-drawer-content size-{size} drawer-{position} {modalContent.className}">
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
			aria-roledescription="Backdrop of Drawer"
			aria-hidden="true"
			class="ui-drawer-backdrop {backdrop.className}  {backdrop.type === 'blur'
				? 'backdrop-blur-sm'
				: ''}"
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
			z-index: 90;
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
