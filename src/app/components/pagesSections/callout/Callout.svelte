<svelte:options runes={true} />

<script>
	import { Title } from '@nv-org/title';
	import { Divider } from '@nv-org/divider';
</script>

<section>
	<Title level={2}>Properties</Title>

	<div class="prop-container">
		<pre class="prop-code"><code>class?:string</code></pre>
		<Divider size={1} className="w-full opacity-50" color="var(--color-on-surface)"></Divider>

		<ul>
			<li>
				<span><b>Description:</b> HTML class for callout </span>
			</li>
			<li>
				<span
					><b>Default:</b>
					<pre><code>""</code></pre></span
				>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>colors?:string</code></pre>
		<Divider size={1} className="w-full opacity-50" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Color scheme for callout. </span>
			</li>
			<li>
				<span
					><b>Default:</b>
					<pre><code>"container"</code></pre></span
				>
			</li>
		</ul>
	</div>

	<div class="prop-container">
		<pre class="prop-code"><code></code></pre>
		<Divider size={1} className="w-full opacity-50" color="var(--color-on-surface)"></Divider>

		<ul>
			<li>
				<span><b>Description:</b> </span>
			</li>
			<li>
				<span
					><b>Default:</b>
					<pre><code></code></pre></span
				>
			</li>
		</ul>
	</div>
</section>
