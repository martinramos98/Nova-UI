<script>
	import Alert from '$lib/Components/Alert/Alert.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import CloseButton from '$lib/Components/CloseButton/CloseButton.svelte';
	import Icon from '$lib/Components/Icons/Icon.svelte';
	import SuccessIcon from '$lib/Components/Icons/IconsPath/SuccessIcon.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	let openAlert = false;
	let openAlertType = false;
	let openPrompt = false;
	let resPrompt = undefined;
	let openConfirm = false;
	let resConfirm = undefined;
	let openCustomFooterDefault = false;
	let openCustomFooterPrompt = false;
	function toggleAlert() {
		openAlert = !openAlert;
	}
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#alert">Alert</a></li>
			<li><a href="#contents">Contents</a></li>
			<!-- <li><a href="#disabled">type</a></li> -->
			<li><a href="#sizes">Sizes</a></li>
			<li><a href="#backdrop">Backdrop</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title level={1}>Alert</Title>
			</header>
			<section>
				<div>
					<Button variant={'solid'} colors="info" onClick={toggleAlert}>Click Me</Button>
					<Alert onClose={() => {}} bind:open={openAlert}>
						<Title level={4}>Alert!</Title>
						<p>Something Happens!</p>
					</Alert>
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
						variant={'solid'}
						colors="info"
						onClick={() => {
							openAlertType = true;
						}}>Toggle Alert</Button
					>
					<Alert onClose={() => {}} bind:open={openAlertType}>
						<Title level={4}>Alert!</Title>
						<p>Something Happens!</p>
					</Alert>
				</div>
			</section>
			<section>
				<div>
					<Button
						variant={'solid'}
						colors="info"
						onClick={() => {
							openPrompt = true;
						}}>Prompt Something</Button
					>
					<p>Result: {resPrompt}</p>
					<Alert
						onClose={(val) => {
							resPrompt = val;
						}}
						type="prompt"
						bind:open={openPrompt}
					>
						<Title level={4}>Prompt!</Title>
						<p>Do not put your credit card!</p>
					</Alert>
				</div>
			</section>
			<section>
				<div>
					<Button
						variant={'solid'}
						colors="info"
						onClick={() => {
							openConfirm = true;
						}}>Click To Confirm</Button
					>
					<Button
						colors="primary"
						variant="light"
						onClick={() => {
							resConfirm = undefined;
						}}>Reset</Button
					>
					<p>Confirmed: {resConfirm}</p>
					<Alert
						onClose={(val) => {
							resConfirm = val;
						}}
						type="confirm"
						bind:open={openConfirm}
					>
						<Title level={4}>Alert!</Title>
						<p>Something Happens!</p>
					</Alert>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Custom Content and Footer</Title>
			</header>
			<section>
				<div>
					<Button
						onClick={() => {
							openCustomFooterDefault = true;
						}}>Open Custom Alert</Button
					>
					<Alert
						className="relative bg-slate-800"
						onClose={() => {}}
						bind:open={openCustomFooterDefault}
					>
						<div class="mt-1">
							<span class="font-semibold">Custom Alert</span>
							<p>This is an alert that wants to notify you something about you must to councern</p>
						</div>
						{#snippet footer(closeAlert)}
							<CloseButton
								className="rounded-full p-1 w-fit absolute right-2 top-2"
								onClose={closeAlert}
								variant="solid"
								colors="error"
							></CloseButton>
						{/snippet}
					</Alert>
				</div>
			</section>
			<section>
				<div>
					<Button
						onClick={() => {
							openCustomFooterPrompt = true;
						}}>Open Custom Alert Prompt</Button
					>
					<Alert
						text={'Please, insert your name:'}
						type="prompt"
						onClose={() => {}}
						bind:open={openCustomFooterPrompt}
					>
						{#snippet footer(closeAlert, confirmAlert)}
							<div class="w-full flex gap-2 mt-2 mr-2 justify-end">
								<Button
									onClick={confirmAlert}
									colors="info"
									variant="solid"
									className="p-1 rounded-full"
								>
									<Icon
										props={{
											viewBox: '0 0 24 24',
											fill: 'none',
											class: 'stroke-[var(--color-text)] w-[15px] h-[15px]'
										}}
									>
										<SuccessIcon />
									</Icon>
								</Button>
								<CloseButton
									className="rounded-full p-1 w-fit "
									onClose={closeAlert}
									variant="flat"
									colors="error"
								></CloseButton>
							</div>
						{/snippet}
					</Alert>
				</div>
			</section>
		</article>
	</main>
</div>
