import useSWR from 'swr';
import SingleUser from '../components/single_user';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Users(){
    const { data, error } = useSWR('/api/users', fetcher);
    
    if (error) {
        console.log(error);
        return <div>failed to load</div>;
    }
    if (!data) return <div>loading...</div>;
    
    return (
        <ul>
        {data.map(user => (
            <SingleUser user={user} />
        ))}
        </ul>
    );
}