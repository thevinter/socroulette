/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../lib/mongodb";

export async function AddUser(userData) {
  const crypto = require("crypto");
  const id = crypto.randomBytes(16).toString("hex");
  const client = await clientPromise;
  const db = client.db('users')
  userData.createdAt = new Date();
  userData.active = true;
  userData.uuid = id;
  db.collection('users').insertOne(userData)
  console.log('User added')
  return id;
};

export default async function handler(req, res){
    if (req.method === 'POST') {
        const id = await AddUser(req.body)
        res.status(200).json(id)
    }
}