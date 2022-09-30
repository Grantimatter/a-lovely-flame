import type Cart from '$src/lib/model/Cart';
import { json } from '@sveltejs/kit';
import { secrets } from '$lib/secret';
import type { RequestHandler } from './$types';
import { getProductLineItems } from '$src/lib/utility/strapi/productsApi';
import Stripe from 'stripe';
const stripe = new Stripe(process.env['STRIPE_SECRET_KEY'], {apiVersion: '2022-08-01'});

export const POST: RequestHandler = async ({request}): Promise<Response> => {
    const cart = await request.json();
    
    const line_items = await getProductLineItems(cart.products);
    
    const payment_link = await stripe.paymentLinks.create({
        line_items: line_items,
        allow_promotion_codes: true,
        after_completion: {type: 'redirect', redirect: {url: `https://alovelyflame.com/payment-success`}}
    });

    const session = await stripe.checkout.sessions.create({
        line_items: line_items,
        mode: 'payment',
        success_url: 'https://alovelyflame.com/payment-success',
        cancel_url: 'https://alovelyflame.com/payment-cancel',
        allow_promotion_codes: true,
        //shipping_options: [],
        shipping_address_collection: {allowed_countries: ['US']},
    });

    //console.debug("Payment Link:", payment_link);
    const res = json(session);

    return res;
};