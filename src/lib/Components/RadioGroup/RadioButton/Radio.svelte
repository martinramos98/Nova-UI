<script lang="ts">
	import { getContext } from "svelte";
  import type { Readable,Writable } from "svelte/store";
  export let labelText = ''
  export let className = ''
  export let value:any
  export let id:string
  let name = ''
  const radioContext = getContext<{
    type: Readable<"checkbox" | "radio">;
    checked: Writable<Set<string>>;
}>('radiogroup-context')
  let type = 'checkbox'
  if(!radioContext){
    throw Error('Radio Button is not inside of a Radio Group');
  }

  radioContext.type.subscribe((typeInput) => {
    type = typeInput
   })
    function getName(node:HTMLElement){
      name = node.parentElement?.getAttribute('name') ?? ''
    }
    function onChange(ev:Event){
      const el = ev.target as HTMLInputElement
      radioContext.checked.update((set) => { 
        const newset  = set
        if(type === 'checkbox'){
          el.checked ? newset.add(value) : newset.delete(value)
        } else {
        return new Set([value])
        }
        return newset
       })
    }
</script>
  <div use:getName  class="ui-radio {className}">
    <input {id} {type} on:change={onChange} {name}  {value}/>
    <label for={id}>
      <slot>
        {labelText}
      </slot>
    </label>
  </div>  

