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
import LocationInfo from '../../components/info/location_info';
import AppearanceInfo from '../../components/info/appearance_info';
import Head from 'next/head';
import MenuItem from '../../components/menuitem';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Success() {
  const { data } = useSWR(`/api/user?id=${useRouter().query.id}`, fetcher);
  console.log(data);
  const [selected, setSelected] = useState('general');

  if (!data) return <div>Loading...</div>;

  const selectedSection = (function () {
    switch (selected) {
      case 'general':
        return <GeneralInfo u={data[0]} />;
      case 'interests':
        return <InterestsInfo u={data[0]} />;
      case 'location':
        return <LocationInfo u={data[0]} />;
      case 'appearance':
        return <AppearanceInfo u={data[0]} />;
      default:
        return <GeneralInfo u={data[0]} />;
    }
  })();

  if (!data) return <p>Loading...</p>;
  const u = data[0];
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
          backgroundColor: '#FFEFEF',
          padding: '80px',
        }}
      >
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
              boxShadow: '-10px 5px 5px rgba(154,160,185,.05), -15px 13px 15px rgba(166,173,201,1)',
              zIndex: '100',
              flexDirection: 'row',
              border: '1px solid black',
            }}
          >
            <div style={{ width: '30%', height: '100%', backgroundColor: '#D3DEDC' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                          borderRadius: '100px 0px 0px 100px',
                          width: '60%',
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
                          borderRadius: '100px 0px 0px 100px',
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
                    selected == 'location'
                      ? {
                          borderRadius: '100px 0px 0px 100px',
                          width: '60%',
                          alignSelf: 'flex-end',
                          backgroundColor: 'white',
                        }
                      : {}
                  }
                >
                  <MenuItem label="location" setLabel={setSelected} />
                </div>
                <div
                  style={
                    selected == 'appearance'
                      ? {
                          borderRadius: '100px 0px 0px 100px',
                          width: '68%',
                          alignSelf: 'flex-end',
                          backgroundColor: 'white',
                        }
                      : {}
                  }
                >
                  <MenuItem label="appearance" setLabel={setSelected} />
                </div>
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <div style={{ margin: '66px' }}>{selectedSection}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
