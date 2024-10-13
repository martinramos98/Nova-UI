import adapter from '@sveltejs/adapter-vercel';

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
			'element-animation-js': './packages/element-animation-js',
			'@nv-org/utils': './packages/utils',
			'@nv-org/accordion': './packages/components/Accordion/dist/index.js',
			'@nv-org/alert': './packages/components/Alert/dist/index.js',
			'@nv-org/avatar': './packages/components/Avatar/dist/index.js',
			'@nv-org/badge': './packages/components/Badge/dist/index.js',
			'@nv-org/dropdown': './packages/components/Dropdown/dist/index.js',
			'@nv-org/input': './packages/components/Input/dist/index.js',
			'@nv-org/navbar': './packages/components/Navbar/dist/index.js',
			// '@nv-org/pagination': './packages/components/Pagination/dist/index.js',
			'@nv-org/progress': './packages/components/Progress/dist/index.js',
			// '@nv-org/sidebar': './packages/components/Sidebar/dist/index.js',
			'@nv-org/spinner': './packages/components/Spinner/dist/index.js',
			'@nv-org/table': './packages/components/Table/dist/index.js',
			'@nv-org/tabs': './packages/components/Tabs/dist/index.js',
			'@nv-org/toast': './packages/components/Toast/dist/index.js',
			'@nv-org/button': './packages/components/Button/dist/index.js',
			'@nv-org/modal': './packages/components/Modal/dist/index.js',
			'@nv-org/tooltip': './packages/components/Tooltip/dist/index.js',
			'@nv-org/card': './packages/components/Card/dist/index.js',
			'@nv-org/context-menu': './packages/components/ContextMenu/dist/index.js',
			'@nv-org/chip': './packages/components/Chip/dist/index.js',
			'@nv-org/collapsable-block': './packages/components/CollapsableBlock/dist/index.js',
			'@nv-org/divider': './packages/components/Divider/dist/index.js',
			'@nv-org/drawer': './packages/components/Drawer/dist/index.js',
			'@nv-org/icons': './packages/components/Icons/dist/index.js',
			'@nv-org/link': './packages/components/Link/dist/index.js',
			'@nv-org/image': './packages/components/Image/dist/index.js',
			'@nv-org/popover': './packages/components/Popover/dist/index.js',
			'@nv-org/switch': './packages/components/Switch/dist/index.js',
			'@nv-org/radio': './packages/components/Radio/dist/index.js',
			'@nv-org/title': './packages/components/Title/dist/index.js',

		}
	}
};

export default config;
