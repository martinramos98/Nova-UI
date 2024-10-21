<script>
	import ComponentCodeTabs from '../../../ComponentShowcase/ComponentCodeTabs.svelte';
	import { Avatar } from '@nv-org/avatar';
	import { avatarContentCasesCode } from './code.js';
</script>

<section>
	<div>
		<ComponentCodeTabs code={avatarContentCasesCode()}>
			{#snippet component()}
				<div class="flex flex-row gap-2">
					<Avatar
						class="font-bold"
						avatarSrc="https://play.nintendo.com/images/profile-mk-koopa.7bf2a8f2.png"
					></Avatar>
					<Avatar class="font-bold bg-zinc-800 text-xl" avatarName="Koopa Troopa"></Avatar>
					<Avatar class="bg-zinc-700 p-1"></Avatar>
				</div>
			{/snippet}
		</ComponentCodeTabs>
	</div>
</section>
