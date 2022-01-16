import { useCallback, useState } from 'react';
import General from './filters/newgeneral';
import { data as generalData } from './filters/newgeneral';
import Miscellaneous from './filters/miscellaneous';
import Physical from './filters/physical';
import Geography from './filters/geography';
import Kinks from './filters/kinks';
import { data as ilnessesData } from './filters/newillnesses';
import Illnesses from './filters/illnesses';
import Desires from './filters/desires';
import FilterSection from './filters/FilterSection';

export default function Filter({ setFilters }) {
  return (
    <div
      style={{
        flex: '1',
        overflowY: 'scroll',
        height: '100%',
        maxHeight: '100%',
      }}
    >
      <FilterSection name="General" setFilters={setFilters} data={generalData} />
      <Physical setFilters={setFilters} />
      <Geography setFilters={setFilters} />
      <Miscellaneous setFilters={setFilters} />
      <FilterSection name="Illnesses" setFilters={setFilters} data={ilnessesData} />
      <Kinks setFilters={setFilters} />
      <Desires setFilters={setFilters} />
    </div>
  );
}
