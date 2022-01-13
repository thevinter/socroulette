import styles from './index.module.css'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function Index(){
    const { data, error } = useSWR('/api/count-accounts', fetcher)
    return (
        <div className={styles.title}>
            <h1>socroulette</h1>
            <div style={{textAlign:"justify", width: "70%"}}>
                <p style={{margin:0, padding:0}}>ACCOUNTS</p>
                <p style={{margin:0, padding:0}}>CREATED</p>
                <p style={{width:"100%", margin:0, padding:0, fontStretch: "expanded", textAlign:"right"}}>{data}</p>
                <span className={styles.decoration}></span>
            </div>
            <div className={styles.chart}>
                <div style={{flexGrow:13, zIndex:"100"}} className={styles.man} />
                <div style={{flexGrow:87}} className={styles.woman} />
                <div className={styles.num}>
                    <div className={styles.text}>13%</div>
                    <div className={styles.textRight}>87%</div>
                </div>
            </div>
            <div className={styles.label}>
                <div className={styles.subtextMen}>MEN</div>
                <div className={styles.subtextWomen}>WOMEN</div>
            </div>
        </div>
    )
}