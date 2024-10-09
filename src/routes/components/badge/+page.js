/**
 *
 * @param {{import('./$types').PageLoad}} param0
 * @returns
 */
export async function load({ fetch }) {
	const propsResult = await fetch('/props/badge.json');
	return { data: await propsResult.json() };
}
