/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../lib/mongodb";

export async function GetUsers([a,b], age, height, timezone) {
  const approved = {};
  const tempApproved = a.split("|");
  tempApproved.pop();
  tempApproved.forEach((item) => {
    let t = item.split("-");
    approved[t[0]] = { $in : t.slice(1, t.length).map(name => name)};
  });

  const excluded = {};
  const tempExcluded = b.split("|");
  tempExcluded.pop();
  tempExcluded.forEach((item) => {
    let t = item.split("-");
    excluded[t[0]] = { $nin : t.slice(1, t.length).map(name => name)};
  });1
  console.log(age)
  const client = await clientPromise;
  const db = client.db('users')
  const users = await db
    .collection("users")
    .find(
      {$and : [
        approved, 
        excluded,
        {age: { $gte: parseInt(age[0],10), $lte: parseInt(age[1],10) }},
        /* {height: { $gte: height[0], $lte: height[1] }},
        {timezone: { $gte: timezone[0], $lte: timezone[1] }}, */
      ]}
    )
    .limit(20)
    .toArray();
  return users;
};

export default async function handler(req, res){
  const jsonData = await GetUsers(req.query.filter.split('/'), [req.query.ageStart, req.query.ageEnd], [req.query.heightStart, req.query.heightEnd], [req.query.timeStart, req.query.timeEnd]);
  res.status(200).json(jsonData)
}