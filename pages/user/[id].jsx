import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';
import { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import Datalabel from '../../components/datalabel';
import styles from './user.module.css';
import Longtext from '../../components/longtext';
import { SocialIcon } from 'react-social-icons';
import GeneralInfo from '../../components/info/general_info';
import InterestsInfo from '../../components/info/interests_info';
import AppearanceInfo from '../../components/info/appearance_info';
import Head from 'next/head';
import MenuItem from '../../components/menuitem';
import SexualInfo from '../../components/info/interests_info';
import PrivateInfo from '../../components/info/private_info';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Success() {
  const { data } = useSWR(`/api/user?id=${useRouter().query.id}`, fetcher);
  console.log(data);
  const [selected, setSelected] = useState('general');

  let u;
  if (!data) u = {};
  else u = data[0];

  const selectedSection = (function () {
    switch (selected) {
      case 'general':
        return <GeneralInfo u={u} />;
      case 'interests':
        return <InterestsInfo u={u} />;
      case 'private':
        return <PrivateInfo u={u} />;
      case 'appearance':
        return <AppearanceInfo u={u} />;
      default:
        return <GeneralInfo u={u} />;
    }
  })();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{
          boxSizing: 'border-box',
          height: '100vh',
          backgroundColor: '#F7F7F7',
          padding: '80px',
        }}
      >
        <div style={{ marginBottom: '3px', marginTop: '-30px', fontSize: '30px' }}>
          homepage / renew
        </div>
        <div
          style={{
            height: '100%',
            zIndex: '100',
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '100%',
              boxShadow:
                '-3px 3px 1px 1px rgb(0,0,0,0.1), -8px 8px #FFE300, -8px 8px 0px 2px black ',
              zIndex: '100',
              flexDirection: 'row',
              border: '1px solid black',
            }}
          >
            <div style={{ width: '25%', height: '100%', backgroundColor: '#ffbc97' }}>
              <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
                <p
                  className={styles.name}
                  style={{
                    textAlign: 'right',
                    fontSize: '50px',
                    color: 'black',
                  }}
                >
                  userinfo.
                </p>
                <div
                  style={
                    selected == 'general'
                      ? {
                          width: '50%',
                          alignSelf: 'flex-end',
                          backgroundColor: 'white',
                        }
                      : {}
                  }
                >
                  <MenuItem label="general" setLabel={setSelected} />
                </div>
                <div
                  style={
                    selected == 'interests'
                      ? {
                          width: '60%',
                          alignSelf: 'flex-end',
                          backgroundColor: 'white',
                        }
                      : {}
                  }
                >
                  <MenuItem label="interests" setLabel={setSelected} />
                </div>
                <div
                  style={
                    selected == 'private'
                      ? {
                          width: '60%',
                          alignSelf: 'flex-end',
                          backgroundColor: 'white',
                        }
                      : {}
                  }
                >
                  <MenuItem label="private" setLabel={setSelected} />
                </div>
                <div
                  style={
                    selected == 'appearance'
                      ? {
                          width: '68%',
                          alignSelf: 'flex-end',
                          backgroundColor: 'white',
                        }
                      : {}
                  }
                >
                  <MenuItem label="appearance" setLabel={setSelected} />
                </div>
                <div style={{ flex: '1', display: 'flex', width: '100%' }}>
                  <Link passHref href="/users">
                    <p
                      style={{
                        alignSelf: 'flex-end',
                        margin: '30px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                      }}
                    >
                      {'⮜ BACK'}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ flex: '1', backgroundColor: 'white' }}>
              <div style={{ margin: '66px', alignSelf: 'flex-end' }}>
                {' '}
                {data ? selectedSection : <div style={{ textAlign: 'center' }}>Loading</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
