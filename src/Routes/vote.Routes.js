import { Router } from "express";
import { createVote } from "../controllers/vote.Controllers.js";



const voteRouter = Router()


voteRouter.post('/choice/:id/vote', createVote);

export default voteRouter 