<script lang="ts">
	import { ElementAnimation, defaultKeyframesAnimations } from '@nova/element-animation-js';
	import {
		SequencedChildrenAnimation,
		SequencedSiblingAnimation
	} from '@nova/element-animation-js';
	// import Button from '$lib/Components/Button/Button.svelte';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import { onMount } from 'svelte';
	let a: HTMLElement, b: HTMLElement, c: HTMLElement, d: HTMLElement;
	let e: HTMLElement, f: HTMLElement, g: HTMLElement, h: HTMLElement;
	let ball: HTMLElement;
	let parent: HTMLElement;
	let parent2: HTMLElement;
	let sibling1: HTMLElement;
	let sibling2: HTMLElement;
	let sibling3;
	const keyframeA: Keyframe[] = [{ scale: '1' }, { scale: '1.5' }];
	const keyframeB: Keyframe[] = [
		{ rotate: '0deg', composite: 'accumulate' },
		{ rotate: '45deg', composite: 'accumulate' }
	];
	const animOptionsA: KeyframeAnimationOptions = {
		easing: 'linear',
		iterations: 1,
		fill: 'both',
		duration: 500
	};
	const animOptionsB: KeyframeAnimationOptions = {
		easing: 'linear',
		iterations: Infinity,
		composite: 'accumulate',
		duration: 2000,
		fill: 'auto'
	};
	const animOptionsC: KeyframeAnimationOptions = {
		easing: 'ease',
		iterations: Infinity,
		composite: 'accumulate',
		duration: 2000,
		fill: 'both',
		direction: 'alternate'
	};
	const animOptionsD: KeyframeAnimationOptions = {
		easing: 'ease-in-out',
		iterations: 1,
		duration: 1000,
		fill: 'both'
	};
	onMount(() => {
		let anima = new ElementAnimation(a, {
			alternate: true,
			iterations: Infinity,
			delay: 5000,
			animations: [
				{
					keyframes: defaultKeyframesAnimations['fade-out'],
					animationOptions: animOptionsA
				}
			]
		});
		let animb = new ElementAnimation(b, {
			alternate: false,
			iterations: Infinity,
			animations: {
				keyframes: defaultKeyframesAnimations['rotate'],
				animationOptions: animOptionsB
			}
		});
		let animc = new ElementAnimation(c, {
			alternate: false,
			iterations: 1,
			animations: {
				keyframes: defaultKeyframesAnimations['scale-up'],
				animationOptions: animOptionsC
			}
		});
		let animd = new ElementAnimation(d, {
			alternate: true,
			iterations: Infinity,
			delay: 2000,
			animations: [
				{
					keyframes: defaultKeyframesAnimations['fly-left'],
					animationOptions: animOptionsD
				}
			]
		});
		let multie = new ElementAnimation(e, {
			alternate: true,
			iterations: Infinity,
			delay: 2000,
			animations: [
				{
					keyframes: defaultKeyframesAnimations['fly-left'],
					animationOptions: animOptionsD
				},
				{
					keyframes: defaultKeyframesAnimations['fade-in'],
					animationOptions: animOptionsD
				}
			]
		});
		let multif = new ElementAnimation(f, {
			alternate: false,
			iterations: Infinity,
			delay: undefined,
			animations: [
				// {
				// 	keyframes: defaultKeyframesAnimations['rotate'],
				// 	animationOptions: animOptionsD
				// },
				{
					keyframes: [{ offsetDistance: '0' }, { offsetDistance: '100%' }],
					animationOptions: { duration: 2000, iterations: 1, easing: 'linear', fill: 'both' }
				}
			]
		});
		let multig = new ElementAnimation(g, {
			alternate: true,
			iterations: Infinity,
			delay: 2000,
			animations: [
				{
					keyframes: defaultKeyframesAnimations['fly-left'],
					animationOptions: animOptionsD
				}
			]
		});
		let multih = new ElementAnimation(h, {
			alternate: true,
			iterations: Infinity,
			delay: 2000,
			animations: [
				{
					keyframes: defaultKeyframesAnimations['fly-left'],
					animationOptions: animOptionsD
				}
			]
		});
		let ballanim = new ElementAnimation(ball, {
			alternate: false,
			iterations: Infinity,
			animations: [
				{
					keyframes: defaultKeyframesAnimations['rotate'],
					animationOptions: animOptionsD
				}
			]
		});
		let childrenAnimation1 = SequencedChildrenAnimation(
			parent,
			{
				animations: [
					{
						animationOptions: {
							duration: 100,
							easing: 'linear',
							fill: 'both',
							direction: 'reverse'
						},
						keyframes: defaultKeyframesAnimations['fly-top']
					}
				],
				alternate: true,
				iterations: 1
			},
			'first',
			true,
			Infinity
		);
		let childrenAnimation2 = SequencedChildrenAnimation(
			parent2,
			{
				animations: [
					{
						animationOptions: {
							duration: 200,
							easing: 'linear',
							fill: 'both',
							direction: 'normal',
							composite: 'accumulate',
							iterations: 1
						},
						keyframes: [{ rotate: '0deg' }, { rotate: '45deg' }]
					}
				],
				alternate: false,
				iterations: 1
			},
			'first',
			false,
			Infinity
		);
		let siblingAnim1 = SequencedSiblingAnimation(
			sibling1,
			{
				animations: [
					{
						animationOptions: {
							duration: 200,
							easing: 'linear',
							fill: 'both',
							direction: 'normal',
							composite: 'accumulate',
							iterations: 1
						},
						keyframes: [{ rotate: '0deg' }, { rotate: '45deg' }]
					}
				],
				alternate: false,
				iterations: 1
			},
			'next',
			false,
			Infinity
		);
		let siblingAnim2 = SequencedSiblingAnimation(
			sibling2,
			{
				animations: [
					{
						animationOptions: {
							duration: 500,
							easing: 'ease',
							fill: 'both',
							direction: 'normal',
							iterations: 1
						},
						keyframes: [
							{ scale: '0', opacity: '0' },
							{ opacity: '0' },
							{ scale: '1', opacity: '1' }
						]
					}
				],
				alternate: false,
				iterations: 1
			},
			'previous',
			true,
			Infinity
		);
		let siblingAnim3 = SequencedSiblingAnimation(
			sibling3,
			{
				animations: [
					{
						animationOptions: {
							duration: 300,
							easing: 'ease',
							fill: 'both',
							direction: 'normal',
							iterations: 1
						},
						keyframes: [
							{ scale: '0', opacity: '0' },
							{ opacity: '0' },
							{ scale: '1', opacity: '1' }
						]
					}
				],
				alternate: false,
				iterations: 1
			},
			'both',
			true,
			Infinity
		);
		siblingAnim1.play();
		siblingAnim2.play();
		siblingAnim3.play();
		childrenAnimation2.play();
		childrenAnimation1.play();
		anima.play();
		animb.play();
		animc.play();
		animd.play();
		multif.play();
		multif.play();
		ballanim.play();
		multie.play();
	});
</script>

<Title level={3}>Simple Animation</Title>
<Divider size={1}></Divider>
<section>
	<div bind:this={a} class="a"></div>
	<div bind:this={b} class="b"></div>
	<div bind:this={c} class="bg-red-500 size-20"></div>
	<div bind:this={d} class="bg-slate-500 size-20"></div>
</section>
<Title level={3}>Multi Animation</Title>
<Divider size={1}></Divider>
<section>
	<div bind:this={e} class="bg-blue-400 size-20"></div>
	<div bind:this={f} class="f">
		<span
			bind:this={ball}
			class="ball rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 size-20 block"
		></span>
	</div>
	<div bind:this={g} class="bg-sky-500 size-20"></div>
	<div bind:this={h} class="bg-stone-500 size-20"></div>
</section>
<Title level={3}>Parallel Animations</Title>
<Divider size={1}></Divider>
<section></section>
<Title level={3}>Sequenced Animations</Title>
<Divider size={1}></Divider>
<Title level={4}>Children Animations</Title>
<div class="flex flex-row justify-around">
	<section class="parent" bind:this={parent}>
		<div class="child-a1 size-12 bg-red-100"></div>
		<div class="child-a2 size-12 bg-red-200"></div>
		<div class="child-a3 size-12 bg-red-400"></div>
		<div class="child-a4 size-12 bg-red-500"></div>
		<div class="child-a5 size-12 bg-red-600"></div>
	</section>
	<section class="parent" bind:this={parent2}>
		<div class="child-a1 size-12 bg-blue-100"></div>
		<div class="child-a2 size-12 bg-blue-200"></div>
		<div class="child-a3 size-12 bg-blue-400"></div>
		<div class="child-a4 size-12 bg-blue-500"></div>
		<div class="child-a5 size-12 bg-blue-600"></div>
	</section>
</div>

<Title level={4}>Siblings Animations</Title>
<div class="flex flex-row justify-around flex-wrap">
	<section>
		<div class="child-a1 bg-green-100 size-12"></div>
		<div bind:this={sibling1} class="child-a2 bg-green-200 size-12"></div>
		<div class="child-a3 bg-green-400 size-12"></div>
		<div class="child-a4 bg-green-500 size-12"></div>
		<div class="child-a5 bg-green-600 size-12"></div>
	</section>
	<section>
		<div class="child-a1 bg-yellow-100 size-12"></div>
		<div class="child-a2 bg-yellow-200 size-12"></div>
		<div class="child-a3 bg-yellow-400 size-12"></div>
		<div bind:this={sibling2} class="child-a4 bg-yellow-500 size-12"></div>
		<div class="child-a5 bg-yellow-600 size-12"></div>
	</section>
	<section>
		<div class="child-a1 bg-purple-100 size-12"></div>
		<div class="child-a2 bg-purple-200 size-12"></div>
		<div bind:this={sibling3} class="child-a3 bg-purple-400 size-12"></div>
		<div class="child-a4 bg-purple-500 size-12"></div>
		<div class="child-a5 bg-purple-600 size-12"></div>
	</section>
</div>
<Title level={4}>Custom Elements Animations</Title>
<section></section>

<style>
	div {
		margin: 40px;
	}
	.a {
		width: 80px;
		background-color: cornflowerblue;
		height: 80px;
	}
	.b {
		width: 80px;
		background-color: var(--success-20);
		height: 80px;
	}
	section {
		display: grid;
		grid-auto-flow: column;
	}
	.f {
		offset-path: circle(20px);
		width: fit-content;
		height: fit-content;
		offset-rotate: 90deg;
		offset-position: 500px;
		offset-anchor: bottom center;
	}
</style>
