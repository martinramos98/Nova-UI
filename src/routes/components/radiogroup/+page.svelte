<script>
  import Radio from "$lib/Components/RadioGroup/RadioButton/Radio.svelte";
  import RadioGroup from "$lib/Components/RadioGroup/RadioGroup.svelte";
  import Title from "$lib/Components/Title/Title.svelte";
  
</script>

<Title level={1}>Radio Groups</Title>
<RadioGroup name='test' type='checkbox'>
  <Radio id={'item-1'} value={1}></Radio>
  <Radio id={'item-2'} value={2}></Radio>
  <Radio id={'item-3'} value={3}></Radio>
  <Radio id={'item-4'} value={4}></Radio>
</RadioGroup>