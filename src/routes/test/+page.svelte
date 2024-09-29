<script lang="ts">
	import { Button } from '@nv-org/button';
	import { fade, scale, slide } from 'svelte/transition';
	import { Tab, TabButton, Tabs } from '../../../packages/components/Tabs/src/lib/index';
	import { Modal } from '../../../packages/components/Modal/src/lib/index.js';
	import { Drawer } from '../../../packages/components/Drawer/src/lib/index.js';
	import { Popover } from '../../../packages/components/Popover/src/lib/index.js';
	import { Tooltip } from '../../../packages/components/Tooltip/src/lib/index.js';
	import { Alert } from '../../../packages/components/Alert/src/lib/index.js';
	import {
		popIn,
		popOut,
		directionedFly
	} from '../../../packages/utils/src/lib/svelteTransitions.js';
	import { Switch } from '@nv-org/switch';
	import { Title } from '@nv-org/title';
	import { Dropdown, DropdownItem } from '../../../packages/components/Dropdown/src/lib/index.js';
	import { quadInOut } from 'svelte/easing';
	let toggled = false;
	let toggledB = false;
	let openAlert = false;
</script>

<!-- <svelte:window on:pointermove={move} /> -->
<main class="p-8">
	<Tabs variant="bordered">
		{#snippet TabSelection()}
			<TabButton key="1">Salta</TabButton>
			<TabButton key="2">Buenos Aires</TabButton>
			<TabButton key="3">Tierra del Fuego</TabButton>
		{/snippet}
		<Tab class="p-2" key={'1'}>
			<p>
				<b> Salta, la tierra de contrastes y colores vivos: </b><br />
				Sumérgete en la magia del noroeste argentino explorando la provincia de Salta. Desde los imponentes
				picos de los Andes hasta los valles verdes de Cafayate, cada rincón de esta provincia te cautivará.
				Descubre la cultura rica y diversa de sus pueblos originarios, degusta la deliciosa gastronomía
				local y maravíllate con la belleza de sus paisajes. Salta te espera con los brazos abiertos para
				una experiencia inolvidable.
			</p>
		</Tab>
		<Tab class="p-2" key={'2'}>
			<p>
				<b> Buenos Aires, la ciudad que nunca duerme: </b><br />
				Sumérgete en el bullicio y la energía de la capital argentina, Buenos Aires. Con su arquitectura
				impresionante, sus elegantes barrios y su vibrante escena cultural, esta metrópolis te atrapará
				desde el primer momento. Déjate seducir por los ritmos del tango en sus milongas, disfruta de
				una oferta gastronómica incomparable y maravíllate con la pasión del fútbol en sus estadios legendarios.
				En Buenos Aires, cada esquina cuenta una historia y cada visita es una aventura inolvidable.
			</p>
		</Tab>
		<Tab class="p-2" key={'3'}>
			<p>
				<b> Tierra del Fuego, el fin del mundo te espera: </b><br />
				Embárcate en una aventura única en la mística Tierra del Fuego, el extremo sur de Argentina.
				Descubre la belleza salvaje de sus paisajes, desde los picos nevados de la cordillera hasta los
				glaciares imponentes que se deslizan hacia el mar. Explora sus parques nacionales y reserva natural,
				hogar de una fauna y flora únicas en el mundo. Sumérgete en la historia de los primeros habitantes
				de la región, los indígenas yámanas, y déjate sorprender por la hospitalidad de sus pobladores.
				En Tierra del Fuego, cada momento es una aventura inolvidable en el fin del mundo.
			</p></Tab
		>
	</Tabs>
	<article>
		<div>
			<Popover
				animationFunction={directionedFly}
				animationParams={{ withFade: true, moveUntil: 4, direction: 'right' }}
			>
				{#snippet popoverContent()}
					<span>Modal Test</span>
				{/snippet}
				<Button colors="info" variant="solid">Popover Button</Button>
			</Popover>
			<Tooltip>
				<Switch bind:toggled color={'info'}></Switch>
				{#snippet tooltipContent()}
					<span>Swith To open Modal</span>
				{/snippet}
			</Tooltip>
			<Switch bind:toggled={toggledB} color={'error'}></Switch>
		</div>
		<!-- {#if toggled}
			<section transition:popOut class="my-2 p-2 flex flex-row bg-amber-500 text-white">
				<p>Hello from Parragraph!</p>
			</section>
		{/if} -->
		<Drawer
			bind:open={toggledB}
			backdrop={{ type: 'blur', class: '' }}
			size="md"
			onClose={() => {
				toggledB = false;
			}}
			animation={{ withFade: true, moveUntil: 30 }}
		>
			<Title level={3}>This is a Drawer Test</Title>
		</Drawer>
		<Modal
			bind:open={toggled}
			onClose={() => {
				toggled = false;
			}}
			backdrop={{ class: '', type: 'blur' }}
		>
			<Title level={3}>This is a Test</Title>
		</Modal>
	</article>
	<article>
		<Dropdown
			triggerText="Test Dropdown"
			animationFunction={undefined}
			animationParams={{ easing: quadInOut, duration: 230 }}
		>
			<DropdownItem>Test 1</DropdownItem>
			<DropdownItem>Test 2</DropdownItem>
			<DropdownItem>Test 3</DropdownItem>
		</Dropdown>
	</article>
	<article class="my-2">
		<Button
			onClick={() => {
				openAlert = true;
			}}
		>
			Click Me To Alert
		</Button>
		<Alert bind:open={openAlert}>
			<Title level={4}>Alert!</Title>
			<p>Something Happens!</p>
		</Alert>
	</article>
</main>

<style>
	main {
		padding: 100px;
	}
</style>
