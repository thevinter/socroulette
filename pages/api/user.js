/* eslint-disable import/no-anonymous-default-export */
import clientPromise from '../../lib/mongodb';
const { ObjectId } = require('mongodb'); // or ObjectID

export async function GetUsers(id) {
  const client = await clientPromise;
  const db = client.db('users');
  const users = await db
    .collection('users')
    .find({ _id: ObjectId(id), active: true })
    .toArray();
  return users;
}

export async function DeleteUser(id) {
  const client = await clientPromise;
  const db = client.db('users');
  var myquery = { uuid: id, active: true };
  var newvalues = { $set: { active: false } };
  const a = await db.collection('users').updateOne(myquery, newvalues);
  if (a.modifiedCount == 0) return 0;
  return 1;
}

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    console.log(req.query);
    const r = await DeleteUser(req.query.id);
    console.log(r);
    res.status(200).json(r);
  } else {
    const jsonData = await GetUsers(req.query.id);
    res.status(200).json(jsonData);
  }
}
