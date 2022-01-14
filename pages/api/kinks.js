/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../lib/mongodb";

export async function AddUser(kink) {
  const client = await clientPromise;
  const db = client.db('users')
  db.collection('kinks').insertOne(kink) //qui dovrebbe esserci tipo upsert o qualcosa di simile per evitare duplicati
  console.log('User added')
  return kink;
};

export async function GetUsers() {
    const client = await clientPromise;
    const db = client.db('users')
    const kinks = await db
      .collection("kinks")
      .find({})
      .toArray();
    return kinks;
  };

export default async function handler(req, res){
    if (req.method === 'POST') {
        const id = await AddKink(req.query.kink)
        res.status(200).json(id)
    }
    if (req.method === 'GET') {
        const id = await GetKinks()
        res.status(200).json(id)
    }
}