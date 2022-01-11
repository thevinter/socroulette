import styles from './single_user.module.css'

export default function SingleUser({user}){
    return (
        <div className={styles.userBox}>
            <div className="single-user">
                kik: {user.contacts.kik}<br/>
                discord: {user.contacts.discord}<br/>
                snapchat: {user.contacts.snapchat}<br/>
                email: {user.contacts.email}
            </div>
            <div>
                age: {user.age}<br/>
                sex: {user.sex}<br/>
                location: {user.location}
            </div>
        </div>
    );
}