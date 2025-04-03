export default function chipUsageCase() {
	return `<script>
import { Chip, Avatar } from '@nv-org/components;
</script>
<div class="box-case">
	<Avatar
		avatarBordered
		colors="error"
		class={'size-14'}
		avatarSrc="https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.png"
	></Avatar>
	<div class="description">
		<span class="text-lg font-semibold">Bowser</span>
		<div class="chip-list gap-2">
			<Chip size="xs" variant="solid" class="bg-orange-700 rounded-full">Fire</Chip>
			<Chip size="xs" variant="solid" class="bg-lime-900 rounded-full">Turtle</Chip>
			<Chip size="xs" variant="solid" class="bg-amber-500 text-black rounded-full">King</Chip>
		</div>
	</div>
</div> 
<style>
	.box-case {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		& > .description {
			display: flex;
			flex-direction: column;
			gap: 0.3rem;
			& > .chip-list {
				display: flex;
				flex-direction: row;
			}
		}
	}
</style>
`;
}
