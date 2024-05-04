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

<div class="page-content">
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
</div>
