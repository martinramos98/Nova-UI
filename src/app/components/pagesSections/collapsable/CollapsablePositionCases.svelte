<script>
	import ComponentCodeTabs from '../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { CollapsableBlock } from '@nv-org/collapsable-block';
	import { MenuButton } from '@nv-org/button';
	import { Navbar } from '@nv-org/navbar';
	import { Title } from '@nv-org/title';
	import collapsablePositionCases from './textCode.js';
	import { Option, Selection } from '@nv-org/selection';
	let openCollapsable = $state(false);
	let position = $state(new Set(['top']));
	function toggleMenu() {
		openCollapsable = !openCollapsable;
	}
</script>

<section class="relative">
	<div class="selection-box">
		<Selection
			variant="faded"
			class={'w-full'}
			selectionLabel={'Position'}
			bind:selectedValue={position}
		>
			<Option value="top">Top</Option>
			<Option value="left">Left</Option>
			<Option value="bottom">Bottom</Option>
			<Option value="right">Right</Option>
		</Selection>
	</div>
	<div class="w-full">
		<ComponentCodeTabs code={collapsablePositionCases(position.values().next().value)}>
			{#snippet component()}
				<div class="flex flex-col items-start gap-4">
					<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
						<MenuButton onClickMenu={toggleMenu}></MenuButton>
					</Navbar>
					<CollapsableBlock
						position={position.values().next().value}
						className="w-fit"
						classNameContainer={'w-fit'}
						bind:open={openCollapsable}
					>
						<p class="mt-4">
							Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
							culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
							cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
							amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
							officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia
							dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id
							nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
							ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
							consectetur et est culpa et culpa duis.
						</p>
						{#snippet content()}
							<Title level={3}>Collapsable Menu {position.values().next().value}</Title>
							<ul>
								<li class="ui-color-primary px-2 ui-variant-light">Profile</li>
								<li class="ui-color-primary px-2 ui-variant-light">Users</li>
								<li class="ui-color-primary px-2 ui-variant-light">Tests</li>
							</ul>
						{/snippet}
					</CollapsableBlock>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>

<style>
	.selection-box {
		z-index: 100;
		right: 0px;
		top: -10px;
		position: absolute;
		width: 200px !important;
		display: block !important;
	}
</style>
