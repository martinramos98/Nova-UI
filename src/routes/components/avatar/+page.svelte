<script lang="ts">
	import { Title } from '@nv-org/title';
	import { Avatar, AvatarGroup } from '@nv-org/avatar';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	// import AvatarProps from '../../../app/components/pagesSections/avatar/AvatarProps.svelte';
	import PropItem from '../../../app/components/propItem/PropItem.svelte';
	import AsideComponentPage from '../../../app/components/AsidePage/AsideComponentPage.svelte';
	import { Divider } from '@nv-org/divider';
	import AvatarContentCases from '../../../app/components/pagesSections/avatar/ContentCases/AvatarContentCases.svelte';
	import AvatarBasicCases from '../../../app/components/pagesSections/avatar/basicCases/AvatarBasicCases.svelte';
	import AvatarBorderedCases from '../../../app/components/pagesSections/avatar/borderedCases/AvatarBorderedCases.svelte';
	import AvatarGroupCase from '../../../app/components/pagesSections/avatar/AvatarGroupCase/AvatarGroupCase.svelte';
	export let data;
	function codeString(props: string) {
		return `<Avatar ${props}/>`;
	}
	console.log(data);
</script>

<svelte:head>
	<title>Nova UI - Avatar</title>
	<meta
		name="description"
		content="Nova UI provides fully accesible and customizable Avatar components. Avatar components are a visual representation often used to depict users or entities within a user interface. It's typically consists of an image or icon that represents a person, organization, or any type of concept."
	/>
</svelte:head>
<div class="page-content">
	<AsideComponentPage
		asideItems={[
			{ ref: '#avatar', text: 'Avatar' },
			{ ref: '#options', text: 'Content Options' },
			{ ref: '#bordered', text: 'Bordered' },
			{ ref: '#avatar-group', text: 'Avatar Group' },
			{ ref: '#properties', text: 'Properties' }
		]}
	></AsideComponentPage>
	<Divider orientation="vertical" size={1}></Divider>

	<main>
		<article id={'avatar'}>
			<header>
				<Title level={1} class=" text-start w-full ">Avatar</Title>
			</header>

			<p class="py-2 px-2">
				Avatars components are a visual representation often used to depict users or entities within
				a user interface. It typically consists of an image or icon that represents a person,
				organization, or concept.
			</p>
			<AvatarBasicCases />
		</article>
		<article id={'options'}>
			<header>
				<Title level={2} class="w-fit p-2">Content Options</Title>
			</header>
			<AvatarContentCases />
		</article>
		<article id={'bordered'}>
			<header>
				<Title level={2} class="w-fit p-2">Bordered</Title>
			</header>
			<AvatarBorderedCases />
		</article>
		<article id={'avatar_group'}>
			<header>
				<Title level={2}>Avatar Group</Title>
			</header>
			<AvatarGroupCase />
		</article>
		<article>
			<header>
				<Title level={2}>Properties</Title>
			</header>

			<section>
				{#each Object.entries(data.data) as [title, componentData]}
					<Title level={3} class="first-letter:uppercase">{title}</Title>
					{#each componentData as propItem}
						<PropItem data={propItem}></PropItem>
					{/each}
				{/each}
			</section>
		</article>
	</main>
</div>
