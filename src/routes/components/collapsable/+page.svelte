<script>
	import { CollapsableBlock } from '@nv-org/collapsable-block';
	import { Title } from '@nv-org/title';
	import { Navbar } from '@nv-org/navbar';
	import { MenuButton } from '@nv-org/button';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import { Divider } from '@nv-org/divider';
	import CollapsablePositionCases from '../../../app/components/pagesSections/collapsable/CollapsablePositionCases.svelte';
	let open = $state(false);
	let openLeft = $state(false);
	let openRight = $state(false);
	let openBottom = $state(false);
	let openTop = $state(false);
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
	<AsideComponentPage
		asideItems={[
			{ ref: '#collapsable-block', text: 'Collapsable Block' },
			{ ref: '#positions', text: 'Positions' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical"></Divider>
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
							The Collapsible Block Menu is a UI component that allows sections of content to be
							expanded and collapsed within an application. Its main UX advantage is that it
							improves organization and navigation by reducing visual clutter, enabling users to
							focus only on relevant information when needed. Additionally, it enhances the mobile
							experience by saving screen space and facilitates interaction by providing an
							intuitive and accessible structure.
						</p>
						{#snippet content()}
							<Title level={3}>Collapsable Menu</Title>
							<ul>
								<li class="ui-color-primary px-2 ui-variant-light">Home</li>
								<li class="ui-color-primary px-2 ui-variant-light">Section</li>
								<li class="ui-color-primary px-2 ui-variant-light">Test</li>
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
			<CollapsablePositionCases />
		</article>
	</main>
</div>
