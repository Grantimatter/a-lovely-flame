import { error } from '@sveltejs/kit';
import { variables } from '$lib/variables';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    return fetch(`${variables.STRAPI_API_URL}/our-story`)
    .then(res => res.json())
    .then(json => json.data.attributes)
    .catch(() => {
        throw error(400, 'Not Found');
    });
};
