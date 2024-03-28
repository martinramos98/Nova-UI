<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
  export let multiselection = false
	export let selectionLabel = '';
  export let classNameLabel = ''
  export let classNameOptionsContainer=''
  const selected = writable([]);
	setContext('ui-selection', {
		selected
	});

</script>

<div class="ui-selection">
	<label class="ui-selection-label">
		{selectionLabel}
	</label>
	<div class="ui-selection-options-container">
    <slot/>
  </div>
</div>
