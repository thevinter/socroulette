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

export default function PrivateInfo({ u }) {
  return (
    <div>
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Kinks" data={u.kinks.join(', ')} />
      {u.extraKinks.length > 0 && (
        <Datalabel
          lStyle={{ fontWeight: 'bold', wordWrap: '' }}
          label="Additional Kinks"
          data={u.extraKinks.join(', ')}
        />
      )}
      <Datalabel
        lStyle={{ fontWeight: 'bold', wordWrap: '' }}
        label="Mental Illnesses"
        data={u.mental.join(', ')}
      />
      {u.flags && (
        <Datalabel
          lStyle={{ fontWeight: 'bold', wordWrap: '' }}
          label="Red Flags"
          data={u.flags.join(', ')}
        />
      )}
    </div>
  );
}
