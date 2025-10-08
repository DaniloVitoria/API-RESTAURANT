import {Response, Request} from "express"


class ProductsController {

    index(req: Request,res: Response){


        res.status(200).send("Oi")

    }


    create(req: Request,res: Response){

        const { name, password} = req.body
    const tickets = {
        id: "1",
        name: name,
        password: password
    }

    res.status(201).send(tickets) 

    }
    
}

export { ProductsController }