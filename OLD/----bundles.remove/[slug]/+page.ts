import { variables } from '$src/lib/variables';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({params}) => {
    return fetch(`${variables.STRAPI_API_URL}/bundles?filters[Slug][$eq]=${params.slug}&populate=Thumbnail&populate=fragrances`)
    .then((res) => res.json())
    .then((json) => json.data[0].attributes)
    .catch(() => {
        throw error(400, "Could not load bundles")
    });
};