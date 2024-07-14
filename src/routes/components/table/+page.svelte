<script>
	import { Cell, Table, TableBody, TableFooter, TableHeader, TableRow } from '@nova/table';
	import { Chip } from '@nova/chip';
	import { Title } from '@nova/title';
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
	const colHeaders = ['nombre', 'apellido', 'direccion', 'estado'];
	const prom = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(datosEjemplo);
		}, 10000);
	});
</script>

<div class="page-content">
	<main>
		<article>
			<header><Title>Table</Title></header>
			<section>
				<Table>
					<TableHeader>
						{#each colHeaders as header}
							<Cell
								className={`capitalize ${header === 'direccion' ? 'hidden sm:table-cell' : ''}`}
								as="header"
								scope="col">{header}</Cell
							>
						{/each}
					</TableHeader>
					<TableBody>
						{#each datosEjemplo as dato}
							<TableRow>
								<Cell as="header" scope="row">{dato.nombre}</Cell>
								<Cell>{dato.apellido}</Cell>
								<Cell className="hidden sm:table-cell">{dato.direccion}</Cell>
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
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<Title level={3}>None</Title>
				<Table>
					<TableHeader>
						{#each colHeaders as header}
							<Cell
								className={`capitalize ${header === 'direccion' ? 'hidden sm:table-cell' : ''}`}
								as="header"
								scope="col">{header}</Cell
							>
						{/each}
					</TableHeader>
					<TableBody>
						{#each datosEjemplo as dato}
							<TableRow>
								<Cell as="header" scope="row">{dato.nombre}</Cell>
								<Cell>{dato.apellido}</Cell>
								<Cell className="hidden sm:table-cell">{dato.direccion}</Cell>
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
			</section>
			<section>
				<Title level={3}>Bordered</Title>

				<Table className="my-4 " variant="bordered">
					<TableHeader>
						{#each colHeaders as header}
							<Cell
								className={`capitalize ${header === 'direccion' ? 'hidden sm:table-cell' : ''}`}
								as="header"
								scope="col">{header}</Cell
							>
						{/each}
					</TableHeader>
					<TableBody>
						{#each datosEjemplo as dato}
							<TableRow>
								<Cell as="header" scope="row">{dato.nombre}</Cell>
								<Cell>{dato.apellido}</Cell>
								<Cell className="hidden sm:table-cell">{dato.direccion}</Cell>
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
			</section>
			<section>
				<Title level={3}>Bordered Row</Title>
				<Table variant="bordered-row" className="my-4 ">
					{#each colHeaders as header}
						<Cell
							className={`capitalize ${header === 'direccion' ? 'hidden sm:table-cell' : ''}`}
							as="header"
							scope="col">{header}</Cell
						>
					{/each}
					<TableBody>
						{#each datosEjemplo as dato}
							<TableRow>
								<Cell as="header" scope="row">{dato.nombre}</Cell>
								<Cell>{dato.apellido}</Cell>
								<Cell className="sm:hidden md:table-cell">{dato.direccion}</Cell>
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
			</section>
			<section>
				<Title level={3}>Solid Row</Title>
				<Table variant="solid-row" color="" --color-container="#3E3E3E85" className="my-4 ">
					<TableHeader>
						<Cell className="p-3" as="header" scope="col">Nombre</Cell>
						<Cell className="p-3" as="header" scope="col">Apellido</Cell>
						<Cell className="p-3 hidden sm:table-cell" as="header" scope="col">Direccion</Cell>
						<Cell className="p-3" as="header" scope="col">Estado</Cell>
					</TableHeader>
					<TableBody>
						{#each datosEjemplo as dato}
							<TableRow>
								<Cell as="header" scope="row">{dato.nombre}</Cell>
								<Cell>{dato.apellido}</Cell>
								<Cell className="hidden sm:table-cell">{dato.direccion}</Cell>
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
			</section>
			<section>
				<Title level={3}>Stripped Row</Title>
				<Table variant="stripped" color="" --color-container="#3E3E3E85" className="my-4 ">
					<TableHeader>
						<Cell className="p-3" as="header" scope="col">Nombre</Cell>
						<Cell className="p-3" as="header" scope="col">Apellido</Cell>
						<Cell className="p-3 hidden sm:table-cell" as="header" scope="col">Direccion</Cell>
						<Cell className="p-3" as="header" scope="col">Estado</Cell>
					</TableHeader>
					<TableBody>
						{#each datosEjemplo as dato}
							<TableRow>
								<Cell as="header" scope="row">{dato.nombre}</Cell>
								<Cell>{dato.apellido}</Cell>
								<Cell className="hidden sm:table-cell">{dato.direccion}</Cell>
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
			</section>
		</article>
	</main>
</div>

<style>
</style>
