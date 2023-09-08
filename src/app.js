import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import pollRouter from "./Routes/poll.Routes.js";
import choiceRouter from "./Routes/choice.Routes.js";


const app = express()

app.use(cors())
app.use(express.json())
// app.use(router)
dotenv.config()
app.use(pollRouter)
app.use(choiceRouter)


app.listen(5000, () => console.log('App rodando na porta 5000'))