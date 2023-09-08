//import { db } from "../Database/database.Conection.js";
import dayjs from "dayjs"
//import { ObjectId } from "mongodb"

export async function poll(req, res){

    const { title, expireAt} = req.body  

    try{

            if(!expireAt){
                const dateLimit = { title, expireAt: dayjs().valueOf() }
                await db.collection("polls").insertOne(dateLimit) 
                return res.status(201).send(dateLimit)
            }

        await db.collection("polls").insertOne({ title, expireAt})
         res.status(201).send({title,expireAt})
   

        // res.send("Tudo em ordem")

    }catch(error){
        res.status(500).send(error.message)
    }
}

export async function readPoll(req, res){
    const { userId } = res.locals

    try {
        const read = await db.collection("polls").find({ userId }).toArray()

        res.send(read)
    } catch (err) {
        res.status(500).send(err.message)
    }
}