/** @type {import('./__types/all').RequestHandler} */
export async function GET() {
    console.debug("Running get for /products/all");

    return {
        status: 200
    }
}