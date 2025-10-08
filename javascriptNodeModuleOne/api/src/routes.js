import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [



    {
        method: "GET",
        path: "/products",
        controller: ({request, response, database}) => {
            const products = database.select("products")
          
            response.writeHeader(200).end(JSON.stringify(products))
        }
    },
    {
        method: "POST",
        path: "/products",
        controller: async({request, response, database}) => {
           const {name, price } = request.body

           database.insert("products", [name, price])
            // Define o header de resposta como JSON
            
            response.writeHeader(201).end()
        }  
    },
    


     {
        method: "DELETE",
        path: "/products/:id",
        controller: async(request, response) => {
           
            // Define o header de resposta como JSON
            response.end("Removido o produto de id " + request.params.id)
        }  
}




].map((route) => ({
    ...route,
    path: parseRoutePath(route.path),
}))