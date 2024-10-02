<svelte:options runes={true} />

<script lang="ts">
	import { Title } from '@nv-org/title';
	import { Divider } from '@nv-org/divider';
</script>

<article id="properties">
	<header>
		<Title level={2}>Properties</Title>
	</header>

	<section id="properties-button">
		<Title level={3}>Button</Title>

		<div class="prop-container">
			<pre class="prop-code"><code>onClick?:{`(ev:MouseEvent)=>void`}</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> click function event </span>
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
			<pre class="prop-code"><code>class?:string</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> HTML Class for button</span>
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
			<pre class="prop-code"><code>variant</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:Variant style</b> </span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>''</code></pre></span
					>
				</li>
			</ul>
		</div>

		<div class="prop-container">
			<pre class="prop-code"><code>colors</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> Color scheme for button </span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>''</code></pre></span
					>
				</li>
			</ul>
		</div>

		<div class="prop-container">
			<pre class="prop-code"><code>disabled?:boolean</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> disable button </span>
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
			<pre class="prop-code"><code>isLoading?:boolean</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> shows button loader </span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code> false</code></pre></span
					>
				</li>
			</ul>
		</div>

		<div class="prop-container">
			<pre class="prop-code"><code>spinnerPosition?: 'left'|'right'</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> set position for the spinner when isLoading is true </span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>'left'</code></pre></span
					>
				</li>
			</ul>
		</div>

		<div class="prop-container">
			<pre class="prop-code"><code>withClickEffect?:boolean</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> turns on the effect when button is clicked</span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>true</code></pre></span
					>
				</li>
			</ul>
		</div>

		<div class="prop-container">
			<pre class="prop-code"><code>buttonAttr?:HTMLButtonAttributes</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> object with native attributos for button </span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>{'{}'}</code></pre></span
					>
				</li>
			</ul>
		</div>

		<div class="prop-container">
			<pre class="prop-code"><code>spinner?:Snippet</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:Snippet for spinner component</b> </span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>undefined</code></pre></span
					>
				</li>
			</ul>
		</div>
	</section>
	<section id="properties-group">
		<Title level={3}>Button Group</Title>
		<div class="prop-container">
			<pre class="prop-code"><code>class?:string</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> HTML class for group</span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>''</code></pre></span
					>
				</li>
			</ul>
		</div>
		<div class="prop-container">
			<pre class="prop-code"><code>disabled?:boolean</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> Disables all the buttons </span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>false</code></pre></span
					>
				</li>
			</ul>
		</div>
	</section>
	<section id="properties-close">
		<Title level={3}>Close Button</Title>

		<div class="prop-container">
			<pre class="prop-code"><code>class?:string</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> HTML class for close button </span>
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
			<pre class="prop-code"><code>variant?:string</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> Style variant for close button. </span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>'solid'</code></pre></span
					>
				</li>
			</ul>
		</div>
		<div class="prop-container">
			<pre class="prop-code"><code>colors?:string</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> color scheme for close button</span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>'primary'</code></pre></span
					>
				</li>
			</ul>
		</div>
		<div class="prop-container">
			<pre class="prop-code"><code>side?:'left' | 'right'</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> Define the side of the cross icon. </span>
				</li>
				<li>
					<span
						><b>Default:</b>
						<pre><code>'left'</code></pre></span
					>
				</li>
			</ul>
		</div>
		<div class="prop-container">
			<pre class="prop-code"><code>onClose:{'(ev:MouseEvent) => void'}</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b>Function that is executed when is clicked close button </span>
				</li>
				<li>
					<span><b>required</b> </span>
				</li>
			</ul>
		</div>
	</section>
	<section id="properties-menu">
		<Title level={3}>Menu Button</Title>

		<div class="prop-container">
			<pre class="prop-code"><code>class?:string</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> HTML Class for menu button.</span>
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
			<pre class="prop-code"><code>onClickMenu:{'() => void'}</code></pre>
			<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

			<ul>
				<li>
					<span><b>Description:</b> Function that is executed when button is clicked. </span>
				</li>
				<li>
					<span><b>Required</b> </span>
				</li>
			</ul>
		</div>
	</section>
</article>
