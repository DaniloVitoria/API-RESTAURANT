import { Router } from "express";


import { ProductsController } from "../controller/controller-products";
import { productsMiddleware } from "../middlewares/products-middleware";

const routesProducts = Router()

const productsController = new ProductsController()

routesProducts.get("/",productsMiddleware, productsController.index)


routesProducts.post("/",productsMiddleware, productsController.create)


export {routesProducts}