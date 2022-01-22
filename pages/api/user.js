/* eslint-disable import/no-anonymous-default-export */
import clientPromise from '../../lib/mongodb';
const { ObjectId } = require('mongodb'); // or ObjectID
import crypto from 'crypto';

export async function GetUser(id) {
  const client = await clientPromise;
  const db = client.db('users');
  const user = await db
    .collection('users')
    .find({ _id: ObjectId(id), active: true })
    .toArray();
  user.uuid = null;
  return user;
}

export async function AddUser(userData) {
  const id = crypto.randomBytes(16).toString('hex');
  const client = await clientPromise;
  const db = client.db('users');
  userData.createdAt = new Date();
  userData.active = true;
  userData.uuid = id;
  db.collection('users').insertOne(userData);
  console.log('User added');
  return id;
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
  } else if (req.method === 'POST') {
    const id = await AddUser(req.body);
    res.status(200).json(id);
  } else {
    const jsonData = await GetUser(req.query.id);
    res.status(200).json(jsonData);
  }
}
