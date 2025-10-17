import { Request, Response, NextFunction } from "express";

import { AppError } from "@/utils/AppError";
import { ZodError } from "zod";

// como  vai usar o return e não vai precisar do next, utiliza o _ para omitir o nome
export function errorHandling(error: any,
     request: Request, 
     response: Response,
      _: NextFunction){
     
    // esse if é para ver se foi um erro causado por nos 
    if(error instanceof AppError){
        return response.status(error.statusCode).json({message: error.message})
    }


    // tratando se for um erro do zod
    if(error instanceof ZodError){
               return response.status(400).json({message: "validation error", issus: error.format})
    }

    //se for um erro mais generico
    return response.status(500).json({message: error.message})
}







