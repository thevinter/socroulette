import Datalabel from '../datalabel';
import styles from './general_info.module.css';

export default function InterestsInfo({ u }) {
  console.log(u);
  return (
    <div className={styles.appearance}>
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Religion" data={u.religion} />
      {u.boards && (
        <Datalabel lStyle={{ fontWeight: 'bold' }} label="Boards" data={u.boards.join(', ')} />
      )}
      {u.interests && (
        <Datalabel
          lStyle={{ fontWeight: 'bold' }}
          dStyle={{ whiteSpace: 'pre-wrap' }}
          label="Interests and Hobbies"
          divStyle={{ alignItems: 'baseline', marginBottom: '2rem' }}
          data={u.interests}
        />
      )}
      {u.games && (
        <Datalabel
          lStyle={{ fontWeight: 'bold' }}
          dStyle={{ whiteSpace: 'pre-wrap' }}
          divStyle={{ alignItems: 'baseline', marginBottom: '2rem' }}
          label="Games"
          data={u.games}
        />
      )}
      {u.games && (
        <Datalabel
          lStyle={{ fontWeight: 'bold' }}
          dStyle={{ whiteSpace: 'pre-wrap' }}
          divStyle={{ alignItems: 'baseline', marginBottom: '2rem' }}
          label="Music"
          data={u.music}
        />
      )}
      {u.games && (
        <Datalabel
          lStyle={{ fontWeight: 'bold' }}
          dStyle={{ whiteSpace: 'pre-wrap' }}
          divStyle={{ alignItems: 'baseline', marginBottom: '2rem' }}
          label="Movies"
          data={u.movies}
        />
      )}
      {u.games && (
        <Datalabel
          lStyle={{ fontWeight: 'bold' }}
          dStyle={{ whiteSpace: 'pre-wrap' }}
          divStyle={{ alignItems: 'baseline', marginBottom: '2rem' }}
          label="Books"
          data={u.books}
        />
      )}
      <Datalabel lStyle={{ fontWeight: 'bold' }} label="Employment" data={u.employment} />
    </div>
  );
}
