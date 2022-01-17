import Datalabel from '../datalabel';
import styles from './general_info.module.css';

export default function PrivateInfo({ u }) {
  return (
    <div className={styles.appearance}>
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
          data={u.flags}
        />
      )}
    </div>
  );
}
