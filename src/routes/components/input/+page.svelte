<script>
	import Title from '$lib/Components/Title/Title.svelte';
	import Input from '$lib/Components/Input/Input.svelte';
</script>

<div class=" page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#input">Input</a></li>
			<li><a href="#label">With Label</a></li>
			<li><a href="#types">Input Types</a></li>
			<li><a href="#variants">Variants</a></li>
			<li><a href="#error">Error</a></li>
			<li><a href="#attributes">Custom Input Attributes</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title>Input</Title>
			</header>
			<section>
				<div class="w-full">
					<Input name="name" type="text" />
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>With Label</Title>
			</header>
			<section>
				<div>
					<Input
						labelText="First Name"
						name="first_name"
						classNameContainer="ml-14"
						labelProps={{ position: 'leftside', dynamic: true }}
					/>
					<Input
						labelText="Last Name"
						name="last_name"
						labelProps={{ position: 'outside', dynamic: true, className: '' }}
					/>
					<Input labelText="Nombre" name="nombre" type="text" placeholder="Test" />
				</div>
			</section>
			<section>
				<Title level={3}>Statics</Title>
				<div>
					<Input
						labelText="First Name"
						name="first_name"
						labelProps={{ position: 'inside', dynamic: false }}
					/>
					<Input
						labelText="Last Name"
						name="last_name"
						labelProps={{ position: 'outside', dynamic: false, className: '' }}
					/>
					<Input
						classNameContainer="ml-14"
						labelText="Last Name"
						name="last_name"
						labelProps={{ position: 'leftside', dynamic: false, className: '' }}
					/>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Input Types</Title>
			</header>
			<section>
				<div>
					<Input labelText="Name" name="name" type="text" />
					<Input name="" labelText={'Cantidad'} type="number" colors={'warning'} />
					<Input name="" labelText="Password" type="password" />
					<Input name="" labelText="Email" type="email" colors={'info'} />
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Variants</Title>
			</header>
			<section>
				<div>
					<Input type="text" name="" variant="faded" colors="error" />
					<Input type="text" name="" variant="bordered" />
					<Input name="" type="text" colors={'warning'} variant="flat" />
					<Input name="" variant="blurred" />
					<Input name="" variant="underlined" colors={'info'} />
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Error</Title>
			</header>
			<section>
				<div class="error-container">
					<Input error={true} type="text" name="" variant="bordered" textError="Not valid" />
					<Input
						error={(value) => {
							return value && value.includes('1');
						}}
						type="text"
						name=""
						variant="bordered"
						textError="Not valid"
					/>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Custom Input Attributes</Title>
			</header>
			<section>
				<Title level={3}>Min and Max number</Title>
				<div>
					<Input type={'number'} name="" inputAttributes={{ min: 0, max: 10 }} />
				</div>
			</section>
		</article>
	</main>
</div>

<style>
	.error-container {
		align-items: baseline;
	}
</style>
