import type { PageLoad } from './$types';
import { variables } from '$lib/variables';

export const load: PageLoad = async ({params}) => {
    const fragranceSlug = params.fragrance;
    const productSlug = params.slug;
    return fetch(`${variables.STRAPI_API_URL}/products?[filters][Slug][$eq]=${productSlug}&populate[Thumbnail][fields][0]=url&populate[Fragrances][filters][SKUID][$eq]=${fragranceSlug}`)
    .then(res => res.json())
    .then(json => json.data[0])
    .catch(() => {
        console.error("Could not fetch product");
    });
};