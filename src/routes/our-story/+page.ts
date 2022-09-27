import { error } from '@sveltejs/kit';
import { variables } from '$lib/variables';


/** @type {import('./$types').PageLoad} */
export async function load () {
    return fetch(`${variables.STRAPI_API_URL}/our-story`)
    .then(res => res.json())
    .then(json => json.data.attributes)
    .catch(err => `Error: ${err}`);
}