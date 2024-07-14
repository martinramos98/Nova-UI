<script>
	import { Radio, RadioGroup, RadioButton } from '@nova/radio';
	import { Title } from '@nova/title';
</script>

<div class="page-content">
	<main>
		<article>
			<header>
				<Title level={1}>Radio</Title>
			</header>
			<section class="w-full">
				<div class="w-full">
					<RadioButton value={undefined} type="radio"></RadioButton>
					<RadioButton value={undefined} type="checkbox"></RadioButton>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<div>
					<RadioButton value={undefined} variant="solid" type="radio"></RadioButton>
					<RadioButton value={undefined} variant="faded" type="radio"></RadioButton>
					<RadioButton value={undefined} variant="flat" type="radio"></RadioButton>
					<RadioButton value={undefined} variant="neon" type="radio"></RadioButton>
				</div>
			</section>
			<section>
				<div>
					<RadioButton value={undefined} variant="solid" type="checkbox"></RadioButton>
					<RadioButton value={undefined} variant="faded" type="checkbox"></RadioButton>
					<RadioButton value={undefined} variant="flat" type="checkbox"></RadioButton>
					<RadioButton value={undefined} variant="neon" type="checkbox"></RadioButton>
				</div>
			</section>
		</article>
		<article>
			<header><Title level={2}>Colors</Title></header>
			<section>
				<div>
					<RadioButton value={undefined} colors="info" variant="flat" type="checkbox"></RadioButton>
					<RadioButton value={undefined} colors="error" variant="flat" type="checkbox"
					></RadioButton>
					<RadioButton value={undefined} colors="success" variant="flat" type="checkbox"
					></RadioButton>
					<RadioButton value={undefined} colors="warning" variant="flat" type="checkbox"
					></RadioButton>
					<RadioButton value={undefined} colors="primary" variant="flat" type="checkbox"
					></RadioButton>
				</div>
			</section>
		</article>
		<article>
			<header><Title level={2}>Line Throught</Title></header>
			<section>
				<div class="todo">
					<RadioButton
						value={undefined}
						lineThroughtOnCheck
						colors="info"
						variant="flat"
						type="checkbox"
					>
						<span>Do my homework</span>
					</RadioButton>
					<RadioButton
						lineThroughtOnCheck
						value={undefined}
						colors="info"
						variant="flat"
						type="checkbox"
					>
						<span>Go to gym</span>
					</RadioButton>
					<RadioButton
						lineThroughtOnCheck
						value={undefined}
						colors="info"
						variant="flat"
						type="checkbox"
					>
						<span>Do some code</span>
					</RadioButton>
					<RadioButton
						lineThroughtOnCheck
						value={undefined}
						colors="info"
						variant="flat"
						type="checkbox"
					>
						<span>Drink coffee</span>
					</RadioButton>
					<RadioButton
						lineThroughtOnCheck
						value={undefined}
						colors="info"
						variant="flat"
						type="checkbox"
					>
						<span>Go to sleep</span>
					</RadioButton>
				</div>
			</section>
		</article>
		<article>
			<header class="w-full">
				<Title level={2}>Radio Groups</Title>
			</header>
			<section class="w-full">
				<RadioGroup className="gap-2 flex flex-col" name="test" type="checkbox">
					<Radio colors="info" id={'item-1'} value={1} labelText="test1"></Radio>
					<Radio colors="info" id={'item-2'} variant="solid" value={2} labelText="test2" />
					<Radio colors="info" id={'item-3'} variant="solid" value={3} labelText="test3"></Radio>
					<Radio colors="info" id={'item-4'} variant="solid" value={4} labelText="test4"></Radio>
				</RadioGroup>
			</section>
			<section class="w-full">
				<RadioGroup className="gap-2 flex flex-col mt-4" name="test" type="radio">
					<Radio id={'item-1'} value={1} labelText="test1"></Radio>
					<Radio id={'item-2'} variant="solid" value={2} labelText="test2"></Radio>
					<Radio id={'item-3'} variant="solid" value={3} labelText="test3"></Radio>
					<Radio id={'item-4'} variant="solid" value={4} labelText="test4"></Radio>
				</RadioGroup>
			</section>
			<section class="w-full">
				<Title level={3}>Checkbox with Control</Title>
				<div class="w-full">
					<RadioGroup
						control={{ size: 'size-6' }}
						withControl
						className="gap-2 flex mt-3 flex-col"
						name="test"
						type="checkbox"
					>
						<Radio size={'size-6'} id={'item-1'} value={1} labelText="test1"></Radio>
						<Radio size={'size-6'} id={'item-2'} variant="faded" value={2} labelText="test2"
						></Radio>
						<Radio size={'size-6'} id={'item-3'} variant="flat" value={3} labelText="test3"></Radio>
						<Radio size={'size-6'} id={'item-4'} variant="neon" value={4} labelText="test4"></Radio>
					</RadioGroup>
				</div>
			</section>
		</article>
	</main>
</div>

<style>
	.todo {
		width: 100%;
		gap: 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
