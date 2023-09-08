

export async function choice(req, res){

    const { title, pollId} = req.body

    try{



    }catch(error){
        res.status(500).send(error.message)
    }
}