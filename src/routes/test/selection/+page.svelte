<script>
	import { Button } from '@nv-org/button';
	import { Input } from '@nv-org/input';
	import { Option, Selection } from '@nv-org/selection';
	const onsubmit = (e) => {
		e.preventDefault();
		console.log('submit');
	};
</script>

<section>
	<form action="" {onsubmit}>
		<Selection selectionLabel={'Opciones'} placeholder={'Selecciona una opción'}>
			<Option value={1} labelSelected={'Test 12'}>Test 1</Option>
			<Option value={2} labelSelected={'Test 22'}>Test 2</Option>
			<Option value={3} labelSelected={'Test 32'}>Test 3</Option>
		</Selection>
		<Button>Enviar</Button>
	</form>

	<Input variant={'solid'} label={'Nombre'} labelVariant="leftside" />
	<Input variant={'solid'} label={'Nombre'} labelVariant="outside" />
	<Input variant={'solid'} label={'Nombre'} labelVariant="inside" />
	<Input variant={'solid'} labelStatic label={'Nombre'} labelVariant="leftside" />
	<Input variant={'solid'} labelStatic label={'Nombre'} labelVariant="outside" />
	<Input variant={'solid'} labelStatic label={'Nombre'} labelVariant="inside" />
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
