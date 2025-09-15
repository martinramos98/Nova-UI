// import { read } from '$app/server';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	// const { component } = params;
	// Read component text from filesystem
	// const text = read(`src/lib/components/svx/docs/${component}.svelte`);

	return {};
}) satisfies PageServerLoad;
