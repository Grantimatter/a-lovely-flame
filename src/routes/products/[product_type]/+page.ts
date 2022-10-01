import { variables } from '$src/lib/variables';
import type { PageLoad } from './$types';
import ProductType from '$lib/model/ProductType';

export const load: PageLoad = async ({params, url}) => {
    const requestUrl = `${variables.STRAPI_API_URL}/products?populate[0]=product_type&filters[product_type][Slug][$eq]=${params.product_type}&populate[1]=Thumbnail&populate[2]=fragrance.scent_notes`;
    return fetch(requestUrl)
    .then(res => res.json())
    .then(json => json.data);
};