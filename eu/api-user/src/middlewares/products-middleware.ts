import { Request, Response, NextFunction } from "express";



function productsMiddleware(req: Request, 
    res: Response,
     Next: NextFunction){


       
        console.log("Passou pelo middleware")

        return Next()
}


export { productsMiddleware}