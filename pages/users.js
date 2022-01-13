import Filters from '../components/filters';
import SingleUser from '../components/single_user';
import { useState } from 'react';
import UserList from '../components/userlist';


export default function Users(){

    const [filters, setFilters] = useState({
		selected:[],
		excluded: [],
		age: [],
		height: [],
		timezone: [],
	});
    console.log(filters);
    return (
        <div>
            <Filters setFilters={setFilters}/>
            <UserList filters={filters}/>
        </div>
    );
}

