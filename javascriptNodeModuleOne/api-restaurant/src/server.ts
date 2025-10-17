import express from "express"
import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

const PORT = 3333

const  app = express()

app.use(express.json())

app.use(routes)

//usando o middleware de forma global para tratar todos os erros da aplicação
app.use(errorHandling)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))