import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getProductLineItems } from '$src/lib/utility/strapi/productsApi';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import Stripe from 'stripe';
const stripe = new Stripe(STRIPE_SECRET_KEY, {apiVersion: '2022-08-01'});

export const POST: RequestHandler = async ({request}): Promise<Response> => {
    const productList = await request.json();
    
    const LineItems = await getProductLineItems(productList);

    const session = await stripe.checkout.sessions.create({
        LineItems,
        mode: 'payment',
        success_url: 'https://alovelyflame.com/payment-success',
        cancel_url: 'https://alovelyflame.com/cart',
        allow_promotion_codes: true,
        shipping_address_collection: {allowed_countries: ['US']},
    });

    const res = json(session);

    return res;
};