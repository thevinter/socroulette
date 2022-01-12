/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../lib/mongodb";

export async function GetUsers([a,b]) {
  const approved = {};
  const tempApproved = a.split("|");
  tempApproved.pop();
  tempApproved.forEach((item) => {
    let t = item.split("-");
    approved[t[0]] = { $in : t.slice(1, t.length).map(name => name.toLowerCase())};
  });

  const excluded = {};
  const tempExcluded = b.split("|");
  tempExcluded.pop();
  tempExcluded.forEach((item) => {
    let t = item.split("-");
    excluded[t[0]] = t.slice(1, t.length);
  });
  const client = await clientPromise;
  const db = client.db('users')
  const users = await db
    .collection("users")
    .find({
      approved
    })
    .limit(20)
    .toArray();
  return users;
};

export default async function handler(req, res){
  const jsonData = await GetUsers(req.query.filter.split('/'));
  res.status(200).json(jsonData)
}