import Filters from '../components/filters';
import SingleUser from '../components/single_user';
import { useState } from 'react';
import UserList from '../components/userlist';

export default function Users() {
  const [filters, setFilters] = useState({
    selected: [],
    excluded: [],
    age: [],
    height: [],
    timezone: [],
  });
  console.log(filters);
  return (
    <div style={{ boxSizing: 'border-box', height: '100vh', padding: '80px' }}>
      <div
        style={{
          boxShadow: '-10px 5px 5px rgba(154,160,185,.05), -15px 13px 15px rgba(166,173,201,1)',
          display: 'flex',
          height: '100%',
          border: '1px solid black',
        }}
      >
        <div dir="rtl">
          <Filters setFilters={setFilters} />
        </div>
        <div style={{ flex: '3' }}>
          <UserList filters={filters} />
        </div>
      </div>
    </div>
  );
}
