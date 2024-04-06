<script lang="ts">
	import { setContext } from 'svelte';
	import { readonly, writable,get } from 'svelte/store';
	export let type: 'checkbox' | 'radio' = 'radio';
	export let errorMessage = '';
	export let className = '';
	export let iconChecked = 'default'
	export let error = false;
	export let checkedValues = new Set<string>();
	export let name:string
	export let onChange: ((checked:Set<string>)=>void) | undefined = undefined
		export let parent = {
		name: '',
		labelText: '',
		classNameLabel: '',
		className: '',
		disabled: false,
		state: false
	};
	const typeStore = writable(type)
	const checkedValueStore = writable(checkedValues)
	checkedValueStore.subscribe((set) => { 
		onChange && onChange(set)
	 })
	// function check(value:string,){
		
	// 	if(get(checkedValueStore).has(value)){
	
	// 	}
	// }

	setContext('radiogroup-context',{
		type:readonly(typeStore),
		checked:checkedValueStore,
		// check
	});
	// export let
</script>

<fieldset {name} class="ui-radio-group">
	{#if parent && type === 'checkbox'}
		<div>
			<input disabled={parent.disabled} {type} name={parent.name} class={parent.className} />
			<label class={parent.classNameLabel}>
				<slot name="labelParent">
					{parent.labelText}
				</slot>
			</label>
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
	{#if error}
		<span>
			{errorMessage}
		</span>
	{/if}
</fieldset>
