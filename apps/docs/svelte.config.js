import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex({
		
		layout:{
			components:"./src/lib/components/svx/layouts/ComponentSvxLayout.svelte",
		}
	})],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx']
};

export default config;
