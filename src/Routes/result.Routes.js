import { Router } from "express";
import { getPollResult } from "../controllers/result.Controllers.js";


const resultRouter = Router()


resultRouter.get('/poll/:id/result', getPollResult);

export default resultRouter