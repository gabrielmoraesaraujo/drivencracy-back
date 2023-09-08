import { db } from "../Database/database.Conection.js"

export function validateSchema(schema){
    return (req, res, next) => {

        const validation = schema.validate(req.body, {abortEarly: false})

        if(validation.error){
            const errors = validation.error.details.map(detail => detail.message)
            return res.status(422).send(errors)
        }
        next()
    }
}

export async function validateChoice(req, res, next){
        const validation = schema.validate(req.body, {abortEarly: false})

        if(validation.error){
            const errors = validation.error.details.map(detail => detail.message)
            return res.status(422).send(errors)
        }

        try{

            const pollId = req.body.pollId
            const verification = await db.collection("polls").findOne({pollId})

            if(!verification) return res.status(404).send("A enquete não existe")

        }catch(err){
            res.status(500).send(err.message)
        }



        next()

    
}