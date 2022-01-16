import Datalabel from '../datalabel';

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


export default function LocationInfo({ u }) {
  return (
    <div>
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Timezone" data={strTimezone(u.timezone)} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Location" data={u.Location} />
      {u.country && <Datalabel lStyle={{ fontWeight: 'bold' }} label="Country" data={u.country} />}
    </div>
  );
}
