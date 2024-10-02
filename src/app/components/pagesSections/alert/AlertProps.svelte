<svelte:options runes={true} />

<script>
	import { Divider } from '@nv-org/divider';
</script>

<section>
	<div class="prop-container">
		<pre class="prop-code"><code>class?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> HTML class for alert container</span>
			</li>
			<li>
				<span><b>Default:</b> ""</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>open?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

		<ul>
			<li>
				<span><b>Description:</b> Open state of the alert.</span>
			</li>
			<li>
				<span><b>Default:</b> false</span>
			</li>

			<li>
				<span><b>bindable</b> </span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>size?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> size of the alert container</span>
			</li>
			<li>
				<span><b>Default:</b> "md"</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>radius?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Border radius of the alert container.</span>
			</li>
			<li>
				<span><b>Default:</b> "md"</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>footer?:Snippet{'<[closeAlert,confirmAlert]>'}</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span
					><b>Description:</b> Custom footer with customAlert and confirmAlert functions as params</span
				>
			</li>
			<li>
				<span><b>Default:</b> undefined</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>text?:string</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>

		<ul>
			<li>
				<span><b>Description:</b> the message of the alert.</span>
			</li>
			<li>
				<span><b>Default:</b> ""</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>type?: 'default' | 'prompt' | 'confirm'</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> alert types</span>
			</li>
			<li>
				<span><b>Default:</b> 'default'</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>onClose:{'(value:string|undefined|boolean)=>void'}</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Function that controls alert closing.</span>
			</li>
			<li>
				<span><b>required</b> </span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>promptProps?:InputProps</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Props for the input if the alert is type prompt</span>
			</li>
			<li>
				<span><b>Default:</b> undefined</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code
				>backdrop?:{`{class:string,type:'normal'|'blur'|'transparent'}`}</code
			></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Alert backrop properties for styling</span>
			</li>
			<li>
				<span
					><b>Default:</b>
					<pre><code>{`{class:'',type:'normal'}`}</code></pre>
				</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code>animationFunction?:SvelteTransitionFn</code></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span
					><b>Description:</b> Svelte transition function that controls transition animation of the component
					when is unmounted</span
				>
			</li>
			<li>
				<span><b>Default:</b> PopIn</span>
			</li>
		</ul>
	</div>
	<div class="prop-container">
		<pre class="prop-code"><code
				>animationParams?:{`duration?:string,delay?:string,easing:EaseSvelteFunction,...`}</code
			></pre>
		<Divider size={1} className="w-full" color="var(--color-on-surface)"></Divider>
		<ul>
			<li>
				<span><b>Description:</b> Params for the animation function</span>
			</li>
			<li>
				<span><b>Default:</b> default svelte PopIn params</span>
			</li>
		</ul>
	</div>
</section>
