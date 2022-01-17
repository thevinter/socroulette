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

  const selectedSection = (function () {
    switch (selected) {
      case 'general':
        return <GeneralInfo u={data ? data[0] : null} />;
      case 'interests':
        return <InterestsInfo u={data ? data[0] : null} />;
      case 'private':
        return <PrivateInfo u={data ? data[0] : null} />;
      case 'appearance':
        return <AppearanceInfo u={data ? data[0] : null} />;
      default:
        return <GeneralInfo u={data ? data[0] : null} />;
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
        className="mainWrapper"
      >
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
        <div
          className="mainBox"

        >
          <div
            className={styles.content}
          >
            <div className={styles.menuWrapper}>
              <div className={styles.menu}>
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
            <div className={styles.mobileMenu}>
              <div style={{ display: "flex", justifyContent:"space-evenly", flexDirection: "row" }}>
                <p
                  style={{ textAlign: 'right', fontSize: '1em', color: (selected == 'general' ? "red" : "black"), margin:"7px", borderBottom: '1px solid black' }}
                  onClick={() => setSelected("general")}
                >
                  General
                </p>
                <p
                  style={{ textAlign: 'right', fontSize: '1em', color: (selected == 'interests' ? "red" : "black"), margin:"7px", borderBottom: '1px solid black' }}
                  onClick={() => setSelected("interests")}
                >
                  Interests
                </p>
                <p
                  style={{ textAlign: 'right', fontSize: '1em', color: (selected == 'private' ? "red" : "black"), margin:"7px", borderBottom: '1px solid black' }}
                  onClick={() => setSelected("private")}
                >
                  Private
                </p>
                <p
                  style={{ textAlign: 'right', fontSize: '1em', color: (selected == 'appearance' ? "red" : "black"), margin:"7px", borderBottom: '1px solid black' }}
                  onClick={() => setSelected("appearance")}
                >
                  Appearance
                </p>
              </div>
            </div>
            <div style={{ flex: '1', backgroundColor: 'white' }}>
              <div className={styles.contentWrapper}>
                {data && data.length > 0 ? (
                  selectedSection
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    {data ? 'The current user cannot be found' : 'Loading'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
