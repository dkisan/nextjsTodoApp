// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient, ObjectId } from "mongodb";

export default async (req, res) => {
  if (req.method === 'PUT') {
    const data = JSON.parse(req.body)
    const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.bfusjly.mongodb.net/nextjs?retryWrites=true&w=majority');
    const db = client.db();
    const todocollection = db.collection('todos')
    const result = await todocollection.updateOne({ _id: new ObjectId(data.id) }, {
      $set: {
        completed: true
      }
    })
    console.log(result)
    await client.close()
    res.status(201).json({ message: 'Meetup Inserted' })
  }
}
