<script>
	import Title from '$lib/Components/Title/Title.svelte';
	import Avatar from '$lib/Components/Avatar/Avatar.svelte';
	import AvatarGroup from '$lib/Components/AvatarGroup/AvatarGroup.svelte';
</script>

<svelte:head>
	<title>Nova UI - Avatar</title>
	<meta
		name="description"
		content="Nova UI provides fully accesible and customizable Avatar components. Avatar components are a visual representation often used to depict users or entities within a user interface. It's typically consists of an image or icon that represents a person, organization, or any type of concept."
	/>
</svelte:head>
<div class="flex flex-row">
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
				<div>
					<Avatar
						avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-isabelle.7bf2a8f2.aead314d58b63e27.png'}
					></Avatar>
					<Avatar
						avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-porter.7e18061d.png'}
					></Avatar>
					<Avatar avatarSrc={'https://play.nintendo.com/images/profile-kirby-kirby.7bf2a8f2.png'}
					></Avatar>
					<Avatar
						avatarSrc={'https://play.nintendo.com/images/profile-kirby-metaknight.7bf2a8f2.png'}
					></Avatar>
				</div>
			</section>
		</article>
		<article id={'options'}>
			<header>
				<Title level={2} className="w-fit p-2">Content Options</Title>
			</header>
			<section>
				<div>
					<Avatar
						className="font-bold"
						avatarSrc={'https://play.nintendo.com/images/profile-mk-koopa.7bf2a8f2.png'}
					></Avatar>
					<Avatar className="font-bold bg-zinc-800 text-xl" avatarName="Koopa Troopa"></Avatar>
					<Avatar className={'bg-zinc-700 p-1'}></Avatar>
				</div>
			</section>
		</article>
		<article id={'bordered'}>
			<header>
				<Title level={2} className="w-fit p-2">Bordered</Title>
			</header>
			<section>
				<div class="">
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
			</section>
		</article>
		<article id={'avatar_group'}>
			<header>
				<Title level={2}>Avatar Group</Title>
			</header>
			<section class="ml-6">
				<AvatarGroup>
					<Avatar
						avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-isabelle.7bf2a8f2.aead314d58b63e27.png'}
					></Avatar>
					<Avatar
						avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-porter.7e18061d.png'}
					></Avatar>
					<Avatar avatarSrc={'https://play.nintendo.com/images/profile-kirby-kirby.7bf2a8f2.png'}
					></Avatar>
					<Avatar
						avatarSrc={'https://play.nintendo.com/images/profile-kirby-metaknight.7bf2a8f2.png'}
					></Avatar>
				</AvatarGroup>
			</section>
		</article>
	</main>
</div>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	aside {
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
	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 70%;
		background-color: var(--color-surface-low);
		padding: var(--spacing-2) var(--spacing-6) var(--spacing-6) var(--spacing-6);
		border-radius: var(--radius-xl);
		gap: var(--spacing-4);
		margin: var(--spacing-6) 0;
		& header {
			/* margin: var(--spacing-4) 0; */
			/* padding: var(--spacing-2); */
			/* border-radius: var(--radius-xl); */
		}
		& section {
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
			& div {
				justify-self: center;
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
</style>
