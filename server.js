import express from "express"
import cors from "cors"

import { routeUser } from "./routes/user_route.js"
import { routeNotFound } from "./utilities/routeNotFound.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/user", routeUser)
app.use(routeNotFound)

app.listen(3000, () => console.log("Server running"))