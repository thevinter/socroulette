import Link from 'next/link';
import styles from './single_user.module.css';
import Datalabel from './datalabel';

export default function SingleUser({ user }) {
  function determineSFW(user) {
    const sfw = [
      'Safe for work chat',
      'Gaming',
      'Voice Chat',
      'SFW Video Chat',
      'Pen pals',
      'Meeting IRL',
    ];
    const nsfw = [
      'Pic exchange',
      'Sexting',
      'NSFW Video Chat',
      'ERP',
      'Meeting IRL',
    ];
    let res = 0;
    if (user.lf.some((item) => sfw.includes(item))) res += 1;
    if (user.lf.some((item) => nsfw.includes(item))) res += 2;
    if (res == 1) return 'SFW';
    if (res == 2) return 'NSFW';
    return 'SFW + NSFW';
  }

  //truncate bio if too long 
  function truncateBio(bio) {
    if (bio.length > 200) {
      return bio.substring(0, 200) + '...';
    }
    return bio;
  }

  return (
    <Link passHref href={`/user/${user._id}`}>
      <div className={styles.userBox}>
        <div className={styles.firstInfo}>
          <Datalabel cName={styles.dataLabel} lStyle={{ fontWeight: 'bold' }} label="Age" data={user.age} />
          <Datalabel lStyle={{ fontWeight: 'bold' }} label="Sex" data={user.sex} />{' '}
          <Datalabel lStyle={{ fontWeight: 'bold' }} label="Location" data={user.location} />
        </div>
        <div className={styles.secondInfo}>
          <div
            style={{
              flex: '1',
            }}
          >
            <div style={{         fontSize: '2vh',
fontWeight: 'bold' }}>Bio:</div>
            <div
              style={{
                fontSize: '15px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                lineHeight: "1.5em",
                maxHeight: '4.5em',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                whiteSpace: 'normal', 
                marginBottom: '0.5em',
              }}
            >
              {user.bio ? truncateBio(user.bio) : 'No bio'}
            </div>
          </div>
          <Datalabel
            lStyle={{ fontWeight: 'bold' }}
            label="Looking For"
            data={determineSFW(user)}
          />
        </div>
      </div>
    </Link>
  );
}
