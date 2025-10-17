import { Router } from "express";
import { OrdersController } from "@/controllers/orders-controllers";


const OrdersRoutes = Router()

const ordersController = new OrdersController()

OrdersRoutes.post("/", ordersController.create)
OrdersRoutes.get("/table-session/:table_session_id", ordersController.index)
OrdersRoutes.get("/table-session/:table_session_id/total", ordersController.show)

export { OrdersRoutes }










