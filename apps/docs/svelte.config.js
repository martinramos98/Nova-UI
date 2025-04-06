import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({
						themes: ['aurora-x'],
						langs: ['javascript', 'typescript', 'svelte']
					});
					await highlighter.loadLanguage('javascript', 'typescript');
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'aurora-x' }));
					return `{@html \`${html}\` }`;
				}
			}
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
