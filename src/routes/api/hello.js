/**
 * API Endpoint
 * Testing out svelte kit endpoints
 */

export const get = async ({ params }) => {
    console.log(`==> Server Response`)
    return {
        body: {
            message: 'Successful server response',
        },
    }
}

export default get
