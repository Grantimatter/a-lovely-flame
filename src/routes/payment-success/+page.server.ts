import type { PageServerLoad } from './$types';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import Stripe from 'stripe';
import { json } from '@sveltejs/kit';
const stripe = new Stripe(STRIPE_SECRET_KEY, {apiVersion: '2022-08-01'});

export const load: PageServerLoad = async ({url}) => {

    const session_id = url.searchParams.get('session_id');
    if (!session_id) return;
    
    const session = await stripe.checkout.sessions.retrieve(session_id);

    return session;
};