<svelte:options runes={true} />

<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { Readable, Writable } from 'svelte/store';
	import RadioButton from './RadioButton.svelte';
	interface RadioProps {
		labelText?: string;
		size?: string;
		class?: string;
		value?: any;
		colors?: string;
		variant?: string;
		id: string;
		lineThroughtOnCheck?: boolean;
		disabled?: boolean;
		checked?: boolean;
		custom?: Snippet | undefined;
		children?: Snippet | undefined;
	}
	let {
		labelText = '',
		size = 'size-6',
		class: className = '',
		value,
		colors = 'info',
		variant = 'solid',
		id,
		lineThroughtOnCheck = false,
		disabled = false,
		checked = $bindable(false),
		custom = undefined,
		children = undefined
	}: RadioProps = $props();
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
	$effect(() => {
		onChange();
	});
</script>

{#if custom}
	<button
		class="ui-radio {className} ui-color-{colors} ui-variant-{variant}"
		aria-checked={checked}
		data-custom={!!custom}
		{disabled}
		onclick={handleChange}
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
