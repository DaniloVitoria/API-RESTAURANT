import { Router } from "express";


import { productsRoutes } from "./products-routes";
import { TablesRoutes } from "./tables-routes";
import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { OrdersRoutes } from "./orders-routes";

const routes = Router()


routes.use("/products", productsRoutes)
routes.use("/tables", TablesRoutes)
routes.use("/tables-sessions", tablesSessionsRoutes)
routes.use("/orders", OrdersRoutes)

export { routes }