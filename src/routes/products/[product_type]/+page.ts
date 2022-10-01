import { variables } from '$src/lib/variables';
import type { PageLoad } from './$types';
import ProductType from '$lib/model/ProductType';

export const load: PageLoad = async ({params, url}) => {
    const requestUrl = `${variables.STRAPI_API_URL}/products?populate=product_type=&filters[product_type][Slug][$eq]=${params.product_type}&populate=Thumbnail&populate=Fragrance&populate=product_type`;
    return fetch(requestUrl)
    .then(res => res.json())
    .then(json => json.data);
};