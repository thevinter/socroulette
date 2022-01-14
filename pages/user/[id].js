import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())


export default function Success(){
    const {data, error} = useSWR(`/api/user?id=${useRouter().query.id}`, fetcher)
    console.log(data)
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1>Success!</h1>
        </div>
    )
}