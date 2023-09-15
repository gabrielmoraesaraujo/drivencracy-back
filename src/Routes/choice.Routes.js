import { Router } from "express";
import { createChoice } from "../controllers/choice.Controllers.js";

const choiceRouter = Router()

choiceRouter.post("/choice", createChoice)

//choiceRouter.post("/choice/:id/vote")


export default choiceRouter 