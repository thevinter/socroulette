import styles from './index.module.css';
import Link from 'next/link';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Renew() {
  const [userId, setUserId] = useState('');
  const [result, setResult] = useState('');
  const router = useRouter();

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

  const edit = () => {
    router.push(`/edit/${userId}`);
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
    <div className="mainWrapper">
      <div style={{ marginBottom: '3px', marginTop: '-30px', fontSize: '3vh' }}>
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
      <div className="mainBox">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
            height: '100%',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <div style={{ fontSize: '4vh', fontWeight: 'bold', textAlign: 'center' }}>
            enter your user id
          </div>
          <div style={{ fontSize: '2vh', width: '60%', textAlign: 'justify' }}>
            By entering the user id you received during registration you can either renew your
            account for 14 more days, edit it or delete it completely. Please be aware that you will
            not be able to recover your account once deleted.
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
            <div onClick={() => edit()} style={{ width: '30%', boxSizing: 'border-box' }}>
              <a style={{ width: '100%' }} className={styles.upload}>
                <span>EDIT</span>
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
