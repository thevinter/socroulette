import Filters from '../components/filters';
import SingleUser from '../components/single_user';
import { useState } from 'react';
import UserList from '../components/userlist';
import Link from 'next/link';

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
          display: 'flex',
          height: '100%',
          border: '1px solid black',
        }}
      >
        <div style={{ backgroundColor: '#F7F7F7', width: '25%' }}>
          <Filters setFilters={setFilters} />
        </div>
        <div style={{ backgroundColor: '#F7F7F7', flex: '1', overflow: 'scroll' }}>
          <UserList filters={filters} />
        </div>
      </div>
    </div>
  );
}
