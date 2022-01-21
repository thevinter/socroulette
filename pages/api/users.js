/* eslint-disable import/no-anonymous-default-export */
import clientPromise from '../../lib/mongodb';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export async function GetUsers(query) {
  const parse = (str) => {
    console.log(`parsing "${str}"`);
    if (str === '') return {};
    if (str === undefined) return {};

    let parsed = {};
    for (const section of str.split(',')) {
      const [name, list] = section.split('=');
      parsed[name] = list.split('~').map(decodeURIComponent);
    }
    return parsed;
  };

  let db_query = {};
  for (const [key, val] of Object.entries(parse(query.selected))) {
    if (!db_query[key]) db_query[key] = {};
    db_query[key].$in = val;
  }
  for (const [key, val] of Object.entries(parse(query.excluded))) {
    if (!db_query[key]) db_query[key] = {};
    db_query[key].$nin = val;
  }
  for (const [key, val] of Object.entries(parse(query.ranges))) {
    db_query[key] = {
      $gte: parseInt(val[0]),
      $lte: parseInt(val[1]),
    };
  }
  db_query['active'] = {};
  db_query['active'].$eq = true;
  console.log(db_query);
  const client = await clientPromise;
  const db = client.db('users');
  const users = await db.collection('users').find(db_query).limit(20).toArray();
  users.forEach((user) => (user.uuid = null));
  return shuffle(users);
}

export default async function handler(req, res) {
  const [_, ...q] = req.url.split('#')[0].split('?');
  const query_string = q.join('?');
  let query = {};
  query_string.split('&').forEach((q) => {
    const [key, ...val] = q.split('=');
    query[key] = val.join('=');
  });
  console.log('Query: ', query);
  const jsonData = await GetUsers(query);
  res.status(200).json(jsonData);
}
