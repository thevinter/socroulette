import styles from './index.module.css';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Index() {
  const about = (
    <div>
      {' '}
      <h2 className={styles.about}>about socroulette.</h2>
      <p className={styles.aboutPar}>
        Tired of searching through countless threads on 4chan /soc/ board to try and find your
        account among the hundreds already there? Now with socroulette, you can just leave it all up
        to the crowd. Just upload your accounts, and then aggregate them, searching for the one
        perfect match. The site is free, actively improved, and ad-free.
      </p>
      <p className={styles.aboutPar}>
        No registration is needed and every account is stored for 14 days, after which it is made
        inactive but can be reactivated at a later date.
      </p>
    </div>
  );
  const { data, error } = useSWR('/api/count-accounts', fetcher);
  return (
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
          className={styles.mainColumn}
        >
          <div className={styles.mainTitle}>socroulette</div>
          <p className={styles.sub}>a /soc/ account aggregator</p>
          <div
            className={styles.buttonRow}
          >
            <div style={{ flex: '1', textAlign: 'justify' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  height: '100%',
                }}
              >
                <div className={styles.paragraph}>ACCOUNTS</div>
                <div className={styles.paragraph}>CREATED</div>
                <p className={styles.accounts} style={{ width: '100%', textAlign: 'right' }}>
                  {data}
                </p>
                <span className={styles.decoration}></span>
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyItems: 'center',
                  alignItems: 'center',
                  height: '100%',
                  justifyContent: 'space-evenly',
                }}
              >
                <Link href="/new">
                  <a className={styles.upload}>
                    <span>UPLOAD AN ACCOUNT</span>
                  </a>
                </Link>
                <Link href="/users">
                  <a className={styles.browse}>
                    <span>BROWSE USERS</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
