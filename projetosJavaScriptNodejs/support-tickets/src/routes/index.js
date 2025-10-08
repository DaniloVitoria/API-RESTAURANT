import { tickets } from "./tickets.js";
import { parseRoutePah } from "../utils/parseRoutePath.js"

//vai organizar as listas de rotas
export const routes = [...tickets].map((route) => ({
    ...route,
    path: parseRoutePah(route.path)
}))