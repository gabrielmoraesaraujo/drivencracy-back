import joi from "joi"

//poll

// {
// 	_id: ObjectId("54759eb3c090d83494e2d222"),
// 	title: 'Qual a sua linguagem de programação favorita?', 
// 	expireAt: "2022-02-28 01:00"
// }

export const pollSchema = joi.object({
    title: joi.string().required(),
    expireAt: joi.string()
})

//choice

// { 
// 	_id: ObjectId("54759eb3c090d83494e2d999"),
// 	title: "Javascript", 
// 	pollId: ObjectId("54759eb3c090d83494e2d222") 
// }

export const choiceSchema = joi.object({
    title: joi.string().required(),
    pollId: joi.string().required()
})



//vote

// { 
// 	_id: ObjectId("54759eb3c090d83494e2d000")
// 	createdAt: "2022-02-13 01:00", 
// 	choiceId: ObjectId("54759eb3c090d83494e2d999"), 
// }

export const voteSchema = joi.object({
    createdAt: joi.string().required(),
    choiceId: joi.string().required()
})


//   FRONT OK APENAS FAZER O BACK