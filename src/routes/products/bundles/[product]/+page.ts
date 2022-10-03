import { variables } from '$src/lib/variables';
import type { PageLoad } from './$types';

export const load: PageLoad = ({params}) => {
    return fetch(`${variables.STRAPI_API_URL}/bundles?[filters][Slug][$eq]=${params.product}&populate=*`)
    .then(res => res.json())
    .then(json => json.data)
    .catch(() => {
        console.error("Could not fetch product");
    });
};