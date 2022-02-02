import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './success/success.module.css';

export default function Success() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className={styles.header}>Congratulations</h1>
      <p className={styles.description}>Your user has been modified</p>
      <Link href="/users">
        <a className={styles.btn}>click here to go back to the submitted profiles</a>
      </Link>
    </div>
  );
}
