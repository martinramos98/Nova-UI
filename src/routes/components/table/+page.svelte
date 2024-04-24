<script>
	import Button from '$lib/Components/Button/Button.svelte';
	import Chip from '$lib/Components/Chip/Chip.svelte';
	import Loader from '$lib/Components/Loader/Loader.svelte';
	import Progress from '$lib/Components/Progress/Progress.svelte';
	import Cell from '$lib/Components/Table/Cell.svelte';
	import Table from '$lib/Components/Table/Table.svelte';
	import TableBody from '$lib/Components/Table/TableBody.svelte';
	import TableHeader from '$lib/Components/Table/TableHeader.svelte';
	import TableRow from '$lib/Components/Table/TableRow.svelte';
	import Title from '$lib/Components/Title/Title.svelte';
	import { fade } from 'svelte/transition';
	let showRows = false;
	const datosEjemplo = [
		{
			nombre: 'Juan',
			apellido: 'Pérez',
			direccion: 'Calle 123',
			estado: 'Activo'
		},
		{
			nombre: 'María',
			apellido: 'Gómez',
			direccion: 'Avenida Principal',
			estado: 'Inactivo'
		},
		{
			nombre: 'Carlos',
			apellido: 'López',
			direccion: 'Calle 456',
			estado: 'Activo'
		},
		{
			nombre: 'Laura',
			apellido: 'Martínez',
			direccion: 'Avenida Central',
			estado: 'Inactivo'
		},
		{
			nombre: 'Pedro',
			apellido: 'Sánchez',
			direccion: 'Calle 789',
			estado: 'Activo'
		}
	];
	const prom = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(datosEjemplo);
		}, 10000);
	});
</script>

<Title>Tables</Title>
<main>
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
				<Cell className="p-2">
					<div class="flex justify-center">
						<Chip
							colors="success"
							className="m-1 wi rounded-lg h-8 w-12 text-xs"
							variant="shadows"
							size="sm"
						>
							Activo
						</Chip>
					</div>
				</Cell>
			</TableRow>
			<TableRow>
				<Cell as="header" scope="row">Ricardo</Cell>
				<Cell>Ramos</Cell>
				<Cell>San Blas 1683</Cell>
				<Cell className="p-2">
					<Chip colors="success" className="m-1 rounded-lg" variant="shadows" size="sm">
						Activo
					</Chip>
				</Cell>
			</TableRow>
		</TableBody>
	</Table>
	<Table variant="bordered-row" className="my-4 ">
		<TableHeader>
			<Cell className="p-3 border-none" as="header" scope="col">Nombre</Cell>
			<Cell className="p-3 border-none" as="header" scope="col">Apellido</Cell>
			<Cell className="p-3 border-none" as="header" scope="col">Direccion</Cell>
			<Cell className="p-3 border-none" as="header" scope="col">Estado</Cell>
		</TableHeader>
		<TableBody>
			{#each datosEjemplo as dato}
				<TableRow>
					<Cell as="header" scope="row">{dato.nombre}</Cell>
					<Cell>{dato.apellido}</Cell>
					<Cell>{dato.direccion}</Cell>
					<Cell className="p-2">
						<Chip
							colors={dato.estado === 'Activo' ? 'success' : 'error'}
							className="m-1 rounded-lg"
							variant="neon"
							size="xs"
						>
							{dato.estado}
						</Chip>
					</Cell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
	<Table variant="solid-row" color="" --color-container="#3E3E3E85" className="my-4 ">
		<TableHeader>
			<Cell className="p-3" as="header" scope="col">Nombre</Cell>
			<Cell className="p-3" as="header" scope="col">Apellido</Cell>
			<Cell className="p-3" as="header" scope="col">Direccion</Cell>
			<Cell className="p-3" as="header" scope="col">Estado</Cell>
		</TableHeader>
		<TableBody>
			{#each datosEjemplo as dato}
				<TableRow>
					<Cell as="header" scope="row">{dato.nombre}</Cell>
					<Cell>{dato.apellido}</Cell>
					<Cell>{dato.direccion}</Cell>
					<Cell className="p-2">
						<div class="flex justify-center">
							<Chip
								colors={dato.estado === 'Activo' ? 'success' : 'error'}
								className="m-1 rounded-lg w-fit h-6 px-6 py-2"
								variant="neon"
								size="xs"
							>
								{dato.estado}
							</Chip>
						</div>
					</Cell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
	{#await prom}
		<Loader
			className="w-full h-full"
			colors="warning"
			svgLoaderProps={{ height: '80', width: '80' }}
		/>
	{:then datos}
		<div transition:fade>
			<Table variant="stripped" color="" --color-container="#3E3E3E85" className="my-4 w-full">
				<TableHeader>
					<Cell className="p-3" as="header" scope="col">Nombre</Cell>
					<Cell className="p-3" as="header" scope="col">Apellido</Cell>
					<Cell className="p-3" as="header" scope="col">Direccion</Cell>
					<Cell className="p-3" as="header" scope="col">Estado</Cell>
				</TableHeader>
				<TableBody>
					{#each datos as dato}
						<TableRow>
							<Cell as="header" scope="row">{dato.nombre}</Cell>
							<Cell>{dato.apellido}</Cell>
							<Cell>{dato.direccion}</Cell>
							<Cell className="p-2">
								<div class="flex justify-center">
									<Chip
										colors={dato.estado === 'Activo' ? 'success' : 'error'}
										className="m-1 rounded-lg w-fit h-6 px-6 py-2"
										variant="neon"
										size="xs"
									>
										{dato.estado}
									</Chip>
								</div>
							</Cell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</div>
	{/await}
	<Button
		variant="solid"
		colors="info"
		className="w-fit h-fit"
		onClick={() => {
			showRows = !showRows;
		}}
	>
		Show Row
	</Button>
</main>

<style>
	main {
		margin: 10px;
		display: grid;
		gap: 2rem;
		grid-template-columns: 1fr 1fr;
	}
</style>
