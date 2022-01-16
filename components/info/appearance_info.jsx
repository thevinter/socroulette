import Datalabel from '../datalabel';

export default function AppeareanceInfo({ u }) {
  return (
    <div>
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Ethnicity" data={u.ethnicity.join(', ')} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Skin" data={u.skin} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Height" data={u.height + ' cm.'} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Hair" data={u.hair} />
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Body Type" data={u.btype} />
    </div>
  );
}
