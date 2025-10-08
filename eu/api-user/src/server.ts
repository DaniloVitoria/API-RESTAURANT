import express from "express"
import { routesProducts } from "./routes/list-routes-products"

const PORT = 3333
const app = express()
app.use(express.json())
app.use(routesProducts)




app.listen(PORT, () => {
    console.log(`Aplication runnig on port ${PORT}`)
})


/*

function sum(a: number, b:number): number {
    return a + b
}

const result: number = sum(10, 10)

console.log(result)
*/