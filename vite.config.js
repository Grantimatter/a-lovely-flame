import { sveltekit } from '@sveltejs/kit/vite';
import * as dotenv from 'dotenv';
import stripe from 'stripe';
dotenv.config();
//const stripe = require('stripe')(process.env['STRIPE_SECRET_KEY'])

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), 
		stripe(process.env['STRIPE_SECRET_KEY'])],
	server: {
		fs: {
			allow: ['styles'],
		},
	},

	define: {
		'process.env': process.env,
	},
};

export default config;
