<svelte:options runes={true} />

<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { readonly, writable } from 'svelte/store';
	import RadioButton from './RadioButton/RadioButton.svelte';
	interface RadioGroupProps {
		type?: 'checkbox' | 'radio';
		errorMessage?: string;
		className?: string;
		error?: boolean;
		colors?: string;
		withControl?: boolean;
		checkedValues?: Set<string>;
		name: string;
		onChange?: (checked: Set<string>) => void;
		control?: {
			labelText?: string;
			className?: string;
			colors?: string;
			variant?: 'solid' | 'outline';
			lineThroughtOnCheck?: boolean;
			id?: string;
			disabled?: boolean;
		};
		labelControl?: Snippet;
		children: Snippet;
	}
	let {
		type = 'radio',
		errorMessage = '',
		className = '',
		error = false,
		colors = 'info',
		withControl = false,
		checkedValues = new Set<string>(),
		name,
		onChange = undefined,
		children,
		labelControl,
		control = {}
	}: RadioGroupProps = $props();
	// export let type: 'checkbox' | 'radio' = 'radio';
	// export let errorMessage = '';
	// export let className = '';
	// export let iconChecked = 'default';
	// export let error = false;
	// export let colors = 'info';
	// export let withControl = false;
	// export let checkedValues = new Set<string>();
	// export let name: string;
	// export let onChange: ((checked: Set<string>) => void) | undefined = undefined;
	// export let control: any = {};
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
	let controlIndeterminate = $state(false);
	let controlCheck = $state(false);
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
			{#if labelControl}
				{@render labelControl()}
			{/if}
		</div>
	{/if}
	{@render children()}
	{#if error}
		<span>
			{errorMessage}
		</span>
	{/if}
</fieldset>
