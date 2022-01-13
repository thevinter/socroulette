import styles from './single_user.module.css'

export default function SingleUser({user}) {

  function determineSFW(user) {
    const sfw = ["Safe for work chat", "Gaming", "Voice Chat", "SFW Video Chat", "Pen pals", "Meeting IRL"]
    const nsfw = ["Pic exchange", "Sexting", "NSFW Video Chat", "ERP", "Meeting IRL"]
    let res = 0;
    if (user.lf.some(item => sfw.includes(item))) res += 1;
    if (user.lf.some(item => nsfw.includes(item))) res += 2;
    if (res == 1) return "SFW";
    if (res == 2) return "NSFW";
    return "SFW + NSFW";
  }

  return (
    <div className={styles.userBox}>
      <div className={styles.firstInfo}>
        <p>Age: {user.age}</p>
        <p>Sex: {user.sex}</p>
        <p>Location: {user.location}</p>
      </div>
      <div className={styles.secondInfo}>
        <p>Bio: N.A.</p>
        <p>Looking For: {determineSFW(user)}</p>
      </div>
    </div>
  );
}

