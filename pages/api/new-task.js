import { MongoClient } from "mongodb";

const apiHandler = async (req, res) => {

    if (req.method === 'POST') {
        const data = JSON.parse(req.body)
        const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.bfusjly.mongodb.net/nextjs?retryWrites=true&w=majority');
        const db = client.db();
        const meetupcollection = db.collection('todos')
        const result = await meetupcollection.insertOne(data)
        await client.close()
        res.status(201).json({message:'Meetup Inserted'})
    } 
}

export default apiHandler;