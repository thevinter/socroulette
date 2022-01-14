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
    <div style={{display:"flex"}}>
      <div style={{flex:"1", overflowY: "scroll", height: "100vh", maxHeight:"100vh"}} ><Filters setFilters={setFilters}/></div>
      <div style={{flex:"3"}}><UserList  filters={filters}/></div>
    </div>
  );
}

