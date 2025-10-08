

export async function jsonBodyHandler(request, response){

     const buffer = []

     for await ( const chunk of request){
          buffer.push(chunk)
     }
           
     try {
          //concatenar os chunk e converter para string. Em seguida, converte a string para json



     request.body = JSON.parse(Buffer.concat(buffer).toString())

     } catch (error) {
     request.body = null
     }
            
     response.setHeader("Content-Type", "Application/json")  
}