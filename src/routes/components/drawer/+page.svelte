<script>
	import Button from '$lib/Components/Button/Button.svelte';
	import Drawer from '$lib/Components/Drawer/Drawer.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	let openDrawer = false;
	let openDrawerTop = false;
	let openDrawerBottom = false;
	let openDrawerLeft = false;
	let openDrawerRight = false;
	let openDrawerXS = false;
	let openDrawerSM = false;
	let openDrawerMD = false;
	let openDrawerLG = false;
	let openDrawerXL = false;
	let openDrawerFull = false;
	let openDrawerNormal = false;
	let openDrawerBlurred = false;
	let openDrawerTransparent = false;
</script>

<div class="flex flex-row page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#drawer">Drawer</a></li>
			<li><a href="#position">Position</a></li>
			<li><a href="#size">Size</a></li>
			<li><a href="#backdrop">Backdrop</a></li>
		</ul>
	</aside>

	<main>
		<article>
			<header>
				<Title>Drawer</Title>
			</header>
			<section>
				<div>
					<Button
						onClick={() => {
							openDrawer = true;
						}}>Open Drawer</Button
					>
					<Drawer
						open={openDrawer}
						size={'xs'}
						onClose={() => {
							openDrawer = false;
						}}
					>
						<p>Holi from Drawer</p>
					</Drawer>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Positions</Title>
			</header>
			<section>
				<div>
					<div>
						<Button
							onClick={() => {
								openDrawerTop = true;
							}}>Open Drawer Top</Button
						>
						<Drawer
							open={openDrawerTop}
							size={'xs'}
							position="top"
							onClose={() => {
								openDrawerTop = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
					<div>
						<Button
							onClick={() => {
								openDrawerBottom = true;
							}}>Open Drawer Bottom</Button
						>
						<Drawer
							open={openDrawerBottom}
							size={'xs'}
							position="bottom"
							onClose={() => {
								openDrawerBottom = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
					<div>
						<Button
							onClick={() => {
								openDrawerLeft = true;
							}}>Open Drawer Left</Button
						>
						<Drawer
							open={openDrawerLeft}
							size={'xs'}
							position="left"
							onClose={() => {
								openDrawerLeft = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>

					<div>
						<Button
							onClick={() => {
								openDrawerRight = true;
							}}>Open Drawer Right</Button
						>
						<Drawer
							open={openDrawerRight}
							size={'xs'}
							position="right"
							onClose={() => {
								openDrawerRight = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Sizes</Title>
			</header>
			<section>
				<div>
					<div>
						<Button
							onClick={() => {
								openDrawerXS = true;
							}}>Open Drawer</Button
						>
						<Drawer
							open={openDrawerXS}
							size={'xs'}
							onClose={() => {
								openDrawerXS = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
					<div>
						<Button
							onClick={() => {
								openDrawerSM = true;
							}}>Open Drawer SM</Button
						>
						<Drawer
							open={openDrawerSM}
							size={'sm'}
							onClose={() => {
								openDrawerSM = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
					<div>
						<Button
							onClick={() => {
								openDrawerMD = true;
							}}>Open Drawer MD</Button
						>
						<Drawer
							open={openDrawerMD}
							size={'md'}
							onClose={() => {
								openDrawerMD = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
					<div>
						<Button
							onClick={() => {
								openDrawerLG = true;
							}}>Open Drawer LG</Button
						>
						<Drawer
							open={openDrawerLG}
							size={'lg'}
							onClose={() => {
								openDrawerLG = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
					<div>
						<Button
							onClick={() => {
								openDrawerXL = true;
							}}>Open DrawerXL</Button
						>
						<Drawer
							open={openDrawerXL}
							size={'xl'}
							onClose={() => {
								openDrawerXL = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
					<div>
						<Button
							onClick={() => {
								openDrawerFull = true;
							}}>Open Drawer Full</Button
						>
						<Drawer
							open={openDrawerFull}
							size={'full'}
							onClose={() => {
								openDrawerFull = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
				</div>
			</section>
		</article>
		<article id="backdrop">
			<header>
				<Title level={2}>Backdrop</Title>
			</header>
			<section>
				<div>
					<div>
						<Button
							onClick={() => {
								openDrawerNormal = true;
							}}>Open Drawer Normal</Button
						>
						<Drawer
							open={openDrawerNormal}
							size={'md'}
							backdrop={{
								className: '',
								type: 'normal'
							}}
							onClose={() => {
								openDrawerNormal = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
					<div>
						<Button
							onClick={() => {
								openDrawerBlurred = true;
							}}>Open Drawer Blur</Button
						>
						<Drawer
							open={openDrawerBlurred}
							size={'xs'}
							backdrop={{
								className: '',
								type: 'blur'
							}}
							onClose={() => {
								openDrawerBlurred = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
					<div>
						<Button
							onClick={() => {
								openDrawerTransparent = true;
							}}>Open Drawer Transparent</Button
						>
						<Drawer
							open={openDrawerTransparent}
							size={'xs'}
							backdrop={{
								className: '',
								type: 'transparent'
							}}
							onClose={() => {
								openDrawerTransparent = false;
							}}
						>
							<p>Holi from Drawer</p>
						</Drawer>
					</div>
				</div>
			</section>
		</article>
	</main>
	<!-- <Title className="px-4">Drawers</Title>
<Divider className="my-2" size={1} color={'rgb(var(--primary-10))'}></Divider>
<div class="div-row">
	<Button
		onClick={() => {
			openDrawer = true;
		}}
	>
		Open drawer
	</Button>
	<Drawer
		open={openDrawer}
		size={'xs'}
		onClose={() => {
			openDrawer = false;
		}}
	>
		<p>Holi from Drawer</p>
	</Drawer>
</div>

<Title level={2} className="px-4">Drawers Variants</Title>
<Divider className="my-2" size={1} color={'rgb(var(--primary-10))'}></Divider>

<Title level={3} className="px-4">Drawers Positions</Title>
<div class="div-row">
	<Button
		variant={'solid'}
		onClick={() => {
			openDrawerTop = true;
		}}
	>
		Open drawer Top
	</Button>
	<Drawer
		position={'top'}
		open={openDrawerTop}
		size={'xs'}
		onClose={() => {
			openDrawerTop = false;
		}}
	>
		<p>Holi from Drawer Top</p>
	</Drawer>
	<Button
		variant={'solid'}
		onClick={() => {
			openDrawerLeft = true;
		}}
	>
		Open drawer Left
	</Button>
	<Drawer
		position={'left'}
		open={openDrawerLeft}
		size={'xs'}
		onClose={() => {
			openDrawerLeft = false;
		}}
	>
		<p>Holi from Drawer Left</p>
	</Drawer>
	<Button
		variant={'solid'}
		onClick={() => {
			openDrawerBottom = true;
		}}
	>
		Open drawer Bottom
	</Button>
	<Drawer
		position={'bottom'}
		open={openDrawerBottom}
		size={'full'}
		onClose={() => {
			openDrawerBottom = false;
		}}
	>
		<p>Holi from Drawer Bottom</p>
		<Button
			onClick={() => {
				openDrawerBottom = false;
			}}
			colors="error"
			variant="flat"
		>
			close</Button
		>
	</Drawer>
	<Button
		variant={'solid'}
		onClick={() => {
			openDrawerRight = true;
		}}
	>
		Open drawer Right
	</Button>
	<Drawer
		open={openDrawerRight}
		size={'xs'}
		onClose={() => {
			openDrawerRight = false;
		}}
	>
		<p>Holi from Drawer Right</p>
	</Drawer>
</div>
<Title level={3} className="px-4">Drawers Backrops</Title>
<div class="div-row">
	<Button
		variant={'solid'}
		onClick={() => {
			openNormal = true;
		}}
	>
		Open drawer Normal
	</Button>
	<Drawer
		open={openNormal}
		size={'xs'}
		onClose={() => {
			openNormal = false;
		}}
	>
		<p>Holi from Drawer Normal</p>
	</Drawer>
	<Button
		variant={'solid'}
		onClick={() => {
			openBlur = true;
		}}
	>
		Open drawerblur
	</Button>
	<Drawer
		backdrop={{
			type: 'blur',
			className: ''
		}}
		open={openBlur}
		size={'xs'}
		onClose={() => {
			openBlur = false;
		}}
	>
		<p>Holi from Drawer Blur</p>
	</Drawer>
	<Button
		variant={'solid'}
		onClick={() => {
			openTransparent = true;
		}}
	>
		Open drawer Transparent
	</Button>
	<Drawer
		backdrop={{
			type: 'transparent',
			className: ''
		}}
		open={openTransparent}
		size={'xs'}
		onClose={() => {
			openTransparent = false;
		}}
	>
		<p>Holi from Drawer transparent</p>
	</Drawer>
</div> -->
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
