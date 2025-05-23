import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getProductLineItems } from '$src/lib/utility/strapi/productsApi';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { variables } from '$lib/variables';
import Stripe from 'stripe';
const stripe = new Stripe(STRIPE_SECRET_KEY, {apiVersion: '2022-08-01'});

export const POST: RequestHandler = async ({request}): Promise<Response> => {
    const productList = await request.json();
    
    const line_items = await getProductLineItems(productList);

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${variables.HOST_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${variables.HOST_URL}/cart`,
        allow_promotion_codes: true,
        shipping_address_collection: {allowed_countries: ['US']},
        automatic_tax: {enabled: true}
    });

    return json(session);
};