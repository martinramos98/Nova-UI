<script lang="ts">
	import { getContext } from 'svelte';
	import type { Readable, Writable } from 'svelte/store';
	import RadioButton from './RadioButton.svelte';
	export let labelText = '';
	export let className = '';
	export let value: any;
	export let colors = 'info';
	export let variant = 'solid';
	export let id: string;
	export let lineThroughtOnCheck = false;
	export let disabled = false;
	export let inderminate = false;
	let name = '';
	let checked = false;
	const radioContext = getContext<{
		type: Readable<'checkbox' | 'radio'>;
		checked: Writable<Set<string>>;
	}>('radiogroup-context');
	let type: 'checkbox' | 'radio' = 'checkbox';
	if (!radioContext) {
		throw Error('Radio Button is not inside of a Radio Group');
	}

	radioContext.type.subscribe((typeInput) => {
		type = typeInput;
		if (typeInput === 'radio') {
			radioContext.checked.subscribe((set) => {
				if (checked && !set.has(value)) {
					checked = false;
				}
			});
		} else if (typeInput === 'checkbox') {
			radioContext.subscribeControler({
				check: () => {
					if (!checked) {
						handleChange();
					}
				},
				uncheck: () => {
					if (checked) {
						handleChange();
					}
				}
			});
		}
	});

	function onChange() {
		if (type === 'checkbox') {
			radioContext.checked.update((set) => {
				const newset = set;
				checked ? newset.add(value) : newset.delete(value);
				return newset;
			});
		} else {
			if (checked) {
				radioContext.checked.set(new Set([value]));
			}
		}
	}
	function handleChange() {
		checked = !checked;
	}
	$: checked, onChange();
</script>

<RadioButton
	onChange={handleChange}
	{id}
	{className}
	{value}
	{variant}
	{colors}
	{disabled}
	{type}
	{checked}
	{lineThroughtOnCheck}
>
	<slot>
		{labelText}
	</slot>
</RadioButton>
