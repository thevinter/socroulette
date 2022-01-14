import useSWR from "swr"
import {useState} from "react"
import { TextField } from "@mui/material"
import axios from "axios"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function CMS(){

    const {data, error} = useSWR("/api/kinks", fetcher)

    const [kink, setKink] = useState("")

    if(!data) return <div>Loading...</div>

    return (
        <div>
            {data.map(kink => (<h1 key={kink}>kink</h1>))}
            <TextField sx={{width:"100%"}} onChange={setKink} value={kink} id="outlined-basic" label="new kink" variant="outlined" />
            <button onClick={() => { 
                axios.post(`/api/kinks?kink=${kink}`)
                setKink("")
            }}/>)
        </div>
    )
}