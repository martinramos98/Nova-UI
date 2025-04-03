export default function drawerSizeCases(size) {
	return `<script>
import { Drawer, Title, Button } from '@nv-org/components';
let openDrawer = $state(false)
</script>
<Button
	onClick={() => {
		openDrawer = true;
	}}
>
	Open Drawer ${size}
</Button>
<Drawer
	open={openDrawer}
	position={'right'}
	contentClass={\` p-2 flex flex-col ${size}\`}
	onClose={() => {
		openDrawer = false;
	}}
>
	<Title level={2} class="m-2"> ${size} Drawer</Title>
	<p class="m-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio necessitatibus autem
		aperiam, nisi iusto cum non quibusdam nemo deserunt adipisci recusandae voluptatum quae
		expedita provident error! Accusamus asperiores quia voluptatum. Lorem ipsum dolor sit
		amet consectetur adipisicing elit. Totam amet odit non sed sapiente soluta quis
		voluptate dicta consequatur doloremque! Amet ratione adipisci dolorem repellendus fugiat
		corporis aliquid cumque est?
	</p>
	<Button
		colors="error"
		variant="flat"
		class="w-fit mt-auto ml-auto mr-2 mb-2"
		onClick={() => {
			openDrawer = false;
		}}
	>
		Close
	</Button>
</Drawer>
`;
}
