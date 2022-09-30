import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getProductLineItems } from '$src/lib/utility/strapi/productsApi';
import Stripe from 'stripe';
const stripe = new Stripe(process.env['STRIPE_SECRET_KEY'], {apiVersion: '2022-08-01'});

export const POST: RequestHandler = async ({request}): Promise<Response> => {
    const productList = await request.json();
    
    const line_items = await getProductLineItems(productList);

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'https://alovelyflame.com/payment-success',
        cancel_url: 'https://alovelyflame.com/payment-cancel',
        allow_promotion_codes: true,
        shipping_address_collection: {allowed_countries: ['US']}
    });

    const res = json(session);

    return res;
};