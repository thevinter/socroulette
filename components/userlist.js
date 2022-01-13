import { useEffect } from "react";
import useSWR from "swr";
import SingleUser from "./single_user";
const fetcher = (url) => fetch(url).then(res => res.json());

export default function UserList({filters}){

    const newFilters = (filters) => {
        let approved = "";
        for(const [key, value] of Object.entries(filters.selected)){
            if(filters.selected[key].length > 0) approved += `${key}-${value.join("-")}|`;
        }
        approved += "/";
        for(const [key, value] of Object.entries(filters.excluded)){
            if(filters.excluded[key].length > 0) approved += `${key}-${value.join("-")}|`;
        }
        return approved;
    }

    useEffect(() => {
        console.log(newFilters(filters));
    }, [filters])

    const extraUrl = filters.age ? `&ageStart=${filters.age[0]}&ageEnd=${filters.age[1]}&heightStart=${filters.height[0]}&heightEnd=${filters.height[1]}&timeStart=${filters.time[0]}&timeEnd=${filters.time[1]}` : ""
    const { data, error } = useSWR(`/api/users?filter=${newFilters(filters)}${extraUrl}`, fetcher);

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