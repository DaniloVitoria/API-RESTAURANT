export async function jsonHandler(request, response)
{

    const buffers = []

    for await ( const chunks of request){
        buffers.push(chunks)
    }

    try {
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }

    response.setHeader("Content-Type", "application/json")
}