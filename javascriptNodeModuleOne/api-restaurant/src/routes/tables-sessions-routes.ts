import { Router } from "express"

import { TablesSessionsController } from "@/controllers/tables-sessions-controller"


const tablesSessionsRoutes = Router()

const tablesSessions = new TablesSessionsController()

tablesSessionsRoutes.get("/", tablesSessions.index)
tablesSessionsRoutes.post("/", tablesSessions.create)
tablesSessionsRoutes.patch("/:id", tablesSessions.update)


export { tablesSessionsRoutes }


