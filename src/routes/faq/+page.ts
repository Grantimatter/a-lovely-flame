import type { PageLoad } from './$types';
import { variables } from '$lib/variables';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({params}) => {
    return fetch(`${variables.STRAPI_API_URL}/faqs`)
    .then(res => res.json())
    .then(json => json.data)
    .catch(() => {
        throw error(400, "Could net fetch FAQs from API");
    });
};