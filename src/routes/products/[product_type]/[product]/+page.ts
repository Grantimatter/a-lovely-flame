import type { PageLoad } from './$types';
import { variables } from '$lib/variables';


export const load: PageLoad = ({params}) => {
    return fetch(`${variables.STRAPI_API_URL}/products?[filters][Slug][$eq]=${params.product}&populate=*`)
    .then(res => res.json())
    .then(json => json.data)
    .catch(() => {
        console.error("Could not fetch product");
    });
};