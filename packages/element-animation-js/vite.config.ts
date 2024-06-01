import { resolve } from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
	build: {
		outDir: 'dist',
		target: 'node18',
		lib: {
			entry: resolve('src/index.ts'),
			formats: ['es'],
			fileName: 'index'
		},
		minify: false
	},
	resolve: {
		alias: {}
	}
});
