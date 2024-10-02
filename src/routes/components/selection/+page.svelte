<svelte:options runes={true} />

<script>
	import { Option, Selection } from '@nv-org/selection';
	import { Title } from '@nv-org/title';

	let selVal = $state(new Set());
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
						classSelected="rounded-sm"
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
					<Selection
						bind:selectedValue={selVal}
						colors="container"
						multiselection
						selectionLabel={'Multiselection Selection'}
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
				<Title level={2}>Placeholder</Title>
			</header>
			<section>
				<div class="w-full">
					<Selection
						selectionLabel={'Default Selection'}
						colors="container"
						variant={'default'}
						placeholder="Placeholder"
						classSelected="rounded-sm"
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
						classSelected="rounded-sm"
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
						classSelected="rounded-sm"
					>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
						<Option value={4}>4</Option>
					</Selection>
					<Selection
						selectionLabel={'Blurred Selection'}
						classInputBox="min-w-[200px]"
						variant={'blurred'}
						classSelected="rounded-sm"
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
						classInputBox="min-w-[200px]"
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
						classInputBox="min-w-[200px]"
						classSelected="rounded-sm"
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
						classInputBox="min-w-[200px]"
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
						classInputBox="min-w-[200px]"
						classSelected="rounded-sm"
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
						classInputBox="min-w-[200px]"
						classSelected="rounded-sm"
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
						classInputBox="min-w-[200px]"
						classSelected="rounded-sm"
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
						classInputBox="min-w-[200px]"
						classSelected="rounded-sm"
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
						classInputBox="min-w-[200px]"
						classSelected="rounded-sm"
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
