/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../lib/mongodb";

export async function GetUsers() {
  const client = await clientPromise;
  const db = client.db('users')
  const teams = await db
    .collection("users")
    .find({})
    .limit(20)
    .toArray();
  return teams;
};

export default async function handler(req, res){
  const jsonData = await GetUsers();
  res.status(200).json(jsonData)
}