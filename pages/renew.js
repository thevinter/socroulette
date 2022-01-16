import styles from './index.module.css';
import Link from 'next/link';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Renew() {
  const [userId, setUserId] = useState('');
  const [result, setResult] = useState('');

  const renew = () => {
    axios.post('/api/renew', { id: userId }).then((res) => {
      console.log(res);
      setResult(
        res.data == 0
          ? "This account can't be found, please check the ID"
          : `Your account has been renewed, your new expiration date is ${new Date(
              result
            ).toLocaleDateString()}`
      );
    });
  };

  const del = () => {
    axios.delete(`/api/user?id=${userId}`).then((res) => {
      setResult(
        res.data == 0
          ? "This account can't be found, please check the ID"
          : `Your account has been deleted`
      );
      console.log(res.data);
    });
  };

  return (
    <div
      style={{
        backgroundColor: '#F7F7F7',
        boxSizing: 'border-box',
        height: '100vh',
        padding: '80px',
      }}
    >
      <div style={{ marginBottom: '3px', marginTop: '-30px', fontSize: '30px' }}>
        <Link href="/">
          <a>homepage</a>
        </Link>
        {' / '}
        <Link href="/renew">
          <a>manage</a>
        </Link>
        {' / '}
        <Link href="/about">
          <a>about</a>
        </Link>
      </div>
      <div
        style={{
          boxShadow: '-3px 3px 1px 1px rgb(0,0,0,0.1), -8px 8px #FFE300, -8px 8px 0px 2px black ',
          height: '100%',
          width: '100%',
          border: '1px solid black',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'cnter',
            justifyItems: 'center',
            height: '100%',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <div style={{ fontSize: '40px', fontWeight: 'bold' }}>enter your user id</div>
          <div style={{ fontSize: '20px', width: '60%', textAlign: 'justify' }}>
            By entering the user id you received during registration you can either renew your
            account for 7 more days or delete it completely. Please be aware that you will not be
            able to recover your account once deleted.
          </div>
          <TextField
            sx={{ width: '60%' }}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            id="outlined-basic"
            label="user id"
            variant="outlined"
          />
          <div>{result}</div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '65%',
              alignItems: 'center',
              alignContent: 'center',
            }}
          >
            <div onClick={() => renew()} style={{ width: '30%', boxSizing: 'border-box' }}>
              <a style={{ width: '100%' }} className={styles.upload}>
                <span>RENEW</span>
              </a>
            </div>
            <div
              style={{ width: '30%', boxSizing: 'border-box' }}
              onClick={() => {
                del();
              }}
            >
              <a style={{ width: '100%' }} className={styles.browse}>
                <span>DELETE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
