import { useCallback, useState } from 'react';
import { data as generalData } from './filters/general';
import { data as ilnessesData } from './filters/illnesses';
import { data as physicalData } from './filters/physical';
import { data as geographyData } from './filters/geography';
import { data as kinksData } from './filters/kinks';
import { data as miscData } from './filters/miscellaneous';
import { data as desiresData } from './filters/desires';
import FilterSection from './filters/filter_section';

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
      <FilterSection name="Physical" setFilters={setFilters} data={physicalData} />
      <FilterSection name="Geography" setFilters={setFilters} data={geographyData} />
      <FilterSection name="Miscellaneous" setFilters={setFilters} data={miscData} />
      <FilterSection name="Illnesses" setFilters={setFilters} data={ilnessesData} />
      <FilterSection name="Kinks" setFilters={setFilters} data={kinksData} />
      <FilterSection name="What are you looking for?" setFilters={setFilters} data={desiresData} />
    </div>
  );
}
