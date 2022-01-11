import { useRouter } from 'next/router'

export default function Success(){
    return (
        <div>Congratulations user {useRouter().query.id}</div>
    )
}