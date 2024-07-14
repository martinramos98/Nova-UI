<script lang="ts">
	import { Divider } from '@nova/divider';
	import { Dropdown, DropdownGroup, DropdownItem } from '@nova/dropdown';
	import { Title } from '@nova/title';
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#button">Dropdown</a></li>
			<li><a href="#contents">Contents</a></li>
			<li><a href="#disabled">Disabled</a></li>
			<li><a href="#positions">Positions</a></li>
			<li><a href="#subsections">Subsections</a></li>
			<li><a href="#offset">Offset</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title level={1}>Dropdown</Title>
			</header>
			<section>
				<div>
					<Dropdown triggerText="Open Dropdown">
						<p class="font-bold pl-2 my-2">Section 1</p>
						<DropdownItem>Item 1</DropdownItem>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<!-- <DropdownItem closeOnClick={false}>Item 2</DropdownItem> -->
						<DropdownItem>Item 3</DropdownItem>
					</Dropdown>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Positions</Title>
			</header>
			<section>
				<div>
					<Dropdown position="left-start" triggerText="Open Dropdown">
						<p class="font-bold pl-2 my-2">Section 1</p>
						<DropdownItem>Item 1</DropdownItem>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<DropdownItem closeOnClick={false}>Item 2</DropdownItem>
						<DropdownItem>Item 3</DropdownItem>
					</Dropdown>
					<Dropdown triggerText="Open Dropdown" position={'right-start'}>
						<p class="font-bold pl-2 my-2">Section 1</p>
						<DropdownItem>Item 1</DropdownItem>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<DropdownItem closeOnClick={false}>Item 2</DropdownItem>
						<DropdownItem>Item 3</DropdownItem>
					</Dropdown>
					<Dropdown triggerText="Open Dropdown" position="bottom">
						<p class="font-bold pl-2 my-2">Section 1</p>
						<DropdownItem>Item 1</DropdownItem>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<DropdownItem closeOnClick={false}>Item 2</DropdownItem>
						<DropdownItem>Item 3</DropdownItem>
					</Dropdown>
					<Dropdown triggerText="Open Dropdown" position="top">
						<p class="font-bold pl-2 my-2">Section 1</p>
						<DropdownItem>Item 1</DropdownItem>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<DropdownItem closeOnClick={false}>Item 2</DropdownItem>
						<DropdownItem>Item 3</DropdownItem>
					</Dropdown>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Subsections</Title>
			</header>
			<section>
				<div>
					<Dropdown triggerText="Open Dropdown">
						<p class="font-bold pl-2 my-2">Menues</p>
						<Divider size={1}></Divider>
						<DropdownGroup>
							{#snippet triggerContent()}
								<span>Menu 1</span>
							{/snippet}
							<p class="font-bold my-2 italic">Menu 1</p>
							<DropdownItem className="px-2">Item 1</DropdownItem>
							<DropdownItem className="px-2">Item 2</DropdownItem>
							<DropdownItem className="px-2">Item 3</DropdownItem>
						</DropdownGroup>
						<DropdownGroup>
							{#snippet triggerContent()}
								<span>Menu 2</span>
							{/snippet}
							<p class="font-bold my-2 italic">Menu 2</p>
							<DropdownItem className="px-2">Item 1</DropdownItem>
							<DropdownItem className="px-2">Item 2</DropdownItem>
							<DropdownItem className="px-2">Item 3</DropdownItem>
							<DropdownItem className="px-2">Item 4</DropdownItem>
							<DropdownItem className="px-2">Item 5</DropdownItem>
						</DropdownGroup>
						<DropdownGroup>
							{#snippet triggerContent()}
								<span>Menu 3</span>
							{/snippet}
							<p class="font-bold my-2 italic">Menu 3</p>
							<DropdownItem className="px-2">Item 1</DropdownItem>
							<DropdownItem className="px-2">Item 2</DropdownItem>
						</DropdownGroup>
						<DropdownGroup position="right" classNameContainer="w-[200px] shadow-md">
							{#snippet triggerContent()}
								<span>Open subsection</span>
							{/snippet}
							<p class="font-bold text-center my-2">Subsection 1</p>
							<DropdownGroup>
								{#snippet triggerContent()}
									<span>Open subsection</span>
								{/snippet}
								<p class="font-bold my-2 italic">Subsub section</p>
								<DropdownItem>Item Subsub section</DropdownItem>
							</DropdownGroup>
						</DropdownGroup>
					</Dropdown>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Offset</Title>
			</header>
			<section>
				<div>
					<Dropdown offset={-20} triggerText="Open Dropdown">
						<p class="font-bold pl-2 my-2">Offset Negative</p>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<DropdownItem>Item 1</DropdownItem>
					</Dropdown>
					<Dropdown offset={20} triggerText="Open Dropdown">
						<p class="font-bold pl-2 my-2">Offset Positive</p>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<DropdownItem>Item 1</DropdownItem>
					</Dropdown>
				</div>
			</section>
		</article>
	</main>
</div>
