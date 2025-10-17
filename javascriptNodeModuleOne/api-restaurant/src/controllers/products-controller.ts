import { NextFunction, Request, Response } from "express";
import {  z } from "zod";

import { knex } from "@/database/knex"
import { AppError } from "@/utils/AppError";





class ProductController {



    async index(request: Request, response: Response, next: NextFunction){


        try{

           // lançando o erro de proprosito
           //  throw new AppError("Erro de teste", 201)

           const { name } = request.query

          const products = await knex<ProductRepository>("products")
          .select()// vai procurar pelo nome e se não achar vai colocar um string vazia e mostrar todos os registros
          .whereLike("name", `%${name ?? "" }%`)
          .orderBy("name")

         

            return response.json(products)

        }catch(error){
        //Para o express conseguir lidar com erros asyncronos
            next(error)
        }


    }



    async create(request: Request, response: Response, next: NextFunction){

        try {
            
           const bodySchema = z.object({
            name: z.string().trim().min(6),
            //gt defineque o preço tem que ser maior que zero
            price: z.number().gt(0, {message: "valuemust be greater than 0"})
           })

           const{ name, price} = bodySchema.parse(request.body)


           //usando o generics para ter o tipo que o banco de dados usa e adicionando no banco de dados
           await knex<ProductRepository>("products").insert({name, price})

            return response.status(201).json()



        } catch (error) {
            next(error)
        }
    }


    async update(request: Request, response: Response, next: NextFunction){


        try {
            
           const id = z.string()
           .transform((value) => Number(value))
           .refine((value) => !isNaN(value),{ message: "id must be a number"}).parse(request.params.id)

            const bodySchema = z.object({
                name: z.string().trim().min(6),
                price: z.number().gt(0, { message : "number must be than 0"})
            })

            const {name, price} = bodySchema.parse(request.body)


            // Verifica se o id do produto que vai ser deletado realmente existe
            const product = await knex<ProductRepository>("products")
            .select()
            .where({ id })
            .first()

            //verifica se o produto não existe
            if(!product){
                throw new AppError("Product not found", 404)
            }

            await knex<ProductRepository>("products")
            .update({name, price, updated_at: knex.fn.now()})
            .where({ id })

            


            return response.json()
        } catch (error) {
            next(error)
        }


    }


    async remove(request: Request, response: Response, next: NextFunction){


        try {
            const id = z.string()
           .transform((value) => Number(value))
           .refine((value) => !isNaN(value),{ message: "id must be a number"}).parse(request.params.id)


           
            // Verifica se o id do produto que vai ser deletado realmente existe
            const product = await knex<ProductRepository>("products")
            .select()
            .where({ id })
            .first()

            //verifica se o produto não existe
            if(!product){
                throw new AppError("Product not found", 404)
            }

           await knex<ProductRepository>("products").delete().where({ id })



            return response.json({ message: `Product on position id= ${id} is removed`})
        } catch (error) {
            next(error)
        }
      

    }



}




export { ProductController }


