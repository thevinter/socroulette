/* eslint-disable import/no-anonymous-default-export */
import clientPromise from '../../lib/mongodb';

export async function GetUser(id) {
  const client = await clientPromise;
  const db = client.db('users');
  const user = await db.collection('users').find({ uuid: id, active: true }).toArray();
  return user;
}

export default async function handler(req, res) {
  const jsonData = await GetUser(req.query.id);
  console.log(jsonData);
  if (jsonData === null) res.status(404).json('Not Found');
  else res.status(200).json(jsonData[0]);
}
