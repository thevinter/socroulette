import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';
import { Card, CardContent } from '@mui/material';
import Datalabel from '../../components/datalabel';
import styles from './user.module.css';
import Longtext from '../../components/longtext';
import { SocialIcon } from 'react-social-icons';

const fetcher = (url) => fetch(url).then((r) => r.json());

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

export default function Success() {
  const { data, error } = useSWR(`/api/user?id=${useRouter().query.id}`, fetcher);
  console.log(data);
  if (!data) return <p>Loading...</p>;
  const u = data[0];
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'stretch',
        flexDirection: 'column',
      }}
    >
      <div style={{ margin: '3% 3% 0% 3%', border: '1px solid' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Link href="/users">
            <a style={{ marginLeft: '30px' }}>
              <h1>Back</h1>
            </a>
          </Link>
        </div>
      </div>

      <div
        style={{
          flex: '1',
          height: '75%',
          margin: '3% 3% 3% 3%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            height: '100%',
            flexBasis: 275,
            width: '0%',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Card sx={{ margin: '15px', backgroundColor: 'coral', width: 275 }}>
            <CardContent>
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
            </CardContent>
          </Card>

          <Card sx={{ margin: '15px', backgroundColor: 'coral', width: 275 }}>
            <CardContent>
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Age" data={u.age} />
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Sex" data={u.sex} />
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Gender" data={u.gender} />
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Orientation" data={u.orientation} />
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Sexuality" data={u.sexuality} />
            </CardContent>
          </Card>

          <Card sx={{ margin: '15px', backgroundColor: 'coral', width: 275 }}>
            <CardContent>
              <Datalabel
                lStyle={{ fontWeight: 'bold' }}
                label="Timezone"
                data={strTimezone(u.timezone)}
              />
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Location" data={u.Location} />
              {u.country && (
                <Datalabel lStyle={{ fontWeight: 'bold' }} label="Age" data={u.country} />
              )}
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Employment" data={u.employment} />
              <Datalabel
                lStyle={{ fontWeight: 'bold' }}
                label="Ethnicities"
                data={u.ethnicity.join(', ')}
              />
            </CardContent>
          </Card>

          <Card sx={{ margin: '15px', backgroundColor: 'coral', width: 275 }}>
            <CardContent>
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Skin" data={u.skin} />
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Height" data={u.height} />
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Hair" data={u.hair} />
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Body Type" data={u.btype} />
            </CardContent>
          </Card>

          <Card sx={{ margin: '15px', backgroundColor: 'coral', width: 275 }}>
            <CardContent>
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Beliefs" data={u.religion} />
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Online" data={u.online} />
              <Datalabel
                lStyle={{ fontWeight: 'bold' }}
                label="Is looking for"
                data={u.lf.join(', ')}
              />
            </CardContent>
          </Card>

          <Card sx={{ margin: '15px', backgroundColor: 'coral', width: 275 }}>
            <CardContent>
              <Datalabel lStyle={{ fontWeight: 'bold' }} label="Kinks" data={u.kinks.join(', ')} />
              <Datalabel
                lStyle={{ fontWeight: 'bold' }}
                label="Illnesses"
                data={u.mental.join(', ')}
              />
            </CardContent>
          </Card>

          {u.bio && (
            <Card sx={{ margin: '30px', backgroundColor: 'coral', width: 275 }}>
              <CardContent>
                <Longtext label="Bio" data={u.bio} />
              </CardContent>
            </Card>
          )}

          {u.bio && (
            <Card sx={{ margin: '30px', backgroundColor: 'coral', width: 275 }}>
              <CardContent>
                {u.games && <Longtext label="Games I play:" data={u.games} />}
              </CardContent>
            </Card>
          )}
          {u.flags && (
            <Card sx={{ margin: '30px', backgroundColor: 'coral', width: 275 }}>
              <CardContent>{u.flags && <Longtext label="Red flags" data={u.flags} />}</CardContent>
            </Card>
          )}
          {u.nowrite && (
            <Card sx={{ margin: '30px', backgroundColor: 'coral', width: 275 }}>
              <CardContent>
                {u.nowrite && <Longtext label="Don't write to me if:" data={u.nowrite} />}
              </CardContent>
            </Card>
          )}
          {u.interests && (
            <Card sx={{ margin: '30px', backgroundColor: 'coral', width: 275 }}>
              <CardContent>
                {u.interests && <Longtext label="Interests" data={u.interests} />}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
