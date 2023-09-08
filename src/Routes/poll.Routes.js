import { Router } from "express";
import { poll, readPoll } from "../controllers/poll.Controllers.js";
import { validateChoice, validateSchema } from "../middlewares/validateSchema.js";
import { choiceSchema, pollSchema } from "../schemas/authSchemas.js";


const pollRouter = Router()

pollRouter.post("/poll",validateSchema(pollSchema), poll)

pollRouter.get("/poll", validateChoice(choiceSchema), readPoll)

//pollRouter.post("/poll/:id/choice")

//pollRouter.post("/poll/:id/result")

export default pollRouter 
