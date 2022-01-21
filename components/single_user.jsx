import Link from 'next/link';
import styles from './single_user.module.css';
import Datalabel from './datalabel';

export default function SingleUser({ user }) {
  function determineSFW(user) {
    const sfw = [
      'Safe for work chat',
      'Gaming',
      'Voice Chat',
      'Long Term Relationship',
      'SFW Video Chat',
      'Pen pals',
    ];
    const nsfw = ['Pic exchange', 'Sexting', 'NSFW Video Chat', 'ERP'];
    const res = [];
    if (user.lf.some((item) => sfw.includes(item))) res.push('SFW');
    if (user.lf.some((item) => nsfw.includes(item))) res.push('NSFW');
    if (user.lf.some((item) => item === 'Meeting IRL')) res.push('Meeting IRL');
    return res.join(', ');
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
      <a>
        <div className={styles.userBox}>
          <div className={styles.firstInfo}>
            <Datalabel
              cName={styles.dataLabel}
              lStyle={{ fontWeight: 'bold' }}
              label="Age"
              data={user.age}
            />
            <Datalabel lStyle={{ fontWeight: 'bold' }} label="Sex" data={user.sex} />{' '}
            <Datalabel lStyle={{ fontWeight: 'bold' }} label="Location" data={user.location} />
          </div>
          <div className={styles.secondInfo}>
            <div
              style={{
                flex: '1',
              }}
            >
              <div style={{ fontSize: '2vh', fontWeight: 'bold' }}>Bio:</div>
              <div
                style={{
                  fontSize: '15px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  lineHeight: '1.5em',
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
      </a>
    </Link>
  );
}
