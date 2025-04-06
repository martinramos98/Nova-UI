
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const post = await import(`../../../lib/components/svx/docs/${params.components}.svx`);
    return {
      Content: post.default,
      meta: post.metadata,
    };
  } catch (e) {
    console.error(e);
    error(404, `Could not find ${params.components}`);
  }
}
