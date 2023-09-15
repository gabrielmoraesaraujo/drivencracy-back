import { ObjectId } from "mongodb";
import { db } from "../Database/database.Conection.js";

export async function createVote(req, res) {
    const { id } = req.params;
  
    try {

  
      // Verifique se a opção existe
      const choice = await db.collection("choices").findOne({ _id: new ObjectId(id) });
  
      if (!choice) {
        return res.status(404).send('Opção não encontrada.');
      }
  
      // Verifique se a enquete está expirada
      const poll = await db.collection('polls').findOne({ _id: choice.pollId });
  
      if (!poll || poll.expireAt < new Date()) {
        return res.status(403).send('A enquete já expirou.');
      }
  
      // Registre o voto com a data e hora atuais
      const newVote = {
        choiceId: new ObjectId(id),
        createdAt: new Date(),
      };
  
      const result = await db.collection("votes").insertOne(newVote);
  
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send('Erro interno do servidor.' );
    } 
  }