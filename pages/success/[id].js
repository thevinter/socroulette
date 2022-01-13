import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from './success.module.css'

export default function Success() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1 className={styles.header}>thanks for submitting your profile</h1>
      <p className={styles.description}>YOUR USER ID:</p>
      <div className={styles.box}><span className={styles.id}>{useRouter().query.id}</span></div>
      <p className={styles.description}>please <span style={{color: "red", fontWeight: "bold"}}>write it down</span> as you will need it to renew or delete your profile</p>
      <Link href="/users"><a className={styles.btn} >click here to browse the submitted profiles</a></Link>
    </div>
  )
}

