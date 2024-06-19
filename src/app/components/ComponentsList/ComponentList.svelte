<script>
	export let className = '';
</script>

<ul class={className}>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/accordion">Accordion</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/alert">Alert</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/avatar">Avatar</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/badge">Badge</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/button">Button</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/callout">Callout</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/card">Card</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/chip">Chip</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/collapsable">Collapsable Block</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/contextmenu">Context Menu</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/drawer">Drawer</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/dropdown">Dropdown</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/icon">Icon</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/image">Image</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/input">Input</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/link">Link</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/loader">Loader</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/modal">Modal</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/navbar">Navbar</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/popover">Popover</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/progress">Progress</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/radiogroup">Radio</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/selection">Selection</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/slider">Slider</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/switch">Switch</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/table">Table</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/tabs">Tabs</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/toast">Toast</a>
	</li>
	<li class="ui-variant-light ui-color-primary">
		<a href="/components/tooltip">Tooltip</a>
	</li>
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-right: var(--spacing-2);
		& li {
			width: 100%;
			transition: all 0.2s ease;
			& a {
				width: 100%;
				display: block;
				padding: var(--spacing-1) var(--spacing-2);
			}
		}
	}
</style>
