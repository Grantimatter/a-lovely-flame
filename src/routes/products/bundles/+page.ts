import { variables } from '$lib/variables';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({params}) => {
    return fetch(`${variables.STRAPI_API_URL}/bundles?populate=Thumbnail&populate[0]=products&populate[1]=fragrances`)
    .then(res => res.json())
    .then(bundles => bundles.data)
    .catch(() => {
        throw error(400, "Error fetching bundles");
    });
};