import useSWR from 'swr';
import Filters from '../components/filters';
import SingleUser from '../components/single_user';
import { useState } from 'react';

const fetcher = (url, body) => fetch(url, {body: body}).then(res => res.json());

export default function Users(){

    const [filters, setFilters] = useState(null);
    const { data, error } = useSWR(['/api/users', filters], fetcher);

    if (error) {
        console.log(error);
        return <div>failed to load</div>;
    }
    if (!data) return <div>loading...</div>;
    console.log(filters);
    return (
        <div>
            <Filters setFilters={setFilters}/>
            {data.map(user => (
                <SingleUser key={user._id} user={user} />
            ))}
        </div>

    );
}