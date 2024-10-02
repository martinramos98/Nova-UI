export default function alertBasicCaseText() {
	return `<script lang="ts">
	import { Alert } from '@nv-org/alert';
	import { Button } from '@nv-org/button';
	import { Title } from '@nv-org/title';
	let openAlert = $state(false);
	function toggleAlert() {
		openAlert = !openAlert;
	}
</script>
<Button variant={'solid'} colors="info" onClick={toggleAlert}>Click Me</Button>
<Alert onClose={toggleAlert} open={openAlert}>
	<Title level={4}>Alert!</Title>
	<p>Something Happens!</p>
</Alert>`;
}
