<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { Readable, Writable } from 'svelte/store';
	import RadioButton from './RadioButton.svelte';
	export let labelText = '';
	export let size = 'size-6';
	export let className = '';
	export let value: any;
	export let colors = 'info';
	export let variant = 'solid';
	export let id: string;
	export let lineThroughtOnCheck = false;
	export let disabled = false;
	export let checked = false;
	export let custom: Snippet | undefined = undefined;
	export let children: Snippet | undefined = undefined;
	let name = '';
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

{#if custom}
	<button
		class="ui-radio {className} ui-color-{colors} ui-variant-{variant}"
		aria-checked={checked}
		data-custom={!!custom}
		{disabled}
		on:click={handleChange}
	>
		{@render custom()}
	</button>
{:else}
	<RadioButton
		onChange={handleChange}
		{id}
		{size}
		{className}
		{value}
		{variant}
		{colors}
		{disabled}
		{type}
		{checked}
		{lineThroughtOnCheck}
	>
		{#if children}
			{@render children()}
		{:else}
			{labelText}
		{/if}
	</RadioButton>
{/if}
