<script>
	import Input from '$lib/Components/Input/Input.svelte';
	import Option from '$lib/Components/Selection/Option.svelte';
	import Selection from '$lib/Components/Selection/Selection.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<div class="page-content">
	<main>
		<article>
			<header>
				<Title>Selection</Title>
			</header>
			<section>
				<div class="w-full">
					<Selection
						selectionLabel={'Test Selection'}
						colors="container"
						variant={'default'}
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Mutiselection</Title>
			</header>
			<section>
				<div class="w-full">
					<Selection colors="container" multiselection selectionLabel={'Multiselection Selection'}>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Placeholder</Title>
			</header>
			<section>
				<div class="w-full">
					<Selection
						selectionLabel={'Default Selection'}
						colors="container"
						variant={'default'}
						placeholder="Placeholder"
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
					<Selection
						colors="container"
						variant={'default'}
						placeholder="Placeholder"
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<div>
					<Selection
						selectionLabel={'Default Selection'}
						colors="container-hight"
						variant={'default'}
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
					<Selection
						selectionLabel={'Blurred Selection'}
						classNameInputBox="min-w-[200px]"
						variant={'blurred'}
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
					<Selection
						multiselection
						variant={'faded'}
						colors="primary"
						classNameInputBox="min-w-[200px]"
						selectionLabel={'Faded Selection'}
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
					<Selection
						selectionLabel={'Underlined Selection'}
						variant={'underlined'}
						classNameInputBox="min-w-[200px]"
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
					<Selection
						multiselection
						variant={'bordered'}
						colors={'primary'}
						classNameInputBox="min-w-[200px]"
						selectionLabel={'Bordered'}
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Colors</Title>
			</header>
			<section>
				<div>
					<Selection
						selectionLabel={'Selection Success'}
						variant={'underlined'}
						colors="success"
						classNameInputBox="min-w-[200px]"
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
					<Selection
						selectionLabel={'Selection Error'}
						variant={'underlined'}
						colors="error"
						classNameInputBox="min-w-[200px]"
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
					<Selection
						selectionLabel={'Selection Warning'}
						variant={'underlined'}
						colors="warning"
						classNameInputBox="min-w-[200px]"
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
					<Selection
						selectionLabel={'Selection Primary'}
						variant={'underlined'}
						colors="primary"
						classNameInputBox="min-w-[200px]"
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
					<Selection
						selectionLabel={'Selection Info'}
						variant={'underlined'}
						colors="info"
						classNameInputBox="min-w-[200px]"
						classNameSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
				</div>
			</section>
		</article>
	</main>
</div>
