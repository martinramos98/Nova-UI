import adapter from '@sveltejs/adapter-vercel';
const mode = process.env.MODE;
let path = 'dist/index.js';
if (mode === 'DEV') {
	path = 'src/lib/index.ts';
}
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'@nv-org/element-animation-js': './packages/element-animation-js/' + path,
			'@nv-org/utils': './packages/utils/' + path,
			'@nv-org/accordion': './packages/components/Accordion/' + path,
			'@nv-org/alert': './packages/components/Alert/' + path,
			'@nv-org/avatar': './packages/components/Avatar/' + path,
			'@nv-org/badge': './packages/components/Badge/' + path,
			'@nv-org/dropdown': './packages/components/Dropdown/' + path,
			'@nv-org/input': './packages/components/Input/' + path,
			'@nv-org/navbar': './packages/components/Navbar/' + path,
			// '@nv-org/pagination': './packages/components/Pagination/dist/index.js',
			'@nv-org/progress': './packages/components/Progress/' + path,
			// '@nv-org/sidebar': './packages/components/Sidebar/dist/index.js',
			'@nv-org/spinner': './packages/components/Spinner/' + path,
			'@nv-org/table': './packages/components/Table/' + path,
			'@nv-org/tabs': './packages/components/Tabs/' + path,
			'@nv-org/toast': './packages/components/Toast/' + path,
			'@nv-org/button': './packages/components/Button/' + path,
			'@nv-org/modal': './packages/components/Modal/' + path,
			'@nv-org/tooltip': './packages/components/Tooltip/' + path,
			'@nv-org/card': './packages/components/Card/' + path,
			'@nv-org/context-menu': './packages/components/ContextMenu/' + path,
			'@nv-org/chip': './packages/components/Chip/' + path,
			'@nv-org/collapsable-block': './packages/components/CollapsableBlock/' + path,
			'@nv-org/divider': './packages/components/Divider/' + path,
			'@nv-org/drawer': './packages/components/Drawer/' + path,
			'@nv-org/icon': './packages/components/Icons/' + path,
			'@nv-org/link': './packages/components/Link/' + path,
			'@nv-org/image': './packages/components/Image/' + path,
			'@nv-org/popover': './packages/components/Popover/' + path,
			'@nv-org/switch': './packages/components/Switch/' + path,
			'@nv-org/radio': './packages/components/Radio/' + path,
			'@nv-org/title': './packages/components/Title/' + path,
			'@nv-org/selection': './packages/components/Selection/' + path,
			'@nv-org/loader': './packages/components/Loader/' + path,
			'@nv-org/callout': './packages/components/Callout/' + path
		}
	}
};

export default config;
