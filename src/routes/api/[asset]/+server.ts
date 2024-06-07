import { type RequestHandler, error } from '@sveltejs/kit';
const themes = {
	dark: '#323232',
	light: '#b2b2b2',
	sepia: '#',
	space: '#',
	sea: '#'
};
export const GET: RequestHandler = async ({ url, fetch, params }) => {
	const theme = url.searchParams.get('theme') as keyof typeof themes;
	const fileType = url.searchParams.get('type') as string;
	const file = params.asset;
	try {
		const dataSvgRes = await fetch(`/${file}.${fileType}`);
		let svg = await dataSvgRes.text();
		svg = svg.replaceAll('#theme', themes[theme]);
		const res = new Response(String(svg));
		res.headers.set('Content-Type', 'image/svg+xml');
		return res;
	} catch (er) {
		console.log('Error: ', er);
		return error(500, String('Cannot get assets to set theme'));
	}
};
