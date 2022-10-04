import { variables } from '$src/lib/variables';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({params}) => {
    const requestUrl = `${variables.STRAPI_API_URL}/products?populate[0]=product_type&filters[product_type][Slug][$eq]=${params.product_type}&populate[1]=Thumbnail&populate[2]=Fragrances.scent_notes`;
    return fetch(requestUrl)
    .then(res => res.json())
    .then(json => json.data);
};