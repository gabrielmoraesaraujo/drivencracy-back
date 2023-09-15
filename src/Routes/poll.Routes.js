import { Router } from "express";
import { createpoll, readPoll } from "../controllers/poll.Controllers.js";
import { validateChoice, validateSchema } from "../middlewares/validateSchema.js";
import { choiceSchema, pollSchema } from "../schemas/authSchemas.js";


const pollRouter = Router()


pollRouter.post("/poll",validateSchema(pollSchema), createpoll)

pollRouter.get("/poll", readPoll)

//pollRouter.post("/poll/:id/choice")

//pollRouter.post("/poll/:id/result")

export default pollRouter 
