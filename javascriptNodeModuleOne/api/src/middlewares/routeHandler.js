import { routes } from "../routes.js"
import { extractQueryParams } from "../utils/extract-query-params.js"
import { Database } from "../database.js"

const database = new Database()

export function routeHandler(request, response){

    const {method, url} = request
 const route = routes.find(
        r => r.method === method &&  r.path.test(url)
    )
    
    if(route){
        const routeParams = request.url.match(route.path)
        const { query, ...params } =routeParams.groups
        
       request.param = params
        request.query = query ? extractQueryParams(query) : {}
        
        

        return route.controller({request, response, database})
    }else {

        response.writeHead(404).end("Rota não encontrada")
    }

}