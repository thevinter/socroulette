/* eslint-disable import/no-anonymous-default-export */
import clientPromise from '../../lib/mongodb';

export async function Count() {
  const client = await clientPromise;
  const db = client.db('users');
  const users = await db.collection('users').find({}).count();
  console.log(users);
  return users;
}

export default async function handler(req, res) {
  const jsonData = await Count();
  res.status(200).json(jsonData);
}
