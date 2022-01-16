/* eslint-disable import/no-anonymous-default-export */
import clientPromise from '../../lib/mongodb';
const { ObjectId } = require('mongodb'); // or ObjectID

export async function RenewUser(id) {
  const client = await clientPromise;
  const db = client.db('users');
  var myquery = { uuid: id };
  var newvalues = { $set: { createdAt: new Date() } };
  const a = await db.collection('users').updateOne(myquery, newvalues);
  if (a.modifiedCount == 0) return 0;
  return new Date();
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const r = await RenewUser(req.body.id);
    console.log(r);
    res.status(200).json(r);
  }
}
