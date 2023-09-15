import { ObjectId } from "mongodb";
import { db } from "../Database/database.Conection.js";

export async function createChoice(req, res) {
    const { title, pollId } = req.body;
  
    try {
  
      // Verifique se a enquete existe
      const poll = await db.collection("polls").findOne({ _id: new ObjectId(pollId) });
  
      if (!poll) {
        return res.status(404).send('Enquete não encontrada.');
      }
  
      // Verifique se a enquete está expirada
      const now = new Date();
      if (poll.expireAt < now) {
        return res.status(403).send('A enquete já expirou.');
      }
  
      // Verifique se o título já existe
      const existingChoice = await db.collection("choices").findOne({ title });

  
      if (existingChoice) {
        return res.status(409).send('O título já existe.');
      }
  
      const newChoice = {
        title,
        pollId: new ObjectId(pollId),
      };
  
      const result = await db.collection("choices").insertOne(newChoice);
  
      res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error.message)    
    } 
  }


  export async function getChoicesByPollId(req, res) {
    const { id } = req.params;
  
    try {
       
      // Verifique se a enquete existe
      const poll = await db.collection('polls').findOne({ _id: new ObjectId(id) });
  
      if (!poll) {
        return res.status(404).send('Enquete não encontrada.' );
      }
  
      // Recupere as opções de voto da enquete específica
      const pollChoices = await db.collection("choices").find({ pollId: new ObjectId(id) }).toArray();
  
      res.send(pollChoices);

    } catch (error) {
        res.status(500).send(error.message)    
    }
  }