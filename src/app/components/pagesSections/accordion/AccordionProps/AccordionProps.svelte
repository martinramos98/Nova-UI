<script lang="ts">
	import { Divider } from '@nv-org/divider';
</script>

<section>
	<div class="prop-container">
		<pre class="prop-code"><code>class?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Defines HTML class for accordion container</span>
			</li>
			<li>
				<span><b>Default: </b> ""</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code">
      <code>variant:?string</code>
    </pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span
					><b>Description:</b> Accordion variant style component. Posible values:
					<pre><code>"default-accordion"</code></pre>
					,
					<pre><code>"splitted"</code></pre>
					,
					<pre><code>"splitted-content"</code></pre>
					,
					<pre><code>"bordered-items"</code></pre>
				</span>
			</li>
			<li>
				<span><b>Default:</b> "default-accordion"</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code">
      <code>multiopen:?string</code>
    </pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Accordion variant style component</span>
			</li>
			<li>
				<span><b>Default:</b> false</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code">
      <code>color:?string</code>
    </pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Accordion color scheme for component</span>
			</li>
			<li>
				<span><b>Default:</b> ""</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code">
      <code>children:Snippet</code>
    </pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description: </b> Accordion Children Content</span>
			</li>
			<li>
				<b>required</b>
			</li>
			<li>
				<span><b>Default: </b> - </span>
			</li>
		</ul>
	</div>
</section>
