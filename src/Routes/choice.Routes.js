import { Router } from "express";
import { createChoice, getChoicesByPollId } from "../controllers/choice.Controllers.js";

const choiceRouter = Router()

choiceRouter.post("/choice", createChoice)

//choiceRouter.post("/choice/:id/vote")
choiceRouter.get('/poll/:id/choice', getChoicesByPollId);


export default choiceRouter 