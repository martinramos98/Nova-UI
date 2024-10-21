export function avatarBasicCasesCode() {
	return `

<script>
  import {Avatar} from '@nv-org/avatar'
</script>
<div class="flex flex-row flex-wrap">
	<Avatar
		avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-isabelle.7bf2a8f2.aead314d58b63e27.png'}
	/>
	<Avatar
		avatarSrc={'https://play.nintendo.com/images/profile-animalcrossing-porter.7e18061d.png'}
	></Avatar>
	<Avatar avatarSrc={'https://play.nintendo.com/images/profile-kirby-kirby.7bf2a8f2.png'}
	></Avatar>
	<Avatar
		avatarSrc={'https://play.nintendo.com/images/profile-kirby-metaknight.7bf2a8f2.png'}
	></Avatar>
</div>
  `;
}
