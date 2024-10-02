/**
 *
 * @param {string} type
 * @returns string
 */
export default function alertTypeTextCode(type) {
	return `
<script>
	import { Button } from '@nv-org/button';
	import { Title } from '@nv-org/title';
	import { Alert } from '@nv-org/alert';
  let openAlertType = $state(false);
	function onCloseAlert(alertResult: string | undefined | boolean) {
		resultAlert = alertResult;
	}
</script>  
<Button
	variant={'solid'}
	colors="info"
	onClick={()=>{openAlertType = true}}>Toggle Alert ${type}</Button
>
<p class="my-2 mr-2">Result:<b>{resultAlert}</b></p>
<Alert
	onClose={onCloseAlert}
	bind:open={openAlertType}
	type={"${type}"}
>
  ${
		type === 'default'
			? `<Title level={4}>Alert!</Title>
		<p>Something Happens!</p>`
			: ''
	}
  ${
		type === 'prompt'
			? `<Title level={4}>Prompt!</Title>
		<p>Do not put your credit card!</p>`
			: ''
	}
  ${
		type === 'confirm'
			? `<Title level={4}>Alert!</Title>
		<p>We need your approval!</p>`
			: ''
	}
</Alert>
  `;
}
