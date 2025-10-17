import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const capitalizedComponent = params.component.charAt(0).toUpperCase() + params.component.slice(1);
		const post = await import(`../../../lib/components/svx/docs/${params.component}.svx`);
		const componentsCode = await import(`$lib/components/componentsCases/${capitalizedComponent}/${capitalizedComponent}.json`);
		const componentsMap = await import(`$lib/components/componentsCases/${capitalizedComponent}/${capitalizedComponent}_map.ts`)
		const componentsData = await componentsDataBuilder(componentsCode.default, componentsMap.componentsMap);
		return {
			Content: post.default,
			meta: post.metadata,
			componentsData
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find ${params.component}`);
	}
}

const componentsDataBuilder = async (componentsCode, componentsMap) => {
	const componentsData = {};
	for (const [key, value] of Object.entries(componentsMap)) {
		if (componentsCode[key]) {
			componentsData[key] = {
				code: componentsCode[key],
				component: (await value()).default
			};
		}
	}
	return componentsData;

}