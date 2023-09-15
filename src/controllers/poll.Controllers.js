import { db } from "../Database/database.Conection.js";
//import { ObjectId } from "mongodb"

export async function createpoll(req, res){

    const { title, expireAt} = req.body  

    try{

        const poll = await db.collection("polls").findOne({ title })
        if (poll) return res.status(409).send("Essa enquete já existe!")
        

        const newPoll = {
            title,
            expireAt: expireAt || new Date(+new Date() + 30 * 24 * 60 * 60 * 1000)
          };

          await db.collection("polls").insertOne(newPoll)
          res.status(201).send(newPoll)

   

        // res.send("Tudo em ordem")

    }catch(error){
        res.status(500).send(error.message)
    }
}

export async function readPoll(req, res){
    //const { userId } = res.locals

    try {
        const read = await db.collection("polls").find({ }).toArray()

        res.send(read)
    } catch (err) {
        res.status(500).send(err.message)
    }
}