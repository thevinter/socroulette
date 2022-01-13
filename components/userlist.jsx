import {useEffect} from "react";
import useSWR from "swr";
import SingleUser from "./single_user";


export default function UserList({filters}) {
  useEffect(() => {
    console.log(filters);
    console.log(filter_query(filters));
  }, [filters])

  const fetcher = (url) => fetch(url).then(res => res.json());
  const {data, error} = useSWR(`/api/users?${filter_query(filters)}`, fetcher);

  if (error) {
    console.log(error);
    return <div>failed to load</div>;

  }
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.map(user => (
        <SingleUser key={user._id} user={user} />
      ))}
    </div>
  )
}

useEffect(() => {
  console.log(newFilters(filters));
}, [filters])

const extraUrl = filters.age ? `&ageStart=${filters.age[0]}&ageEnd=${filters.age[1]}&heightStart=${filters.height[0]}&heightEnd=${filters.height[1]}&timeStart=${filters.time[0]}&timeEnd=${filters.time[1]}` : ""
const {data, error} = useSWR(`/api/users?filter=${newFilters(filters)}${extraUrl}`, fetcher);

if (error) {
  console.log(error);
  return <div>failed to load</div>;

}
if (!data) return <div>loading...</div>;

return (
  <div>
    {data.map(user => (
      <SingleUser key={user._id} user={user} />
    ))}
  </div>
)
}

return (
  <div>
    {data.map(user => (
      <SingleUser key={user._id} user={user} />
    ))}
  </div>
)
}

function filter_query(filters) {
  const serialize_list = ([key, value]) => {
    if (value.length === 0) return null;
    return `${key}=${value.map(encodeURIComponent).join("~")}`;
  };
  const serialize_range = (key => `${key}=${filters[key][0]}~${filters[key][1]}`);
  let query = {
    selected: Object.entries(filters.selected).map(serialize_list).filter(p => p !== null).join(","),
    excluded: Object.entries(filters.excluded).map(serialize_list).filter(p => p !== null).join(","),
    ranges: ["age", "height", "timezone"].map(serialize_range).filter(p => p !== null).join(","),
  };
  console.log(query);
  return Object.entries(query).map(([k, v]) => `${k}=${v}`).join("&");

}

