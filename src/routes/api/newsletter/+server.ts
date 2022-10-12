import type { RequestHandler } from './$types';
import { SENDGRID_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({request}): Promise<Response> => {

    const formData = await request.json();

    const data = JSON.stringify(
        {
            'contacts': [
                {
                    email: formData.email
                }
            ]
        }
    );

    const res = await fetch(`https://api.sendgrid.com/v3/marketing/contacts`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: data
    });

    if (!res.ok) {
        console.error("Something went wrong...", await res.json());
        return new Response("Uh oh! Something went wrong", {status: res.status});
    }

    //console.debug("Success!", await res.json());

    return new Response("Thanks for signing up!", {status: 200});
};