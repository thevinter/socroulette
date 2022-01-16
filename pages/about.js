import styles from './index.module.css';
import Link from 'next/link';

export default function About() {
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
            justifyItems: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ width: '70%' }}>
            {' '}
            <h2 className={styles.about}>about socroulette.</h2>
            <p className={styles.aboutPar}>
              Tired of searching through countless threads on 4chan /soc/ board to try and find your
              account among the hundreds already there? Now with socroulette, you can just leave it
              all up to the crowd. Just upload your accounts, and then aggregate them, searching for
              the one perfect match. The site is free, actively improved, and ad-free.
            </p>
            <p className={styles.aboutPar}>
              No registration is needed and every account is stored for 7 days, after which it is
              made inactive but can be reactivated at a later date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
