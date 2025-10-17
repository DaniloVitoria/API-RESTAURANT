import http from "node:http"


import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"


const server = http.createServer(async(request, response) => {
    // Middleware que vai definir a request da aplicação
    // um objeto javascript, nisso se eu quiser exibir  eu apenas 
    // transformo em json
    await jsonBodyHandler(request, response)
    routeHandler(request, response)
    

   

})


server.listen(3333)

