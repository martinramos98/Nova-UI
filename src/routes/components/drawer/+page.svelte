<script>
	import { Button } from '@nv-org/button';
	import { Drawer } from '@nv-org/drawer';
	import { Title } from '@nv-org/title';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
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
						variant="solid"
						colors="primary"
						onClick={() => {
							openDrawer = true;
						}}>Open Drawer</Button
					>
					<Drawer
						drawerContentClassName="p-2 flex flex-col"
						open={openDrawer}
						size={'xs'}
						onClose={() => {
							openDrawer = false;
						}}
					>
						<Title class="m-2">Drawer</Title>
						<p class="m-2">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
							aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
							quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta quis
							voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem repellendus
							fugiat corporis aliquid cumque est?
						</p>
						<Button
							colors="error"
							variant="flat"
							className="w-fit mt-auto ml-auto mr-2 mb-2"
							onClick={() => {
								openDrawer = false;
							}}>Close</Button
						>
					</Drawer>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Positions</Title>
			</header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerTop = true;
	}}
	>
	Open Drawer Top
</Button>
<Drawer
	open={openDrawerTop}
	size={'xs'}
	position="top"
	drawerContentClassName="p-2 flex flex-col w-full"
	onClose={() => {
		openDrawerTop = false;
	}}
>
	<Title level={2} class="m-2">Top Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
		autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
		voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
		sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
		dolorem repellendus fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerTop = false;
		}}
	>
		Close
	</Button>
</Drawer>`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerTop = true;
								}}
							>
								Open Drawer Top
							</Button>
							<Drawer
								open={openDrawerTop}
								size={'sm'}
								position="top"
								drawerContentClassName="p-2 flex flex-col w-full"
								onClose={() => {
									openDrawerTop = false;
								}}
							>
								<Title level={2} class="m-2">Top Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerTop = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerBottom = true;
	}}>Open Drawer Bottom</Button
>
<Drawer
	open={openDrawerBottom}
	size={'xs'}
	drawerContentClassName="p-2 flex flex-col w-full"
	position="bottom"
	onClose={() => {
		openDrawerBottom = false;
	}}
>
	<Title level={2} class="m-2">Bottom Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum dolor
		sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta quis
		voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem repellendus
		fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerBottom = false;
		}}
	>
		Close
	</Button>
</Drawer>
					`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerBottom = true;
								}}>Open Drawer Bottom</Button
							>
							<Drawer
								open={openDrawerBottom}
								size={'xs'}
								drawerContentClassName="p-2 flex flex-col w-full"
								position="bottom"
								onClose={() => {
									openDrawerBottom = false;
								}}
							>
								<Title level={2} class="m-2">Bottom Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerBottom = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerLeft = true;
	}}>Open Drawer Left</Button
>
<Drawer
	open={openDrawerLeft}
	size={'xs'}
	drawerContentClassName="p-2 flex flex-col w-full"
	position="left"
	onClose={() => {
		openDrawerLeft = false;
	}}
>
	<Title level={2} class="m-2">Left Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum dolor
		sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta quis
		voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem repellendus
		fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerBottom = false;
		}}
	>
		Close
	</Button>
</Drawer>
					`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerLeft = true;
								}}>Open Drawer Left</Button
							>
							<Drawer
								open={openDrawerLeft}
								size={'xs'}
								drawerContentClassName="p-2 flex flex-col h-full"
								position="left"
								onClose={() => {
									openDrawerLeft = false;
								}}
							>
								<Title level={2} class="m-2">Left Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerLeft = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Drawer
	open={openDrawerRight}
	size={'xs'}
	drawerContentClassName="p-2 flex flex-col h-full"
	position="right"
	onClose={() => {
		openDrawerRight = false;
	}}
>
	<Title level={2} class="m-2">Right Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum dolor
		sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta quis
		voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem repellendus
		fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerRight= false;
		}}
	>
		Close
	</Button>
</Drawer>
					`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerRight = true;
								}}>Open Drawer Right</Button
							>
							<Drawer
								open={openDrawerRight}
								size={'xs'}
								drawerContentClassName="p-2 flex flex-col h-full"
								position="right"
								onClose={() => {
									openDrawerRight = false;
								}}
							>
								<Title level={2} class="m-2">Right Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerRight = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>

		<article>
			<header>
				<Title level={2}>Sizes</Title>
			</header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Drawer
	open={openDrawerXS}
	size={'xs'}
	drawerContentClassName="p-2 flex flex-col h-full"
	onClose={() => {
		openDrawerXS = false;
	}}
>
	<Title level={2} class="m-2">XS Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta
		quis voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem
		repellendus fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerXS = false;
		}}
	>
		Close
	</Button>
</Drawer>
					`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerXS = true;
								}}>Open Drawer XS</Button
							>
							<Drawer
								open={openDrawerXS}
								size={'xs'}
								drawerContentClassName="p-2 flex flex-col h-full"
								onClose={() => {
									openDrawerXS = false;
								}}
							>
								<Title level={2} class="m-2">XS Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerXS = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerSM = true;
	}}>Open Drawer SM</Button
>
<Drawer
	open={openDrawerSM}
	size={'sm'}
	drawerContentClassName="p-2 flex flex-col h-full"
	onClose={() => {
		openDrawerSM = false;
	}}
>
	<Title level={2} class="m-2">SM Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta
		quis voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem
		repellendus fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerSM = false;
		}}
	>
		Close
	</Button>
</Drawer>
					`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerSM = true;
								}}>Open Drawer SM</Button
							>
							<Drawer
								open={openDrawerSM}
								size={'sm'}
								drawerContentClassName="p-2 flex flex-col h-full"
								onClose={() => {
									openDrawerSM = false;
								}}
							>
								<Title level={2} class="m-2">SM Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerSM = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerMD = true;
	}}>Open Drawer MD</Button
>
<Drawer
	open={openDrawerMD}
	size={'md'}
	drawerContentClassName="p-2 flex flex-col h-full"
	onClose={() => {
		openDrawerMD = false;
	}}
>
	<Title level={2} class="m-2">MD Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta
		quis voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem
		repellendus fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerMD = false;
		}}
	>
		Close
	</Button>
</Drawer>
					`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerMD = true;
								}}>Open Drawer MD</Button
							>
							<Drawer
								open={openDrawerMD}
								size={'md'}
								drawerContentClassName="p-2 flex flex-col h-full"
								onClose={() => {
									openDrawerMD = false;
								}}
							>
								<Title level={2} class="m-2">MD Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerMD = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerLG = true;
	}}>Open Drawer LG</Button
>
<Drawer
	open={openDrawerLG}
	size={'lg'}
	drawerContentClassName="p-2 flex flex-col h-full"
	onClose={() => {
		openDrawerLG = false;
	}}
>
	<Title level={2} class="m-2">LG Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta
		quis voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem
		repellendus fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerLG = false;
		}}
	>
		Close
	</Button>
</Drawer>
					`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerLG = true;
								}}>Open Drawer LG</Button
							>
							<Drawer
								open={openDrawerLG}
								size={'lg'}
								drawerContentClassName="p-2 flex flex-col h-full"
								onClose={() => {
									openDrawerLG = false;
								}}
							>
								<Title level={2} class="m-2">LG Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerLG = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerXL = true;
	}}>Open DrawerXL</Button
>
<Drawer
	open={openDrawerXL}
	size={'xl'}
	drawerContentClassName="p-2 flex flex-col h-full"
	onClose={() => {
		openDrawerXL = false;
	}}
>
	<Title level={2} class="m-2">XL Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta
		quis voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem
		repellendus fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerXL = false;
		}}
	>
		Close
	</Button>
</Drawer>
					
					`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerXL = true;
								}}>Open DrawerXL</Button
							>
							<Drawer
								open={openDrawerXL}
								size={'xl'}
								drawerContentClassName="p-2 flex flex-col h-full"
								onClose={() => {
									openDrawerXL = false;
								}}
							>
								<Title level={2} class="m-2">XL Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerXL = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerFull = true;
	}}>Open Drawer Full</Button
>
<Drawer
	open={openDrawerFull}
	size={'full'}
	drawerContentClassName="p-2 flex flex-col h-full"
	onClose={() => {
		openDrawerFull = false;
	}}
>
	<Title level={2} class="m-2">Right Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta
		quis voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem
		repellendus fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerFull = false;
		}}
	>
		Close
	</Button>
</Drawer>
					`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerFull = true;
								}}>Open Drawer Full</Button
							>
							<Drawer
								open={openDrawerFull}
								size={'full'}
								drawerContentClassName="p-2 flex flex-col h-full"
								onClose={() => {
									openDrawerFull = false;
								}}
							>
								<Title level={2} class="m-2">Right Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerFull = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article id="backdrop">
			<header>
				<Title level={2}>Backdrop</Title>
			</header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerNormal = true;
	}}>Open Drawer Normal</Button
>
<Drawer
	open={openDrawerNormal}
	drawerContentClassName="p-2 flex flex-col h-full"
	size={'md'}
	backdrop={{
		className: '',
		type: 'normal'
	}}
	onClose={() => {
		openDrawerNormal = false;
	}}
>
	<Title level={2} class="m-2">Default Backdrop Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta
		quis voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem
		repellendus fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerNormal = false;
		}}
	>
		Close
	</Button>
</Drawer>
			`}
						>{#snippet component()}
							<Button
								onClick={() => {
									openDrawerNormal = true;
								}}>Open Drawer Normal</Button
							>
							<Drawer
								open={openDrawerNormal}
								size={'md'}
								drawerContentClassName="p-2 flex flex-col h-full"
								backdrop={{
									className: '',
									type: 'normal'
								}}
								onClose={() => {
									openDrawerNormal = false;
								}}
							>
								<Title level={2} class="m-2">Default Backdrop Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerNormal = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}</ComponentCodeTabs
					>
				</div>
			</section>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerBlurred = true;
	}}>Open Drawer Blur</Button
>
<Drawer
	open={openDrawerBlurred}
	size={'xs'}
	drawerContentClassName="p-2 flex flex-col h-full"
	backdrop={{
		className: '',
		type: 'blur'
	}}
	onClose={() => {
		openDrawerBlurred = false;
	}}
>
	<Title level={2} class="m-2">Blur Backdrop Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta
		quis voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem
		repellendus fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerNormal = false;
		}}
	>
		Close
	</Button>
</Drawer>`}
						>{#snippet component()}
							<Button
								onClick={() => {
									openDrawerBlurred = true;
								}}>Open Drawer Blur</Button
							>
							<Drawer
								open={openDrawerBlurred}
								size={'xs'}
								drawerContentClassName="p-2 flex flex-col h-full"
								backdrop={{
									className: '',
									type: 'blur'
								}}
								onClose={() => {
									openDrawerBlurred = false;
								}}
							>
								<Title level={2} class="m-2">Blur Backdrop Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerNormal = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}</ComponentCodeTabs
					>
				</div>
			</section>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`<Button
	onClick={() => {
		openDrawerTransparent = true;
	}}>Open Drawer Transparent</Button
>
<Drawer
	open={openDrawerTransparent}
	size={'xs'}
	drawerContentClassName="p-2 flex flex-col h-full"
	backdrop={{
		className: '',
		type: 'transparent'
	}}
	onClose={() => {
		openDrawerTransparent = false;
	}}
>
	<Title level={2} class="m-2">Transparent Backdrop Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum
		quae expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta
		quis voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem
		repellendus fugiat corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		className="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawerNormal = false;
		}}
	>
		Close
	</Button>
</Drawer>
				`}
					>
						{#snippet component()}
							<Button
								onClick={() => {
									openDrawerTransparent = true;
								}}>Open Drawer Transparent</Button
							>
							<Drawer
								open={openDrawerTransparent}
								size={'xs'}
								drawerContentClassName="p-2 flex flex-col h-full"
								backdrop={{
									className: '',
									type: 'transparent'
								}}
								onClose={() => {
									openDrawerTransparent = false;
								}}
							>
								<Title level={2} class="m-2">Transparent Backdrop Drawer</Title>
								<p class="m-2">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus
									autem aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae
									voluptatum quae expedita provident error! Accusamus asperiores quia voluptatum.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet odit non sed
									sapiente soluta quis voluptate dicta consequatur doloremque! Amet ratione adipisci
									dolorem repellendus fugiat corporis aliquid cumque est?
								</p>
								<Button
									colors="error"
									variant="flat"
									className="w-fit mt-auto ml-auto mr-2 mb-2"
									onClick={() => {
										openDrawerNormal = false;
									}}
								>
									Close
								</Button>
							</Drawer>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
	</main>
</div>
