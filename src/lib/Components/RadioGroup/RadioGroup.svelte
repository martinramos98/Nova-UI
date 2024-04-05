<script lang="ts">
	export let multiselection = false;
	export let type: 'checkbox' | 'radio' = 'radio';
	export let errorMessage = '';
	export let className = '';
	export let error = false;
	export let selected = new Set<string>();
	export let parent = { name: '', labelText: '', classNameLabel: '', className: '' };
	// export let
</script>

<div class="ui-radio-group">
	{#if parent && type === 'checkbox'}
		<div>
			<input {type} name={parent.name} class={parent.className} />
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
</div>
