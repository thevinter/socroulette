/* eslint-disable import/no-anonymous-default-export */
import clientPromise from '../../lib/mongodb';
import crypto from 'crypto';
import axios from 'axios';

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

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const captchaToken = req.body.captchaToken;
    /*  const cap = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6Le4DigeAAAAANMeL-TDN1VuYXgN1KPk9tS5Bm_8&response=${captchaToken}`
    );
    console.log(cap.data);
    if (cap.data.success) { */
    const id = await AddUser(req.body.user);
    res.status(200).json(id);
    /*} else {
      res.status(400).json({ error: 'Captcha failed' });
    } */
  }
}
