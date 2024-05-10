<script lang="ts">
	import Button from '$lib/Components/Button/Button.svelte';
	import ButtonGroup from '$lib/Components/ButtonGroup/ButtonGroup.svelte';
	import Icon from '$lib/Components/Icons/Icon.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import { toast } from '$lib/Components/Toast/toast';
	function triggerBasicToast() {
		toast(
			'top-right',
			{
				content: 'This is a basic toast'
			},
			2000
		);
	}
	function triggerToastPosition(position: string) {
		toast(
			position,
			{
				content: `This is a basic toast on ${position}`
			},
			2000
		);
	}
	function triggerToastType(type: string) {
		toast(
			'top-right',
			{
				type,
				content: `This is a ${type} toast`
			},
			2000
		);
	}
	function triggerToastDuration(duration: number) {
		toast(
			'top-right',
			{
				content: `This is toast will close after ${duration}ms`
			},
			duration
		);
	}
	function triggerToastWithCloseButton() {
		toast(
			'top-right',
			{
				withCloseButton: true,
				type: 'warning',
				content: `This is toast can be closed with ⇒`
			},
			10000
		);
	}
</script>

{#snippet content(closeToast)}
	<img class="h-[35px] w-[35px]" src="/coffee.svg" />
	<p class="text-black">Who needs a coffee?</p>
	<Button onClick={closeToast} className="text-xs p-1" colors="primary mx-1" variant="solid"
		>Dismiss</Button
	>
{/snippet}

<div class="page-content">
	<main>
		<article>
			<header>
				<Title>Toast</Title>
			</header>
			<section>
				<div>
					<Button onClick={triggerBasicToast} colors={'info'} variant="solid" className="w-fit"
						>Press Me</Button
					>
				</div>
			</section>
		</article>

		<article>
			<header>
				<Title level={2}>Positions</Title>
			</header>
			<section>
				<div>
					<Button
						onClick={() => {
							triggerToastPosition('top-left');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">top-left</Button
					>
					<Button
						onClick={() => {
							triggerToastPosition('top');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">top</Button
					>
					<Button
						onClick={() => {
							triggerToastPosition('top-right');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">top-right</Button
					>
					<Button
						onClick={() => {
							triggerToastPosition('bottom-left');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">bottom-left</Button
					>
					<Button
						onClick={() => {
							triggerToastPosition('bottom');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">bottom</Button
					>
					<Button
						onClick={() => {
							triggerToastPosition('bottom-right');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">bottom-right</Button
					>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Types</Title>
			</header>
			<section>
				<div>
					<Button
						onClick={() => {
							triggerToastType('default');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press Default</Button
					>
					<Button
						onClick={() => {
							triggerToastType('warning');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press Warning</Button
					>
					<Button
						onClick={() => {
							triggerToastType('success');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press Success</Button
					>
					<Button
						onClick={() => {
							triggerToastType('info');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press Info</Button
					>
					<Button
						onClick={() => {
							triggerToastType('alert');
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press Alert</Button
					>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Duration</Title>
			</header>
			<section>
				<div>
					<Button
						onClick={() => {
							triggerToastDuration(500);
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Toast 500ms</Button
					>
					<Button
						onClick={() => {
							triggerToastDuration(1000);
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press 1000ms</Button
					>
					<Button
						onClick={() => {
							triggerToastDuration(2000);
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press 2000ms</Button
					>
					<Button
						onClick={() => {
							triggerToastDuration(2000);
							triggerToastDuration(1000);
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press 2000ms and 1000ms</Button
					>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Close Button</Title>
			</header>
			<section>
				<div>
					<Button
						onClick={() => {
							triggerToastWithCloseButton();
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press me</Button
					>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<div>
					<Button
						onClick={() => {
							toast(
								'top-right',
								{
									withCloseButton: true,
									type: 'info',
									variant: 'solid',
									content: `This is solid toast `
								},
								10000
							);
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press me</Button
					>
					<Button
						onClick={() => {
							toast(
								'top-right',
								{
									withCloseButton: true,
									type: 'info',
									variant: 'faded',
									content: `This is faded toast `
								},
								10000
							);
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press me</Button
					>
					<Button
						onClick={() => {
							toast(
								'top-right',
								{
									withCloseButton: true,
									type: 'info',
									variant: 'blurred',
									content: `This is blurred toast `
								},
								10000
							);
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press me</Button
					>
					<Button
						onClick={() => {
							toast(
								'top-right',
								{
									withCloseButton: true,
									type: 'info',
									variant: 'neon',
									content: `This is neon toast `
								},
								10000
							);
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press me</Button
					>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Customs</Title>
			</header>
			<section>
				<div>
					<Button
						onClick={() => {
							toast(
								'top-right',
								{
									className: 'bg-orange-300 flex flex-row items-center py-1 px-2 gap-0',
									content: content
								},
								Infinity
							);
						}}
						colors={'info'}
						variant="solid"
						className="w-fit">Press me</Button
					>
				</div>
			</section>
		</article>
	</main>
</div>
