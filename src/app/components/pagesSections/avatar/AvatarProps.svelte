<svelte:options runes={true} />

<script>
	import { Divider } from '@nv-org/divider';
</script>

<section>
	<div class="prop-container">
		<pre class="prop-code"><code>avatarSrc?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Link source of the avatar image.</span>
			</li>
			<li>
				<span
					><b>Default:</b>
					<pre><code>undefined</code></pre></span
				>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>avatarName?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> The name of the avatar.</span>
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
		<pre class="prop-code"><code>size?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> The size of the avatar.</span>
			</li>
			<li>
				<span
					><b>Default:</b>
					<pre><code>"md"</code></pre></span
				>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>colors?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> The colors scheme of the avatar.</span>
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
		<pre class="prop-code"><code>avatarBordered?:boolean</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Set to true to add a border to the avatar.</span>
			</li>
			<li>
				<span
					><b>Default:</b>
					<pre><code>false</code></pre></span
				>
			</li>
		</ul>
	</div>

	<div class="prop-container">
		<pre class="prop-code"><code>class?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> The HTML class of the avatar.</span>
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
		<pre class="prop-code"><code>disabled?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Disables the avatar for itneraction</span>
			</li>
			<li>
				<span><b>Default:</b> false</span>
			</li>
		</ul>
	</div>
</section>
