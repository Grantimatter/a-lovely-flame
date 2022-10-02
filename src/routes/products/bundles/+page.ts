import { variables } from '$src/lib/variables';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({params}) => {
    const requestUrl = `${variables.STRAPI_API_URL}/bundles?[filters][Slug][$eq]=NEET&populate=*`;
    return fetch(requestUrl)
    .then(res => res.json())
    .then(json => json.data);
};