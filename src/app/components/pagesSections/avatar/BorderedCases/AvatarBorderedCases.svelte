<script>
	import { Avatar } from '@nv-org/avatar';
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { avatarBorderedCasesCode } from './code.js';
</script>

<section>
	<div>
		<ComponentCodeTabs code={avatarBorderedCasesCode()}>
			{#snippet component()}
				<div class="flex flex-row flex-wrap gap-2">
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
