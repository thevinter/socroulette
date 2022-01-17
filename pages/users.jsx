import Filters from '../components/filters';
import SingleUser from '../components/single_user';
import { useState } from 'react';
import UserList from '../components/userlist';
import Link from 'next/link';
import styles from './users.module.css';

export default function Users() {
  const [filters, setFilters] = useState({
    selected: [],
    excluded: [],
    age: [],
    height: [],
    timezone: [],
  });
  return (
    <div
    className="mainWrapper"
    >
      <div style={{ marginBottom: '3px', marginTop: '-30px', fontSize: '3vh'  }}>
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
        className={styles.mainContainer}
      >
        <div className={styles.filters}>
          <Filters setFilters={setFilters} />
        </div>
        <div className={styles.users}>
          <UserList filters={filters} />
        </div>
      </div>
    </div>
  );
}
