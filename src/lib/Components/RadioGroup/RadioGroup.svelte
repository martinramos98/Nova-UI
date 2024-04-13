<script lang="ts">
	import { setContext } from 'svelte';
	import { readonly, writable, get } from 'svelte/store';
	import Radio from './RadioButton/Radio.svelte';
	import RadioButton from './RadioButton/RadioButton.svelte';
	export let type: 'checkbox' | 'radio' = 'radio';
	export let errorMessage = '';
	export let className = '';
	export let iconChecked = 'default';
	export let error = false;
	export let colors = 'info';
	export let withControl = false;
	export let checkedValues = new Set<string>();
	export let name: string;
	export let onChange: ((checked: Set<string>) => void) | undefined = undefined;
	export let control: any = {};
	const defaultControlOptions = {
		labelText: '',
		className: '',
		colors: colors,
		variant: 'solid',
		lineThroughtOnCheck: false,
		id: '',
		disabled: false
	};
	control = {
		...defaultControlOptions,
		...control
	};
	let controlIndeterminate = false;
	let controlCheck = false;
	const controlOfItems = new Array<{ check: () => void; uncheck: () => void }>();
	const typeStore = writable(type);
	const checkedValueStore = writable(checkedValues);
	checkedValueStore.subscribe((set) => {
		onChange && onChange(set);
	});
	function subscribeControler(control: { check: () => void; uncheck: () => void }) {
		controlOfItems.push(control);
	}
	setContext('radiogroup-context', {
		type: readonly(typeStore),
		checked: checkedValueStore,
		subscribeControler
	});
	// function stateOfItemsChecked(): 'all' | 'some' | 'none' {
	// 	return 'all';
	// }
	function checkAll() {
		controlOfItems.forEach((control) => {
			control.check();
		});
	}
	function uncheckAll() {
		controlOfItems.forEach((control) => {
			control.uncheck();
		});
	}
	function handleParentCheck() {
		controlCheck = !controlCheck;
		if (controlCheck) {
			checkAll();
		} else {
			uncheckAll();
		}
	}
	if (type === 'checkbox') {
		checkedValueStore.subscribe((set) => {
			if (set.size === 0) {
				controlCheck = false;
				controlIndeterminate = false;
			} else if (set.size === controlOfItems.length) {
				controlCheck = true;
				controlIndeterminate = false;
			} else {
				controlIndeterminate = true;
				controlCheck = false;
			}
		});
	}
</script>

<fieldset {name} class="ui-radio-group ui-colors-{colors} {className}">
	{#if withControl && type === 'checkbox'}
		<div class="flex flex-row">
			<RadioButton
				inderminate={controlIndeterminate}
				value=""
				type={'checkbox'}
				onChange={handleParentCheck}
				checked={controlCheck}
				{...control}
			/>
			<slot name="label-control" />
		</div>
	{/if}
	<slot />
	{#if error}
		<span>
			{errorMessage}
		</span>
	{/if}
</fieldset>
