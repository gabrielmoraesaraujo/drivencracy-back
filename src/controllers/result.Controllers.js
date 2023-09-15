import { ObjectId } from "mongodb";
import { db } from "../Database/database.Conection.js";


export async function getPollResult(req, res) {
  const { id } = req.params;

  try {

    const polls = db.collection('polls');
    const choices = db.collection('choices');
    const votes = db.collection('votes');

    // Verifique se a enquete existe
    const poll = await db.collection("polls").findOne({ _id: new ObjectId(id) });

    if (!poll) {
      return res.status(404).send('Enquete não encontrada.' );
    }

    // Obtenha todas as opções de voto da enquete
    const pollChoices = await db.collection("choices").find({ pollId: new ObjectId(id) }).toArray();

    let result = null;
    let maxVotes = 0;

    // Para cada opção de voto, conte os votos
    for (const choice of pollChoices) {
      const voteCount = await db.collection("votes").countDocuments({ choiceId: choice._id });

      if (voteCount > maxVotes) {
        maxVotes = voteCount;
        result = {
          title: choice.title,
          votes: maxVotes,
        };
      }
    }

    const pollResult = {
      _id: poll._id,
      title: poll.title,
      expireAt: poll.expireAt,
      result,
    };

    res.json(pollResult);
  } catch (error) {
    res.status(500).send('Erro interno do servidor.' );
  } 
}
