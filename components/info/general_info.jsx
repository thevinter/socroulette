import Datalabel from '../datalabel';
import { SocialIcon } from 'react-social-icons';

export default function GeneralInfo({ u }) {
  console.log(u);
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
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Age" data={u.age} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Sex" data={u.sex} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Gender" data={u.gender} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Orientation" data={u.orientation} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Sexuality" data={u.sexuality} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Beliefs" data={u.religion} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Online" data={u.online} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Is looking for" data={u.lf.join(', ')} />
    </div>
  );
}
