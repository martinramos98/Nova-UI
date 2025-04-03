export default function collapsablePositionCases(position) {
	return `<script>
import { CollapsableBlock, MenuButton, Title, Navbar } from '@nv-org/componets';
let openCollapsable = $state(false);
function toggleMenu(){
	openCollapsable = !openCollapsable;
}
</script>
<div class="flex flex-col items-start gap-4">
	<Navbar useContainerQuery={false} variant={'none'} withMenu={false}>
		<MenuButton onClickMenu={toggleMenu}></MenuButton>
	</Navbar>
	<CollapsableBlock
		position="${position}"
		className="w-full"
		classNameContainer={'w-full'}
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
			<Title level={3}>Collapsable Menu {position}</Title>
			<ul>
				<li class="ui-color-primary px-2 ui-variant-light">Profile</li>
				<li class="ui-color-primary px-2 ui-variant-light">Users</li>
				<li class="ui-color-primary px-2 ui-variant-light">Tests</li>
			</ul>
		{/snippet}
	</CollapsableBlock>
</div>
`;
}
