import { variables } from '$src/lib/variables';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({params}) => {
    const requestUrl = `${variables.STRAPI_API_URL}/products?populate[0]=ProductType&filters[ProductType][Slug][$eq]=${params.product_type}&populate[Fragrance][populate]=ScentNotes`;
    return fetch(requestUrl)
    .then(res => res.json())
    .then(json => json.data);
};