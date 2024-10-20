<script>
	import { Callout } from '@nv-org/callout';
	import '../../app/styles/page.css';
	import 'svelte-highlight/styles/darktooth.css';
</script>

<div class="flex place-content-center my-6">
	<Callout type="warning" colors="warning" class="w-[80%] mt-8" variant="flat"
		>This is a showcase. The library stills in develop.</Callout
	>
</div>
<slot />

<style>
	:global {
		@layer utilities {
			.prop-container {
				display: flex;
				flex-direction: column;
				width: 100%;
				align-items: start;
				gap: 4px;
				padding: 20px 0;
				justify-content: start;
				& ul {
					list-style: disc;
					margin-left: 20px;
					& li pre {
						display: inline-block;
					}
				}
			}
			.prop-code {
				white-space: normal;
				font-size: larger;
			}
		}
	}
</style>
