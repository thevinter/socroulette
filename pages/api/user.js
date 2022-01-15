/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../lib/mongodb";
const { ObjectId } = require("mongodb"); // or ObjectID

export async function GetUsers(id) {
  const client = await clientPromise;
  const db = client.db("users");
  const users = await db
    .collection("users")
    .find({ _id: ObjectId(id) })
    .toArray();
  return users;
}

export default async function handler(req, res) {
  const jsonData = await GetUsers(req.query.id);
  res.status(200).json(jsonData);
}
