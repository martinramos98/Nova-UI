<script>
	import Chip from '$lib/Components/Chip/Chip.svelte';
	import Cell from '$lib/Components/Table/Cell.svelte';
	import Table from '$lib/Components/Table/Table.svelte';
	import TableBody from '$lib/Components/Table/TableBody.svelte';
	import TableHeader from '$lib/Components/Table/TableHeader.svelte';
	import TableRow from '$lib/Components/Table/TableRow.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
</script>

<main>
	<Title>Tables</Title>
	<Table>
		<TableHeader>
			<Cell as="header" scope="col">Nombre</Cell>
			<Cell as="header" scope="col">Apellido</Cell>
			<Cell as="header" scope="col">Direccion</Cell>
			<Cell as="header" scope="col">Estado</Cell>
		</TableHeader>
		<TableBody>
			<TableRow>
				<Cell as="header" scope="row">Martin</Cell>
				<Cell>Ramos</Cell>
				<Cell>San Blas 1683</Cell>
				<Cell>Activo</Cell>
			</TableRow>
			<TableRow>
				<Cell as="header" scope="row">Ricardo</Cell>
				<Cell>Ramos</Cell>
				<Cell>San Blas 1683</Cell>
				<Cell>Activo</Cell>
			</TableRow>
		</TableBody>
	</Table>
	<Table className="my-4 " variant="bordered">
		<TableHeader>
			<Cell as="header" scope="col">Nombre</Cell>
			<Cell as="header" scope="col">Apellido</Cell>
			<Cell as="header" scope="col">Direccion</Cell>
			<Cell as="header" scope="col">Estado</Cell>
		</TableHeader>
		<TableBody>
			<TableRow>
				<Cell as="header" scope="row">Martin</Cell>
				<Cell>Ramos</Cell>
				<Cell>San Blas 1683</Cell>
				<Cell><Chip colors="success" className="m-1" variant="shadows" size="sm">Activo</Chip></Cell
				>
			</TableRow>
			<TableRow>
				<Cell as="header" scope="row">Ricardo</Cell>
				<Cell>Ramos</Cell>
				<Cell>San Blas 1683</Cell>
				<Cell><Chip colors="success" className="m-1" variant="shadows" size="sm">Activo</Chip></Cell
				>
			</TableRow>
		</TableBody>
	</Table>
</main>

<style>
	main {
		margin: 10px;
	}
</style>
