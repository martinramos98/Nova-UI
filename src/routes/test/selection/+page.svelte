<script>
	import { Input } from '@nv-org/input';
	// import { Option, Selection } from '@nv-org/selection';
</script>

{#snippet startContent()}
	<p>Start</p>
{/snippet}
{#snippet endContent()}
	<p>@test.com</p>
{/snippet}

<section>
	<!-- <Selection selectionLabel={'Opciones'} placeholder={'Selecciona una opción'}>
		<Option value={1} labelSelected={'Test 12'}>Test 1</Option>
		<Option value={2} labelSelected={'Test 22'}>Test 2</Option>
		<Option value={3} labelSelected={'Test 32'}>Test 3</Option>
	</Selection> -->

	<Input variant={'solid'} label={'Nombre'} labelVariant="leftside" />
	<Input variant={'solid'} {startContent} {endContent} label={'Nombre'} labelVariant="outside" />
	<Input variant={'solid'} label={'Nombre'} placeholder="Completar" labelVariant="inside" />
	<Input variant={'solid'} {startContent} {endContent} label={'Nombre'} labelVariant="leftside" />
	<Input
		variant={'solid'}
		{startContent}
		{endContent}
		labelStatic
		label={'Nombre'}
		labelVariant="outside"
	/>
	<Input
		variant={'solid'}
		{startContent}
		{endContent}
		labelStatic
		label={'Nombre'}
		labelVariant="inside"
	/>
</section>

<style>
	section {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 30px;
	}
</style>
