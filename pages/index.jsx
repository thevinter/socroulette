import styles from './index.module.css'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function Index() {
  const {data, error} = useSWR('/api/count-accounts', fetcher)
  return (
    <div className={styles.title}>
      <div style={{width: "70%", display: "flex", flexDirection: "column"}}>
        <h1 className={styles.mainTitle}>socroulette</h1>
        <p className={styles.sub}>a /soc/ account aggregator</p>
      </div>
      <div style={{textAlign: "justify", width: "70%"}}>
        <p className={styles.paragraph}>ACCOUNTS</p>
        <p className={styles.paragraph}>CREATED</p>
        <p className={styles.accounts} style={{width: "100%", textAlign: "right"}}>{data}</p>
        <span className={styles.decoration}></span>
      </div>
      <Link href='/new'><a className={styles.upload}><span>UPLOAD AN ACCOUNT</span></a></Link>
      <Link href='/users'><a className={styles.browse}><span>BROWSE USERS</span></a></Link>
      <h2 className={styles.about}>about socroulette.</h2>
      <p className={styles.aboutPar}>
        Tired of searching through countless threads on 4chan /soc/ board to try and find your account among the hundreds already there?
        Now with socroulette, you can just leave it all up to the crowd. Just upload your accounts, and then aggregate them, searching for the one perfect match.
        The site is free, actively improved, and ad-free.
      </p>
      <p className={styles.aboutPar}>
        No registration is needed and every account is stored for 7 days, after which it is made inactive but can
        be reactivated at a later date.
      </p>
    </div>
  )
}

