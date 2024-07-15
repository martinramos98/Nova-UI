<script>
	import { CollapsableBlock } from '@nv-org/collapsable-block';
	import { Title } from '@nv-org/title';
	import { Navbar } from '@nv-org/navbar';
	import { MenuButton } from '@nv-org/button';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	let open = false;
	let openLeft = false;
	let openRight = false;
	let openBottom = false;
	let openTop = false;
	function toggleOpenTop() {
		openTop = !openTop;
	}

	function toggleOpenBottom() {
		openBottom = !openBottom;
	}
	function toggleOpenLeft() {
		openLeft = !openLeft;
	}
	function toggleOpenRight() {
		openRight = !openRight;
	}
	function toggleOpen() {
		open = !open;
	}
</script>

<div class="page-content">
	<aside></aside>
	<main>
		<article>
			<header>
				<Title>Collapsables Blocks</Title>
			</header>
			<section>
				<div>
					<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
						<MenuButton onClickMenu={toggleOpen}></MenuButton>
					</Navbar>
					<CollapsableBlock className="w-full" classNameContainer={'w-full'} bind:open>
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
							<Title level={3}>Collapsable Menu</Title>
							<ul>
								<li>Test</li>
								<li>Test</li>
								<li>Test</li>
							</ul>
						{/snippet}
					</CollapsableBlock>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Positions</Title>
			</header>
			<section>
				<Title level={3}>Top</Title>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
	<MenuButton onClickMenu={toggleOpenTop}></MenuButton>
</Navbar>
<CollapsableBlock
	position="top"
	className="w-full"
	classNameContainer={'w-full'}
	bind:open={openTop}
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
		<Title level={3}>Collapsable Menu</Title>
		<ul>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
		</ul>
	{/snippet}
</CollapsableBlock>`}
					>
						{#snippet component()}
							<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
								<MenuButton onClickMenu={toggleOpenTop}></MenuButton>
							</Navbar>
							<CollapsableBlock
								position="top"
								className="w-full"
								classNameContainer={'w-full'}
								bind:open={openTop}
							>
								<p class="mt-4">
									Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
									culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
									cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
									amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur
									ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo
									officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident
									adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
									reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris
									sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
								</p>
								{#snippet content()}
									<Title level={3}>Collapsable Menu</Title>
									<ul>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
									</ul>
								{/snippet}
							</CollapsableBlock>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<Title level={3}>Bottom</Title>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
	<MenuButton onClickMenu={toggleOpenBottom}></MenuButton>
</Navbar>
<CollapsableBlock
	position="bottom"
	className="w-full"
	classNameContainer={'w-full'}
	bind:open={openBottom}
>
	<p>
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
		<Title level={3}>Collapsable Menu</Title>
		<ul>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
		</ul>
	{/snippet}
</CollapsableBlock>
					`}
					>
						{#snippet component()}
							<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
								<MenuButton onClickMenu={toggleOpenBottom}></MenuButton>
							</Navbar>
							<CollapsableBlock
								position="bottom"
								className="w-full"
								classNameContainer={'w-full'}
								bind:open={openBottom}
							>
								<p>
									Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
									culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
									cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
									amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur
									ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo
									officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident
									adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
									reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris
									sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
								</p>
								{#snippet content()}
									<Title level={3}>Collapsable Menu</Title>
									<ul>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
									</ul>
								{/snippet}
							</CollapsableBlock>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<Title level={3}>Left</Title>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
	<MenuButton onClickMenu={toggleOpenLeft}></MenuButton>
</Navbar>
<CollapsableBlock
	className="w-[200px]"
	position="left"
	classNameContainer={'w-full'}
	bind:open={openLeft}
>
	<p class="ml-2">
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
		<Title level={3}>Collapsable Menu</Title>
		<ul>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
		</ul>
	{/snippet}
</CollapsableBlock>
					`}
					>
						{#snippet component()}
							<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
								<MenuButton onClickMenu={toggleOpenLeft}></MenuButton>
							</Navbar>
							<CollapsableBlock
								className="w-[200px]"
								position="left"
								classNameContainer={'w-full'}
								bind:open={openLeft}
							>
								<p class="ml-2">
									Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
									culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
									cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
									amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur
									ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo
									officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident
									adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
									reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris
									sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
								</p>
								{#snippet content()}
									<Title level={3}>Collapsable Menu</Title>
									<ul>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
									</ul>
								{/snippet}
							</CollapsableBlock>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<Title level={3}>Right</Title>

				<div class="w-full">
					<ComponentCodeTabs
						code={`<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
	<MenuButton onClickMenu={toggleOpenRight}></MenuButton>
</Navbar>
<CollapsableBlock
	className="w-[200px]"
	position="right"
	classNameContainer={'w-full'}
	bind:open={openRight}
>
	<p class="mr-2">
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
		<Title level={3}>Collapsable Menu</Title>
		<ul>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
			<li class="ui-color-primary px-2 ui-variant-light">Test</li>
		</ul>
	{/snippet}
</CollapsableBlock>`}
					>
						{#snippet component()}
							<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
								<MenuButton onClickMenu={toggleOpenRight}></MenuButton>
							</Navbar>
							<CollapsableBlock
								className="w-[200px]"
								position="right"
								classNameContainer={'w-full'}
								bind:open={openRight}
							>
								<p class="mr-2">
									Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
									culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
									cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
									amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur
									ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo
									officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident
									adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
									reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris
									sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
								</p>
								{#snippet content()}
									<Title level={3}>Collapsable Menu</Title>
									<ul>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
										<li class="ui-color-primary px-2 ui-variant-light">Test</li>
									</ul>
								{/snippet}
							</CollapsableBlock>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Custom</Title>
			</header>
			<section></section>
		</article>
	</main>
</div>
