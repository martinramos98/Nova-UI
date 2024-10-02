<svelte:options runes={true} />

<script>
	import { Divider } from '@nv-org/divider';
</script>

<section>
	<div class="prop-container">
		<pre class="prop-code"><code>hideBadge?:boolean</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

		<ul>
			<li>
				<span><b>Description:</b> hides the badge.</span>
			</li>
			<li>
				<span><b>Default:</b> false</span>
			</li>
		</ul>
	</div>

	<div class="prop-container">
		<pre class="prop-code"><code>contentBadge?:string | Snippet</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

		<ul>
			<li>
				<span><b>Description:</b> content inside of the badge.</span>
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
		<pre class="prop-code"><code
				>positionBadge?:'top-left' | 'top-right' | 'bottom-left'  | 'bottom-right'</code
			></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> position of the badge.</span>
			</li>
			<li>
				<span><b>Default:</b> 'bottom-right'</span>
			</li>
		</ul>
	</div>

	<div class="prop-container">
		<pre class="prop-code"><code>hideBadge?:boolean</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

		<ul>
			<li>
				<span><b>Description:</b> hides the badge.</span>
			</li>
			<li>
				<span><b>Default:</b> false</span>
			</li>
		</ul>
	</div>
</section>
<div class="prop-container">
	<pre class="prop-code"><code>class?:string</code></pre>
	<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

	<ul>
		<li>
			<span><b>Description:</b> HTML class for badge.</span>
		</li>
		<li>
			<span><b>Default:</b> <code><pre>""</pre></code></span>
		</li>
	</ul>
</div>
<div class="prop-container">
	<pre class="prop-code"><code>size?:number</code></pre>
	<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

	<ul>
		<li>
			<span><b>Description:</b> size of the badge. Value must be a number between 1 and 9.</span>
		</li>
		<li>
			<span
				><b>Default:</b>
				<pre><code>3</code></pre></span
			>
		</li>
	</ul>
</div>

<div class="prop-container">
	<pre class="prop-code"><code>colors?:string</code></pre>
	<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

	<ul>
		<li>
			<span><b>Description:</b> Color scheme for badge.</span>
		</li>
		<li>
			<span><b>Default:</b> ''</span>
		</li>
	</ul>
</div>

<div class="prop-container">
	<pre class="prop-code"><code>variant?:string</code></pre>
	<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
	<ul>
		<li>
			<span><b>Description:</b> Style variant for badge.</span>
		</li>
		<li>
			<span><b>Default:</b> ''</span>
		</li>
	</ul>
</div>
