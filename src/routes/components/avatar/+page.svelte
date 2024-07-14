<script lang="ts">
	import { Title } from '@nova/title';
	import { Avatar, AvatarGroup } from '@nova/avatar';
	import ComponentCodeTabs from '../../../app/components/ComponentShowcase/ComponentCodeTabs.svelte';
	function codeString(props: string) {
		return `<Avatar ${props}/>`;
	}
</script>

<svelte:head>
	<title>Nova UI - Avatar</title>
	<meta
		name="description"
		content="Nova UI provides fully accesible and customizable Avatar components. Avatar components are a visual representation often used to depict users or entities within a user interface. It's typically consists of an image or icon that represents a person, organization, or any type of concept."
	/>
</svelte:head>
<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#avatar">Avatar</a></li>
			<li><a href="#variants">Variants</a></li>
			<li><a href="#bordered">Bordered</a></li>
			<li><a href="#custom">Custom Content</a></li>
			<li><a href="#group">Avatar Group</a></li>
		</ul>
	</aside>

	<main>
		<article id={'avatar'}>
			<header>
				<Title level={1} className=" text-start w-full ">Avatar</Title>
			</header>

			<p class="py-2 px-2">
				Avatars components are a visual representation often used to depict users or entities within
				a user interface. It typically consists of an image or icon that represents a person,
				organization, or concept.
			</p>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={codeString(
							"avatarSrc='https://play.nintendo.com/images/profile-animalcrossing-isabelle.7bf2a8f2.aead314d58b63e27.png'"
						)}
					>
						{#snippet component()}
							<div class="flex flex-row">
								<Avatar
									avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-isabelle.7bf2a8f2.aead314d58b63e27.png'}
								/>
								<Avatar
									avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-porter.7e18061d.png'}
								></Avatar>
								<Avatar
									avatarSrc={'https://play.nintendo.com/images/profile-kirby-kirby.7bf2a8f2.png'}
								></Avatar>
								<Avatar
									avatarSrc={'https://play.nintendo.com/images/profile-kirby-metaknight.7bf2a8f2.png'}
								></Avatar>
							</div>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article id={'options'}>
			<header>
				<Title level={2} className="w-fit p-2">Content Options</Title>
			</header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={`${codeString("className='font-bold' avatarSrc='https://play.nintendo.com/images/profile-mk-koopa.7bf2a8f2.png'")}\n${codeString("className='font-bold bg-zinc-800 text-xl' avatarName='Koopa Troopa'")}\n${codeString("className='bg-zinc-700 p-1'")}`}
					>
						{#snippet component()}
							<div class="flex flex-row gap-2">
								<Avatar
									className="font-bold"
									avatarSrc="https://play.nintendo.com/images/profile-mk-koopa.7bf2a8f2.png"
								></Avatar>
								<Avatar className="font-bold bg-zinc-800 text-xl" avatarName="Koopa Troopa"
								></Avatar>
								<Avatar className="bg-zinc-700 p-1"></Avatar>
							</div>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article id={'bordered'}>
			<header>
				<Title level={2} className="w-fit p-2">Bordered</Title>
			</header>
			<section>
				<div class="w-full">
					<ComponentCodeTabs
						code={codeString(
							`colors="primary" avatarBordered avatarSrc='https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png'`
						)}
					>
						{#snippet component()}
							<div class="flex flex-row items-center gap-4">
								<Avatar
									colors="primary"
									avatarBordered
									avatarSrc={'https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png'}
								></Avatar>
								<Avatar
									colors="secondary"
									avatarBordered
									avatarSrc={'https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png'}
								></Avatar>
								<Avatar
									colors="tertiary"
									avatarBordered
									avatarSrc={'https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png'}
								></Avatar>
								<Avatar
									colors="error"
									avatarBordered
									avatarSrc={'https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png'}
								></Avatar>
								<Avatar
									colors="info"
									avatarBordered
									avatarSrc={'https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png'}
								></Avatar>
								<Avatar
									colors="success"
									avatarBordered
									avatarSrc={'https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png'}
								></Avatar>
								<Avatar
									colors="warning"
									avatarBordered
									avatarSrc={'https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png'}
								></Avatar>
							</div>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
		<article id={'avatar_group'}>
			<header>
				<Title level={2}>Avatar Group</Title>
			</header>
			<section class="ml-6 bg-inherit">
				<div class="bg-inherit w-full">
					<ComponentCodeTabs
						code={`<AvatarGroup>
	<Avatar
		avatarSrc='https://play.nintendo.com/images/profile-animalcrossing-isabelle.7bf2a8f2.aead314d58b63e27.png'
	/>
	<Avatar
		avatarSrc='https://play.nintendo.com/images/profile-animalcrossing-porter.7e18061d.png'
	/>
	<Avatar
		avatarSrc='https://play.nintendo.com/images/profile-kirby-kirby.7bf2a8f2.png'
	/>
	<Avatar
		avatarSrc='https://play.nintendo.com/images/profile-kirby-metaknight.7bf2a8f2.png'
	/>
</AvatarGroup>
					`}
					>
						{#snippet component()}
							<AvatarGroup>
								<Avatar
									avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-isabelle.7bf2a8f2.aead314d58b63e27.png'}
								></Avatar>
								<Avatar
									avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-porter.7e18061d.png'}
								></Avatar>
								<Avatar
									avatarSrc={'https://play.nintendo.com/images/profile-kirby-kirby.7bf2a8f2.png'}
								></Avatar>
								<Avatar
									avatarSrc={'https://play.nintendo.com/images/profile-kirby-metaknight.7bf2a8f2.png'}
								></Avatar>
							</AvatarGroup>
						{/snippet}
					</ComponentCodeTabs>
				</div>
			</section>
		</article>
	</main>
</div>
