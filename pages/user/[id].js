import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

const strTimezone = (timezone) => {
	let base = "GMT";
	let time = timezone.toString();
	let [int, dec] = time.split(".");
	if(timezone>0) base+= "+";
	if(timezone===0) base+= "±";
	int = int.padStart(2, "0");
	dec = dec ? dec.padEnd(2, "0") : "00";
	return `${base}${int}:${dec}`;
}


export default function Success(){
	const {data, error} = useSWR(`/api/user?id=${useRouter().query.id}`, fetcher)
	console.log(data)
	if(!data) return <p>Loading...</p>
	const u = data[0];

	console.log(strTimezone(0));
	return (
		<div style={{display:"flex", height:"100vh", alignItems:"stretch", flexDirection:"column"}}>
			<div style={{ margin:"3% 3% 0% 3%", border: "1px solid"}}>
				<div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
					<Link href='/users'><a style={{marginLeft:"30px"}} ><h1>Back</h1></a></Link>
				</div>    
			</div>
			<div style={{ flex:"1", margin:"3% 3% 3% 3%", border: "1px solid"}}>
				<div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent: "space-evnly", alignItems:"center"}}>
					<div>
						{u.contacts.kik && <p>KiK: {u.contacts.kik}</p>}
						{u.contacts.discord && <p>Discord: {u.contacts.discord }</p>}
						{u.contacts.telegram && <p>Telegram: {u.contacts.telegram}</p>}
						{u.contacts.email && <p>Email: {u.contacts.email}</p>}
						{u.contacts.snapchat && <p>Snapchat: {u.contacts.snapchat}</p>}
					</div>
					<div>
						<p>Age: {u.age}</p>
						<p>Timezone: {strTimezone(u.timezone)}</p>
						<p>Location: {u.Location}</p>
						{u.country && <p>Country: {u.country}</p>}
						<p>Employment: {u.employment}</p>
						<p>Ethnicities: {u.ethnicity.join(", ")}</p>
					</div>
					<div>
						<p>Sex: {u.sex}</p>
						<p>Gender: {u.gender}</p>
						<p>Orientation: {u.orientation}</p>
						<p>{u.sexuality}</p>
					</div>
					<div>
						<p>Skin: {u.skin}</p>
						<p>Height: {u.height}cm</p>
						<p>Hair: {u.hair}cm</p>
						<p>Body Type: {u.btype}</p>
					</div>
					<div>
						<p>Religion: {u.religion}</p>
						<p>Online: {u.online}</p>
						<p>Is looking for: {u.lf.join(", ")}</p>
					</div>
					<div>
						<p>Kinks: {u.kinks.join(", ")}</p>
						<p>Illnesses: {u.mental.join(", ")}</p>
					</div>
				</div>    
			</div>
		</div>
	)
}