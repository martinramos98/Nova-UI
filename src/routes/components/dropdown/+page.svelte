<script lang="ts">
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import DropDownItem from '$lib/Components/Dropdown/DropDownItem/DropDownItem.svelte';
	import Dropdown from '$lib/Components/Dropdown/Dropdown.svelte';
	import DropDownGroup from '$lib/Components/Dropdown/DropdownGroup/DropdownGroup.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<div class="flex flex-row page-content">
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
						<DropDownItem>Item 1</DropDownItem>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<!-- <DropDownItem closeOnClick={false}>Item 2</DropDownItem> -->
						<DropDownItem>Item 3</DropDownItem>
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
						<DropDownItem>Item 1</DropDownItem>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<DropDownItem closeOnClick={false}>Item 2</DropDownItem>
						<DropDownItem>Item 3</DropDownItem>
					</Dropdown>
					<Dropdown triggerText="Open Dropdown" position={'right-start'}>
						<p class="font-bold pl-2 my-2">Section 1</p>
						<DropDownItem>Item 1</DropDownItem>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<DropDownItem closeOnClick={false}>Item 2</DropDownItem>
						<DropDownItem>Item 3</DropDownItem>
					</Dropdown>
					<Dropdown triggerText="Open Dropdown" position="bottom">
						<p class="font-bold pl-2 my-2">Section 1</p>
						<DropDownItem>Item 1</DropDownItem>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<DropDownItem closeOnClick={false}>Item 2</DropDownItem>
						<DropDownItem>Item 3</DropDownItem>
					</Dropdown>
					<Dropdown triggerText="Open Dropdown" position="top">
						<p class="font-bold pl-2 my-2">Section 1</p>
						<DropDownItem>Item 1</DropDownItem>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<p class="font-bold pl-2 my-2">Section 2</p>
						<DropDownItem closeOnClick={false}>Item 2</DropDownItem>
						<DropDownItem>Item 3</DropDownItem>
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
						<DropDownGroup>
							{#snippet triggerContent()}
								<span>Menu 1</span>
							{/snippet}
							<p class="font-bold my-2 italic">Menu 1</p>
							<DropDownItem className="px-2">Item 1</DropDownItem>
							<DropDownItem className="px-2">Item 2</DropDownItem>
							<DropDownItem className="px-2">Item 3</DropDownItem>
						</DropDownGroup>
						<DropDownGroup>
							{#snippet triggerContent()}
								<span>Menu 2</span>
							{/snippet}
							<p class="font-bold my-2 italic">Menu 2</p>
							<DropDownItem className="px-2">Item 1</DropDownItem>
							<DropDownItem className="px-2">Item 2</DropDownItem>
							<DropDownItem className="px-2">Item 3</DropDownItem>
							<DropDownItem className="px-2">Item 4</DropDownItem>
							<DropDownItem className="px-2">Item 5</DropDownItem>
						</DropDownGroup>
						<DropDownGroup>
							{#snippet triggerContent()}
								<span>Menu 3</span>
							{/snippet}
							<p class="font-bold my-2 italic">Menu 3</p>
							<DropDownItem className="px-2">Item 1</DropDownItem>
							<DropDownItem className="px-2">Item 2</DropDownItem>
						</DropDownGroup>
						<DropDownGroup position="right" classNameContainer="w-[200px] shadow-md">
							{#snippet triggerContent()}
								<span>Open subsection</span>
							{/snippet}
							<p class="font-bold text-center my-2">Subsection 1</p>
							<DropDownGroup>
								{#snippet triggerContent()}
									<span>Open subsection</span>
								{/snippet}
								<p class="font-bold my-2 italic">Subsub section</p>
								<DropDownItem>Item Subsub section</DropDownItem>
							</DropDownGroup>
						</DropDownGroup>
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
						<DropDownItem>Item 1</DropDownItem>
					</Dropdown>
					<Dropdown offset={20} triggerText="Open Dropdown">
						<p class="font-bold pl-2 my-2">Offset Positive</p>
						<Divider size={1} color="var(--color-stone-500)" className="my-2"></Divider>
						<DropDownItem>Item 1</DropDownItem>
					</Dropdown>
				</div>
			</section>
		</article>
	</main>
</div>

<style>
	.page-content {
		& > main {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			& > article {
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 70%;
				background-color: var(--color-surface-low);
				padding: var(--spacing-2) var(--spacing-6) var(--spacing-6) var(--spacing-6);
				border-radius: var(--radius-xl);
				gap: var(--spacing-4);
				margin: var(--spacing-6) 0;
				& > section {
					display: flex;
					/* view-timeline: --block;
			view-timeline-axis: inline;
			animation-timeline: view();
			animation-name: show;
			animation-range: entry 80% cover 70%;
			animation-fill-mode: both; */
					/* align-self: center; */
					width: fit-content;
					max-width: 100%;
					flex-direction: column;
					background-color: var(--color-surface-low);
					justify-content: center;
					gap: var(--spacing-2);
					& > div {
						justify-self: center;
						align-items: center;
						align-self: center;
						display: flex;
						flex-wrap: wrap;
						width: fit-content;
						padding: var(--spacing-4);
						gap: var(--spacing-8);
						flex-direction: row;
					}
				}
			}
		}
		& > aside {
			& > span {
				width: max-content;
				display: block;
			}
			position: sticky;
			height: fit-content;
			top: 65px;
			width: max-content;
			left: 2.5%;
			padding: var(--spacing-4);
			border-radius: var(--radius-xl);
			background-color: var(--color-surface-low);
			& ul {
				width: max-content;
			}
		}
	}
</style>
