import Datalabel from '../datalabel';
import { SocialIcon } from 'react-social-icons';
import styles from './general_info.module.css'


const strTimezone = (timezone) => {
  let base = 'GMT';
  let time = timezone.toString();
  let [int, dec] = time.split('.');
  if (timezone > 0) base += '+';
  if (timezone === 0) base += '±';
  int = int.padStart(2, '0');
  dec = dec ? dec.padEnd(2, '0') : '00';
  return `${base}${int}:${dec}`;
};

export default function GeneralInfo({ u }) {
  return (
    <div>
      {u.contacts.kik && (
        <Datalabel
          icon={
            <SocialIcon
              network="twitter"
              style={{
                height: 18,
                width: 18,
                marginRight: '10px',
                verticalAlign: 'center',
              }}
            />
          }
          lStyle={{ fontWeight: 'bold' }}
          label="KiK"
          data={u.contacts.kik}
        />
      )}
      {u.contacts.discord && (
        <Datalabel
          icon={
            <SocialIcon
              network="discord"
              style={{
                height: 18,
                width: 18,
                marginRight: '10px',
                verticalAlign: 'center',
              }}
            />
          }
          lStyle={{ fontWeight: 'bold' }}
          label="Discord"
          data={u.contacts.discord}
        />
      )}
      {u.contacts.telegram && (
        <Datalabel
          icon={
            <SocialIcon
              network="telegram"
              style={{
                height: 18,
                width: 18,
                marginRight: '10px',
                verticalAlign: 'center',
              }}
            />
          }
          lStyle={{ fontWeight: 'bold' }}
          label="Telegram"
          data={u.contacts.telegram}
        />
      )}
      {u.contacts.email && (
        <Datalabel
          icon={
            <SocialIcon
              network="email"
              style={{
                height: 18,
                width: 18,
                marginRight: '10px',
                verticalAlign: 'center',
              }}
            />
          }
          lStyle={{ fontWeight: 'bold' }}
          label="Email"
          data={u.contacts.email}
        />
      )}
      {u.contacts.snapchat && (
        <Datalabel
          icon={
            <SocialIcon
              network="snapchat"
              style={{
                height: 18,
                width: 18,
                marginRight: '10px',
                verticalAlign: 'center',
              }}
            />
          }
          lStyle={{ fontWeight: 'bold' }}
          label="Snapchat"
          data={u.contacts.snapchat}
        />
      )}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            marginTop: '30px',
            marginBottom: '30px',

            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Datalabel lStyle={{ fontWeight: 'bold' }} label="Age" data={u.age} />
            <Datalabel lStyle={{ fontWeight: 'bold' }} label="Sex" data={u.sex} />
            <Datalabel lStyle={{ fontWeight: 'bold' }} label="Gender" data={u.gender} />
            <Datalabel lStyle={{ fontWeight: 'bold' }} label="Orientation" data={u.orientation} />
            <Datalabel lStyle={{ fontWeight: 'bold' }} label="Sexuality" data={u.sexuality} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Datalabel
              lStyle={{ fontWeight: 'bold' }}
              label="Timezone"
              data={strTimezone(u.timezone)}
            />
            <Datalabel lStyle={{ fontWeight: 'bold' }} label="Location" data={u.location} />
            {u.country && (
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Country" data={u.country} />
            )}
            <Datalabel lStyle={{ fontWeight: 'bold' }} label="Online" data={u.online} />
          </div>
        </div>
        <Datalabel lStyle={{ fontWeight: 'bold' }} label="Is looking for" data={u.lf.join(', ')} />
        <div
         className={styles.bio}
        >
          <Datalabel
            dStyle={{ }}
            lStyle={{ fontWeight: 'bold' }}
            label="Bio"
            data={u.bio}
          />
        </div>
      </div>
    </div>
  );
}
