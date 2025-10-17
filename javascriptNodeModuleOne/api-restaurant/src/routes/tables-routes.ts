import { Router } from "express"

import { TablesController } from "@/controllers/tables-controller"



const TablesRoutes = Router()

const tablesController = new TablesController()


TablesRoutes.get("/", tablesController.index)


export { TablesRoutes }


