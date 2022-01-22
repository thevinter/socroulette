import { useEffect, useState } from 'react';
import useSWR from 'swr';
import SingleUser from './single_user';

export default function UserList({ filters }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(filters);
    console.log(filter_query(filters));
    fetch(`/api/users?${filter_query(filters)}`).then((res) =>
      res.json().then((data) => setData(data))
    );
  }, [filters]);

  if (!data)
    return (
      <div
        style={{ textAlign: 'center', height: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <p style={{ alignSelf: 'center' }}>LOADING...</p>
      </div>
    );

  return (
    <div>
      {data.map((user) => (
        <SingleUser key={user._id} user={user} />
      ))}
    </div>
  );
}

function filter_query(filters) {
  const serialize_list = ([key, value]) => {
    if (value.length === 0) return null;
    return `${key}=${value.map(encodeURIComponent).join('~')}`;
  };
  const serialize_range = (key) => `${key}=${filters[key][0]}~${filters[key][1]}`;
  let query = {
    selected: Object.entries(filters.selected)
      .map(serialize_list)
      .filter((p) => p !== null)
      .join(','),
    excluded: Object.entries(filters.excluded)
      .map(serialize_list)
      .filter((p) => p !== null)
      .join(','),
    ranges: ['age', 'height', 'timezone']
      .map(serialize_range)
      .filter((p) => p !== null)
      .join(','),
  };
  console.log(query);
  return Object.entries(query)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
}
