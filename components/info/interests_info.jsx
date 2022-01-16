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

export default function InterestsInfo({ u }) {
  console.log(u);
  return (
    <div>
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Religion" data={u.religion} />
      {u.interests && (
        <Datalabel
          lStyle={{ fontWeight: 'bold' }}
          label="Interests and Hobbies"
          data={u.interests}
        />
      )}
      {u.games && <Datalabel lStyle={{ fontWeight: 'bold' }} label="Games" data={u.games} />}
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Employment" data={u.employment} />
    </div>
  );
}
