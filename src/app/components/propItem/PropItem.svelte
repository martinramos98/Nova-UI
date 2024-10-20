<svelte:options runes={true} />

<script lang="ts">
	import { Divider } from '@nv-org/divider';
	const {
		data
	}: {
		data: {
			name: string;
			description: string;
			default?: string;
			required: boolean;
			bindable?: boolean;
		};
	} = $props();
</script>

<div class="prop-container">
	<pre class="prop-code"><code>{data.name}</code></pre>
	<Divider size={1} color="var(--color-on-surface)"></Divider>
	<ul>
		<li>
			<span><b>Description:</b> {@html data.description}</span>
		</li>
		{#if data.bindable}
			<li>
				<span><b>Bindable:</b> true</span>
			</li>
		{/if}
		{#if data.required}
			<li>
				<span><b>required</b></span>
			</li>
		{:else}
			<li>
				<span><b>Default:</b> {data.default}</span>
			</li>
		{/if}
	</ul>
</div>
